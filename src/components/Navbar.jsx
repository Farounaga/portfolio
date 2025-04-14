// src/components/Navbar.jsx
import React, { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Accueil', href: '#' },
    { label: 'À propos', href: '#' },
    { label: 'Mon entreprise', href: '#' },
    { label: 'Campus Ermitage', href: '#' },
    { label: 'La formation', href: '#' },
    { label: 'Compétences', href: '#' },
    { label: 'Parcours', href: '#' },
    { label: 'Projets', href: '#' },
    { label: 'Veilles', href: '#' },
  ];

  return (
    <nav className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          {/* Логотип или название сайта */}
          <div className="flex-shrink-0">
            <a href="#" className="font-default font-bold text-text-light dark:text-text-dark">
              Logo
            </a>
          </div>
          {/* Горизонтальное меню для экранов md и выше */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-default font-bold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Переключатель темы для десктопа */}
          <div className="hidden md:block">
            <ThemeSwitch />
          </div>
          {/* Кнопка-гамбургер для мобильных устройств */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-light dark:text-text-dark focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Вертикальное меню для мобильных устройств */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block font-default font-bold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Переключатель темы в мобильном меню */}
            <li className="pt-2">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;