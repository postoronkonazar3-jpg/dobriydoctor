'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Heart, CheckCircle2, AlertCircle } from 'lucide-react';
import { doctors } from './Specialists';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor = ''
}) => {
  const [overrideDoctor, setOverrideDoctor] = useState<string | null>(null);

  const selectedDoctor = overrideDoctor !== null ? overrideDoctor : (preselectedDoctor || 'Будь-який вільний лікар');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petType: 'собака',
    petName: '',
    petAge: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    reason: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Вкажіть ваше ім\'я';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введіть ваш номер телефону';
    } else if (!/^\+?380\d{9}$|^0\d{9}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
      newErrors.phone = 'Некоректний номер телефону (наприклад: +380 67 123 4567)';
    }

    if (!formData.date) {
      newErrors.date = 'Оберіть бажану дату';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setOverrideDoctor(null);
    setFormData({
      name: '',
      phone: '',
      petType: 'собака',
      petName: '',
      petAge: '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00',
      reason: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#1A2B3C] hover:bg-slate-100 transition-colors"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2B3C]">Запис успішно створено!</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Шановний(а) <strong className="text-[#1A2B3C]">{formData.name}</strong>, ми очікуємо вас і вашого улюбленця <strong className="text-[#4FA8E8]">{formData.date} о {formData.time}</strong>.
            </p>
            <p className="text-xs text-gray-500">
              Адміністратор зателефонує вам на номер <strong>{formData.phone}</strong> для підтвердження візиту.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-4 bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Зрозуміло
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A2B3C]">Онлайн-запис на прийом</h3>
                <p className="text-xs text-gray-500">Заповніть форму, і ми забронюємо зручний час</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Ваше ім&apos;я <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Ім'я та прізвище"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-200 focus:border-[#4FA8E8]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Номер телефону <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+380 (67) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-200 focus:border-[#4FA8E8]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Pet Info: Name, Species & Age */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Кличка тварини, вид та вік
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <input
                    type="text"
                    placeholder="Кличка (Майло)"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                  />
                  <select
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    className="w-full px-2 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#4FA8E8]"
                  >
                    <option value="собака">Собака 🐶</option>
                    <option value="кіт">Кіт 🐱</option>
                    <option value="гризун">Гризун 🐹</option>
                    <option value="птах">Птах 🦜</option>
                    <option value="інше">Екзот 🦎</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Вік (н-д: 2 роки)"
                    value={formData.petAge}
                    onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                  />
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Бажана дата <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Бажаний час (крок 30 хв)
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#4FA8E8]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Оберіть фахівця
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setOverrideDoctor(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#4FA8E8]"
                >
                  <option value="Будь-який вільний лікар">Будь-який вільний лікар</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.specialty})
                    </option>
                  ))}
                </select>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Причина звернення / симптоми
                </label>
                <textarea
                  rows={2}
                  placeholder="Вакцинація, огляд, алергія, отит, скарги..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-base py-3.5 rounded-2xl shadow-lg shadow-[#4FA8E8]/20 transition-all cursor-pointer active:scale-95"
              >
                Підтвердити запис
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
