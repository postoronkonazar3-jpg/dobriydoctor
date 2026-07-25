'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Camera, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'pets';
  imageUrl: string;
  description: string;
  bentoSpan?: string;
}

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Сучасний оглядовий кабінет клініки',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/475873870_1527078351301977_307969969269431202_n_ionoju.jpg',
    description: 'Комфортні оглядові зали, оснащені новітнім обладнанням для діагностики.',
    bentoSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'g2',
    title: 'Турботливий огляд улюбленця',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/54523782_307798159896675_6196340392997158912_n_udriha.jpg',
    description: 'Дбайливий підхід ветеринарного лікаря до кожного чотирилапого пацієнта.',
    bentoSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g3',
    title: 'Професійне медичне обладнання',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/475775338_1527077421302070_4322636953431938085_n_udgoiu.jpg',
    description: 'Високоточні аналізатори та інструменти для безпечного лікування.',
    bentoSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g4',
    title: 'Команда лікарів за роботою',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/186468639_752374168772403_3950861202425185432_n_fvbiy3.jpg',
    description: 'Злагоджена робота фахівців для забезпечення найкращого догляду.',
    bentoSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g5',
    title: 'Затишна атмосфера та прийом',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/468086301_1483079469035199_4903538338121059049_n_blpjx3.jpg',
    description: 'Безпечний та спокійний простір, де тварини почуваються захищено.',
    bentoSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'g6',
    title: 'Операційна та анестезіологія',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002375/images_pw84s4.jpg',
    description: 'Стерильний операційний блок з моніторингом життєво важливих функцій.',
    bentoSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g7',
    title: 'Діагностичні процедури',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002357/images_rao60r.jpg',
    description: 'Ультразвукові та лабораторні дослідження для точного діагнозу.',
    bentoSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g8',
    title: 'Наш пухнастий пацієнт',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_4_2026-07-25_20-58-28_sslsex.jpg',
    description: 'Щаслива тваринка після проходження планового огляду.',
    bentoSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g9',
    title: 'Турбота під час процедур',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_5_2026-07-25_20-58-28_pqm84m.jpg',
    description: 'Ніжне ставлення та моральна підтримка улюбленців під час прийому.',
    bentoSpan: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'g10',
    title: 'Лабораторні дослідження 24/7',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_3_2026-07-25_20-58-28_mbkerf.jpg',
    description: 'Швидкий аналіз матеріалів для негайного початку лікування.',
    bentoSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g11',
    title: 'Огляд та профілактика',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_2_2026-07-25_20-58-28_i70syk.jpg',
    description: 'Планові щеплення, чипування та консультації лікарів.',
    bentoSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'g12',
    title: 'Стаціонарне відділення',
    category: 'clinic',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_6_2026-07-25_20-58-28_aedrzq.jpg',
    description: 'Теплі бокси з цілодобовим медичним спостереженням.',
    bentoSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g13',
    title: 'Здоровий і задоволений вихованець',
    category: 'pets',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002321/photo_1_2026-07-25_20-58-28_aibpkn.jpg',
    description: 'Найкраща нагорода для нашої команди — одужання вашого улюбленця.',
    bentoSpan: 'md:col-span-2 md:row-span-1'
  }
];

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Tripled items to provide smooth infinite wrapping in both directions
  const tripledItems = [...galleryItems, ...galleryItems, ...galleryItems];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll offset to the 2nd duplicate set
    const setInitialOffset = () => {
      const singleWidth = el.scrollWidth / 3;
      if (singleWidth > 0 && el.scrollLeft < 10) {
        el.scrollLeft = singleWidth;
      }
    };

    requestAnimationFrame(setInitialOffset);

    let isInteracting = false;
    let resumeTimer: NodeJS.Timeout | null = null;

    const pauseAutoScroll = () => {
      isInteracting = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };

    const scheduleResume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        isInteracting = false;
      }, 1500);
    };

    const handleScroll = () => {
      // Pause auto-scroll while user is actively dragging or momentum scrolling
      pauseAutoScroll();
      scheduleResume();

      // Infinite loop wrap check
      const singleWidth = el.scrollWidth / 3;
      if (singleWidth > 0) {
        if (el.scrollLeft >= singleWidth * 2) {
          el.scrollLeft -= singleWidth;
        } else if (el.scrollLeft <= 5) {
          el.scrollLeft += singleWidth;
        }
      }
    };

    el.addEventListener('touchstart', pauseAutoScroll, { passive: true });
    el.addEventListener('touchend', scheduleResume, { passive: true });
    el.addEventListener('touchcancel', scheduleResume, { passive: true });
    el.addEventListener('mousedown', pauseAutoScroll);
    el.addEventListener('mouseup', scheduleResume);
    el.addEventListener('mouseleave', scheduleResume);
    el.addEventListener('scroll', handleScroll, { passive: true });

    let animId: number;
    const scrollSpeed = 0.8; // Smooth 0.8px per frame

    const step = () => {
      if (el && !isInteracting) {
        el.scrollLeft += scrollSpeed;
        const singleWidth = el.scrollWidth / 3;
        if (singleWidth > 0 && el.scrollLeft >= singleWidth * 2) {
          el.scrollLeft -= singleWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener('touchstart', pauseAutoScroll);
      el.removeEventListener('touchend', scheduleResume);
      el.removeEventListener('touchcancel', scheduleResume);
      el.removeEventListener('mousedown', pauseAutoScroll);
      el.removeEventListener('mouseup', scheduleResume);
      el.removeEventListener('mouseleave', scheduleResume);
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleManualNav = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -260 : 260;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#EAF4FC]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
            <Camera className="w-3.5 h-3.5" /> Фотогалерея клініки
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
            Наші затишні зали та щасливі пацієнти
          </h2>
          <p className="text-base text-gray-600">
            Перегляньте умови перебування тварин у нашій клініці, роботу наших лікарів та атмосферу турботи.
          </p>
        </div>

        {/* Mobile View: Smooth Touch-Swipable & Infinite Auto-Scrolling Gallery */}
        <div className="block sm:hidden relative -mx-4 px-4">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto py-2 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {tripledItems.map((item, idx) => (
              <div
                key={`mobile-${item.id}-${idx}`}
                onClick={() => onSelectImage(item)}
                className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-md border border-slate-200/80 shrink-0 w-[250px] h-[190px] active:scale-98 transition-transform cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center border border-white/40 shadow-sm">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Touch Control Arrows for Mobile */}
          <div className="flex items-center justify-between px-2 mt-3">
            <button
              onClick={() => handleManualNav('left')}
              className="w-9 h-9 rounded-full bg-white text-[#1A2B3C] shadow-md border border-slate-200 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              aria-label="Попереднє фото"
            >
              <ChevronLeft className="w-5 h-5 text-[#4FA8E8]" />
            </button>
            <span className="text-[11px] font-medium text-slate-400">
              Гортайте пальцем або тисніть стрілки
            </span>
            <button
              onClick={() => handleManualNav('right')}
              className="w-9 h-9 rounded-full bg-white text-[#1A2B3C] shadow-md border border-slate-200 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              aria-label="Наступне фото"
            >
              <ChevronRight className="w-5 h-5 text-[#4FA8E8]" />
            </button>
          </div>
        </div>

        {/* Desktop View: Bento Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 sm:auto-rows-[240px] md:auto-rows-[260px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className={`group cursor-pointer relative overflow-hidden rounded-3xl bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 ${
                item.bentoSpan || 'col-span-1 row-span-1'
              }`}
            >
              {/* Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/40 shadow-lg">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
