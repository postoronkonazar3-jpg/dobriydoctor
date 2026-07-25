'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, PhoneCall, MapPin, Clock, Phone, ShieldCheck, Heart, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCallback }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#EAF4FC]/60 via-white to-white overflow-hidden">
      {/* Decorative Blob Shapes in Background */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D3E9F9]/50 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EAF4FC] rounded-full filter blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF4FC] text-[#4FA8E8] font-semibold text-xs sm:text-sm shadow-xs border border-[#4FA8E8]/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Турбота, професіоналізм та любов до кожного хвостика</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1A2B3C] leading-tight sm:leading-tight">
              Здоров&apos;я та щасливе майбутнє ваших улюбленців —{' '}
              <span className="text-[#4FA8E8] relative inline-block">
                у надійних руках!
                <svg className="absolute left-0 -bottom-2 w-full h-2 text-[#4FA8E8]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Сучасна ветеринарна клініка цілодобової допомоги. Фахові лікарі, власна експрес-лабораторія, безболісна хірургія та затишний стаціонар для котів, собак та екзотичних тварин.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-[#4FA8E8]/25 hover:shadow-xl hover:shadow-[#4FA8E8]/35 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Записатись на прийом</span>
              </button>

              <button
                onClick={onOpenCallback}
                className="w-full sm:w-auto border-2 border-[#4FA8E8] text-[#4FA8E8] hover:bg-[#EAF4FC] font-semibold text-base px-7 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Замовити дзвінок</span>
              </button>
            </div>

            {/* Feature Bullets with Mini Pet Avatars */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-100 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-lg sm:text-xl font-bold text-[#1A2B3C]">12 000+</span>
                <span className="text-xs text-gray-500">Вилікуваних тварин</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-lg sm:text-xl font-bold text-[#4FA8E8]">24/7</span>
                <span className="text-xs text-gray-500">Без вихідних</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-lg sm:text-xl font-bold text-[#1A2B3C]">10+ років</span>
                <span className="text-xs text-gray-500">Досвіду фахівців</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Pet Cutout Image & Decorative Floating Pet Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Blob Shape behind Main Pet */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-[#D3E9F9] to-[#EAF4FC] rounded-full filter blur-md -z-10 animate-pulse" />
            
            {/* Main Cutout Circular Pet Photo */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden p-2 bg-white shadow-2xl border-4 border-white group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EAF4FC]">
                <Image
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
                  alt="Веселий собака пацієнт ветеринарної клініки Добрий доктор"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Mini Pet Badge 1 (Cat top left) */}
            <div className="absolute -top-2 left-2 sm:left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-1000">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#4FA8E8]">
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80"
                  alt="Кошеня в клініці"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-bold text-[#1A2B3C]">Ласкавий підхід</p>
                <p className="text-[10px] text-gray-500">Без страху та болю</p>
              </div>
            </div>

            {/* Floating Mini Pet Badge 2 (Puppy bottom right) */}
            <div className="absolute -bottom-4 right-2 sm:right-4 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=300&q=80"
                  alt="Песик пацієнт"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-emerald-500" /> 100% турботи
                </p>
                <p className="text-[10px] text-gray-500">Здоровий улюбленець</p>
              </div>
            </div>

            {/* Small decorative paw badge */}
            <div className="absolute top-1/2 -right-4 bg-[#4FA8E8] text-white p-3 rounded-full shadow-lg hidden sm:flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>

          </div>
        </div>

        {/* Hero Info Cards Bar (Address, Hours, Phone numbers) */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 1: Address */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF4FC] flex items-center justify-center text-[#4FA8E8] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#4FA8E8] uppercase tracking-wider">Наша адреса</p>
              <p className="font-bold text-[#1A2B3C] text-sm sm:text-base">м. Київ, вул. Героїв Дніпра, 38А</p>
              <p className="text-xs text-gray-500">Зручний доїзд та парковка</p>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF4FC] flex items-center justify-center text-[#4FA8E8] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#4FA8E8] uppercase tracking-wider">Режим роботи</p>
              <p className="font-bold text-[#1A2B3C] text-sm sm:text-base">Цілодобово 24/7</p>
              <p className="text-xs text-gray-500">Без вихідних та свят</p>
            </div>
          </div>

          {/* Card 3: Phones */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF4FC] flex items-center justify-center text-[#4FA8E8] shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#4FA8E8] uppercase tracking-wider">Телефони клініки</p>
              <a href="tel:+380962030411" className="font-bold text-[#1A2B3C] text-sm sm:text-base hover:text-[#4FA8E8] transition-colors block">
                +38 (096) 203-04-11
              </a>
              <p className="text-xs text-[#4FA8E8] font-medium">Viber / Telegram / Дзвінки</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
