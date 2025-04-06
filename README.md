# Сайт-портфолио

[![Demo](https://img.shields.io/badge/demo-live-green.svg)](https://dev-zagrebin.ru)

Современный сайт-портфолио, созданный с использованием Vue.js и Vite, демонстрирующий навыки, проекты и профессиональный опыт.

## ✨ Особенности

- Интерактивный интерфейс с анимациями и эффектами частиц
- Адаптивный дизайн
- Несколько разделов:
  - О себе
  - Навыки
  - Опыт работы
  - Проекты
  - Контакты

## 🛠️ Используемые технологии

- Vue.js
- Vite
- JavaScript
- CSS3
- Particles.js

## 📁 Структура проекта

***text
PORTFOLIO-TEST/
├── public/               # Публичные статические ресурсы
│   └── favicon.ico
├── src/                  # Исходный код
│   ├── assets/
│   │   ├── css/
│   │   │   ├── animations.css
│   │   │   └── main.css
│   │   ├── img/          # Изображения
│   │   └── js/
│   │       ├── animations.js
│   │       └── particles-config.js
│   ├── components/       # Компоненты Vue
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Experience.vue
│   │   ├── Header.vue
│   │   ├── Projects.vue
│   │   └── Skills.vue
│   ├── App.vue           # Главный компонент приложения
│   └── main.js           # Точка входа в приложение
├── .gitignore            # Файл gitignore
├── index.html            # HTML точка входа
├── package.json          # Метаданные проекта и зависимости
├── package-lock.json     # Фиксация версий зависимостей
├── README.md             # Документация проекта
├── vite.config.js        # Конфигурация Vite
└── jsconfig.json         # Конфигурация JavaScript
