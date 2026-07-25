'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Heart, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenCallback }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-[#1A2B3C] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#4FA8E8] font-medium">
              <Clock className="w-3.5 h-3.5" /> Цілодобово 24/7 без вихідних
            </span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#4FA8E8]" /> м. Київ, вул. Героїв Дніпра, 38А
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCallback}
              className="text-[#4FA8E8] hover:text-white underline text-xs transition-colors"
            >
              Замовити дзвінок
            </button>
            <span className="text-gray-500">•</span>
            <a href="tel:+380441234567" className="font-semibold text-white hover:text-[#4FA8E8] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#4FA8E8]" /> +38 (044) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#EAF4FC] flex items-center justify-center text-[#4FA8E8] group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-[#4FA8E8]/20" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#1A2B3C] flex items-center gap-1">
                Добрий доктор
              </span>
              <span className="block text-xs font-medium text-[#4FA8E8]">
                Ветеринарна клініка 24/7
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#1A2B3C] hover:text-[#4FA8E8] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4FA8E8] transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+380678901234"
              className="hidden xl:flex flex-col text-right pr-2 text-xs"
            >
              <span className="text-gray-400">Гаряча лінія</span>
              <span className="font-bold text-[#1A2B3C] hover:text-[#4FA8E8]">+38 (067) 890-12-34</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#4FA8E8]/20 hover:shadow-lg hover:shadow-[#4FA8E8]/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Записатись на прийом</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#1A2B3C] hover:bg-[#EAF4FC] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#1A2B3C] hover:bg-[#EAF4FC] hover:text-[#4FA8E8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-medium py-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Записатись на прийом
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full border border-[#4FA8E8] text-[#4FA8E8] hover:bg-[#EAF4FC] font-medium py-2.5 rounded-xl text-center cursor-pointer"
              >
                Замовити зворотний дзвінок
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
