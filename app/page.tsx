'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Gallery, GalleryItem } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Specialists, Doctor } from '@/components/Specialists';
import { Advantages } from '@/components/Advantages';
import { Reviews, initialReviews, ReviewItem } from '@/components/Reviews';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';

import { BookingModal } from '@/components/BookingModal';
import { CallbackModal } from '@/components/CallbackModal';
import { DoctorModal } from '@/components/DoctorModal';
import { LightboxModal } from '@/components/LightboxModal';
import { ReviewModal } from '@/components/ReviewModal';

import { Calendar, PhoneCall, Phone } from 'lucide-react';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [addReviewOpen, setAddReviewOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [preselectedDoctorName, setPreselectedDoctorName] = useState<string>('');

  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(initialReviews);

  const handleOpenBookingWithDoctor = (doctorName: string) => {
    setPreselectedDoctorName(doctorName);
    setBookingOpen(true);
  };

  const handleOpenBookingGeneric = () => {
    setPreselectedDoctorName('');
    setBookingOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans selection:bg-[#4FA8E8] selection:text-white relative">
      
      {/* Sticky Header Navigation */}
      <Header
        onOpenBooking={handleOpenBookingGeneric}
        onOpenCallback={() => setCallbackOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero
          onOpenBooking={handleOpenBookingGeneric}
          onOpenCallback={() => setCallbackOpen(true)}
        />

        {/* Section 3: About Clinic */}
        <About />

        {/* Section 4: Gallery */}
        <Gallery
          onSelectImage={(item) => setSelectedGalleryItem(item)}
        />

        {/* Section 5: Services & Prices */}
        <Services
          onOpenBooking={handleOpenBookingGeneric}
          onOpenCallback={() => setCallbackOpen(true)}
        />

        {/* Section 6: Specialists */}
        <Specialists
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onOpenBookingWithDoctor={handleOpenBookingWithDoctor}
        />

        {/* Section 7: Advantages */}
        <Advantages />

        {/* Section 8: Reviews */}
        <Reviews
          onOpenAddReview={() => setAddReviewOpen(true)}
          reviewsList={reviewsList}
        />

        {/* Section 9: Contacts & Map */}
        <Contacts />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Sticky Floating Action Buttons at bottom right */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={() => setCallbackOpen(true)}
          className="w-12 h-12 rounded-full bg-white text-[#4FA8E8] border border-[#4FA8E8]/30 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          title="Замовити зворотний дзвінок"
          aria-label="Замовити зворотний дзвінок"
        >
          <Phone className="w-5 h-5" />
        </button>

        <button
          onClick={handleOpenBookingGeneric}
          className="bg-[#4FA8E8] hover:bg-[#3893D4] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-2xl shadow-[#4FA8E8]/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Записатись на прийом</span>
          <span className="sm:hidden">Запис 24/7</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDoctor={preselectedDoctorName}
      />

      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
      />

      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onOpenBookingWithDoctor={handleOpenBookingWithDoctor}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <ReviewModal
        isOpen={addReviewOpen}
        onClose={() => setAddReviewOpen(false)}
        onAddReview={handleAddReview}
      />

    </div>
  );
}
