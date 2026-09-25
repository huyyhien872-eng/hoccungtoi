const SUPABASE_URL = 'https://fboahjnnxselcnngjfak.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZib2Foam5ueHNlbGNubmdqZmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMTgzNTQsImV4cCI6MjEwNTg5NDM1NH0.5BwayCzubAtBFUCB5W9OX0nTKZPRFYWJdBWFhrkB2y0';
const languages = {
  german: {
    name: 'Deutsch',
    words: [
      ['Guten Tag', 'Xin chào', '/ˈɡuːtən taːk/'],
      ['Danke', 'Cảm ơn', '/ˈdaŋkə/'],
      ['Wie geht’s?', 'Bạn khỏe không?', '/viː ɡeːts/'],
      ['Freund', 'Bạn bè', '/fʁɔʏnt/'],
      ['Wasser', 'Nước', '/ˈvasɐ/'],
      ['Lernen', 'Học tập', '/ˈlɛʁnən/']
    ]
  }
};
const germanLevels = [
  { code: 'A1', name: 'Sơ cấp', title: 'Làm quen', description: 'Bảng chữ cái, từ vựng cơ bản và giao tiếp trong tình huống rất đơn giản.' },
  { code: 'A2', name: 'Sơ cấp nâng cao', title: 'Giao tiếp hằng ngày', description: 'Hiểu các câu quen thuộc và giao tiếp trong những tình huống cơ bản.' },
  { code: 'B1', name: 'Trung cấp', title: 'Tự tin hơn', description: 'Đọc hiểu văn bản quen thuộc, giao tiếp khi du lịch hoặc làm việc.' },
  { code: 'B2', name: 'Trung cấp cao', title: 'Trao đổi tự nhiên', description: 'Hiểu văn bản phức tạp và trao đổi lưu loát với người bản xứ.' },
  { code: 'C1', name: 'Cao cấp', title: 'Sử dụng linh hoạt', description: 'Hiểu nội dung dài, chuyên sâu và sử dụng ngôn ngữ linh hoạt.' },
  { code: 'C2', name: 'Thành thạo', title: 'Làm chủ tiếng Đức', description: 'Sử dụng tiếng Đức uyển chuyển, chính xác ở mọi chủ đề.' }
];
const germanCurriculum = {
  A1: [
    ['01', 'Nền tảng tiếng Đức', 'Bảng chữ cái, cách đọc và phát âm cơ bản', 3],
    ['02', 'Chào hỏi & giới thiệu', 'Tên tuổi, quốc tịch và thông tin cá nhân', 4],
    ['03', 'Gia đình & bạn bè', 'Từ vựng người thân và câu sở hữu', 5],
    ['04', 'Sinh hoạt hằng ngày', 'Giờ giấc, lịch trình và động từ thường gặp', 4]
  ],
  A2: [
    ['01', 'Giao tiếp hằng ngày', 'Mua sắm, gọi món và hỏi đường', 5],
    ['02', 'Nhà ở & công việc', 'Mô tả nơi sống, nghề nghiệp và thói quen', 4],
    ['03', 'Kể chuyện quá khứ', 'Perfekt và những trải nghiệm đã qua', 6],
    ['04', 'Kế hoạch tương lai', 'Dự định, lời mời và sắp xếp lịch hẹn', 5]
  ],
  B1: [
    ['01', 'Giao tiếp độc lập', 'Trình bày ý kiến và giải thích quan điểm', 6],
    ['02', 'Du lịch & dịch vụ', 'Xử lý tình huống thực tế khi đi du lịch', 5],
    ['03', 'Học tập & nghề nghiệp', 'CV, phỏng vấn và môi trường làm việc', 7],
    ['04', 'Tin tức đời sống', 'Đọc hiểu bài viết quen thuộc và tóm tắt ý chính', 6]
  ],
  B2: [
    ['01', 'Tranh luận & lập luận', 'Bày tỏ quan điểm với lập luận rõ ràng', 7],
    ['02', 'Văn bản chuyên môn', 'Đọc tài liệu công việc và học thuật', 6],
    ['03', 'Sắc thái ngôn ngữ', 'Thành ngữ, liên từ và cách diễn đạt tự nhiên', 7],
    ['04', 'Thuyết trình', 'Trình bày chủ đề dài và trả lời câu hỏi', 6]
  ],
  C1: [
    ['01', 'Ngôn ngữ chuyên sâu', 'Phân tích văn bản dài và nhiều tầng nghĩa', 8],
    ['02', 'Viết học thuật', 'Cấu trúc bài viết, lập luận và trích dẫn', 7],
    ['03', 'Giao tiếp chuyên nghiệp', 'Đàm phán, điều phối và phản biện', 8],
    ['04', 'Văn hóa & xã hội', 'Thảo luận các chủ đề trừu tượng, chuyên sâu', 7]
  ],
  C2: [
    ['01', 'Làm chủ sắc thái', 'Sử dụng ngôn ngữ chính xác theo từng ngữ cảnh', 8],
    ['02', 'Văn phong bản xứ', 'Ẩn dụ, hàm ý và cách nói tự nhiên', 8],
    ['03', 'Phân tích đa lĩnh vực', 'Hiểu và tổng hợp nội dung ở mọi chủ đề', 9],
    ['04', 'Thành thạo toàn diện', 'Mô phỏng giao tiếp và bài thi C2', 10]
  ]
};

