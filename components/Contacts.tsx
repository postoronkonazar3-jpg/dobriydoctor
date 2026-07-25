'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Navigation } from 'lucide-react';

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petInfo: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Будь ласка, вкажіть ваше ім\'я';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Будь ласка, введіть номер телефону';
    } else if (!/^\+?380\d{9}$|^0\d{9}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
      newErrors.phone = 'Введіть коректний український номер (наприклад, +380 67 123 4567)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', petInfo: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#4FA8E8] font-bold text-xs uppercase tracking-wider border border-[#4FA8E8]/20 shadow-xs">
            <MapPin className="w-3.5 h-3.5" /> Контакти та запис
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C]">
            Ми завжди поруч, щоб допомогти вашому улюбленцю
          </h2>
          <p className="text-base text-gray-600">
            Завітайте до клініки «Добрий доктор» у Києві на Оболоні або заповніть форму зворотного зв&apos;язку, і ми зателефонуємо вам протягом 5 хвилин.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#EAF4FC]/30 p-6 sm:p-8 rounded-3xl border border-[#4FA8E8]/20 shadow-md relative">
            
            {/* Circular Pet Photo Accent Tucked in Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A2B3C]">Швидке запитання або запис</h3>
                <p className="text-xs text-gray-500">Заповніть форму і наш адміністратор зв&apos;яжеться з вами</p>
              </div>

              {/* Pet Photo Cutout */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-white shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80"
                  alt="Песик чекає на дзвінок"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold">Дякуємо! Заявку успішно прийнято</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Адміністратор клініки «Добрий доктор» зателефонує вам на вказаний номер протягом кількох хвилин для уточнення деталей.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Ваше ім&apos;я <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Олена або Олександр"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500 ring-2 ring-rose-500/20'
                        : 'border-slate-200 focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Ваш телефон <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+380 (67) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-rose-500 ring-2 ring-rose-500/20'
                        : 'border-slate-200 focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Pet Name & Species */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Кличка тварини та вид
                  </label>
                  <input
                    type="text"
                    placeholder="Наприклад: кіт Марсик, 3 роки"
                    value={formData.petInfo}
                    onChange={(e) => setFormData({ ...formData, petInfo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                    Повідомлення / Симптоми
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Опишіть, що турбує вашого улюбленця або бажаний час візиту..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#4FA8E8] focus:ring-2 focus:ring-[#4FA8E8]/20 transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-base py-3.5 rounded-xl shadow-lg shadow-[#4FA8E8]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Надіслати повідомлення</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних згідно з політикою конфіденційності.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Embedded Map Placeholder + Info Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] text-sm">Адреса клініки</h4>
                  <p className="text-xs text-gray-600">м. Київ, вул. Героїв Дніпра, 38А</p>
                  <p className="text-[11px] text-[#4FA8E8] mt-1 font-medium">Оболонський район (ст. м. Героїв Дніпра)</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] text-sm">Графік прийому</h4>
                  <p className="text-xs text-gray-600">Цілодобово 24/7</p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">Без вихідних та перерв</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] text-sm">Гарячі телефони</h4>
                  <p className="text-xs text-gray-600">+38 (044) 123-45-67</p>
                  <p className="text-xs text-gray-600">+38 (067) 890-12-34</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] text-sm">E-mail для зв&apos;язку</h4>
                  <p className="text-xs text-gray-600">info@dobryidoctor.ua</p>
                  <p className="text-[11px] text-gray-400 mt-1">Відповідаємо протягом години</p>
                </div>
              </div>

            </div>

            {/* Embedded Google Maps Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 relative h-72 sm:h-80 bg-slate-100">
              <iframe
                title="Карта проїзду до клініки Добрий доктор"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.197928236127!2d30.5015!3d50.5238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDMxJzI1LjciTiAzMMKwMzAnMDUuNCJF!5e0!3m2!1suk!2sua!4v1650000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#4FA8E8]" />
                <div>
                  <p className="text-xs font-bold text-[#1A2B3C]">«Добрий доктор» на Оболоні</p>
                  <p className="text-[10px] text-gray-500">Є безкоштовний паркінг біля входу</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
