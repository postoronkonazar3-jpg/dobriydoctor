'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  Syringe,
  Activity,
  Scissors,
  Smile,
  ShieldCheck,
  Heart,
  Thermometer,
  Sparkles,
  Search,
  Calendar,
  PhoneCall,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  FileText
} from 'lucide-react';
import { fullServicesCategories, FullServiceCategory } from '@/lib/servicesData';

interface ServicesProps {
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Syringe,
  Activity,
  Scissors,
  Smile,
  ShieldCheck,
  Heart,
  Thermometer,
  Sparkles
};

export const Services: React.FC<ServicesProps> = ({ onOpenBooking, onOpenCallback }) => {
  const [activeTab, setActiveTab] = useState<string>('consultation');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = fullServicesCategories.find((c) => c.id === activeTab) || fullServicesCategories[0];
  const IconComponent = iconMap[activeCategory.iconName] || Stethoscope;

  const filteredItems = activeCategory.items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
            <Stethoscope className="w-3.5 h-3.5" /> Послуги та фіксовані ціни
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
            Офіційний прайс-лист ветеринарних послуг
          </h2>
          <p className="text-base text-gray-600">
            Оберіть напрямок лікування для огляду фіксованої вартості. Усі ціни є офіційними та актуальними.
          </p>

          {/* Link button to full services page */}
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 bg-[#1A2B3C] hover:bg-[#243B53] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-102 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#4FA8E8]" />
              <span>Переглянути повний прайс-лист послуг (9 категорій)</span>
              <ArrowRight className="w-4 h-4 text-[#4FA8E8]" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar border-b border-slate-100 mb-8">
          {fullServicesCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Stethoscope;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#4FA8E8] text-white shadow-lg shadow-[#4FA8E8]/25 scale-102'
                    : 'bg-[#EAF4FC]/60 text-[#1A2B3C] hover:bg-[#EAF4FC] hover:text-[#4FA8E8]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#4FA8E8]'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel Banner */}
        <div className="bg-gradient-to-r from-[#EAF4FC] via-[#F4F9FE] to-white p-6 sm:p-8 rounded-3xl border border-[#4FA8E8]/20 mb-8 grid lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-[#4FA8E8] font-bold text-xs uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" /> {activeCategory.badge || 'Напрямок лікування'}
            </div>
            <h3 className="text-2xl font-bold text-[#1A2B3C]">{activeCategory.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{activeCategory.description}</p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <Image
                src={activeCategory.imageUrl}
                alt={activeCategory.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Search Bar & Full List Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Шукати послугу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 w-full sm:w-auto justify-between sm:justify-end">
            <span>
              У цій категорії: <strong className="text-[#1A2B3C]">{filteredItems.length} послуг</strong>
            </span>
            <Link href="/services" className="text-[#4FA8E8] font-bold hover:underline flex items-center gap-1">
              Всі послуги сайту <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile View: Reorganized Responsive Cards (No Cutoff Buttons) */}
        <div className="block sm:hidden divide-y divide-slate-100 rounded-2xl border border-slate-200 shadow-xs bg-white overflow-hidden mb-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div key={item.id} className={`p-4 flex flex-col gap-2.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#EAF4FC]/30'}`}>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] text-sm leading-snug">{item.title}</h4>
                  {item.note && <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-extrabold text-[#4FA8E8] text-base">{item.price}</span>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-2xs transition-all cursor-pointer"
                  >
                    Записатись
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500 text-xs">
              Послуг за вашим запитом не знайдено.
            </div>
          )}
        </div>

        {/* Desktop View: Full Pricing Table */}
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1A2B3C] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Назва послуги / процедури</th>
                <th className="py-4 px-6 font-semibold text-right">Вартість</th>
                <th className="py-4 px-6 font-semibold text-center w-32">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={item.id}
                      className={`transition-colors hover:bg-[#EAF4FC]/70 ${
                        isEven ? 'bg-white' : 'bg-[#EAF4FC]/30'
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-[#1A2B3C] align-middle">
                        {item.title}
                        {item.note && (
                          <span className="block text-xs font-normal text-slate-500 mt-1">
                            {item.note}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 font-extrabold text-[#4FA8E8] text-base text-right align-middle whitespace-nowrap">
                        {item.price}
                      </td>
                      <td className="py-4 px-6 text-center align-middle whitespace-nowrap">
                        <button
                          onClick={onOpenBooking}
                          className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
                        >
                          Записатись
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-gray-500">
                    Послуг за вашим запитом не знайдено. Спробуйте змінити слово або переглянути всі послуги.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Action Buttons Below Pricing Table */}
        <div className="mt-8 bg-[#EAF4FC] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#4FA8E8]/20">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#4FA8E8] text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#1A2B3C] text-sm sm:text-base">Потрібна допомога у виборі процедури?</p>
              <p className="text-xs text-gray-600">Наші ветеринари безкоштовно з&apos;ясують причину та порадять фахівця.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/services"
              className="w-full sm:w-auto bg-[#1A2B3C] hover:bg-[#243B53] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#4FA8E8]" />
              Повний прайс-лист
            </Link>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Записатися
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
