const memes = [
  // ШКОЛА
  ["Школа", "🎒", "Когда учитель говорит: «Это будет на экзамене»", "А я даже тему не записал 😂", 9200],
  ["Школа", "💀", "Когда говорят: «Работаем самостоятельно»", "А я даже не знаю, что делать", 8700],
  ["Школа", "😨", "Учитель: «Кто не сделал домашку?»", "Весь класс резко изучает парту", 8100],
  ["Школа", "📚", "Когда выучил только первый билет", "И тебе достался двадцать пятый", 7600],
  ["Школа", "😭", "Я перед контрольной", "Я после контрольной", 7400],
  ["Школа", "🤓", "Когда учитель говорит: «Всё очень просто»", "И начинает писать формулы на доске", 7000],
  ["Школа", "🏃", "Звонок на перемену", "Весь класс: ОЛИМПИЙСКИЙ ЗАБЕГ!", 6900],
  ["Школа", "😴", "Первый урок в понедельник", "Мозг ещё находится дома", 6500],

  // ЖИЗНЬ
  ["Жизнь", "🫠", "Я: сегодня лягу спать пораньше", "Также я в 03:47: ещё одно видео", 12000],
  ["Жизнь", "💸", "Получил деньги", "Через пять минут: а где они?", 11000],
  ["Жизнь", "🧠", "Мозг в 3 часа ночи", "Давай вспомним позор за 2019 год", 10800],
  ["Жизнь", "😎", "Я после одного полезного видео", "Эксперт абсолютно во всём", 9900],
  ["Жизнь", "🛌", "Будильник: пора вставать", "Я: а если не сегодня?", 9500],
  ["Жизнь", "🫡", "Когда сказал «без проблем»", "А проблем оказалось 48", 9200],
  ["Жизнь", "🤡", "Мои планы на день", "Моя реальность: лежать и думать", 8900],
  ["Жизнь", "📱", "Зашёл проверить время", "Очнулся через два часа", 8500],

  // ИГРЫ
  ["Игры", "🎮", "Последний матч и спать", "Ещё 17 матчей спустя...", 13000],
  ["Игры", "💀", "Тиммейт говорит: «Я прикрою»", "Первым умирает тиммейт", 12500],
  ["Игры", "😡", "Когда осталось 1 HP", "И противник каким-то чудом промахнулся", 11500],
  ["Игры", "🖥️", "60 FPS — отлично", "После установки модов: 6 FPS", 10800],
  ["Игры", "🏆", "Я выиграл один раз", "Можно уже становиться киберспортсменом?", 9900],
  ["Игры", "🎧", "Мама: «Поставь на паузу»", "Мама, ЭТО ОНЛАЙН!", 9500],
  ["Игры", "🚗", "Купил новую машину в игре", "Денег на улучшения уже нет", 9200],
  ["Игры", "😭", "Пинг: 20 мс", "В самый важный момент: 999 мс", 8700],

  // КОТЫ
  ["Коты", "🐱", "Кот смотрит на тебя", "Он уже придумал 12 способов тебя разбудить", 14500],
  ["Коты", "😼", "Кот уронил стакан", "И смотрит так, будто это сделал ты", 14000],
  ["Коты", "😹", "Купил коту дорогую игрушку", "Кот играет с коробкой", 13500],
  ["Коты", "🐈", "Кот в 4 утра", "Формула-1 по всей квартире", 13000],
  ["Коты", "😾", "Закрыл дверь перед котом", "Через секунду он уже требует открыть", 12000],
  ["Коты", "🥹", "Кот сел на клавиатуру", "Теперь у меня новая программа", 11500],
  ["Коты", "😻", "Кот услышал звук корма", "Прибыл быстрее, чем интернет", 11000],
  ["Коты", "🙀", "Кот увидел огурец", "Срочная эвакуация всей квартиры", 10500],

  // ДРУЗЬЯ
  ["Друзья", "🤝", "Друг: «Я уже выхожу»", "Он ещё даже не оделся", 14000],
  ["Друзья", "😂", "Друг рассказывает шутку", "Смеёшься ещё до конца истории", 13000],
  ["Друзья", "📸", "Друг прислал твоё фото", "Это теперь угроза национальной безопасности", 12500],
  ["Друзья", "💀", "Когда друг говорит: «Есть идея»", "И ты уже понимаешь, что будут проблемы", 12000],
  ["Друзья", "🫂", "Друг: «Я тебя не осуждаю»", "Через секунду знает всё с 2015 года", 11500],
  ["Друзья", "🤑", "Друг занял 100 рублей", "Банк России до сих пор ждёт возврат", 10900],

  // РОДИТЕЛИ
  ["Родители", "👨‍👩‍👦", "Мама: «Иди сюда, не ругать»", "Сердце уже пишет завещание", 15000],
  ["Родители", "📱", "Мама: «Убери телефон»", "Я: сейчас. Также я через час", 14500],
  ["Родители", "🧹", "Папа сказал убрать комнату", "Нашёл старые вещи и пропал на 3 часа", 13000],
  ["Родители", "😶", "Мама вошла в комнату", "Я мгновенно выключил экран", 12500],
  ["Родители", "💡", "Папа чинит компьютер", "Выключил и включил — инженер года", 12000],
  ["Родители", "🛒", "Мама попросила купить хлеб", "Вернулся с целым магазином", 11000],

  // ЕДА
  ["Еда", "🍕", "Я не голодный", "Увидел пиццу: мнение изменилось", 13500],
  ["Еда", "🍟", "Взял картошку фри себе", "У друзей внезапно появился аппетит", 13000],
  ["Еда", "🍜", "Ночью холодильник зовёт", "Я просто проверю, что там", 12000],
  ["Еда", "🍰", "Сказал, что на диете", "Но торт сам себя не съест", 11500],
  ["Еда", "🥤", "Открыл газировку тихо", "Вся семья услышала", 11000],
  ["Еда", "🍔", "Заказал маленький перекус", "Курьер привёз праздник", 10500],

  // ЖИВОТНЫЕ
  ["Животные", "🐶", "Собака услышала слово «гулять»", "Уже стоит у двери в кроссовках", 13000],
  ["Животные", "🐕", "Пёс остался дома один", "Соседи услышали концерт", 12000],
  ["Животные", "🐹", "Хомяк набил щёки едой", "На случай экономического кризиса", 11000],
  ["Животные", "🦆", "Утка идёт на тебя", "Ты не знаешь почему, но страшно", 10000],

  // ТЕХНОЛОГИИ
  ["Технологии", "📱", "Телефон на 1% батареи", "Включил режим экономии и молитвы", 12000],
  ["Технологии", "🌐", "Интернет завис на секунду", "Уже собираюсь менять провайдера", 11500],
  ["Технологии", "🤖", "ИИ ответил неправильно", "Я: всё, восстание машин отменяется", 10500],
  ["Технологии", "💻", "Компьютер не включается", "Перезагрузка решила судьбу человечества", 10000],

  // ОТНОШЕНИЯ И РАБОТА
  ["Отношения", "❤️", "Написал «привет»", "Теперь 40 минут думаю, что написать дальше", 12500],
  ["Отношения", "🥲", "Ждёшь ответ 2 минуты", "Уже построил 14 теорий заговора", 11500],
  ["Работа", "💻", "Начал работать продуктивно", "Через 5 минут проверяю мемы", 11000],
  ["Работа", "☕", "Без кофе я не человек", "После кофе я тоже не человек", 10000]
];

