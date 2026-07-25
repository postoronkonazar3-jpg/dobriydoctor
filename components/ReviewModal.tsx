'use client';

import React, { useState } from 'react';
import { X, Star, MessageSquarePlus, CheckCircle2, AlertCircle } from 'lucide-react';
import { ReviewItem } from './Reviews';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (newReview: ReviewItem) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview
}) => {
  const [clientName, setClientName] = useState('');
  const [petName, setPetName] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !text.trim()) {
      setError('Будь ласка, вкажіть ваше ім\'я та текст відгуку');
      return;
    }

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      clientName,
      petName: petName ? `${petName}` : 'Домашній улюбленець',
      city: city || 'м. Київ',
      rating,
      date: 'Сьогодні',
      petPhotoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80',
      text
    };

    onAddReview(newReview);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setClientName('');
    setPetName('');
    setCity('');
    setRating(5);
    setText('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        
        <button
          onClick={handleResetAndClose}
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
            <h3 className="text-xl font-bold text-[#1A2B3C]">Щиро дякуємо за відгук!</h3>
            <p className="text-xs text-gray-600">
              Ваш відгук успішно опубліковано на сайті. Ваша довіра дуже важлива для нас!
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-3 bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              Закрити
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF4FC] text-[#4FA8E8] flex items-center justify-center shrink-0">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A2B3C]">Залишити відгук про клініку</h3>
                <p className="text-xs text-gray-500">Поділіться враженнями про лікування вашого хвостика</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Rating selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">Оцінка клініки</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400' : 'text-slate-200'}`} />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">{rating} з 5</span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Ваше ім&apos;я та кличка тварини <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Оксана та кішка Софі"
                  value={clientName}
                  onChange={(e) => {
                    setClientName(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                />
              </div>

              {/* Pet breed */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Порода / вид (необов&apos;язково)
                </label>
                <input
                  type="text"
                  placeholder="Британська короткошерста"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1">
                  Текст відгуку <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Напишіть ваші враження про лікарів, обслуговування та результат лікування..."
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4FA8E8]"
                />
              </div>

              {error && (
                <p className="text-rose-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
              >
                Опублікувати відгук
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
