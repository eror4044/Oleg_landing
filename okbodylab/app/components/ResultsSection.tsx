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
    <section id="results" className="bg-rose/20 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-graphite mb-12"
        >
          Результати клієнток <span className="text-coral">до</span> / <span className="text-mint">після</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-rose/30 hover:shadow-xl transition"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={r.before}
                    alt={`${r.name} — до`}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-0.5 rounded-full">
                    До
                  </div>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={r.after}
                    alt={`${r.name} — після`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-0.5 rounded-full">
                    Після
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-semibold text-graphite">{r.name}</p>
                <p className="text-sm text-graphite/70 mt-2">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder для видео отзывов */}
        <div className="mt-16">
          <p className="text-lg text-graphite/80 mb-4">
            🎥 Дивись живі відео-відгуки учасниць
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <iframe
              className="rounded-3xl shadow-lg"
              width="300"
              height="170"
              src="https://www.youtube.com/embed/DUMMY_ID"
              title="Відгук 1"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-3xl shadow-lg"
              width="300"
              height="170"
              src="https://www.youtube.com/embed/DUMMY_ID2"
              title="Відгук 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
