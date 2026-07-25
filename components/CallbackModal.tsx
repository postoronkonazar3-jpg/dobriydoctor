'use client';

import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2, AlertCircle } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError('Введіть номер телефону');
      return;
    }
    if (!/^\+?380\d{9}$|^0\d{9}$/.test(phone.replace(/[\s()-]/g, ''))) {
      setError('Введіть коректний номер (+380...)');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setPhone('');
    setName('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#1A2B3C] hover:bg-slate-100 transition-colors"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1A2B3C]">Заявку на дзвінок прийнято!</h3>
            <p className="text-xs text-gray-600">
              Ми зателефонуємо вам на номер <strong>{phone}</strong> протягом 5 хвилин.
            </p>
            <button
              onClick={handleClose}
              className="mt-3 bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              Закрити
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A2B3C]">Замовити зворотний дзвінок</h3>
                <p className="text-xs text-gray-500">Залиште номер і ми безкоштовно вас проконсультуємо</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Ваше ім&apos;я (необов&apos;язково)
                </label>
                <input
                  type="text"
                  placeholder="Олена"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Номер телефону <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+380 (67) 123-45-67"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (error) setError('');
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                    error ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-200 focus:border-[#4FA8E8]'
                  }`}
                />
                {error && (
                  <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
              >
                Передзвоніть мені
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