const grid = document.getElementById("memeGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const sectionTitle = document.getElementById("sectionTitle");
const emptyState = document.getElementById("emptyState");
const loadMore = document.getElementById("loadMore");
const toast = document.getElementById("toast");

let activeCategory = "Все";
let activeView = "all";
let visibleCount = 16;
let randomOrder = [];
let toastTimer;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Не удалось сохранить данные браузера.");
  }
}

let liked = readStorage("memezone_likes", []);
let favorites = readStorage("memezone_favorites", []);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function formatNumber(number) {
  if (number >= 1000) {
    return (number / 1000).toFixed(number >= 10000 ? 0 : 1)
      .replace(".", ",") + "K";
  }
  return String(number);
}

// Создаём отдельные карточки с уникальными ID.
const allMemes = memes.map((m, index) => ({
  id: index + 1,
  category: m[0],
  emoji: m[1],
  caption: m[2],
  title: m[3],
  likes: m[4],
  created: index
}));

// У каждой категории своя цветовая гамма.
const backgrounds = {
  "Школа": "linear-gradient(145deg,#503416,#1d1820)",
  "Жизнь": "linear-gradient(145deg,#492448,#191326)",
  "Игры": "linear-gradient(145deg,#173d63,#15152b)",
  "Коты": "linear-gradient(145deg,#4b2b63,#21172e)",
  "Друзья": "linear-gradient(145deg,#194b45,#142127)",
  "Родители": "linear-gradient(145deg,#55342a,#211922)",
  "Еда": "linear-gradient(145deg,#673624,#271522)",
  "Животные": "linear-gradient(145deg,#284b39,#151f27)",
  "Технологии": "linear-gradient(145deg,#1c3b5b,#151426)",
  "Отношения": "linear-gradient(145deg,#632744,#241426)",
  "Работа": "linear-gradient(145deg,#30315d,#151426)"
};