const $ = (id) => document.getElementById(id);
const page = location.pathname.split(/[\\/]/).pop() || 'index.html';
let client;

function applyTheme(theme) {
  const resolved = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  document.documentElement.dataset.theme = resolved;
  localStorage.setItem('deutschflow_theme', theme);
}

applyTheme(localStorage.getItem('deutschflow_theme') || 'light');

function loadSupabase() {
  return new Promise((resolve, reject) => {
    if (window.supabase) {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      resolve(client);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      resolve(client);
    };
    script.onerror = () => reject(new Error('Không tải được thư viện Supabase.'));
    document.head.appendChild(script);
  });
}

function usernameEmail(username) {
  return `${username.toLowerCase()}@deutschflow.local`;
}

function notify(text) {
  const toast = $('toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

function speakGerman(text) {
  if (!('speechSynthesis' in window)) {
    notify('Trình duyệt này chưa hỗ trợ phát âm.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function saveActivity(userId, type) {
  const key = `studyflow_data_${userId}`;
  const data = JSON.parse(localStorage.getItem(key) || '{"language":"german","learned":[],"days":3,"activities":0}');
  data.activities = Number(data.activities || 0) + 1;
  data.lastActivity = new Date().toISOString();
  if (type === 'reading') data.readingDone = true;
  if (type === 'exam') data.examAttempts = Number(data.examAttempts || 0) + 1;
  localStorage.setItem(key, JSON.stringify(data));
}

function bindAuth() {
  const form = $('authForm');
  const message = $('authMessage');
  if (!form) return;
  form.onsubmit = async (event) => {
    event.preventDefault();
    const name = $('username').value.trim();
    const password = $('password').value.trim();
    if (name.length < 3 || password.length < 4) {
      message.textContent = 'Tên từ 3 ký tự và mật khẩu từ 4 ký tự.';
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = page === 'register.html' ? 'Đang tạo tài khoản...' : 'Đang đăng nhập...';
    try {
      const email = usernameEmail(name);
      const result = page === 'register.html'
        ? await client.auth.signUp({ email, password, options: { data: { username: name } } })
        : await client.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (page === 'register.html' && !result.data.session) {
        message.textContent = 'Đăng ký thành công. Hãy kiểm tra email để xác nhận tài khoản.';
        button.disabled = false;
        button.textContent = 'Tạo tài khoản →';
        return;
      }
      if (page === 'login.html') {
        const { data: adminRole, error: adminRoleError } = await client
          .from('admin_roles')
          .select('role')
          .eq('user_id', result.data.user.id)
          .eq('role', 'admin')
          .maybeSingle();
        if (adminRoleError) throw adminRoleError;
        location.href = adminRole ? 'admin.html' : 'home.html';
      } else {
        location.href = 'home.html';
      }
    } catch (error) {
      message.textContent = error.message || 'Không thể kết nối Supabase.';
      button.disabled = false;
      button.textContent = page === 'register.html' ? 'Tạo tài khoản →' : 'Đăng nhập →';
    }
  };
  document.querySelectorAll('.social-btn').forEach((button) => {
    button.onclick = () => notify(`Đăng nhập bằng ${button.dataset.provider} sẽ kết nối API sau.`);
  });
}

async function bindHome() {
  if (page !== 'home.html') return;
  const { data: { session } } = await client.auth.getSession();
  if (!session) {
    location.href = 'login.html';
    return;
  }
  const username = session.user.user_metadata.username || session.user.email.split('@')[0];
  const key = `studyflow_data_${session.user.id}`;
  const data = JSON.parse(localStorage.getItem(key) || '{"language":"german","learned":[],"days":3}');
  const profileKey = `deutschflow_profile_${session.user.id}`;
  const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
  const currentLevel = germanLevels.find((item) => item.code === profile.level) || germanLevels[0];
  const curriculum = $('curriculumList');
  const renderCurriculum = (levelCode) => {
    const level = germanLevels.find((item) => item.code === levelCode) || germanLevels[0];
    const units = germanCurriculum[level.code] || [];
    if (!curriculum) return;
    $('curriculumLevel').textContent = `${level.code} · ${level.name}`;
    $('curriculumSummary').textContent = `${units.length} chặng học · ${units.reduce((total, unit) => total + unit[3], 0)} bài luyện`;
    curriculum.innerHTML = units.map((unit, index) => `<article class="curriculum-unit ${index === 0 ? 'is-current' : ''}"><div class="unit-number">${unit[0]}</div><div class="unit-copy"><span>${index === 0 ? 'ĐANG HỌC' : `CHẶNG ${index + 1}`}</span><h4>${unit[1]}</h4><p>${unit[2]}</p><small>${unit[3]} bài học</small></div><button class="unit-start" data-unit="${unit[0]}">${index === 0 ? 'Tiếp tục' : 'Mở chặng'} <b>→</b></button></article>`).join('');
    curriculum.querySelectorAll('.unit-start').forEach((button) => button.onclick = () => notify(`Đã mở chặng ${button.dataset.unit} của lộ trình ${level.code}.`));
  };
  $('userGreeting').textContent = username;
  $('profileName').textContent = username;
  $('avatar').textContent = username[0].toUpperCase();
  const levelBadge = $('currentLevelBadge');
  if (levelBadge) levelBadge.textContent = `${currentLevel.code} · ${currentLevel.name}`;
  const roadmap = $('levelRoadmap');
  if (roadmap) roadmap.innerHTML = germanLevels.map((item) => `<button class="level-roadmap-item ${item.code === currentLevel.code ? 'active' : ''}" data-level="${item.code}"><span>${item.code}</span><strong>${item.name}</strong><small>${item.description}</small></button>`).join('');
  renderCurriculum(currentLevel.code);
  roadmap?.querySelectorAll('[data-level]').forEach((button) => button.onclick = () => {
    const selected = germanLevels.find((item) => item.code === button.dataset.level);
    const saved = JSON.parse(localStorage.getItem(profileKey) || '{}');
    localStorage.setItem(profileKey, JSON.stringify({ ...saved, level: selected.code }));
    roadmap.querySelectorAll('[data-level]').forEach((item) => item.classList.toggle('active', item === button));
    if (levelBadge) levelBadge.textContent = `${selected.code} · ${selected.name}`;
    renderCurriculum(selected.code);
    notify(`Đã chọn lộ trình ${selected.code}.`);
  });
  $('studyDays').textContent = data.days;
  $('streakNumber').textContent = `${data.days} ngày`;
  const select = $('languageSelect');
  select.innerHTML = '<option value="german">Deutsch · Tiếng Đức</option>';
  const render = () => {
    const language = languages.german;
    $('heroLanguage').textContent = language.name;
    $('wordCount').textContent = data.learned.length;
    $('heroPercent').textContent = `${Math.min(99, 32 + data.learned.length * 8)}%`;
    $('wordList').innerHTML = language.words.slice(0, 4).map((word, index) => {
      const learned = data.learned.includes(word[0]) || data.learned.includes(index);
      return `<article class="word-card ${learned ? 'learned' : ''}"><button class="learn-btn" data-index="${index}">${learned ? '✓' : '+'}</button><h4>${word[0]}</h4><p>${word[1]} · ${word[2]}</p></article>`;
    }).join('');
    document.querySelectorAll('.learn-btn').forEach((button) => {
      button.onclick = () => {
        const index = Number(button.dataset.index);
        const word = language.words[index][0];
        const wordPosition = data.learned.indexOf(word);
        const indexPosition = data.learned.indexOf(index);
        const position = wordPosition >= 0 ? wordPosition : indexPosition;
        position < 0 ? data.learned.push(word) : data.learned.splice(position, 1);
        localStorage.setItem(key, JSON.stringify(data));
        render();
      };
    });
    localStorage.setItem(key, JSON.stringify(data));
  };
  render();
  $('logoutBtn').onclick = async () => {
    await client.auth.signOut();
    location.href = 'index.html';
  };
  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.onclick = () => $(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
  });
  ['continueBtn', 'goalBtn', 'lessonBtn', 'showAllBtn'].forEach((id) => {
    $(id).onclick = () => notify('Bài học tiếng Đức đã sẵn sàng!');
  });
}

async function bindAdmin() {
  if (page !== 'admin.html') return;
  const { data: { session } } = await client.auth.getSession();
  if (!session) { location.href = 'login.html'; return; }
  const { data: admin } = await client.from('admin_roles').select('user_id').eq('user_id', session.user.id).maybeSingle();
  if (!admin) { location.href = 'home.html'; return; }
  const message = $('adminMessage');
  const load = async () => {
    const [{ data: profiles, error: profileError }, { data: progress, error: progressError }, { data: words, error: wordError }] = await Promise.all([
      client.from('profiles').select('id, username, created_at').order('created_at', { ascending: false }),
      client.from('learning_progress').select('user_id, study_days, study_minutes, accuracy'),
      client.from('german_words').select('*').order('created_at', { ascending: false })
    ]);
    if (profileError || progressError || wordError) throw profileError || progressError || wordError;
    $('adminUsersCount').textContent = profiles.length;
    $('adminWordsCount').textContent = words.length;
    $('adminProgressCount').textContent = progress.length;
    const progressMap = new Map(progress.map((item) => [item.user_id, item]));
    const renderUsers = (query = '') => {
      $('usersTable').innerHTML = profiles.filter((item) => item.username.toLowerCase().includes(query.toLowerCase())).map((item) => {
        const stats = progressMap.get(item.id);
        return `<tr><td><strong>${item.username}</strong></td><td>${new Date(item.created_at).toLocaleDateString('vi-VN')}</td><td><span class="role-badge">Học viên</span></td><td><button class="table-btn" data-user="${item.id}">Xem ${stats ? `${stats.study_days} ngày` : 'chi tiết'}</button></td></tr>`;
      }).join('') || '<tr><td colspan="4">Không tìm thấy người dùng.</td></tr>';
    };
    renderUsers();
    $('userSearch').oninput = (event) => renderUsers(event.target.value);
    $('wordsList').innerHTML = words.map((word) => `<div class="admin-word-row"><div><strong>${word.german}</strong><span>${word.vietnamese} · ${word.pronunciation || ''}</span></div><div><button class="table-btn edit-word" data-id="${word.id}">Sửa</button><button class="table-btn danger delete-word" data-id="${word.id}">Xóa</button></div></div>`).join('') || '<p class="empty-state">Chưa có từ vựng.</p>';
    document.querySelectorAll('.edit-word').forEach((button) => button.onclick = () => {
      const word = words.find((item) => item.id === button.dataset.id);
      $('wordId').value = word.id; $('wordGerman').value = word.german; $('wordVietnamese').value = word.vietnamese; $('wordPronunciation').value = word.pronunciation || ''; $('wordForm').classList.remove('hidden');
    });
    document.querySelectorAll('.delete-word').forEach((button) => button.onclick = async () => {
      if (!confirm('Xóa từ vựng này?')) return;
      const { error } = await client.from('german_words').delete().eq('id', button.dataset.id);
      if (error) throw error; await load(); notify('Đã xóa từ vựng.');
    });
  };
  try { await load(); } catch (error) { message.textContent = error.message; }
  $('newWordBtn').onclick = () => { $('wordForm').reset(); $('wordId').value = ''; $('wordForm').classList.remove('hidden'); };
  $('cancelWordBtn').onclick = () => $('wordForm').classList.add('hidden');
  $('wordForm').onsubmit = async (event) => {
    event.preventDefault();
    const payload = { german: $('wordGerman').value.trim(), vietnamese: $('wordVietnamese').value.trim(), pronunciation: $('wordPronunciation').value.trim() };
    const id = $('wordId').value;
    const result = id ? await client.from('german_words').update(payload).eq('id', id) : await client.from('german_words').insert(payload);
    if (result.error) { message.textContent = result.error.message; return; }
    $('wordForm').classList.add('hidden'); await load(); notify('Đã lưu từ vựng.');
  };
  $('refreshAdmin').onclick = () => load().catch((error) => { message.textContent = error.message; });
  $('adminLogout').onclick = async () => { await client.auth.signOut(); location.href = 'index.html'; };
}

async function bindLearningPages() {
  const pages = ['reading.html', 'vocabulary.html', 'dictionary.html', 'exam.html', 'account.html'];
  if (!pages.includes(page)) return;
  const { data: { session } } = await client.auth.getSession();
  if (!session) {
    location.href = 'login.html';
    return;
  }
  const themeToggle = $('themeToggle');
  const themePopover = $('themePopover');
  if (themeToggle && themePopover) {
    themeToggle.onclick = () => {
      themePopover.hidden = !themePopover.hidden;
      themeToggle.setAttribute('aria-expanded', String(!themePopover.hidden));
    };
    themePopover.querySelectorAll('[data-theme-choice]').forEach((button) => {
      button.onclick = () => {
        applyTheme(button.dataset.themeChoice);
        themePopover.hidden = true;
        themeToggle.setAttribute('aria-expanded', 'false');
        notify(`Đã chuyển sang giao diện ${button.querySelector('span').textContent.toLowerCase()}.`);
      };
    });
    document.addEventListener('click', (event) => {
      if (!themePopover.hidden && !themePopover.parentElement.contains(event.target)) {
        themePopover.hidden = true;
        themeToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  const username = session.user.user_metadata.username || session.user.email.split('@')[0];
  document.querySelectorAll('#profileName').forEach((element) => { element.textContent = username; });
  document.querySelectorAll('#avatar, #accountAvatar').forEach((element) => { element.textContent = username[0].toUpperCase(); });
  const words = [
    ['Guten Morgen', 'Chào buổi sáng', '/ˈɡuːtən ˈmɔʁɡn̩/', 'greeting'], ['Guten Tag', 'Xin chào', '/ˈɡuːtən taːk/', 'greeting'], ['Guten Abend', 'Chào buổi tối', '/ˈɡuːtən ˈaːbn̩t/', 'greeting'], ['Gute Nacht', 'Chúc ngủ ngon', '/ˈɡuːtə naxt/', 'greeting'], ['Hallo', 'Xin chào', '/haˈloː/', 'greeting'], ['Tschüss', 'Tạm biệt', '/tʃʏs/', 'greeting'], ['Auf Wiedersehen', 'Hẹn gặp lại', '/aʊf ˈviːdɐˌzeːən/', 'greeting'], ['Danke', 'Cảm ơn', '/ˈdaŋkə/', 'greeting'], ['Bitte', 'Làm ơn / Không có gì', '/ˈbɪtə/', 'greeting'], ['Entschuldigung', 'Xin lỗi', '/ɛntˈʃʊldɪɡʊŋ/', 'greeting'],
    ['Ja', 'Có / Vâng', '/jaː/', 'daily'], ['Nein', 'Không', '/naɪn/', 'daily'], ['Vielleicht', 'Có lẽ', '/fiˈlaɪçt/', 'daily'], ['Natürlich', 'Tất nhiên', '/naˈtyːɐ̯lɪç/', 'daily'], ['Heute', 'Hôm nay', '/ˈhɔʏ̯tə/', 'daily'], ['Morgen', 'Ngày mai', '/ˈmɔʁɡn̩/', 'daily'], ['Gestern', 'Hôm qua', '/ˈɡɛstɐn/', 'daily'], ['Jetzt', 'Bây giờ', '/jɛtst/', 'daily'], ['Später', 'Sau / Lát nữa', '/ˈʃpɛːtɐ/', 'daily'], ['Schnell', 'Nhanh', '/ʃnɛl/', 'daily'],
    ['Das Haus', 'Ngôi nhà', '/das haʊ̯s/', 'home'], ['Die Wohnung', 'Căn hộ', '/diː ˈvoːnʊŋ/', 'home'], ['Das Zimmer', 'Căn phòng', '/das ˈt͡sɪmɐ/', 'home'], ['Die Küche', 'Nhà bếp', '/diː ˈkʏçə/', 'home'], ['Das Bad', 'Phòng tắm', '/das baːt/', 'home'], ['Das Bett', 'Cái giường', '/das bɛt/', 'home'], ['Der Tisch', 'Cái bàn', '/deːɐ̯ tɪʃ/', 'home'], ['Der Stuhl', 'Cái ghế', '/deːɐ̯ ʃtuːl/', 'home'], ['Die Tür', 'Cánh cửa', '/diː tyːɐ̯/', 'home'], ['Das Fenster', 'Cửa sổ', '/das ˈfɛnstɐ/', 'home'],
    ['Das Brot', 'Bánh mì', '/das broːt/', 'food'], ['Das Wasser', 'Nước', '/das ˈvasɐ/', 'food'], ['Der Kaffee', 'Cà phê', '/deːɐ̯ ˈkafeː/', 'food'], ['Der Tee', 'Trà', '/deːɐ̯ teː/', 'food'], ['Die Milch', 'Sữa', '/diː mɪlç/', 'food'], ['Der Apfel', 'Quả táo', '/deːɐ̯ ˈapfəl/', 'food'], ['Das Gemüse', 'Rau củ', '/das ɡəˈmyːzə/', 'food'], ['Das Fleisch', 'Thịt', '/das flaɪ̯ʃ/', 'food'], ['Lecker', 'Ngon', '/ˈlɛkɐ/', 'food'], ['Die Rechnung', 'Hóa đơn', '/diː ˈʁɛçnʊŋ/', 'food'],
    ['Der Bahnhof', 'Nhà ga', '/deːɐ̯ ˈbaːnhoːf/', 'travel'], ['Der Flughafen', 'Sân bay', '/deːɐ̯ ˈfluːkhaːfn̩/', 'travel'], ['Das Hotel', 'Khách sạn', '/das hoˈtɛl/', 'travel'], ['Das Ticket', 'Vé', '/das ˈtɪkət/', 'travel'], ['Der Zug', 'Tàu hỏa', '/deːɐ̯ tsuːk/', 'travel'], ['Der Bus', 'Xe buýt', '/deːɐ̯ bʊs/', 'travel'], ['Links', 'Bên trái', '/lɪŋks/', 'travel'], ['Rechts', 'Bên phải', '/ʁɛçts/', 'travel'], ['Geradeaus', 'Đi thẳng', '/ɡəˈʁaːdəˌaʊ̯s/', 'travel'], ['Wo ist ...?', '... ở đâu?', '/voː ɪst/', 'travel'],
    ['Die Arbeit', 'Công việc', '/diː ˈaʁbaɪ̯t/', 'work'], ['Das Büro', 'Văn phòng', '/das byˈʁoː/', 'work'], ['Der Kollege', 'Đồng nghiệp nam', '/deːɐ̯ koˈleːɡə/', 'work'], ['Die Kollegin', 'Đồng nghiệp nữ', '/diː koˈleːɡɪn/', 'work'], ['Der Termin', 'Lịch hẹn', '/deːɐ̯ tɛʁˈmiːn/', 'work'], ['Die Pause', 'Giờ nghỉ', '/diː ˈpaʊ̯zə/', 'work'], ['Wichtig', 'Quan trọng', '/ˈvɪçtɪç/', 'work'], ['Fertig', 'Hoàn thành', '/ˈfɛʁtɪç/', 'work'], ['Lernen', 'Học tập', '/ˈlɛʁnən/', 'verbs'], ['Sprechen', 'Nói', '/ˈʃpʁɛçən/', 'verbs'],
    ['Lesen', 'Đọc', '/ˈleːzən/', 'verbs'], ['Schreiben', 'Viết', '/ˈʃʁaɪ̯bən/', 'verbs'], ['Hören', 'Nghe', '/ˈhøːʁən/', 'verbs'], ['Sehen', 'Nhìn / Xem', '/ˈzeːən/', 'verbs'], ['Machen', 'Làm', '/ˈmaxən/', 'verbs'], ['Gehen', 'Đi', '/ˈɡeːən/', 'verbs'], ['Kommen', 'Đến', '/ˈkɔmən/', 'verbs'], ['Kaufen', 'Mua', '/ˈkaʊ̯fən/', 'verbs'], ['Wohnen', 'Sống / Ở', '/ˈvoːnən/', 'verbs'], ['Verstehen', 'Hiểu', '/fɛɐ̯ˈʃteːən/', 'verbs']
  ];
  if (page === 'vocabulary.html') {
    const key = `studyflow_data_${session.user.id}`;
    const data = JSON.parse(localStorage.getItem(key) || '{"learned":[],"activities":0}');
    const levelForWord = (index) => index < 20 ? 'A1' : index < 40 ? 'A2' : index < 60 ? 'B1' : 'B2';
    const progressResult = await client.from('vocabulary_progress').select('german_word, learned, level').eq('user_id', session.user.id);
    const remoteProgress = progressResult.error ? [] : progressResult.data;
    const remoteLearned = new Set(remoteProgress.filter((item) => item.learned).map((item) => item.german_word));
    if (progressResult.error) notify('Chưa đồng bộ được trạng thái từ vựng; đang dùng dữ liệu trên máy.');
    const renderWords = () => {
      const query = ($('vocabularySearch')?.value || '').trim().toLowerCase();
      const category = $('vocabularyCategory')?.value || 'all';
      const level = $('vocabularyLevel')?.value || 'all';
      const status = $('vocabularyStatus')?.value || 'all';
      const visibleWords = words.map((word, index) => ({ word, index, level: levelForWord(index), learned: remoteLearned.has(word[0]) || (data.learned || []).includes(word[0]) })).filter(({ word, level: wordLevel, learned }) => (category === 'all' || word[3] === category) && (level === 'all' || wordLevel === level) && (status === 'all' || (status === 'learned' ? learned : !learned)) && (!query || `${word[0]} ${word[1]}`.toLowerCase().includes(query)));
      $('vocabularyCount').textContent = `${visibleWords.length} từ · ${level === 'all' ? 'A1–B2' : level} · đã học ${remoteLearned.size}`;
      $('vocabularyGrid').innerHTML = visibleWords.map(({ word, index, level: wordLevel, learned }) => {
        return `<article class="vocab-study-card ${learned ? 'is-learned' : ''}" data-speak="${word[0]}"><span class="vocab-number">${String(index + 1).padStart(2, '0')}</span><span class="vocab-level-tag">${wordLevel}</span><button class="word-sound" data-word="${word[0]}" aria-label="Nghe ${word[0]}">🔊</button><h3>${word[0]}</h3><p>${word[1]}</p><small>${word[2]}</small><button class="vocab-check ${learned ? 'learned' : ''}" data-word="${word[0]}" data-level="${wordLevel}">${learned ? '✓ Đã ghi nhớ' : '+ Đã học'}</button></article>`;
      }).join('');
      document.querySelectorAll('.vocab-check').forEach((button) => button.onclick = () => {
        const word = button.dataset.word;
        data.learned = data.learned || [];
        const position = data.learned.indexOf(word);
        const learned = position < 0;
        learned ? data.learned.push(word) : data.learned.splice(position, 1);
        learned ? remoteLearned.add(word) : remoteLearned.delete(word);
        localStorage.setItem(key, JSON.stringify(data));
        client.from('vocabulary_progress').upsert({ user_id: session.user.id, german_word: word, level: button.dataset.level, learned, learned_at: learned ? new Date().toISOString() : null }, { onConflict: 'user_id,german_word' }).then(({ error }) => {
          if (error) notify('Không thể lưu lên Supabase. Dữ liệu local vẫn được giữ.');
        });
        renderWords();
        notify(learned ? 'Đã ghi nhớ từ mới.' : 'Đã bỏ đánh dấu.');
      });
      document.querySelectorAll('.word-sound').forEach((button) => button.onclick = () => speakGerman(button.dataset.word));
    };
    renderWords();
    $('vocabularySearch').oninput = renderWords;
    $('vocabularyCategory').onchange = renderWords;
    $('vocabularyLevel').onchange = renderWords;
    $('vocabularyStatus').onchange = renderWords;
    $('shuffleWords').onclick = () => { words.sort(() => Math.random() - .5); renderWords(); notify('Đã trộn bộ từ vựng.'); };
  }
  if (page === 'dictionary.html') {
    const input = $('dictionaryInput');
    const result = $('dictionaryResult');
    $('dictionaryBtn').onclick = () => {
      const query = input.value.trim().toLowerCase();
      const match = words.find((word) => word[0].toLowerCase() === query) || words[0];
      result.innerHTML = `<span class="word-type">Deutsch · từ vựng</span><h1>${match[0]}</h1><p>${match[1]} · <em>${match[2]}</em></p><button id="speakWord" class="outline-btn">🔊 Nghe phát âm</button>`;
      $('speakWord').onclick = () => speakGerman(match[0]);
    };
    input.onkeydown = (event) => { if (event.key === 'Enter') $('dictionaryBtn').click(); };
  }
  if (page === 'reading.html') {
    $('listenReading').onclick = () => speakGerman('Maria lebt in Berlin. Jeden Morgen fährt sie mit dem Bus zur Arbeit. Am Wochenende besucht sie gern ein Café und liest ein Buch.');
    $('markReading').onclick = () => { $('markReading').textContent = '✓ Đã hoàn thành'; saveActivity(session.user.id, 'reading'); notify('Đã lưu bài đọc hôm nay.'); };
    document.querySelectorAll('[data-answer]').forEach((button) => button.onclick = () => {
      button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('correct-answer', 'wrong-answer'));
      button.classList.add(button.dataset.answer === 'correct' ? 'correct-answer' : 'wrong-answer');
      notify(button.dataset.answer === 'correct' ? 'Chính xác! Sehr gut.' : 'Chưa đúng, hãy đọc lại đoạn văn.');
    });
  }
  if (page === 'exam.html') document.querySelectorAll('.exam-start').forEach((button) => button.onclick = () => {
    const level = button.closest('.exam-card').querySelector('span').textContent;
    const modal = document.createElement('div');
    modal.className = 'study-modal';
    modal.innerHTML = `<div class="exam-modal"><button class="modal-close" aria-label="Đóng">×</button><p class="eyebrow">BÀI ÔN ${level}</p><h2>Kiểm tra nhanh</h2><p class="modal-progress">Câu <strong>1</strong>/3</p><div class="exam-question"><h3>Wie geht es dir?</h3><div class="modal-options"><button data-correct="true">Bạn khỏe không?</button><button>Chào buổi sáng</button><button>Cảm ơn bạn</button></div></div><button class="dark-btn next-question">Kiểm tra đáp án →</button></div>`;
    document.body.appendChild(modal);
    let score = 0;
    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.querySelector('.next-question').onclick = () => {
      const selected = modal.querySelector('.modal-options button.selected');
      if (!selected) { notify('Hãy chọn một đáp án.'); return; }
      if (selected.dataset.correct) score = 1;
      modal.querySelector('.exam-question').innerHTML = '<h3>Was bedeutet “Danke”?</h3><div class="modal-options"><button>Xin lỗi</button><button data-correct="true">Cảm ơn</button><button>Xin chào</button></div>';
      modal.querySelector('.modal-progress strong').textContent = '2';
      modal.querySelector('.next-question').textContent = 'Chọn đáp án →';
      modal.querySelector('.next-question').onclick = () => {
        const answer = modal.querySelector('.modal-options button.selected');
        if (!answer) { notify('Hãy chọn một đáp án.'); return; }
        if (answer.dataset.correct) score += 1;
        modal.querySelector('.exam-question').innerHTML = '<h3>Ich lerne Deutsch.</h3><div class="modal-options"><button data-correct="true">Tôi học tiếng Đức.</button><button>Tôi sống ở Berlin.</button><button>Tôi nói tiếng Anh.</button></div>';
        modal.querySelector('.modal-progress strong').textContent = '3';
        modal.querySelector('.next-question').textContent = 'Xem kết quả →';
        modal.querySelector('.next-question').onclick = () => {
          const finalAnswer = modal.querySelector('.modal-options button.selected');
          if (finalAnswer && finalAnswer.dataset.correct) score += 1;
          saveActivity(session.user.id, 'exam');
          modal.querySelector('.exam-question').innerHTML = `<div class="exam-result"><span class="result-score">${score}/3</span><h3>${score === 3 ? 'Sehr gut!' : 'Tiếp tục luyện tập nhé!'}</h3><p>Bạn đã hoàn thành bài kiểm tra ${level}.</p></div>`;
          modal.querySelector('.next-question').textContent = 'Đóng kết quả';
          modal.querySelector('.next-question').onclick = () => modal.remove();
        };
        bindOptions(modal);
      };
      bindOptions(modal);
    };
    function bindOptions(container) {
      container.querySelectorAll('.modal-options button').forEach((option) => option.onclick = () => {
        container.querySelectorAll('.modal-options button').forEach((item) => item.classList.remove('selected'));
        option.classList.add('selected');
      });
    }
    bindOptions(modal);
  });
  if (page === 'account.html') {
    $('accountName').textContent = username;
    const key = `studyflow_data_${session.user.id}`;
    const data = JSON.parse(localStorage.getItem(key) || '{"learned":[],"days":3,"activities":0}');
    $('accountWords').textContent = (data.learned || []).length;
    $('accountStreak').textContent = data.days || 0;
    $('accountActivities').textContent = data.activities || 0;
    const savedProfile = JSON.parse(localStorage.getItem(`deutschflow_profile_${session.user.id}`) || '{}');
    const accountLevel = germanLevels.find((item) => item.code === savedProfile.level) || germanLevels[0];
    document.querySelectorAll('.account-level, #accountLevelName').forEach((element) => { element.textContent = `${accountLevel.code} · ${accountLevel.name}`; });
    const profileKey = `deutschflow_profile_${session.user.id}`;
    const applyAvatar = (avatarUrl) => {
      document.querySelectorAll('#avatar, #accountAvatar').forEach((element) => {
        if (avatarUrl) {
          element.classList.add('has-photo');
          element.style.backgroundImage = `url("${avatarUrl}")`;
          element.textContent = '';
        } else {
          element.classList.remove('has-photo');
          element.style.backgroundImage = '';
          element.textContent = username[0].toUpperCase();
        }
      });
    };
    applyAvatar(savedProfile.avatar);
    $('avatarUpload').onchange = () => {
      const file = $('avatarUpload').files?.[0];
      if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        notify('Vui lòng chọn ảnh JPG, PNG hoặc WEBP.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        notify('Ảnh đại diện cần nhỏ hơn 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const avatar = reader.result;
        const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
        localStorage.setItem(profileKey, JSON.stringify({ ...profile, avatar }));
        applyAvatar(avatar);
        notify('Đã cập nhật ảnh đại diện.');
      };
      reader.onerror = () => notify('Không thể đọc ảnh. Vui lòng thử lại.');
      reader.readAsDataURL(file);
    };
    $('displayName').value = savedProfile.displayName || username;
    $('dailyGoal').value = savedProfile.dailyGoal || '15';
    $('saveAccount').onclick = () => {
      const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
      localStorage.setItem(profileKey, JSON.stringify({ ...profile, displayName: $('displayName').value.trim() || username, dailyGoal: $('dailyGoal').value }));
      notify('Đã lưu cài đặt tài khoản.');
    };
    const billingLabels = { monthly: '/ tháng', halfyear: '/ 6 tháng', yearly: '/ năm' };
    const updatePrices = (billing) => document.querySelectorAll('.plan-price[data-monthly]').forEach((price) => {
      price.firstChild.textContent = `${price.dataset[billing]} `;
      price.querySelector('small').textContent = billingLabels[billing];
    });
    document.querySelectorAll('.billing-option').forEach((button) => button.onclick = () => {
      document.querySelectorAll('.billing-option').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      updatePrices(button.dataset.billing);
      notify(button.dataset.billing === 'yearly' ? 'Gói 1 năm đã áp dụng dùng thử 15 ngày.' : 'Đã đổi chu kỳ thanh toán.');
    });
    document.querySelectorAll('.plan-select').forEach((button) => button.onclick = () => {
      const billing = document.querySelector('.billing-option.active')?.dataset.billing || 'monthly';
      const plan = button.dataset.plan;
      if (billing === 'yearly' && plan === 'VIP') notify('Đã mở bước đăng ký dùng thử VIP 15 ngày.');
      else notify(`Đã chọn gói ${plan}. Cổng thanh toán sẽ được kết nối sau.`);
      localStorage.setItem(profileKey, JSON.stringify({ ...JSON.parse(localStorage.getItem(profileKey) || '{}'), selectedPlan: plan, billing }));
    });
    updatePrices('monthly');
    $('accountLogout').onclick = async () => { await client.auth.signOut(); location.href = 'index.html'; };
  }
}

loadSupabase().then(() => {
  bindAuth();
  return Promise.all([bindHome(), bindAdmin(), bindLearningPages()]);
}).catch((error) => {
  const message = $('authMessage');
  if (message) message.textContent = error.message;
});
