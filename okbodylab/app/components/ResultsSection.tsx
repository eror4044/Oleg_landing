'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react'; // Іконка хрестика

const photos = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/photo_${i + 1}_2025-10-31_13-29-55.jpg`,
}));

const videos = [
  { src: '/video/IMG_6184.MP4', poster: '/images/IMG_6184-poster.jpg' },
  { src: '/video/IMG_6187.MP4', poster: '/images/IMG_6187-poster.jpg' },
  { src: '/video/IMG_6193.MP4', poster: '/images/IMG_6193-poster.jpg' },
  { src: '/video/IMG_6195.MP4', poster: '/images/IMG_6195-poster.jpg' },
  { src: '/video/IMG_6222.MP4', poster: '/images/IMG_6222-poster.jpg' },
  { src: '/video/IMG_6194.MP4', poster: '/images/IMG_6194-poster.jpg' },
  { src: '/video/IMG_6254.MP4', poster: '/images/IMG_6254-poster.jpg' },
];

export default function ResultsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  // === Клавіші навігації у fullscreen ===
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight')
        setSelected((prev) =>
          prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
        );
      if (e.key === 'ArrowLeft')
        setSelected((prev) =>
          prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
        );
    },
    [selected]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // === Блокування скролу при відкритій модалці ===
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [selected]);

  return (
    <section
      id="results"
      className="relative overflow-hidden text-light py-24 sm:py-28"
    >
      {/* === Фон === */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.95)_10%,rgba(251,174,88,0.12)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[radial-gradient(circle_at_bottom,rgba(231,104,31,0.15),transparent_70%)] opacity-70" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* === Заголовок === */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-[rgba(251,174,88,1)]">Результати клієнтів:</span>{' '}
          <span className="text-[#FFD9B5]/90">До</span> /{' '}
          <span className="text-[rgba(231,104,31,1)]">Після</span>
        </motion.h2>

        {/* === Горизонтальний скрол фото === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
        >
          {photos.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex-shrink-0 w-[240px] md:w-[300px] snap-center rounded-3xl overflow-hidden border border-[rgba(251,174,88,0.2)] bg-[rgba(20,20,20,0.85)] shadow-[0_0_25px_rgba(251,174,88,0.1)] hover:shadow-[0_0_40px_rgba(251,174,88,0.2)] transition-all cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <Image
                src={p.src}
                alt={`Результат ${i + 1}`}
                width={300}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* === Блок відео === */}
        <div className="mt-16">
          <p className="text-lg text-[#FFD9B5]/90 mb-6">
            🎥 Дивись живі відео-відгуки учасників
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
          >
            {videos.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 w-[220px] md:w-[250px] snap-center rounded-3xl overflow-hidden border border-[rgba(251,174,88,0.2)] bg-[rgba(20,20,20,0.85)] shadow-[0_0_25px_rgba(251,174,88,0.1)] hover:shadow-[0_0_40px_rgba(251,174,88,0.2)] transition-all"
              >
                <video
                  src={v.src}
                  poster={v.poster}
                  className="w-full aspect-[9/16] object-cover"
                  preload="none"
                  playsInline
                  controls
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* === Модальне фото з навігацією та хрестиком === */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={photos[selected].src}
              alt="Full photo"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-[0_0_50px_rgba(251,174,88,0.4)] object-contain select-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Кнопка закриття */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              className="absolute top-6 right-6 md:top-10 md:right-10 bg-[rgba(20,20,20,0.6)] hover:bg-[rgba(251,174,88,0.2)] text-white/90 p-3 rounded-full transition-all backdrop-blur-md"
            >
              <X className="w-6 h-6 text-[rgba(251,174,88,1)]" />
            </button>

            {/* Стрілки */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(
                  selected === 0 ? photos.length - 1 : selected - 1
                );
              }}
              className="absolute left-6 md:left-10 text-white/70 hover:text-[rgba(251,174,88,1)] text-4xl font-bold select-none"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(
                  selected === photos.length - 1 ? 0 : selected + 1
                );
              }}
              className="absolute right-6 md:right-10 text-white/70 hover:text-[rgba(251,174,88,1)] text-4xl font-bold select-none"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Градієнт унизу === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
    </section>
  );
}
