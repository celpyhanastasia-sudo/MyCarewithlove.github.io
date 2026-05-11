const tests = {
  emotion: {
    title: "Емоційний стан",
    image: "assets/test-emotion.svg",
    description: "Допомагає зрозуміти, наскільки зараз багато напруги, суму або стабільності.",
    questions: [
      "Як ти найчастіше почуваєшся останніми днями?",
      "Наскільки легко тобі радіти дрібницям?",
      "Як часто ти відчуваєш втому без очевидної причини?",
      "Чи хочеться тобі спілкуватися з людьми?",
      "Як ти реагуєш на невеликі проблеми?",
      "Чи буває, що емоції різко змінюються протягом дня?",
      "Наскільки добре ти розумієш, що саме відчуваєш?",
      "Чи є в тебе відчуття внутрішньої порожнечі?",
      "Як часто ти критикуєш себе?",
      "Що зараз найбільше схоже на твій стан?"
    ],
    answers: [
      ["Спокійно", "По-різному", "Напружено"],
      ["Досить легко", "Іноді", "Майже не виходить"],
      ["Рідко", "Час від часу", "Дуже часто"],
      ["Так, зазвичай", "Залежить від дня", "Переважно ні"],
      ["Можу впоратися", "Хвилююся, але тримаюся", "Швидко виснажуюся"],
      ["Рідко", "Іноді", "Часто"],
      ["Добре розумію", "Не завжди", "Мені важко це назвати"],
      ["Ні або дуже рідко", "Іноді", "Часто"],
      ["Рідко", "Іноді", "Майже постійно"],
      ["Стабільність", "Втома", "Емоційне перевантаження"]
    ],
    results: [
      {
        max: 7,
        title: "Стан виглядає досить стабільним",
        text: "Зараз у тебе, ймовірно, є ресурс справлятися з повсякденними подіями. Продовжуй помічати свої потреби: сон, відпочинок, контакт з людьми й час без перевантаження."
      },
      {
        max: 15,
        title: "Є ознаки емоційної втоми",
        text: "Схоже, тобі потрібні паузи й більше турботи про себе. Спробуй зменшити кількість завдань, поговорити з людиною, якій довіряєш, і не ігнорувати сигнали тіла."
      },
      {
        max: 30,
        title: "Схоже на сильне емоційне перевантаження",
        text: "Твоєму стану зараз важко. Було б корисно поговорити з психологом або дорослою людиною, якій довіряєш. Не треба проходити через це наодинці."
      }
    ]
  },
  anxiety: {
    title: "Рівень тривожності",
    image: "assets/test-anxiety.svg",
    description: "Показує, наскільки часто тіло й думки перебувають у режимі небезпеки.",
    questions: [
      "Як часто ти хвилюєшся без чіткої причини?",
      "Чи важко тобі розслабитися?",
      "Як часто ти прокручуєш у голові найгірші сценарії?",
      "Чи буває напруга в тілі: плечі, живіт, щелепа?",
      "Чи заважає тривога засинати?",
      "Як ти почуваєшся перед контрольними, розмовами або новими ситуаціями?",
      "Чи складно тобі зупинити потік думок?",
      "Чи перевіряєш ти щось багато разів, щоб заспокоїтися?",
      "Чи уникаєш ти ситуацій через страх?",
      "Наскільки тривога впливає на твій день?"
    ],
    answers: [
      ["Рідко", "Іноді", "Часто"],
      ["Зазвичай ні", "Буває", "Так, дуже"],
      ["Майже ніколи", "Час від часу", "Дуже часто"],
      ["Рідко", "Іноді", "Часто"],
      ["Ні", "Іноді", "Часто"],
      ["Хвилююся помірно", "Сильно переживаю", "Мене майже паралізує"],
      ["Зазвичай можу", "Не завжди", "Майже неможливо"],
      ["Рідко", "Іноді", "Часто"],
      ["Майже ні", "Іноді", "Часто"],
      ["Слабо", "Помітно", "Дуже сильно"]
    ],
    results: [
      {
        max: 7,
        title: "Тривога в межах звичайної реакції",
        text: "Тривога іноді з'являється у всіх. Зараз вона, схоже, не керує твоїм життям. Корисно мати кілька способів заземлення на майбутнє."
      },
      {
        max: 15,
        title: "Тривога помітно впливає на тебе",
        text: "Схоже, нервова система часто працює в режимі напруги. Допоможуть дихальні вправи, регулярний сон, менше інформаційного шуму й розмова з близькою людиною."
      },
      {
        max: 30,
        title: "Високий рівень тривоги",
        text: "Якщо тривога заважає сну, навчанню або спілкуванню, варто звернутися до психолога. Це не слабкість, а нормальна турбота про себе."
      }
    ]
  },
  resource: {
    title: "Ресурсність і відновлення",
    image: "assets/test-resource.svg",
    description: "Допомагає оцінити, чи вистачає сил, підтримки та відпочинку.",
    questions: [
      "Чи відчуваєш ти, що маєш сили на звичайні справи?",
      "Як часто ти відпочиваєш без почуття провини?",
      "Чи є людина, з якою можна чесно поговорити?",
      "Наскільки якісний твій сон останнім часом?",
      "Чи маєш заняття, яке повертає тобі енергію?",
      "Як часто ти їси нормально протягом дня?",
      "Чи вмієш ти казати “ні”, коли тобі забагато?",
      "Чи помічаєш ти свої маленькі успіхи?",
      "Як часто ти проводиш час без телефону або шуму?",
      "Що найбільше описує твій запас сил?"
    ],
    answers: [
      ["Так, переважно", "Іноді", "Майже ні"],
      ["Регулярно", "Рідко", "Майже ніколи"],
      ["Так", "Не завжди", "Ні"],
      ["Добрий", "Нестабільний", "Поганий"],
      ["Так", "Іноді", "Ні"],
      ["Регулярно", "Не завжди", "Часто пропускаю"],
      ["Так", "Іноді", "Мені важко"],
      ["Так", "Рідко", "Майже ніколи"],
      ["Часто", "Іноді", "Майже ніколи"],
      ["Є сили", "Сил мало", "Я виснажена"]
    ],
    results: [
      {
        max: 7,
        title: "Ресурс є",
        text: "У тебе є опори, які допомагають відновлюватися. Бережи їх: сон, їжа, рух, теплі контакти й час для себе."
      },
      {
        max: 15,
        title: "Ресурс знижений",
        text: "Схоже, сил вистачає не на все. Обери одну маленьку дію для відновлення сьогодні: вода, душ, прогулянка, ранній сон або розмова з кимось підтримувальним."
      },
      {
        max: 30,
        title: "Є ризик виснаження",
        text: "Тобі потрібне відновлення, а не ще більше тиску на себе. Якщо виснаження триває довго, поговори з дорослим, лікарем або психологом."
      }
    ]
  }
};

