-- Chạy trong Supabase SQL Editor để lưu trạng thái từ vựng theo từng user.
create table if not exists public.vocabulary_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  german_word text not null,
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  learned boolean not null default false,
  learned_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, german_word)
);

alter table public.vocabulary_progress enable row level security;

drop policy if exists "Users can read own vocabulary progress" on public.vocabulary_progress;
create policy "Users can read own vocabulary progress"
on public.vocabulary_progress for select to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert own vocabulary progress" on public.vocabulary_progress;
create policy "Users can insert own vocabulary progress"
on public.vocabulary_progress for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own vocabulary progress" on public.vocabulary_progress;
create policy "Users can update own vocabulary progress"
on public.vocabulary_progress for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

grant select, insert, update on public.vocabulary_progress to authenticated;
