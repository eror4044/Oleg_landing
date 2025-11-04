'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type PhotoResult = {
  name: string;
  image: string;
};

type VideoResult = {
  src: string;
  poster: string;
};

const photoResults: PhotoResult[] = [
  {
    name: 'Олена, −8,4 кг за 5 тижнів',
    image: '/images/photo_1_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Марія, −6,9 кг за 4 тижні',
    image: '/images/photo_2_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Ірина, −11,2 кг за 6 тижнів',
    image: '/images/photo_3_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Світлана, −9,7 кг за 5 тижнів',
    image: '/images/photo_4_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Оксана, −10,1 кг за 7 тижнів',
    image: '/images/photo_5_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Катерина, −5,3 кг за 4 тижні',
    image: '/images/photo_6_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Віка, −6,2 кг за 5 тижнів',
    image: '/images/photo_7_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Тетяна, −8,9 кг за 6 тижнів',
    image: '/images/photo_8_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Наталя, −7,5 кг за 6 тижнів',
    image: '/images/photo_9_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Юлія, −6,8 кг за 4 тижні',
    image: '/images/photo_10_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Лідія, −4,9 кг за 3 тижні',
    image: '/images/photo_11_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Інна, −10,4 кг за 7 тижнів',
    image: '/images/photo_12_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Людмила, −8,1 кг за 5 тижнів',
    image: '/images/photo_13_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Оля, −9,3 кг за 6 тижнів',
    image: '/images/photo_14_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Тамара, −7,8 кг за 5 тижнів',
    image: '/images/photo_15_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Дарія, −6,0 кг за 4 тижні',
    image: '/images/photo_16_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Аліна, −5,7 кг за 3 тижні',
    image: '/images/photo_17_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Анна, −9,1 кг за 6 тижнів',
    image: '/images/photo_18_2025-10-31_13-29-55.jpg',
  },
  {
    name: 'Оксана, −11,0 кг за 7 тижнів',
    image: '/images/photo_19_2025-10-31_13-29-55.jpg',
  },
];


