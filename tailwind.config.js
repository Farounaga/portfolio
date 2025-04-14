/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Переключение тем через класс 'dark'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@heroui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        large: '1rem', // Оставляем как есть
      },
      colors: {
        // Основные цвета для фона
        background: {
          light: '#fff',     // Белый фон для светлой темы
          dark: '#000',      // Чёрный фон для тёмной темы
        },
        // Цвета текста
        text: {
          light: '#000',     // Чёрный текст для светлой темы
          dark: '#fff',      // Белый текст для тёмной темы
        },
        // Первичные цвета (кнопки, акценты и т.д.)
        primary: {
          light: '#1d4ed8',  // Тёмно-синий для светлой темы
          dark: '#2563eb',   // Светло-синий для тёмной темы
        },
      },
      fontFamily: {
        default: ['Turret Road', 'sans-serif'], // Оставляем как есть
      },
    },
  },
  plugins: [],
};