let currentTestKey = "";
let currentQuestionIndex = 0;
let currentScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupTests();
  setupChat();
  setupDailyQuotes();
});

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupTests() {
  const menu = document.getElementById("testsMenu");
  if (!menu) return;

  menu.innerHTML = Object.entries(tests).map(([key, test]) => `
    <article class="test-card">
      <img src="${test.image}" alt="${test.title}">
      <div class="test-meta">
        <span>10 питань</span>
        <span>2-4 хвилини</span>
      </div>
      <h2>${test.title}</h2>
      <p>${test.description}</p>
      <button class="button primary" type="button" data-test="${key}">Почати тест</button>
    </article>
  `).join("");

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-test]");
    if (button) startTest(button.dataset.test);
  });

  document.getElementById("backToTests")?.addEventListener("click", showTestsMenu);
}

function startTest(key) {
  currentTestKey = key;
  currentQuestionIndex = 0;
  currentScore = 0;

  document.getElementById("testsMenu").classList.add("hidden");
  document.getElementById("testArea").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const test = tests[currentTestKey];
  const answers = document.getElementById("answers");
  const questionNumber = currentQuestionIndex + 1;
  const total = test.questions.length;

  document.getElementById("questionText").textContent = test.questions[currentQuestionIndex];
  document.getElementById("progressText").textContent = `Питання ${questionNumber} з ${total}`;
  document.getElementById("progressBar").style.width = `${(currentQuestionIndex / total) * 100}%`;

  answers.innerHTML = test.answers[currentQuestionIndex].map((answer, index) => `
    <button class="answer-option" type="button" data-score="${index}">${answer}</button>
  `).join("");

  answers.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => {
      currentScore += Number(button.dataset.score);
      currentQuestionIndex += 1;

      if (currentQuestionIndex < total) {
        showQuestion();
      } else {
        showResult();
      }
    });
  });
}

