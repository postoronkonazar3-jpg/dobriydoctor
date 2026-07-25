'use client';

import React, { useState, useMemo } from 'react';
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
  ArrowLeft,
  Calendar,
  PhoneCall,
  CheckCircle2,
  FileText,
  Printer,
  ChevronRight
} from 'lucide-react';
import { fullServicesCategories, FullServiceCategory, FullServiceItem } from '@/lib/servicesData';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CallbackModal } from '@/components/CallbackModal';

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

export default function FullServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  const filteredCategories = useMemo(() => {
    return fullServicesCategories
      .map((cat) => {
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        const filteredItems = cat.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            item.title.toLowerCase().includes(q) ||
            cat.name.toLowerCase().includes(q)
          );
        });

        if (filteredItems.length === 0) return null;

        return {
          ...cat,
          items: filteredItems
        };
      })
      .filter((cat): cat is FullServiceCategory => cat !== null);
  }, [searchQuery, selectedCategory]);

  const totalServicesCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans selection:bg-[#4FA8E8] selection:text-white">
      {/* Header */}
      <Header
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCallback={() => setCallbackOpen(true)}
      />

      {/* Main Content */}
      <main className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Back Link */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4FA8E8] hover:text-[#3893D4] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> На головну сторінку
            </Link>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1A2B3C] bg-white px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#4FA8E8]" /> Друк прайс-листа
            </button>
          </div>

          {/* Page Banner Header */}
          <div className="bg-gradient-to-r from-[#1A2B3C] via-[#243B53] to-[#1A2B3C] text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-10">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4FA8E8]/20 text-[#4FA8E8] border border-[#4FA8E8]/40 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" /> Офіційний прейскурант клініки
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Повний перелік послуг та ціни
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Актуальні прозорі ціни ветеринарної клініки «Добрий доктор» у Києві. Усі діагностичні, лікувальні та хірургічні процедури із гарантією професіоналізму та турботи.
              </p>
            </div>

            {/* Decorative background paw */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Sparkles className="w-96 h-96 text-white" />
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-10">
            
            {/* Search Input */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Швидкий пошук за назвою послуги..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20 transition-all"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <span className="text-xs text-gray-500 font-medium">
                  Знайдено послуг: <strong className="text-[#1A2B3C] text-sm">{totalServicesCount}</strong>
                </span>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-[#4FA8E8] hover:underline cursor-pointer"
                  >
                    Очистити пошук
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Оберіть категорію:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-[#1A2B3C] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Всі категорії ({fullServicesCategories.reduce((acc, c) => acc + c.items.length, 0)})
                </button>

                {fullServicesCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#4FA8E8] text-white shadow-md'
                          : 'bg-[#EAF4FC] text-[#1A2B3C] hover:bg-[#d5ea9f]/30 hover:text-[#4FA8E8]'
                      }`}
                    >
                      {cat.name} ({cat.items.length})
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Categories Accordion / Tables Stack */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((cat) => {
                const IconComponent = iconMap[cat.iconName] || Stethoscope;

                return (
                  <div
                    key={cat.id}
                    id={`cat-${cat.id}`}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    {/* Category Header Banner */}
                    <div className="p-6 sm:p-8 bg-gradient-to-r from-[#EAF4FC] via-[#F4F9FE] to-white border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-[#4FA8E8] text-white flex items-center justify-center shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          {cat.badge && (
                            <span className="px-3 py-1 rounded-full bg-white text-[#4FA8E8] text-xs font-bold border border-[#4FA8E8]/20 shadow-2xs">
                              {cat.badge}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl font-extrabold text-[#1A2B3C]">{cat.name}</h2>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setBookingOpen(true)}
                        className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 shrink-0 cursor-pointer self-start md:self-center"
                      >
                        <Calendar className="w-4 h-4" />
                        Записатись у цю секцію
                      </button>
                    </div>

                    {/* Mobile Category Card List */}
                    <div className="block sm:hidden divide-y divide-slate-100 border-t border-slate-200">
                      {cat.items.map((item, idx) => (
                        <div key={item.id} className={`p-4 flex flex-col gap-2 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                          <div>
                            <h4 className="font-bold text-[#1A2B3C] text-sm leading-snug">{item.title}</h4>
                            {item.note && <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>}
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="font-extrabold text-[#4FA8E8] text-base">{item.price}</span>
                            <button
                              onClick={() => setBookingOpen(true)}
                              className="bg-[#4FA8E8] text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-2xs hover:bg-[#3893D4] transition-all cursor-pointer inline-flex items-center gap-1"
                            >
                              Обрати <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Category Table */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">
                            <th className="py-3.5 px-6 font-semibold w-2/3">Назва послуги</th>
                            <th className="py-3.5 px-6 font-semibold text-right">Вартість, грн</th>
                            <th className="py-3.5 px-6 font-semibold text-center w-36">Запис</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                          {cat.items.map((item, idx) => (
                            <tr
                              key={item.id}
                              className={`transition-colors hover:bg-[#EAF4FC]/60 ${
                                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                              }`}
                            >
                              <td className="py-4 px-6 font-semibold text-[#1A2B3C] align-middle">
                                {item.title}
                                {item.note && (
                                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                                    {item.note}
                                  </span>
                                )}
                              </td>

                              <td className="py-4 px-6 font-extrabold text-[#4FA8E8] text-base text-right align-middle whitespace-nowrap">
                                {item.price}
                              </td>

                              <td className="py-4 px-6 text-center align-middle whitespace-nowrap">
                                <button
                                  onClick={() => setBookingOpen(true)}
                                  className="text-xs font-semibold text-[#4FA8E8] hover:text-[#3893D4] hover:underline inline-flex items-center gap-1 cursor-pointer"
                                >
                                  Обрати <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-[#1A2B3C]">Нічого не знайдено</h3>
              <p className="text-sm text-gray-500">
                За вашим запитом &quot;{searchQuery}&quot; послуг не знайдено. Спробуйте змінити ключове слово.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-[#4FA8E8] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#3893D4] transition-all cursor-pointer"
              >
                Скинути фільтри
              </button>
            </div>
          )}

          {/* Emergency Bottom Assistance Card */}
          <div className="mt-12 bg-gradient-to-r from-[#EAF4FC] to-white p-8 rounded-3xl border border-[#4FA8E8]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start text-[#4FA8E8] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" /> Консультація адміністратора 24/7
              </div>
              <h3 className="text-xl font-bold text-[#1A2B3C]">Не знайшли потрібну процедуру чи операцію?</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
                Зателефонуйте нам або замовте зворотний дзвінок. Лікар-координатор відповість на всі запитання та підрахує точну вартість лікування.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Записатись онлайн
              </button>
              <button
                onClick={() => setCallbackOpen(true)}
                className="bg-white border border-[#4FA8E8] text-[#4FA8E8] hover:bg-[#EAF4FC] font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Замовити дзвінок
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDoctor={preselectedDoctor}
      />

      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
      />
    </div>
  );
}
