'use client';

import React from 'react';
import Image from 'next/image';
import { X, GraduationCap, Award, CheckCircle2, Calendar, Heart } from 'lucide-react';
import { Doctor } from './Specialists';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onOpenBookingWithDoctor: (doctorName: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onOpenBookingWithDoctor
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#1A2B3C] hover:bg-slate-100 transition-colors"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          
          {/* Doctor Circular Avatar */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#EAF4FC] shadow-lg bg-[#EAF4FC] shrink-0">
            <Image
              src={doctor.photoUrl}
              alt={doctor.name}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] text-xs font-bold">
              {doctor.experience}
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A2B3C]">{doctor.name}</h3>
            <p className="text-sm font-semibold text-[#4FA8E8]">{doctor.specialty}</p>
          </div>

        </div>

        {/* Education & Bio */}
        <div className="space-y-5 text-sm text-gray-700 leading-relaxed border-t border-slate-100 pt-5">
          
          <div>
            <h4 className="font-bold text-[#1A2B3C] flex items-center gap-2 text-sm mb-1">
              <GraduationCap className="w-4 h-4 text-[#4FA8E8]" /> Освіта та кваліфікація
            </h4>
            <p className="text-xs text-gray-600 pl-6">{doctor.education}</p>
          </div>

          <div>
            <h4 className="font-bold text-[#1A2B3C] flex items-center gap-2 text-sm mb-2">
              <Award className="w-4 h-4 text-[#4FA8E8]" /> Ключові навички та спеціалізація
            </h4>
            <div className="flex flex-wrap gap-2 pl-1">
              {doctor.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-[#EAF4FC] text-[#1A2B3C] text-xs font-medium flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#4FA8E8]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1A2B3C] flex items-center gap-2 text-sm mb-1">
              <Heart className="w-4 h-4 text-[#4FA8E8]" /> Біографія та досвід
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">{doctor.fullBio}</p>
          </div>

        </div>

        {/* Booking CTA */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            Бажаєте потрапити на консультацію саме до цього лікаря?
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenBookingWithDoctor(doctor.name);
            }}
            className="w-full sm:w-auto bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Записатись до {doctor.name.split(' ')[0]}
          </button>
        </div>

      </div>
    </div>
  );
};