function showResult() {
  const test = tests[currentTestKey];
  const result = test.results.find((item) => currentScore <= item.max) || test.results[test.results.length - 1];
  const resultText = `${test.title}: ${result.title}. ${result.text}`;

  document.getElementById("progressText").textContent = "Тест завершено";
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("questionText").textContent = "Результат тесту";
  document.getElementById("answers").innerHTML = "";

  const resultPanel = document.getElementById("result");
  resultPanel.classList.remove("hidden");
  resultPanel.innerHTML = `
    <h2>${result.title}</h2>
    <p>${result.text}</p>
    <p><strong>Бал:</strong> ${currentScore} з ${test.questions.length * 2}</p>
    <div class="test-actions">
      <button class="button primary" type="button" id="sendToBot">Обговорити з AI психологом</button>
      <button class="button secondary" type="button" id="tryAgain">Пройти інший тест</button>
    </div>
  `;

  document.getElementById("sendToBot").addEventListener("click", () => {
    localStorage.setItem("mindcareTestResult", resultText);
    window.location.href = "bot.html?from=test";
  });

  document.getElementById("tryAgain").addEventListener("click", showTestsMenu);
}

function showTestsMenu() {
  document.getElementById("testArea").classList.add("hidden");
  document.getElementById("testsMenu").classList.remove("hidden");
}

const chatState = {
  turns: 0,
  lastTheme: "",
  lastMoodScore: null,
  lastPerson: "",
  lastSituation: ""
};

function setupChat() {
  const chat = document.getElementById("chat");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("userInput");
  if (!chat || !form || !input) return;

  addMessage("bot", "Привіт. Я поруч. Можеш писати як людині: коротко, з помилками, з сарказмом, серйозно або взагалі з фрази “не знаю”. Я не буду сварити чи оцінювати. Як ти зараз насправді?");

  const savedResult = localStorage.getItem("mindcareTestResult");
  if (savedResult) {
    addMessage("bot", `Я бачу твій результат тесту: ${savedResult}\n\nСприймімо це не як вирок, а як підказку. Що з результату найбільше схоже на правду: втома, тривога, напруга, порожнеча чи щось інше?`);
    localStorage.removeItem("mindcareTestResult");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    input.value = "";
    window.setTimeout(() => addMessage("bot", buildBotReply(text)), 420);
  });

  document.querySelectorAll(".prompt-chip").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.prompt;
      input.focus();
    });
  });
}

