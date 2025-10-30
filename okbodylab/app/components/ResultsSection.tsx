'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const results = [
  {
    before: '/images/before1.jpg',
    after: '/images/after1.jpg',
    name: 'Анна, 32 роки',
    text: '−8 кг за 5 днів інтенсиву, покращилось самопочуття і настрій!',
  },
  {
    before: '/images/before2.jpg',
    after: '/images/after2.jpg',
    name: 'Марія, 28 років',
    text: 'Зникли набряки, стала легкість і енергія, тіло підтягнулося.',
  },
  {
    before: '/images/before3.jpg',
    after: '/images/after3.jpg',
    name: 'Ірина, 36 років',
    text: 'Почала їсти правильно — вага пішла сама собою ❤️',
  },
];

export default function ResultsSection() {
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
          <span className="text-[rgba(251,174,88,1)]">Результати клієнток</span>{' '}
          <span className="text-[#FFD9B5]/90">до</span> /{' '}
          <span className="text-[rgba(231,104,31,1)]">після</span>
        </motion.h2>

        {/* === Галерея фото до/після === */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-[rgba(251,174,88,0.2)] bg-[rgba(20,20,20,0.85)] backdrop-blur-sm shadow-[0_0_40px_rgba(251,174,88,0.1)] hover:shadow-[0_0_50px_rgba(251,174,88,0.18)] transition-all"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={r.before}
                    alt={`${r.name} — до`}
                    fill
                    className="object-cover grayscale"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 text-xs bg-[rgba(251,174,88,0.85)] text-dark font-semibold px-2 py-0.5 rounded-full shadow-md">
                    До
                  </div>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={r.after}
                    alt={`${r.name} — після`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 text-xs bg-[rgba(231,104,31,0.85)] text-dark font-semibold px-2 py-0.5 rounded-full shadow-md">
                    Після
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-semibold text-[rgba(251,174,88,1)]">
                  {r.name}
                </p>
                <p className="text-sm text-[#FFD9B5]/80 mt-2">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Відео-відгуки === */}
        <div className="mt-16">
          <p className="text-lg text-[#FFD9B5]/90 mb-6">
            🎥 Дивись живі відео-відгуки учасниць
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            {/* Відгук — Надія */}
            <motion.video
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl w-[300px] object-contain aspect-auto bg-black"
              controls
              preload="none"
              playsInline
              poster="/images/nadia-poster.jpg"
            >
              <source src="/video/nadia.MP4" type="video/mp4" />
              Твій браузер не підтримує відтворення відео.
            </motion.video>

            {/* Відгук — Світлана */}
            <motion.video
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl w-[300px] object-contain aspect-auto bg-black"
              controls
              preload="none"
              playsInline
              poster="/images/svitlana-poster.jpg"
            >
              <source src="/video/svitlana.MP4" type="video/mp4" />
              Твій браузер не підтримує відтворення відео.
            </motion.video>
          </div>
        </div>
      </div>

      {/* === Низовий градієнт === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
    </section>
  );
}