function getFilteredMemes() {
  let result = allMemes.filter(meme => {
    const query = searchInput.value.trim().toLowerCase();

    const matchesSearch = (
      meme.caption + " " +
      meme.title + " " +
      meme.category
    ).toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "Все" ||
      meme.category === activeCategory;

    const matchesFavorites =
      activeView !== "favorites" ||
      favorites.includes(meme.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  if (activeView === "popular" || sortSelect.value === "popular") {
    result.sort((a, b) => b.likes - a.likes);
  }

  if (activeView === "new" || sortSelect.value === "new") {
    result.sort((a, b) => b.created - a.created);
  }

  if (activeView === "random" || sortSelect.value === "random") {
    result = result.slice();
    result.sort((a, b) =>
      randomOrder.indexOf(a.id) - randomOrder.indexOf(b.id)
    );
  }

  return result;
}

function renderMemes() {
  const filtered = getFilteredMemes();
  const visible = filtered.slice(0, visibleCount);

  grid.innerHTML = "";

  emptyState.classList.toggle("hidden", filtered.length !== 0);
  grid.classList.toggle("hidden", filtered.length === 0);

  resultCount.textContent =
    `Показано ${visible.length} из ${filtered.length} мемов 😂`;

  loadMore.classList.toggle(
    "hidden",
    visibleCount >= filtered.length
  );

  visible.forEach((meme, index) => {
    const isLiked = liked.includes(meme.id);
    const isSaved = favorites.includes(meme.id);

    const card = document.createElement("article");
    card.className = "meme-card";
    card.style.animationDelay = `${Math.min(index * 25, 250)}ms`;

    const art = document.createElement("div");
    art.className = "meme-art";
    art.style.setProperty(
      "--art-bg",
      backgrounds[meme.category] ||
      "linear-gradient(145deg,#43214f,#17152b)"
    );

    const top = document.createElement("div");
    top.className = "meme-caption";
    top.textContent = meme.caption;

    const emoji = document.createElement("div");
    emoji.className = "meme-emoji";
    emoji.textContent = meme.emoji;

    const bottom = document.createElement("div");
    bottom.className = "meme-caption";
    bottom.textContent = meme.title;

    art.append(top, emoji, bottom);

    const content = document.createElement("div");
    content.className = "meme-bottom";

    const title = document.createElement("p");
    title.className = "meme-title";
    title.textContent = meme.title;

    const meta = document.createElement("div");
    meta.className = "meme-meta";

    const category = document.createElement("span");
    category.className = "meme-category";
    category.textContent = meme.category;

    const actions = document.createElement("div");
    actions.className = "meme-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "action-btn" + (isLiked ? " liked" : "");
    likeButton.textContent =
      `${isLiked ? "♥" : "♡"} ${formatNumber(meme.likes + (isLiked ? 1 : 0))}`;
    likeButton.setAttribute("aria-label", "Поставить лайк");
    likeButton.addEventListener("click", () => toggleLike(meme.id));

    const saveButton = document.createElement("button");
    saveButton.className = "action-btn" + (isSaved ? " saved" : "");
    saveButton.textContent = isSaved ? "★" : "☆";
    saveButton.title = isSaved ? "Убрать из избранного" : "В избранное";
    saveButton.setAttribute("aria-label", "Избранное");
    saveButton.addEventListener("click", () => toggleFavorite(meme.id));

    const shareButton = document.createElement("button");
    shareButton.className = "action-btn";
    shareButton.textContent = "↗";
    shareButton.title = "Поделиться";
    shareButton.setAttribute("aria-label", "Поделиться мемом");
    shareButton.addEventListener("click", () => shareMeme(meme));

    actions.append(likeButton, saveButton, shareButton);
    meta.append(category, actions);
    content.append(title, meta);
    card.append(art, content);
    grid.append(card);
  });
}

function toggleLike(id) {
  if (liked.includes(id)) {
    liked = liked.filter(item => item !== id);
  } else {
    liked.push(id);
  }

  saveStorage("memezone_likes", liked);
  renderMemes();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Удалено из избранного");
  } else {
    favorites.push(id);
    showToast("⭐ Добавлено в избранное!");
  }

  saveStorage("memezone_favorites", favorites);
  renderMemes();
}

async function shareMeme(meme) {
  const text = `${meme.caption}\n${meme.emoji}\n${meme.title}\n\nMemeZone RU`;

  if (navigator.share) {
    try {
      await navigator.share({ title: "Мем дня", text });
    } catch (error) {
      if (error.name !== "AbortError") {
        copyMeme(text);
      }
    }
  } else {
    copyMeme(text);
  }
}

async function copyMeme(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("😂 Текст мема скопирован!");
  } catch {
    showToast("Выдели и скопируй текст: " + text);
  }
}

function setCategory(category) {
  activeCategory = category;
  visibleCount = 16;

  document.querySelectorAll(".chip").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.category === category
    );
  });

  sectionTitle.textContent =
    category === "Все" ? "Все мемы" : `Мемы: ${category}`;

  renderMemes();
}