function addMessage(type, text) {
  const chat = document.getElementById("chat");
  const message = document.createElement("div");
  message.className = `message ${type === "user" ? "user-msg" : "bot-msg"}`;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function buildBotReply(rawText) {
  const text = normalizeText(rawText);
  chatState.turns += 1;
  const insight = readUserMessage(rawText);
  const moodScore = extractMoodScore(text);
  if (moodScore) chatState.lastMoodScore = moodScore;

  if (insight.crisis) {
    chatState.lastTheme = "crisis";
    return "Мені дуже важливо, щоб ти зараз була не сама. Якщо є ризик, що ти можеш нашкодити собі або комусь іншому, будь ласка, прямо зараз звернися до живої людини поруч і телефонуй до екстрених служб: в Україні це 112 або 103.\n\nПоки ти шукаєш допомогу, зроби одну річ: відійди від предметів, якими можна нашкодити собі, і напиши або скажи комусь: “Мені небезпечно залишатися самій, побудь зі мною”. Ти не маєш витримувати це наодинці.";
  }

  if (insight.greeting && text.length < 24) {
    return varied([
      "Привіт. Я тут. Можемо почати дуже просто: що сьогодні було найважчим, а що хоча б трохи тримало на плаву?",
      "Привіт. Рада, що ти написала. Якби твій стан зараз був погодою, це було б сонце, туман, дощ, буря чи щось інше?",
      "Привіт. Можеш не підбирати ідеальні слова. Напиши перше, що приходить у голову: тіло втомлене, думки шумлять, сумно, тривожно чи просто порожньо?"
    ]);
  }

  if (insight.asksBot && text.length < 80) {
    return "Я тут, слухаю тебе і не поспішаю. Якщо чесно по-людськи: “мої справи” зараз у тому, щоб уважно бути з тобою, а не відмахнутися готовою фразою.\n\nА ти як? Не загально “норм”, а хоча б одним словом: спокійно, важко, тривожно, сумно, порожньо, злісно чи втомлено?";
  }

  if (insight.vague && text.length < 36) {
    return humanize("Це не дурне. Серйозно. Іноді “не знаю” означає не відсутність відповіді, а втому від того, що всередині забагато всього.\n\nДавай без складності: обери одне слово, яке найближче до стану зараз: тривожно, сумно, порожньо, злюся, соромно, втомлено, самотньо. Можеш просто написати це слово.");
  }

  if (insight.shortBad) {
    return "Ох, звучить правда важко. Я не буду робити вигляд, що це дрібниця.\n\nЩоб не гадати повз: це “погано” більше через конкретну ситуацію, через людину, через думки в голові чи просто тіло вже виснажилось?";
  }

  if (insight.shortOk) {
    return "Приймаю. Але “нормально” буває різним: спокійне нормально, втомлене нормально або “не хочу зараз розповідати”.\n\nЯкий із цих варіантів ближче?";
  }

  if (insight.shortGood) {
    return "Це приємно чути. Давай навіть не проскочимо це повз: що саме сьогодні зробило стан кращим?";
  }

  if (insight.motivation) {
    return humanize(varied([
      "Ти не зобов'язана бути сильною щосекунди. Іноді сила - це не “я все витримаю”, а “я визнаю, що мені потрібна пауза”. Що сьогодні можна зробити для себе дуже маленьке?",
      "Твоя цінність не зникає в дні, коли ти не продуктивна, розгублена або не знаєш, куди йти. Давай виберемо один крок, який не ламає тебе, а підтримує.",
      "Не треба ставати новою людиною за вечір. Достатньо повернутися до себе на один сантиметр. Який сантиметр можливий сьогодні?"
    ]));
  }

  if (insight.joke) {
    return "Можу спробувати м'яко, без цирку. Психіка іноді як телефон на 2%: ми такі “я ще норм”, а вона вже вмикає режим енергозбереження.\n\nА якщо серйозно: тобі зараз хочеться відволіктися чи поговорити про те, що болить?";
  }

  if (insight.test) {
    chatState.lastTheme = "test";
    return "Результат тесту краще сприймати як дзеркало стану, а не як діагноз. Він показує, де може бути більше напруги або менше ресурсу.\n\nНапиши мені одну фразу з результату, яка зачепила найбільше. Ми розберемо її: що в ній правда, що перебільшено, і який маленький крок може допомогти сьогодні.";
  }

  if (insight.theme) {
    chatState.lastTheme = insight.theme;
    chatState.lastPerson = insight.person || chatState.lastPerson;
    chatState.lastSituation = insight.summary || chatState.lastSituation;
    return buildPersonalReply(insight);
  }

  if (moodScore) {
    return moodScore >= 8
      ? "8-10 з 10 - це вже дуже важко. Давай не залишати це “просто потерпіти”. Зараз важливо зменшити навантаження і знайти живу підтримку.\n\nЩо саме робить стан таким високим: думки, подія, людина, тіло, страх або втома?"
      : `Я почула оцінку ${moodScore}/10. Це корисна точка відліку.\n\nЩо могло б зменшити її хоча б на один пункт: поговорити, відпочити, розібрати думки, зробити план чи прибрати один подразник?`;
  }

  if (chatState.lastTheme && text.length > 18) {
    return buildContinuationReply(insight);
  }

  return humanize(varied([
    "Я тебе чую. Давай розберемо м'яко й без поспіху: що сталося, що ти відчула і яка думка з'явилася першою?",
    "Твої почуття мають значення, навіть якщо вони здаються заплутаними. Це більше про сум, страх, злість, втому, сором чи розгубленість?",
    "Дякую, що написала. Якщо оцінити твій стан від 1 до 10, де 10 - дуже важко, яка цифра зараз?",
    "Можемо рухатися маленькими кроками. Що тобі зараз потрібніше: щоб тебе просто вислухали, допомогли заспокоїтися чи скласти план дій?"
  ]));
}

function readUserMessage(rawText) {
  const text = normalizeText(rawText);
  const summary = rawText.trim().replace(/\s+/g, " ").slice(0, 180);
  const person = findFirst(text, [
    ["мама", "мамою", "мамі", "маму"],
    ["тато", "татом", "батько", "батьки"],
    ["подруга", "подругою", "друг", "другом", "друз"],
    ["хлопець", "хлопцем", "дівчина", "дівчиною"],
    ["вчитель", "вчителька", "клас", "одноклас"],
    ["сестра", "брат", "родич"]
  ]);
  const feeling = findFirst(text, [
    ["тривожно", "тривога", "страшно", "боюсь", "паніка", "хвилююсь", "накручую"],
    ["сумно", "сум", "плачу", "боляче", "порожньо", "депрес"],
    ["злюсь", "злість", "дратує", "бісить"],
    ["соромно", "вина", "винна", "ненавиджу себе"],
    ["втомилась", "втомився", "втома", "немає сил", "нема сил", "виснажена"],
    ["самотньо", "самотність", "ніхто не розуміє", "одна", "один"]
  ]);
  const theme = detectTheme(text);
  return {
    text,
    summary,
    person,
    feeling,
    theme,
    crisis: matches(text, ["суїцид", "самогуб", "померти", "не хочу жити", "нашкодити собі", "вбити себе", "порізати", "покінчити"]),
    greeting: matches(text, ["привіт", "хай", "добрий", "добрий день", "здраст", "hello", "hi"]),
    asksBot: matches(text, ["як справи", "як ти", "як в тебе", "як у тебе", "шо ти", "що робиш", "ти тут", "бот"]),
    vague: matches(text, ["не знаю", "хз", "нічого", "байдуже", "не розумію", "тупо", "дурне питання"]),
    motivation: matches(text, ["мотивац", "підтримай", "скажи щось", "надих", "цитат"]),
    joke: matches(text, ["жарт", "сміш", "розвесели"]),
    test: matches(text, ["результат", "тест", "емоційний стан", "тривожності", "ресурс", "бал"]),
    shortBad: text.length <= 18 && matches(text, ["погано", "жах", "капец", "важко", "паршиво", "не ок"]),
    shortOk: text.length <= 20 && matches(text, ["норм", "нормально", "ок", "та норм", "все ок"]),
    shortGood: text.length <= 20 && matches(text, ["добре", "клас", "супер", "приємно"])
  };
}

function detectTheme(text) {
  const rules = [
    ["bullying", ["булінг", "ображ", "сміють", "приниж", "цьку", "б'ють", "знущ", "насміха"]],
    ["relationships", ["посвар", "сварк", "стосунк", "хлоп", "дівчин", "подруг", "друг", "люб", "розстав", "ігнор", "не пише", "зрад", "образив", "образила"]],
    ["family", ["мама", "тато", "батьки", "сім", "сестра", "брат", "родич", "вдома", "дім"]],
    ["school", ["школ", "клас", "урок", "контрольн", "екзам", "вчитель", "одноклас", "навчан"]],
    ["anxiety", ["трив", "панік", "страх", "хвил", "серце", "задих", "накруч", "пережива"]],
    ["tired", ["втом", "немає сил", "нема сил", "виснаж", "не можу нічого", "вигор", "лінь"]],
    ["selfcriticism", ["сором", "вин", "ненавиджу себе", "помилка", "критик", "самооцін", "неідеал", "недостат"]],
    ["loneliness", ["самот", "ніхто", "не розум", "одна", "один", "зайва", "зайвий", "нема друз"]],
    ["sadness", ["сум", "плачу", "депрес", "порожн", "нічого не раду", "боляче", "не хочу вставати"]]
  ];
  const found = rules.find(([, words]) => matches(text, words));
  return found ? found[0] : "";
}

function buildPersonalReply(insight) {
  const piece = insight.summary ? `Ти написала: “${insight.summary}”.` : "Я прочитала твоє повідомлення.";
  const feelingLine = insight.feeling ? `Я чую тут багато “${insight.feeling}”, і це не виглядає як дрібниця.` : "Я бачу, що для тебе це важливо, навіть якщо словами складно все розкласти.";
  const personLine = insight.person ? `Особливо непросто, коли в цьому є ${insight.person}: тоді болить не тільки ситуація, а й те, що зв'язок із людиною стає небезпечним або напруженим.` : "";

  const replies = {
    relationships: `${piece}\n\n${feelingLine} ${personLine}\n\nДавай не будемо одразу шукати, “хто винен”. Спершу відділимо факт від здогадки: що саме сталося між вами, а що ти вже додумуєш через біль або тривогу?`,
    family: `${piece}\n\n${feelingLine} ${personLine}\n\nУ сімейних ситуаціях часто найболючіше те, що хочеться підтримки, а виходить напруга. Що тобі зараз потрібніше від цієї людини: щоб вислухали, вибачились, перестали тиснути чи просто дали спокій?`,
    school: `${piece}\n\n${feelingLine}\n\nКоли справа про школу або навчання, тиск може швидко ставати дуже особистим, ніби оцінюють не роботу, а тебе всю. Що саме зараз найбільше тисне: страх оцінки, люди в класі, дедлайни чи відчуття, що ти не справляєшся?`,
    anxiety: `${piece}\n\n${feelingLine}\n\nСхоже, мозок намагається передбачити небезпеку. Щоб я не відповіла повз: тривога зараз більше про конкретну подію, про думку “а раптом...”, чи про фізичні відчуття в тілі?`,
    tired: `${piece}\n\n${feelingLine}\n\nЦе більше схоже на виснаження, ніж на лінь. Давай дуже практично: що з тебе зараз витягує найбільше сил - люди, навчання, дім, телефон/інформація чи внутрішня самокритика?`,
    selfcriticism: `${piece}\n\n${feelingLine}\n\nЯ не хочу підсилювати твого внутрішнього критика. Давай подивимось точніше: яку саме фразу ти зараз кажеш собі, і чи сказала б ти так людині, яку любиш?`,
    loneliness: `${piece}\n\n${feelingLine}\n\nСамотність часто не про кількість людей навколо, а про відчуття “мене не бачать”. Чого тобі найбільше бракує: розмови без оцінки, тепла, стабільної людини поруч чи відчуття, що тебе обирають?`,
    bullying: `${piece}\n\n${feelingLine}\n\nЯкщо тебе принижують або висміюють, проблема не в тому, що ти “занадто чутлива”. Це справді ранить. Хто з дорослих або старших людей може реально втрутитися, а не просто сказати “не звертай уваги”?`,
    sadness: `${piece}\n\n${feelingLine}\n\nМені шкода, що тобі так. Сум буває різний: після конкретної події, від накопичення або від відчуття порожнечі. Який із цих варіантів ближче до тебе?`
  };

  return replies[insight.theme] || `${piece}\n\n${feelingLine}\n\nЩоб я справді тебе почула: що в цій ситуації найболючіше саме для тебе?`;
}

function buildContinuationReply(insight) {
  const base = insight.summary ? `Я не хочу втратити те, що ти сказала: “${insight.summary}”.` : "Я з тобою, продовжую слухати.";
  if (chatState.lastTheme === "relationships" || chatState.lastTheme === "family") {
    return `${base}\n\nСхоже, тут важлива не тільки подія, а й те, як з тобою обійшлися. Що ти хотіла б сказати цій людині, якби точно знала, що тебе не переб'ють і не висміють?`;
  }
  if (chatState.lastTheme === "anxiety") {
    return `${base}\n\nДавай зловимо головну думку тривоги. Вона звучить більше як “я не впораюсь”, “щось станеться”, “мене засудять” чи інше?`;
  }
  if (chatState.lastTheme === "tired") {
    return `${base}\n\nТоді перше завдання - не змусити себе, а зменшити вагу. Яку одну справу сьогодні можна спростити, перенести або зробити неідеально?`;
  }
  return `${base}\n\nЩо в цьому для тебе найважче: сама ситуація, реакція інших людей чи те, що ти після цього думаєш про себе?`;
}

function setupDailyQuotes() {
  const quotes = [
    "Ти не маєш вирішити все життя сьогодні. Достатньо зробити один чесний крок у свій бік.",
    "Навіть повільний рух - це рух. Особливо в день, коли всередині важко.",
    "Твої почуття не роблять тебе слабкою. Вони показують, де тобі потрібна турбота.",
    "Пауза - це не провал. Це місце, де нервова система нарешті може видихнути.",
    "Не обов'язково бути ідеальною, щоб заслуговувати на тепло і підтримку.",
    "Маленька дія, зроблена з повагою до себе, сильніша за великий план через примус.",
    "Сьогодні можна не все. Сьогодні можна достатньо."
  ];
  const dayIndex = Math.floor(Date.now() / 86400000) % quotes.length;
  document.querySelectorAll("#dailyQuote, #supportQuote").forEach((node, index) => {
    node.textContent = quotes[(dayIndex + index) % quotes.length];
  });
}

function withFollowUp(reply) {
  if (chatState.turns < 2) return reply;
  return `${reply}\n\nІ ще одне уточнення: що ти вже пробувала зробити, навіть якщо це майже не допомогло?`;
}

function humanize(reply) {
  const openers = [
    "Я з тобою.",
    "Чую тебе.",
    "Давай повільно.",
    "Окей, давай без тиску."
  ];
  if (chatState.turns % 3 !== 0 || reply.startsWith("Я з тобою") || reply.startsWith("Чую")) return reply;
  return `${varied(openers)} ${reply}`;
}

function normalizeText(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function findFirst(text, groups) {
  const group = groups.find((items) => items.some((item) => text.includes(item)));
  return group ? group[0] : "";
}

function matches(text, fragments) {
  return fragments.some((fragment) => text.includes(fragment));
}

function extractMoodScore(text) {
  const match = text.match(/\b(10|[1-9])\s*(?:\/|з|із|із\s+)?\s*10\b/);
  if (!match) return null;
  return Number(match[1]);
}

function themeName(theme) {
  const names = {
    anxiety: "тривога",
    loneliness: "самотність",
    tired: "втома",
    selfcriticism: "самокритика",
    relationships: "стосунки",
    bullying: "булінг",
    sadness: "сум",
    test: "результат тесту",
    crisis: "безпека"
  };
  return names[theme] || "твій стан";
}

function varied(options) {
  return options[Math.floor(Math.random() * options.length)];
}
