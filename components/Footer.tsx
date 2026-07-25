'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Головна', href: '#hero' },
    { name: 'Про клініку', href: '#about' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Послуги', href: '#services' },
    { name: 'Фахівці', href: '#specialists' },
    { name: 'Переваги', href: '#advantages' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'Контакти', href: '#contacts' },
  ];

  return (
    <footer className="bg-[#1A2B3C] text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
        aria-label="Вгору"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-white shrink-0 border border-slate-700">
                <Image
                  src="https://res.cloudinary.com/daq51lz0x/image/upload/v1785002394/images_hqbltb.jpg"
                  alt="Добрий доктор логотип"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Добрий доктор
                </span>
                <span className="block text-xs text-[#4FA8E8] font-medium">
                  Ветеринарна клініка 24/7
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-300 leading-relaxed">
              Цілодобова турбота про здоров&apos;я, красу та самопочуття ваших чотирилапих членів родини у м. Києві.
            </p>

            {/* Social Icons (Instagram, TikTok, Telegram, Facebook) */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">Ми у соцмережах:</p>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#4FA8E8] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#4FA8E8] text-white flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.12V9.39a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V9.65a8.21 8.21 0 0 0 4.94 1.63V7.83a4.85 4.85 0 0 1-.98-.14z"/>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/+380962030411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#229ED9] text-white flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.51c-.15.68-.55.85-1.12.53l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.61.3l.22-3.14 5.72-5.17c.25-.22-.05-.34-.39-.12l-7.07 4.45-3.05-.95c-.66-.21-.68-.66.14-.98l11.92-4.59c.55-.2 1.04.14.83.98z"/>
                  </svg>
                </a>

                {/* Viber */}
                <a
                  href="viber://chat?number=+380962030411"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#7360F2] text-white flex items-center justify-center transition-colors"
                  aria-label="Viber"
                  title="Viber"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M11.39 0C5.35 0 .48 4.44.48 10.15c0 3.23 1.58 6.13 4.08 8.04l-.62 3.23c-.08.43.32.79.73.65l3.65-1.28c.99.27 2.02.42 3.07.42 6.04 0 10.91-4.44 10.91-10.15S17.43 0 11.39 0zm.83 14.61c-2.88 0-5.22-2.34-5.22-5.22s2.34-5.22 5.22-5.22 5.22 2.34 5.22 5.22-2.34 5.22-5.22 5.22z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#4FA8E8] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#4FA8E8] pl-3">
              Навігація
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#4FA8E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Summary */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#4FA8E8] pl-3">
              Основні послуги
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Терапія та вакцинація</li>
              <li>Малоінвазивна хірургія</li>
              <li>УЗД та цифровий рентген</li>
              <li>Лабораторні аналізи (30 хв)</li>
              <li>Стоматологія та чистка УЗ</li>
              <li>Цілодобовий стаціонар</li>
              <li>Ветеринарна зооаптека</li>
            </ul>
          </div>

          {/* Column 4: Emergency Contacts */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#4FA8E8] pl-3">
              Цілодобова клініка
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4FA8E8] shrink-0 mt-0.5" />
                <span>м. Київ, вул. Героїв Дніпра, 38А</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#4FA8E8] shrink-0" />
                <span className="text-emerald-400 font-semibold">24/7 цілодобово без вихідних</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4FA8E8] shrink-0" />
                <a href="tel:+380962030411" className="hover:text-[#4FA8E8] transition-colors font-bold text-white">
                  +38 (096) 203-04-11 (Viber / Telegram)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4FA8E8] shrink-0" />
                <a href="tel:+380441234567" className="hover:text-[#4FA8E8] transition-colors">
                  +38 (044) 123-45-67 (Міський)
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2026 Добрий доктор. Всі права захищені.</p>
          <p className="text-slate-500">
            Зроблено з любов&apos;ю до тварин • Ветеринарний центр у м. Києві
          </p>
        </div>

      </div>
    </footer>
  );
};
