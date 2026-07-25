'use client';

import React from 'react';
import Image from 'next/image';
import { HeartHandshake, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with 3 Circular Pet Photos + Blob Backgrounds */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            
            {/* Background Blob 1 */}
            <div className="absolute top-0 right-4 w-72 h-72 bg-[#EAF4FC] rounded-full filter blur-xl -z-10" />
            <div className="absolute bottom-4 left-4 w-60 h-60 bg-[#D3E9F9]/60 rounded-full filter blur-xl -z-10" />

            {/* Collage Container */}
            <div className="relative w-full max-w-md h-[380px] sm:h-[440px]">
              
              {/* Pet Photo 1: Large Top Left (French Bulldog) */}
              <div className="absolute top-0 left-0 w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden p-2 bg-white shadow-xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EAF4FC]">
                  <Image
                    src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80"
                    alt="Французький бульдог пацієнт"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Pet Photo 2: Mid Right (Fluffy Cat) */}
              <div className="absolute top-10 sm:top-14 right-0 w-36 h-36 sm:w-46 sm:h-46 rounded-full overflow-hidden p-2 bg-white shadow-xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EAF4FC]">
                  <Image
                    src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80"
                    alt="Пухнастий кіт пацієнт"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Pet Photo 3: Bottom Left (Corgi/Beagle) */}
              <div className="absolute bottom-2 left-0 sm:left-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden p-2 bg-white shadow-xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EAF4FC]">
                  <Image
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
                    alt="Коргі пацієнт"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Floating Badge moved further right so it doesn't cover the pet photo */}
              <div className="absolute bottom-4 right-0 sm:-right-6 bg-[#1A2B3C] text-white p-4 rounded-2xl shadow-2xl border border-slate-700 max-w-[170px] sm:max-w-[200px] z-20">
                <p className="text-2xl font-extrabold text-[#4FA8E8]">2014</p>
                <p className="text-xs font-medium text-slate-300 leading-snug">Рік заснування клініки «Добрий доктор»</p>
              </div>

            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Sub-label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Про нашу клініку
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C] leading-tight">
              Більше ніж просто клініка — це простір щирої любові та турботи про братів наших менших
            </h2>

            {/* Main Text */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Ветеринарна клініка <strong className="text-[#1A2B3C]">«Добрий доктор»</strong> була заснована у <strong className="text-[#4FA8E8]">2014 році</strong> з єдиною метою: забезпечити кожному домашньому улюбленцю професійну, гуманну та безболісну ветеринарну допомогу за європейськими стандартами.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              За понад 10 років плідної роботи ми врятували та вилікували тисячі котів, собак, гризунів, птахів і екзотичних тварин. Наша місія — поєднувати інноваційну діагностику з щирим і чуйним ставленням до кожної тварини.
            </p>

            {/* Key Advantages List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EAF4FC]/50 border border-[#4FA8E8]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4FA8E8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B3C]">Сучасна діагностика</h3>
                  <p className="text-xs text-gray-500">УЗД експертного класу, цифровий рентген, ЕКГ</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EAF4FC]/50 border border-[#4FA8E8]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4FA8E8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B3C]">Лабораторія 24/7</h3>
                  <p className="text-xs text-gray-500">Експрес-аналізи крові та сечі за 30 хвилин</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EAF4FC]/50 border border-[#4FA8E8]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4FA8E8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B3C]">Малоінвазивна хірургія</h3>
                  <p className="text-xs text-gray-500">Безболісні операції з швидким відновленням</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EAF4FC]/50 border border-[#4FA8E8]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4FA8E8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B3C]">Затишний стаціонар</h3>
                  <p className="text-xs text-gray-500">Окремі теплі бокси для котів та собак</p>
                </div>
              </div>
            </div>

            {/* Mission Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EAF4FC] to-white border-l-4 border-[#4FA8E8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#4FA8E8] text-white flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm italic text-[#1A2B3C] font-medium">
                «Ми ставимося до ваших улюбленців так само дбайливо, як до власних. Їхній комфорт і спокій господарів — наш найвищий пріоритет.»
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