function setView(view) {
  activeView = view;
  activeCategory = "Все";
  visibleCount = 16;

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.view === view
    );
  });

  document.querySelectorAll(".chip").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.category === "Все"
    );
  });

  const titles = {
    all: "Все мемы",
    popular: "🔥 Популярные мемы",
    new: "✨ Новые мемы",
    random: "🎲 Случайные мемы",
    favorites: "💜 Избранное"
  };

  sectionTitle.textContent = titles[view] || "Все мемы";

  if (view === "random") {
    randomOrder = allMemes
      .map(m => m.id)
      .sort(() => Math.random() - 0.5);
  }

  renderMemes();
}

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    setView(button.dataset.view);

    if (window.innerWidth <= 650) {
      document.getElementById("sidebar").classList.remove("open");
    }

    document.querySelector(".main").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("nav-item")) {
      setView("all");
    }

    activeView = "all";
    setCategory(button.dataset.category);
  });
});

searchInput.addEventListener("input", () => {
  visibleCount = 16;
  renderMemes();
});

sortSelect.addEventListener("change", () => {
  visibleCount = 16;
  renderMemes();
});

loadMore.addEventListener("click", () => {
  visibleCount += 16;
  renderMemes();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "popular";
  activeView = "all";
  setCategory("Все");
});

document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("chips").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("profileBtn").addEventListener("click", () => {
  showToast("💜 Локальный режим: лайки и избранное сохраняются в браузере.");
});

// Начальная загрузка
randomOrder = allMemes
  .map(m => m.id)
  .sort(() => Math.random() - 0.5);

renderMemes();