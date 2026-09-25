-- Chạy đoạn này sau khi đã tạo bảng admin_roles, profiles
-- và learning_progress trong Supabase SQL Editor.

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_roles
    where user_id = auth.uid()
      and role = 'admin'
  );
$$;

grant execute on function public.is_admin() to authenticated;

drop policy if exists "Admins can view all profiles"
on public.profiles;

create policy "Admins can view all profiles"
on public.profiles
for select
to authenticated
using (public.is_admin() or auth.uid() = id);

drop policy if exists "Admins can view all learning progress"
on public.learning_progress;

create policy "Admins can view all learning progress"
on public.learning_progress
for select
to authenticated
using (public.is_admin() or auth.uid() = user_id);

grant select on public.profiles to authenticated;
grant select on public.learning_progress to authenticated;
