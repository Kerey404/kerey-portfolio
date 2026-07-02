export const profile = {
  name: "Bakhytzhan Kassymgali",
  shortName: "Kerey",
  role: "Software Engineer",
  focus: "AI/ML & Backend",
  tagline:
    "Создаю надежную бэкенд-архитектуру и внедряю интеллектуальные AI/ML решения для бизнеса.",
  email: "kereyb01@gmail.com", // TODO: confirm this is the right contact email
  phone: "+7 747 708 39 83",
  telegram: "https://t.me/kakaaa1q",
  cvUrl: "/cv.pdf", // TODO: drop your real CV file into /public/cv.pdf
  socials: {
    github: "https://github.com/Kerey404",
    linkedin: "https://www.linkedin.com/in/kereydev/", // TODO: add your real LinkedIn URL
    telegram: "https://t.me/kakaaa1q",
    instagram: "https://instagram.com/jnsvv1",
  },
};

export const about = {
  text: "Я - AI/ML & Backend Engineer. Разрабатываю автономные ИИ-системы и высоконагруженные серверные решения, а не просто пишу код. Мой основной стек: Python, FastAPI,БД(PostgreSQL) и векторные БД (Qdrant). Сейчас я сфокусирован на интеграции LLM (RAG-архитектура, Function Calling) в реальные бизнес-процессы и создании Telegram-агентов, которые экономят время и деньги.",
  stack: ["Python", "FastAPI", "Go", "PostgreSQL", "Qdrant", "LangChain", "Docker"],
};

export type ExperienceStage = {
  label: string;
  description: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  stages: ExperienceStage[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Отбасы Банк",
    role: "Backend / AI Engineer Intern", // Давай звучать солиднее, уберем слово Junior Developer
    period: "2024", // На сайте выводиться не будет
    stages: [
      {
        label: "Backend & Архитектура",
        description:
          "Спроектировал и разработал корпоративный сервис на Django. Оптимизировал базу данных и создал удобный UI/UX интерфейс для внутренних сотрудников.",
      },
      {
        label: "Интеграция AI / ML",
        description:
          "Разработал и внедрил RAG-систему (AI-ассистент) для интеллектуального поиска и автоматизированной работы с внутренними регламентами и документацией банка.",
      },
    ],
  },
];
export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Corporate RAG Assistant",
    description:
      "Микросервис для интеллектуального поиска с защищенной средой выполнения.",
    stack: ["FastAPI", "Qdrant", "Llama 3", "Docker"],
    githubUrl: "https://github.com/Kerey404/ragsys1.git", // TODO
  },
  {
    title: "CS2 Betting / Quiz Backend",
    description:
      "Высоконагруженный бэкенд с безопасной авторизацией (JWT) и логикой обработки транзакций.",
    stack: ["Go", "Python", "PostgreSQL"],

  },
  {
    title: "AI Beauty Admin",
    description:
      "Автономный Telegram-ассистент для бьюти-сферы с использованием Function Calling и NLP.",
    stack: ["Python", "LLMs"],
  },
];

export type EducationEntry = {
  title: string;
  place: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    title: "Software Engineering",
    place: "Astana IT University",
    note: "2024 — настоящее время",
  },
  {
    title: "Python Big Data Analytics Program",
    place: "Samsung Innovation Campus",
    note: "Топ-15 участников по Казахстану",
  },
  {
    title: "Decentrathon",
    place: "Binance / Astana Hub",
    note: "Сертификат за активное участие и создание проекта",
  },
];
