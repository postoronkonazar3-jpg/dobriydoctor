'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck, Award, GraduationCap, Heart, ChevronRight, Calendar } from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  photoUrl: string;
  petPhotoUrl: string;
  shortBio: string;
  education: string;
  skills: string[];
  fullBio: string;
}

interface SpecialistsProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBookingWithDoctor: (doctorName: string) => void;
}

export const doctors: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Д-р Олена Ковальчук',
    specialty: 'Головний ветеринарний лікар, терапевт',
    experience: '14 років досвіду',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    petPhotoUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=300&q=80',
    shortBio: 'Спеціалізується на терапії внутрішніх хвороб котів та собак, інфектології та імунопрофілактиці.',
    education: 'Національний університет біоресурсів і природокористування України (НУБіП), 2012 р.',
    skills: ['УЗД діагностика', 'Ендокринологія', 'Педіатрія тварин', 'Вакцинопрофілактика'],
    fullBio: 'Олена Ковальчук є засновником та головним лікарем клініки «Добрий доктор». Регулярно підвищує кваліфікацію на міжнародних конгресах у Польщі та Німеччині. Автор численних публікацій з профілактики вірусних захворювань дрібних домашніх тварин.'
  },
  {
    id: 'doc-2',
    name: 'Д-р Михайло Бондаренко',
    specialty: 'Провідний ветеринарний хірург, ортопед',
    experience: '12 років досвіду',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    petPhotoUrl: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=300&q=80',
    shortBio: 'Експерт у малоінвазивній лапароскопічній хірургії, остеосинтезі та травматології.',
    education: 'Харківська державна зооветеринарна академія, 2014 р.',
    skills: ['Остеосинтез', 'Абдомінальна хірургія', 'Нейрохірургія', 'Анестезіологія'],
    fullBio: 'Михайло Бондаренко вилікував та прооперував понад 4 000 складних пацієнтів. Спеціалізується на відновленні зв\'язок, зшиванні складних переломів та косметичній пластиці м\'яких тканин.'
  },
  {
    id: 'doc-3',
    name: 'Д-р Ірина Мельник',
    specialty: 'Ветеринарний дерматолог, алерголог',
    experience: '8 років досвіду',
    photoUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    petPhotoUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&q=80',
    shortBio: 'Фахівець з діагностики складних видів алергій, дерматитів, грибкових та паразитарних інфекцій.',
    education: 'Одеський державний аграрний університет, 2016 р.',
    skills: ['Цитологія шкіри', 'Алергопроби', 'Отоскопія', 'Підбір лікувальних дієт'],
    fullBio: 'Ірина Мельник є членом Європейського товариства ветеринарної дерматології (ESVD). Успішно повертає здоровий вигляд та густу шерсть пацієнтам із хроничними алергіями та отитами.'
  },
  {
    id: 'doc-4',
    name: 'Д-р Андрій Савченко',
    specialty: 'Стоматолог, ветеринарний діагност',
    experience: '9 років досвіду',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    petPhotoUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=300&q=80',
    shortBio: 'Здійснює безболісну ультразвукову чистку зубів, лікування пародонтозу та цифрову рентгенографію.',
    education: 'Білоцерківський національний аграрний університет, 2015 р.',
    skills: ['УЗ-скалінг зубів', 'Реставрація зубів', 'Цифровий рентген', 'Ехокардіографія'],
    fullBio: 'Андрій Савченко спеціалізується на збереженні зубів тварин без болю та ускладнень. Проходить щорічні курси підвищення кваліфікації за напрямком ветеринарної рентгенології та стоматології.'
  }
];

export const Specialists: React.FC<SpecialistsProps> = ({ onSelectDoctor, onOpenBookingWithDoctor }) => {
  return (
    <section id="specialists" className="py-16 sm:py-24 bg-[#EAF4FC]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
            <UserCheck className="w-3.5 h-3.5" /> Наша команда фахівців
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
            Досвідчені ветеринари, які щиро люблять тварин
          </h2>
          <p className="text-base text-gray-600">
            Наші лікарі постійно навчаються, беруть участь у міжнародних конференціях та знаходять підхід до кожного чотирилапого пацієнта.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover-lift transition-all relative group"
            >
              
              {/* Doctor Header & Circular Photo with Pet Badge Accent */}
              <div>
                <div className="relative mx-auto w-36 h-36 mb-5">
                  
                  {/* Doctor Circular Photo */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#EAF4FC] shadow-lg relative bg-[#EAF4FC]">
                    <Image
                      src={doc.photoUrl}
                      alt={doc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Circular Pet Badge next to Doctor */}
                  <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
                    <Image
                      src={doc.petPhotoUrl}
                      alt="Тварина пацієнт"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] text-xs font-bold">
                    {doc.experience}
                  </span>
                </div>

                {/* Doctor Name & Specialty */}
                <div className="text-center space-y-1 mb-3">
                  <h3 className="text-lg font-extrabold text-[#1A2B3C]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[#4FA8E8]">{doc.specialty}</p>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-gray-600 text-center line-clamp-3 leading-relaxed mb-4">
                  {doc.shortBio}
                </p>
              </div>

              {/* Action Links & Booking */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="w-full text-xs font-bold text-[#4FA8E8] hover:text-[#3893D4] flex items-center justify-center gap-1 py-1.5 transition-colors cursor-pointer"
                >
                  <span>Детальніше про лікаря</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBookingWithDoctor(doc.name)}
                  className="w-full bg-[#EAF4FC] hover:bg-[#4FA8E8] text-[#4FA8E8] hover:text-white font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Записатись до фахівця</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