const videoResults: VideoResult[] = [
  {
    src: '/video/IMG_6184.MP4',
    poster: '/images/IMG_6184-poster.jpg',
  },
  {
    src: '/video/IMG_6187.MP4',
    poster: '/images/IMG_6187-poster.jpg',
  },
  {
    src: '/video/IMG_6193.MP4',
    poster: '/images/IMG_6193-poster.jpg',
  },
  {
    src: '/video/IMG_6194.MP4',
    poster: '/images/IMG_6194-poster.jpg',
  },
  {
    src: '/video/IMG_6195.MP4',
    poster: '/images/IMG_6195-poster.jpg',
  },
  {
    src: '/video/IMG_6222.MP4',
    poster: '/images/IMG_6222-poster.jpg',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ResultsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxSrc(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxSrc]);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt('');
  }, []);

  const photoTransform = useMemo(() => `translateX(-${activePhoto * 100}%)`, [activePhoto]);
  const videoTransform = useMemo(() => `translateX(-${activeVideo * 100}%)`, [activeVideo]);

  return (
    <section id="results" className="relative bg-white py-14 text-[#1a1a1a] sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,126,95,0.1),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            Фото клієнтів
          </span>
          <h2 className="mt-3 font-extrabold leading-tight text-[1.9rem] sm:text-[2.1rem]">
            Живі результати людей, які просто діяли за моєю системою
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[#333]">
            На кожному колажі вже є «до» та «після» — тут історії і жінок, і чоловіків. Просто гортай та уявляй себе наступним учасником.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mt-8">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: photoTransform }}
                >
                  {photoResults.map((item, index) => (
                    <article
                      key={item.name}
                      className="w-full shrink-0 basis-full overflow-hidden rounded-[1.5rem] border border-[#ffd2e0] bg-white shadow-[0_16px_30px_rgba(255,126,95,0.16)]"
                    >
                      <button
                        type="button"
                        onClick={() => openLightbox(item.image, item.name)}
                        className="group relative block"
                        aria-label={`Відкрити фото ${item.name}`}
                      >
                        <div
                          className="relative flex w-full items-center justify-center overflow-hidden bg-white"
                          style={{ aspectRatio: '3 / 4' }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={520}
                            height={690}
                            sizes="(max-width: 768px) 100vw"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            priority={index === 0}
                          />
                        </div>
                      </button>
                    </article>
                  ))}
                </div>
              </div>

              {photoResults.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActivePhoto((prev) => (prev - 1 + photoResults.length) % photoResults.length)}
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#ff4fa2] shadow-lg"
                    aria-label="Попереднє фото"
                  >
                    <span aria-hidden="true" className="text-xl font-bold leading-none">&#8249;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto((prev) => (prev + 1) % photoResults.length)}
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#ff4fa2] shadow-lg"
                    aria-label="Наступне фото"
                  >
                    <span aria-hidden="true" className="text-xl font-bold leading-none">&#8250;</span>
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {photoResults.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${index === activePhoto ? 'bg-[#ff4fa2]' : 'bg-[#ffd2e0]'}`}
                  aria-label={`Перейти до фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2">
            {photoResults.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="overflow-hidden rounded-[1.5rem] border border-[#ffd2e0] bg-white shadow-[0_16px_30px_rgba(255,126,95,0.16)]"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(item.image, item.name)}
                  className="group relative block"
                  aria-label={`Відкрити фото ${item.name}`}
                >
                  <div
                    className="relative flex w-full items-center justify-center overflow-hidden bg-white"
                    style={{ aspectRatio: '3 / 4' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={520}
                      height={690}
                      sizes="(max-width: 1024px) 50vw, 480px"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mt-9 flex flex-col gap-3 rounded-2xl border border-[#ffd2e0] bg-[#fff6f1] px-5 py-5 text-[0.95rem] text-[#1a1a1a] shadow-[0_12px_26px_rgba(255,126,95,0.15)] sm:px-7"
        >
          <p>95% людей після схуднення утримують результат. Я контролюю, щоб ти був(ла) серед них.</p>
          <p className="font-semibold text-[#ff4fa2]">Хочеш опинитися у цій добірці? Усе, що потрібно — стартувати сьогодні.</p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            Відеовідгуки
          </span>
          <h3 className="mt-3 text-[1.6rem] font-extrabold">Подивися реальні відгуки учасників Fit Intensive</h3>
        </motion.div>

        {isMobile ? (
          <div className="mt-6">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: videoTransform }}
                >
                  {videoResults.map((video) => (
                    <figure
                      key={video.src}
                      className="w-full shrink-0 basis-full overflow-hidden rounded-[1.6rem] border border-[#ffd2e0] bg-white shadow-[0_14px_30px_rgba(255,126,95,0.14)]"
                    >
                      <div
                        className="relative w-full overflow-hidden rounded-[1.6rem] bg-black"
                        style={{ aspectRatio: '16 / 9' }}>
                        <video
                          controls
                          preload="metadata"
                          poster={video.poster}
                          className="absolute inset-0 h-full w-full object-contain"
                        >
                          <source src={video.src} type="video/mp4" />
                        </video>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>

              {videoResults.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveVideo((prev) => (prev - 1 + videoResults.length) % videoResults.length)}
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#ff4fa2] shadow-lg"
                    aria-label="Попереднє відео"
                  >
                    <span aria-hidden="true" className="text-xl font-bold leading-none">&#8249;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVideo((prev) => (prev + 1) % videoResults.length)}
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#ff4fa2] shadow-lg"
                    aria-label="Наступне відео"
                  >
                    <span aria-hidden="true" className="text-xl font-bold leading-none">&#8250;</span>
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {videoResults.map((video, index) => (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => setActiveVideo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeVideo ? 'bg-[#ff4fa2]' : 'bg-[#ffd2e0]'}`}
                  aria-label={`Перейти до відео ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {videoResults.map((video, index) => (
              <motion.figure
                key={video.src}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="overflow-hidden rounded-[1.6rem] border border-[#ffd2e0] bg-white shadow-[0_14px_30px_rgba(255,126,95,0.14)]"
              >
                <div
                  className="relative w-full overflow-hidden rounded-[1.6rem] bg-black"
                  style={{ aspectRatio: '16 / 9' }}>
                  <video
                    controls
                    preload="metadata"
                    poster={video.poster}
                    className="absolute inset-0 h-full w-full object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              </motion.figure>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxSrc ? (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 rounded-full bg-white/90 px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-wide text-[#ff4fa2] shadow-lg"
                aria-label="Закрити фото"
              >
                Закрити
              </button>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-black">
                <Image
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
