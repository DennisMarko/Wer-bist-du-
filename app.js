const traits = {
  leadership: "Leadership",
  technical: "Technik",
  business: "Business",
  creative: "Media",
  people: "People",
  precision: "Praezision",
  speed: "Tempo",
  innovation: "Innovation",
};

const imageBase = "https://rennschmiede-pforzheim.de/wp-content/uploads";

const profiles = [
  {
    name: "Pascal Schueckle",
    role: "1. Technische Leitung",
    subteam: "Vorstand / Powertrain",
    group: "Vorstand",
    avatar: `${imageBase}/2026/02/8B6A8862-1-520x781.jpg`,
    traits: { leadership: 5, technical: 5, business: 2, creative: 1, people: 3, precision: 4, speed: 4, innovation: 4 },
    summary: "Du denkst vom Gesamtfahrzeug aus, willst technische Entscheidungen sauber treffen und haeltst auch unter Druck die Linie.",
    tags: ["technische Leitung", "Powertrain", "Gesamtfahrzeug"],
  },
  {
    name: "Marius Flamm",
    role: "2. Technische Leitung",
    subteam: "Vorstand / Technik",
    group: "Vorstand",
    avatar: `${imageBase}/2026/02/8B6A87271-2-520x780.jpg`,
    traits: { leadership: 5, technical: 5, business: 2, creative: 1, people: 3, precision: 5, speed: 3, innovation: 3 },
    summary: "Du passt gut zu einer Rolle, in der technische Schnittstellen, Prioritaeten und robuste Loesungen zusammenlaufen.",
    tags: ["Technik", "Abstimmung", "Systemblick"],
  },
  {
    name: "Lena Reitenbach",
    role: "Projektleitung",
    subteam: "Vorstand / Projektmanagement",
    group: "Vorstand",
    avatar: `${imageBase}/2026/02/8B6A8824-kleiner-520x779.jpg`,
    traits: { leadership: 5, technical: 3, business: 4, creative: 2, people: 4, precision: 4, speed: 4, innovation: 3 },
    summary: "Du verbindest Ziele, Menschen und Timing. Dein Match liegt dort, wo aus vielen offenen Punkten ein fahrbarer Plan wird.",
    tags: ["Projektleitung", "Koordination", "Timing"],
  },
  {
    name: "Dennis Marko",
    role: "Finanzen & Controlling",
    subteam: "Vorstand / Finanzen",
    group: "Vorstand",
    avatar: `${imageBase}/2026/02/8B6A8790-1-520x780.jpg`,
    traits: { leadership: 4, technical: 2, business: 5, creative: 1, people: 3, precision: 5, speed: 3, innovation: 2 },
    summary: "Du denkst in Ressourcen, Risiken und Entscheidungen, die das Team langfristig handlungsfaehig machen.",
    tags: ["Finanzen", "Controlling", "Risiko"],
  },
  {
    name: "Elena Guerth",
    role: "Teamleitung",
    subteam: "Aerodynamics",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0440-1024x1536.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 3, people: 2, precision: 5, speed: 3, innovation: 5 },
    summary: "Du suchst Performance im Detail: Stroemung, CAD, Simulation und Fertigung waeren genau dein Spielfeld.",
    tags: ["Aerodynamics", "CAD", "Simulation"],
  },
  {
    name: "Aileen Albrecht",
    role: "Teamleitung",
    subteam: "High Voltage",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0300-1024x1536.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 1, people: 2, precision: 5, speed: 2, innovation: 4 },
    summary: "Du passt zu High Voltage, wenn Sicherheit, Verantwortung und saubere technische Umsetzung dich eher reizen als Showeffekte.",
    tags: ["High Voltage", "Akku", "Sicherheit"],
  },
  {
    name: "Sarah Spaargaren",
    role: "Teamleitung",
    subteam: "Chassis",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0303-1024x1536.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 2, people: 2, precision: 5, speed: 3, innovation: 3 },
    summary: "Du willst, dass Struktur wirklich traegt. Monocoque, Ergonomie und konstruktive Details passen zu deinem Profil.",
    tags: ["Chassis", "Monocoque", "Konstruktion"],
  },
  {
    name: "Kevin Pham",
    role: "Teamleitung",
    subteam: "Electronics",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0418-1024x1536.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 2, people: 2, precision: 5, speed: 3, innovation: 4 },
    summary: "Du magst Systeme, Signale und saubere Verbindungen. Dein Match sitzt dort, wo Kabelbaum, Sensorik und Steuerung zusammenkommen.",
    tags: ["Electronics", "Kabelbaum", "Sensorik"],
  },
  {
    name: "Lukas Kraenzlein",
    role: "Teamleitung",
    subteam: "Suspension",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0759-1024x1536.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 2, people: 2, precision: 5, speed: 5, innovation: 3 },
    summary: "Du denkst dynamisch: Kinematik, Bremsen, Lenkung und Fahrgefuehl liegen dir mehr als reine Theorie.",
    tags: ["Suspension", "Kinematik", "Fahrwerk"],
  },
  {
    name: "Nele Klein",
    role: "Teamleitung",
    subteam: "Vehicle Dynamics",
    group: "Technik",
    avatar: `${imageBase}/2025/10/8B6A0770-520x780.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 2, people: 2, precision: 4, speed: 5, innovation: 5 },
    summary: "Du willst verstehen, wie das Auto wirklich faehrt. Daten, Regelung und Testing passen stark zu dir.",
    tags: ["Vehicle Dynamics", "Datenanalyse", "Testing"],
  },
  {
    name: "Tim Luetkecosmann",
    role: "Teamleitung",
    subteam: "Driverless",
    group: "Technik",
    avatar: `${imageBase}/2026/03/B6A9767-520x780.jpg`,
    traits: { leadership: 3, technical: 5, business: 1, creative: 3, people: 2, precision: 4, speed: 4, innovation: 5 },
    summary: "Du bist nah am autonomen Fahren: Algorithmen, Wahrnehmung und Fahrzeugkontrolle waeren dein natuerlicher Playground.",
    tags: ["Driverless", "Autonomie", "Regelung"],
  },
  {
    name: "Sophia Reuber",
    role: "Teamleitung",
    subteam: "Sponsoring",
    group: "Organisation",
    avatar: `${imageBase}/2025/10/8B6A0628-200x300.jpg`,
    traits: { leadership: 3, technical: 1, business: 5, creative: 3, people: 5, precision: 3, speed: 3, innovation: 2 },
    summary: "Du kannst Menschen und Unternehmen fuer ein Ziel gewinnen. Partnerschaften, Akquise und Betreuung passen zu dir.",
    tags: ["Sponsoring", "Partner", "Akquise"],
  },
  {
    name: "Nathalie Schmid",
    role: "Teamleitung",
    subteam: "Media & Communication",
    group: "Organisation",
    avatar: `${imageBase}/2025/10/8B6A0638-200x300.jpg`,
    traits: { leadership: 3, technical: 1, business: 3, creative: 5, people: 4, precision: 3, speed: 4, innovation: 4 },
    summary: "Du machst Rennschmiede sichtbar: Foto, Design, Social Media und Storytelling passen zu deinem Profil.",
    tags: ["Media", "Design", "Social Media"],
  },
  {
    name: "Maximilian Poehnl",
    role: "Teamleitung",
    subteam: "Statics",
    group: "Organisation",
    avatar: `${imageBase}/2025/10/8B6A0254-200x300.jpg`,
    traits: { leadership: 3, technical: 2, business: 5, creative: 2, people: 3, precision: 5, speed: 3, innovation: 2 },
    summary: "Du fuehlst dich bei Business Plan, Cost Report und sauberer Argumentation wohl. Dein Match ist Statics.",
    tags: ["Statics", "Business Plan", "Cost Report"],
  },
  {
    name: "Taraniya Sugunakumar",
    role: "Teamleitung",
    subteam: "Human Resources",
    group: "Organisation",
    avatar: `${imageBase}/2025/10/8B6A0416-200x300.jpg`,
    traits: { leadership: 3, technical: 1, business: 3, creative: 2, people: 5, precision: 3, speed: 3, innovation: 3 },
    summary: "Du hast ein Gespuer fuer Teamkultur, Recruiting und Menschen. HR passt, wenn du das Team von innen staerken willst.",
    tags: ["Human Resources", "People", "Teamkultur"],
  },
];

const questions = [
  {
    text: "Wenn ein neues Vorhaben startet, was machst du zuerst?",
    answers: [
      { title: "Rahmen klaeren", text: "Ich will wissen, was bis wann realistisch ist und wer was braucht.", scores: { leadership: 3, business: 1, precision: 2 } },
      { title: "Kernproblem verstehen", text: "Mich reizt, wie die einzelnen Teile zusammenwirken.", scores: { technical: 3, innovation: 2, precision: 1 } },
      { title: "Ressourcen sichern", text: "Ich denke zuerst daran, was noetig ist, damit das Ganze tragfaehig wird.", scores: { business: 3, people: 2 } },
      { title: "Geschichte finden", text: "Ich frage mich, wie man die Idee so zeigt, dass andere Lust darauf bekommen.", scores: { creative: 3, people: 1, speed: 1 } },
    ],
  },
  {
    text: "Welche Herausforderung wuerde dich am meisten packen?",
    answers: [
      { title: "Etwas messbar verbessern", text: "Ich mag es, wenn kleine Details am Ende einen echten Unterschied machen.", scores: { technical: 3, precision: 2, innovation: 1 } },
      { title: "Unter Zeitdruck ruhig bleiben", text: "Wenn etwas nicht funktioniert, will ich systematisch zur Ursache.", scores: { technical: 2, speed: 3, precision: 2 } },
      { title: "Andere ueberzeugen", text: "Ich will aus Fakten, Argumenten und Auftreten ein starkes Gesamtbild machen.", scores: { business: 3, people: 2, precision: 1 } },
      { title: "Menschen ins Team holen", text: "Mich motiviert, wenn aus Einzelpersonen ein funktionierendes Wir wird.", scores: { people: 3, leadership: 2 } },
    ],
  },
  {
    text: "Welche Art von Aufgabe fuehlt sich fuer dich am natuerlichsten an?",
    answers: [
      { title: "Unsichtbares sichtbar machen", text: "Mich fasziniert, wenn man mit Analyse etwas findet, das andere uebersehen.", scores: { technical: 2, innovation: 3, precision: 2 } },
      { title: "Verantwortung absichern", text: "Ich mag klare Regeln, saubere Checks und wenig Raum fuer Zufall.", scores: { technical: 3, precision: 3 } },
      { title: "Dynamik spueren", text: "Ich will, dass sich eine gute Entscheidung direkt bemerkbar macht.", scores: { technical: 3, speed: 3 } },
      { title: "Energie nach aussen tragen", text: "Ich mache Fortschritt gern verstaendlich, sichtbar und spannend.", scores: { creative: 4, people: 2, speed: 1 } },
    ],
  },
  {
    text: "Was ist dein natuerlicher Modus, wenn es kurz vor knapp wird?",
    answers: [
      { title: "Priorisieren", text: "Ich klaere, was jetzt wirklich wichtig ist.", scores: { leadership: 3, business: 1, speed: 2 } },
      { title: "Analysieren", text: "Ich gehe ruhig durch Hinweise, Fehlerbilder und Ursachen.", scores: { technical: 3, precision: 3 } },
      { title: "Kommunizieren", text: "Ich halte die richtigen Leute im Loop, bevor Unsicherheit groesser wird.", scores: { people: 3, creative: 1, leadership: 1 } },
      { title: "Absichern", text: "Ich sorge dafuer, dass Zahlen, Begruendungen und Nachweise stimmen.", scores: { business: 3, precision: 3 } },
    ],
  },
  {
    text: "Welche Rolle uebernimmst du in Gruppen oft freiwillig?",
    answers: [
      { title: "Muster erkennen", text: "Ich schaue mir Daten oder Beobachtungen an und leite Verbesserungen ab.", scores: { technical: 3, precision: 2, speed: 2 } },
      { title: "Kontakte aufbauen", text: "Ich kann gut auf Leute zugehen und langfristige Beziehungen pflegen.", scores: { business: 3, people: 3 } },
      { title: "Potenzial einschaetzen", text: "Ich merke schnell, wer wo gut aufgehoben ist.", scores: { people: 4, leadership: 1 } },
      { title: "Auftritt gestalten", text: "Ich bringe Bild, Ton und Botschaft gern in eine klare Form.", scores: { creative: 4, speed: 1, people: 1 } },
    ],
  },
  {
    text: "Woran erkennst du, dass ein Projekt wirklich gut geworden ist?",
    answers: [
      { title: "Es ist konsequent", text: "Jede Entscheidung zahlt auf das Ziel ein.", scores: { technical: 3, leadership: 1, precision: 2 } },
      { title: "Es funktioniert unter Druck", text: "Nicht nur die Idee zaehlt, sondern wie stabil sie im echten Einsatz ist.", scores: { technical: 2, speed: 4, precision: 1 } },
      { title: "Es ist tragfaehig", text: "Aufwand, Nutzen und Ressourcen passen zusammen.", scores: { business: 4, precision: 1 } },
      { title: "Es begeistert", text: "Menschen verstehen, warum es wichtig ist, und wollen Teil davon sein.", scores: { creative: 2, people: 3, business: 1 } },
    ],
  },
  {
    text: "Welche Art von Detail zieht deine Aufmerksamkeit an?",
    answers: [
      { title: "Form und Effizienz", text: "Ich verliere mich gern darin, etwas eleganter und wirksamer zu machen.", scores: { technical: 3, innovation: 2, precision: 2 } },
      { title: "Verbindungen und Sicherheit", text: "Mich reizt, wenn viele kleine Abhaengigkeiten sauber zusammenspielen.", scores: { technical: 4, precision: 3 } },
      { title: "Plausibilitaet und Belege", text: "Ich finde es stark, wenn Aussagen wirklich belastbar sind.", scores: { business: 4, precision: 3 } },
      { title: "Wahrnehmung und Wirkung", text: "Ich achte darauf, wie etwas rueberkommt.", scores: { creative: 4, people: 1 } },
    ],
  },
  {
    text: "Wie arbeitest du am liebsten mit anderen?",
    answers: [
      { title: "Als Schnittstelle", text: "Ich fuehre Faeden zusammen und treffe Entscheidungen.", scores: { leadership: 4, people: 2 } },
      { title: "Als Spezialist", text: "Ich tauche tief ein und bringe ein Thema nach vorne.", scores: { technical: 4, precision: 2 } },
      { title: "Als Netzwerker", text: "Ich spreche mit Menschen und baue Beziehungen auf.", scores: { people: 4, business: 2 } },
      { title: "Als Storyteller", text: "Ich uebersetze Fortschritt in Bilder, Texte und Praesentationen.", scores: { creative: 4, people: 2 } },
    ],
  },
  {
    text: "Was fragst du zuerst, wenn eine neue Idee vorgestellt wird?",
    answers: [
      { title: "Bringt es wirklich etwas?", text: "Wirkung ist mein Fixpunkt.", scores: { technical: 2, speed: 4 } },
      { title: "Ist es sauber abgesichert?", text: "Verantwortung und Klarheit gehen vor.", scores: { precision: 4, technical: 2 } },
      { title: "Passt es in Zeit und Mittel?", text: "Ich will wissen, ob das Team es stemmen kann.", scores: { business: 3, leadership: 2 } },
      { title: "Koennen wir es gut erklaeren?", text: "Wenn niemand den Wert versteht, fehlt etwas.", scores: { creative: 2, people: 2, business: 1 } },
    ],
  },
  {
    text: "Welcher Moment wuerde dich am meisten stolz machen?",
    answers: [
      { title: "Etwas laeuft endlich sauber", text: "Wenn Analyse, Feedback und Umsetzung zusammenpassen.", scores: { technical: 3, speed: 3, precision: 1 } },
      { title: "Das Team zeigt, was es kann", text: "Wenn alle sehen, woran so lange gearbeitet wurde.", scores: { creative: 3, people: 2, leadership: 1 } },
      { title: "Aus Vertrauen wird Unterstuetzung", text: "Wenn Menschen oder Organisationen wirklich an das Projekt glauben.", scores: { business: 3, people: 3 } },
      { title: "Eine Praesentation sitzt", text: "Wenn Plan, Zahlen und Argumentation ueberzeugen.", scores: { business: 4, precision: 2 } },
    ],
  },
  {
    text: "Welche Aussage passt am besten zu dir?",
    answers: [
      { title: "Ich mag Verantwortung", text: "Ich kann damit leben, Entscheidungen zu treffen.", scores: { leadership: 4, precision: 1 } },
      { title: "Ich mag Komplexitaet", text: "Viele technische Abhaengigkeiten schrecken mich nicht ab.", scores: { technical: 4, innovation: 1 } },
      { title: "Ich mag Menschen", text: "Ein Team ist fuer mich mehr als eine Aufgabenliste.", scores: { people: 4, leadership: 1 } },
      { title: "Ich mag Wirkung", text: "Ich will, dass Arbeit sichtbar und verstaendlich wird.", scores: { creative: 3, business: 1, speed: 1 } },
    ],
  },
  {
    text: "Welche Umgebung gibt dir am meisten Energie?",
    answers: [
      { title: "Nah an Entscheidungen", text: "Ich mag Verantwortung und komplexe technische Fragen.", scores: { leadership: 2, technical: 4, precision: 1 } },
      { title: "Mit Blick aufs Ganze", text: "Ich denke gern in Projekt, Ressourcen und Konsequenzen.", scores: { leadership: 3, business: 4 } },
      { title: "Mit vielen Menschen", text: "Ich gewinne, betreue und entwickle gern andere.", scores: { people: 4, business: 2 } },
      { title: "An neuen Wegen", text: "Ich mag Aufgaben, bei denen man ungewohnte Loesungen finden muss.", scores: { creative: 3, innovation: 4, speed: 1 } },
    ],
  },
];

const state = {
  index: 0,
  answers: [],
};

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const againButton = document.querySelector("#again-button");
const questionCount = document.querySelector("#question-count");
const questionText = document.querySelector("#question-text");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const answersNode = document.querySelector("#answers");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((node) => node.classList.remove("active"));
  screen.classList.add("active");
}

function resetQuiz() {
  state.index = 0;
  state.answers = [];
  showScreen(startScreen);
}

function startQuiz() {
  state.index = 0;
  state.answers = [];
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.index];
  const progress = Math.round(((state.index + 1) / questions.length) * 100);

  questionCount.textContent = `Frage ${state.index + 1} von ${questions.length}`;
  questionText.textContent = question.text;
  progressLabel.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
  backButton.disabled = state.index === 0;

  answersNode.replaceChildren(
    ...question.answers.map((answer, answerIndex) => {
      const button = document.createElement("button");
      button.className = "answer-card";
      button.type = "button";
      button.innerHTML = `<strong>${answer.title}</strong><span>${answer.text}</span>`;
      button.addEventListener("click", () => selectAnswer(answerIndex));
      return button;
    }),
  );
}

function selectAnswer(answerIndex) {
  state.answers[state.index] = questions[state.index].answers[answerIndex];

  if (state.index === questions.length - 1) {
    renderResult();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function scoreUserTraits() {
  const userTraits = Object.fromEntries(Object.keys(traits).map((key) => [key, 0]));

  state.answers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([trait, value]) => {
      userTraits[trait] += value;
    });
  });

  return userTraits;
}

function compareProfile(userTraits, profile) {
  const maxDistance = Object.keys(traits).length * 5;
  const distance = Object.keys(traits).reduce((sum, trait) => {
    const normalizedUser = (userTraits[trait] / questions.length) * 2.6;
    return sum + Math.abs(normalizedUser - profile.traits[trait]);
  }, 0);

  return {
    ...profile,
    score: Math.max(0, Math.round((1 - distance / maxDistance) * 100)),
  };
}

function renderResult() {
  const userTraits = scoreUserTraits();
  const results = profiles
    .map((profile) => compareProfile(userTraits, profile))
    .sort((a, b) => b.score - a.score);
  const best = results[0];

  document.querySelector("#result-avatar").src = best.avatar;
  document.querySelector("#result-avatar").alt = `Foto von ${best.name}`;
  document.querySelector("#result-name").textContent = best.name;
  document.querySelector("#result-role").textContent = `${best.role} - ${best.subteam}`;
  document.querySelector("#result-summary").textContent = best.summary;

  document.querySelector("#score-list").replaceChildren(
    ...results.slice(0, 4).map((result) => {
      const item = document.createElement("div");
      item.className = "score-item";
      item.innerHTML = `
        <span>${result.name.split(" ")[0]}</span>
        <div class="score-track"><div class="score-fill" style="width: ${result.score}%"></div></div>
        <span>${result.score}%</span>
      `;
      return item;
    }),
  );

  document.querySelector("#trait-list").replaceChildren(
    ...best.tags.map((tag) => {
      const item = document.createElement("span");
      item.className = "trait";
      item.textContent = tag;
      return item;
    }),
  );

  showScreen(resultScreen);
}

startButton.addEventListener("click", startQuiz);
againButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);
backButton.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});
