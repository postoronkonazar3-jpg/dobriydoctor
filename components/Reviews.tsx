'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MessageSquarePlus, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ReviewItem {
  id: string;
  clientName: string;
  petName: string;
  city: string;
  rating: number;
  date: string;
  petPhotoUrl: string;
  text: string;
  doctorMentioned?: string;
}

interface ReviewsProps {
  onOpenAddReview: () => void;
  reviewsList: ReviewItem[];
}

export const initialReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Оксана та пес Арчі',
    petName: 'Арчі (Золотистий ретривер)',
    city: 'м. Київ (Оболонь)',
    rating: 5,
    date: '14 липня 2026',
    petPhotoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80',
    text: 'Величезне дякую д-ру Михайлу Бондаренко! Арчі проковтнув сторонній предмет на прогулянці. Нас прийняли посеред ночі за 10 хвилин, швидко зробили рентген та проведено успішну малоінвазивну операцію. Арчі знову бігає веселий!',
    doctorMentioned: 'Д-р Михайло Бондаренко'
  },
  {
    id: 'rev-2',
    clientName: 'Катерина та кішка Софі',
    petName: 'Софі (Британська короткошерста)',
    city: 'м. Київ (Поділ)',
    rating: 5,
    date: '28 червня 2026',
    petPhotoUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
    text: 'Дуже чудова клініка з ласкавим ставленням. Робили стерилізацію кішки. Шовчик маленький, акуратний, Софі вже наступного дня почувалася добре і мала апетит. Дякую лікарю Олені за турботу!',
    doctorMentioned: 'Д-р Олена Ковальчук'
  },
  {
    id: 'rev-3',
    clientName: 'Сергій та коргі Майло',
    petName: 'Майло (Вельш-коргі)',
    city: 'м. Київ (Вишгород)',
    rating: 5,
    date: '02 червня 2026',
    petPhotoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80',
    text: 'Зверталися до дерматолога Ірини Мельник через хронічне чухання та алергію. Лікар провела зішкріб, підібрала гіпоалергенний корм і лікувальний шампунь. Шерсть у Майло за місяць знову густа та шовковиста!',
    doctorMentioned: 'Д-р Ірина Мельник'
  },
  {
    id: 'rev-4',
    clientName: 'Наталія та шпіц Бублик',
    petName: 'Бублик (Померанський шпіц)',
    city: 'м. Київ (Центр)',
    rating: 5,
    date: '19 травня 2026',
    petPhotoUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=300&q=80',
    text: 'Робили ультразвукову чистку зубів у лікаря Андрія. Бублик зовсім не стресував, подих став свіжим, а зубки білосніжними. Дуже сподобалося, що у клініці є все обладнання на місці.',
    doctorMentioned: 'Д-р Андрій Савченко'
  }
];

export const Reviews: React.FC<ReviewsProps> = ({ onOpenAddReview, reviewsList }) => {
  const [activePage, setActivePage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviewsList.length / itemsPerPage);

  const displayedReviews = reviewsList.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  );

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#EAF4FC]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#4FA8E8]" /> Відгуки вдячних господарів
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
              Що кажуть про клініку «Добрий доктор»
            </h2>
            <p className="text-base text-gray-600">
              Нам довіряють найцінніше — здоров&apos;я та життя своїх улюбленців. Ознайомтеся з реальними історіями наших пацієнтів.
            </p>
          </div>

          <button
            onClick={onOpenAddReview}
            className="self-start md:self-auto bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Залишити відгук</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover-lift"
            >
              <Quote className="w-10 h-10 text-[#EAF4FC] absolute top-5 right-5 pointer-events-none group-hover:text-[#D3E9F9] transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2">{rev.rating}.0 / 5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Client Info & Pet Photo */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                
                {/* Circular Pet Photo Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#4FA8E8] shadow-sm shrink-0 bg-[#EAF4FC]">
                  <Image
                    src={rev.petPhotoUrl}
                    alt={rev.petName}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="overflow-hidden">
                  <h3 className="font-bold text-sm text-[#1A2B3C] truncate flex items-center gap-1.5">
                    {rev.clientName}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </h3>
                  <p className="text-xs text-[#4FA8E8] font-medium truncate">{rev.petName}</p>
                  <p className="text-[10px] text-gray-400">{rev.city} • {rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
              disabled={activePage === 0}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#1A2B3C] disabled:opacity-40 flex items-center justify-center hover:bg-[#EAF4FC] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-gray-500">
              Сторінка {activePage + 1} з {totalPages}
            </span>
            <button
              onClick={() => setActivePage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={activePage === totalPages - 1}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#1A2B3C] disabled:opacity-40 flex items-center justify-center hover:bg-[#EAF4FC] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
