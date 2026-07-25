'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldAlert, Award, Clock, ShoppingBag, Pill, Zap, Heart, CheckCircle2 } from 'lucide-react';

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  petPhotoUrl: string;
}

export const advantagesList: AdvantageItem[] = [
  {
    id: 'adv-1',
    title: 'Власний цілодобовий стаціонар',
    description: 'Окремі затишні бокси з підігрівом, оксигенотерапією та постійним спостереженням чергового ветеринара 24/7.',
    icon: Clock,
    petPhotoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-2',
    title: 'Вузькопрофільні фахівці',
    description: 'У команді працюють хірург-ортопед, дерматолог, стоматолог, кардіолог та орнітолог з досвідом понад 8-14 років.',
    icon: Award,
    petPhotoUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-3',
    title: 'Цілодобова консультація 24/7',
    description: 'Приймаємо ургентні виклики та надаємо термінову допомогу вдень і вночі без вихідних та святкових днів.',
    icon: ShieldAlert,
    petPhotoUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-4',
    title: 'Власна ветеринарна зооаптека',
    description: 'Широкий асортимент сертифікованих ліків, антибіотиків, крапель та вітамінів прямо при клініці за доступними цінами.',
    icon: Pill,
    petPhotoUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-5',
    title: 'Власний зоомагазин та раціони',
    description: 'Лікувальні дієти Корми Hill\'s, Royal Canin, Purina Pro Plan, а також іграшки, амуніція та засоби гігієни.',
    icon: ShoppingBag,
    petPhotoUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-6',
    title: 'Експрес-лабораторія (30 хвилин)',
    description: 'Автоматичні аналізатори крові та сечі дозволяють встановити точний діагноз прямо під час вашого візиту.',
    icon: Zap,
    petPhotoUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'adv-7',
    title: 'Безстресовий підхід (Fear-Free)',
    description: 'Дбайливе та ласкаве фіксування тварин без насильства, розмежовані очікувальні зони для котів і собак.',
    icon: Heart,
    petPhotoUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80'
  }
];

export const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5" /> Чому обирають «Добрий доктор»
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
            Головні переваги нашої ветеринарної клініки
          </h2>
          <p className="text-base text-gray-600">
            Ми створили максимально комфортні умови для тварин та їхніх власників, щоб лікування було ефективним, швидким та безстресовим.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantagesList.map((adv) => {
            const Icon = adv.icon;

            return (
              <div
                key={adv.id}
                className="bg-[#EAF4FC]/40 hover:bg-[#EAF4FC] p-6 sm:p-8 rounded-3xl border border-[#4FA8E8]/15 hover:border-[#4FA8E8]/40 transition-all duration-300 hover-lift relative group overflow-hidden"
              >
                {/* Decorative Small Pet Photo Accent in Corner */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#4FA8E8] flex items-center justify-center shadow-md border border-[#4FA8E8]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Circular Pet Photo Accent */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0">
                    <Image
                      src={adv.petPhotoUrl}
                      alt={adv.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-[#1A2B3C] mb-2 group-hover:text-[#4FA8E8] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
