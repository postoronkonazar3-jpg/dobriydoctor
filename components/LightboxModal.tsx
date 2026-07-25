'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { GalleryItem } from './Gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer border border-white/20"
          aria-label="Закрити"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={item.imageUrl}
            alt={item.title || 'Галерея'}
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
