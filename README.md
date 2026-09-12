# Véloce

Сайт-визитка бренда безалкогольных аперитивов **Véloce**. Проект выполнен на Next.js (App Router) с использованием TypeScript и SCSS-модулей.

## 🍸 О проекте

Véloce — это современный лендинг, рассказывающий о бренде, его философии и линейке безалкогольных аперитивов. Сайт включает:

- **Главную страницу** с секциями Intro, AboutTeaser, NewProduct, Products, Menu и WhereToBuy.
- **Страницу «О нас»** с достижениями, контактами и информацией об основателе.
- **Каталог моктейлей** с динамическими страницами по каждому напитку (`/mocktails/[slug]`).
- **Страницу контактов** с контактными данными по регионам.
- **UI Kit** (`/ui-kit`) для демонстрации базовых компонентов.

## 🛠️ Стек технологий

<div id="steck">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="30" height="30" alt="Next.js" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="30" height="30" alt="Type Script"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30" alt="SASS"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" width="30" height="30" alt="Jest"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg" width="30" height="30" alt="Puppeteer"/>
</div>

## 🏠 Главная страница

<img src="./.github/screenshot.png" alt="" />

## 🚀 Быстрый старт

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/sweetconsole/veloce.git
cd veloce

# Установите зависимости
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run start
```

## 📜 Доступные скрипты

| Команда | Описание |
| :--- | :--- |
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка продакшен-версии |
| `npm run start` | Запуск собранного приложения |
| `npm run lint` | Проверка кода ESLint |
| `npm run test` | Запуск unit-тестов (Vitest) |
| `npm run test:watch` | Тесты в watch-режиме |
| `npm run test:coverage` | Тесты с отчётом о покрытии |

## 📁 Структура проекта

```
veloce/
├── app/ - App Router: страницы и layout
│   ├── about/ - /about
│   ├── contact/ - /contact
│   ├── mocktails/ - /mocktails и /mocktails/[slug]
│   ├── ui-kit/ - /ui-kit
│   ├── fonts.ts - подключение шрифтов
│   ├── layout.tsx - корневой layout
│   └── page.tsx - главная страница
├── components/ - react-компоненты
│   ├── about/ - компоненты страницы «О нас»
│   ├── contact/ - компоненты страницы контактов
│   ├── home/ - секции главной страницы
│   ├── mocktails/ - компоненты страниц моктейлей
│   └── shared/ - переиспользуемые UI-компоненты
├── hooks/ - пользовательские хуки
│   ├── useMocktail.tsx - контекст текущего моктейля
│   └── useScroll.tsx - отслеживание скролла
├── lib/ - данные приложения
│   ├── achievements.data.ts
│   ├── contacts.data.ts
│   ├── ingredients.data.ts
│   └── mocktails.data.ts
├── public/ - изображения, логотипы
├── styles/ - глобальные SCSS-стили
│   ├── adaptive.scss
│   ├── functions.scss
│   ├── general.scss
│   ├── mixins.scss
│   ├── reset.scss
│   └── variables.scss
├── utils/ - утилиты и константы
│   └── routes.config.ts
├── .prettierrc - конфигурация Prettier
├── .stykekubtrc.json - конфигурация Stylelint
├── eslint.config.mjs - конфигурация Eslint
├── jest.config.ts - конфигурация Jest
├── jest.setup.ts - конфигурация окружения между Jest и Next.js + Testing Library
├── tsconfig.json - конфигурация TypeScript
└── package.json
```

## 🧪 Тестирование

Проект использует **Jest** + **React Testing Library** для модульных и интеграционных тестов и **Puppeteer** для E2E.

```bash
# Unit-тесты
npm run test

# Покрытие
npm run test:coverage
```

Тесты расположены рядом с тестируемыми файлами

## 🎨 Дизайн и данные

- Все данные о моктейлях, ингредиентах, достижениях и контактах хранятся в `lib/` в виде типизированных объектов.
- Стили написаны с использованием SCSS-модулей и адаптивных миксинов (`styles/adaptive.scss`).
- Маршруты централизованы в `utils/routes.config.ts` — используйте `ROUTES.HOME`, `ROUTES.ABOUT` и т.д. вместо хардкода путей.

## 🚢 Деплой

Проект оптимизирован для деплоя на [Vercel](https://vercel.com/):

1. Форкните репозиторий.
2. Импортируйте его в Vercel.
3. Vercel автоматически определит Next.js и настроит сборку.

Подробнее — в [документации Next.js по деплою](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 Лицензия

Проект создан в учебных/демонстрационных целях. Все права на бренд Véloce принадлежат его владельцам.