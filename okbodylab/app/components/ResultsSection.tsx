'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Transformation = {
  name: string;
  before: string;
  after: string;
  result: string;
};

const transformations: Transformation[] = [
  {
    name: 'Олена, −8,4 кг за 5 тижнів',
    before: '/images/photo_1_2025-10-31_13-29-55.jpg',
    after: '/images/photo_10_2025-10-31_13-29-55.jpg',
    result: 'Прибрали набряки, за 14 днів підтягнули живіт і стегна, повернули впевненість у тілі.',
  },
  {
    name: 'Марія, −6,9 кг за 4 тижні',
    before: '/images/photo_2_2025-10-31_13-29-55.jpg',
    after: '/images/photo_11_2025-10-31_13-29-55.jpg',
    result: 'Їсть без зривів, зменшила об’єми на два розміри одягу, додала енергії.',
  },
  {
    name: 'Ірина, −11,2 кг за 6 тижнів',
    before: '/images/photo_3_2025-10-31_13-29-55.jpg',
    after: '/images/photo_12_2025-10-31_13-29-55.jpg',
    result: 'Позбулась целюліту, живіт став пласким, тренування заходять у задоволення.',
  },
  {
    name: 'Світлана, −9,7 кг за 5 тижнів',
    before: '/images/photo_4_2025-10-31_13-29-55.jpg',
    after: '/images/photo_13_2025-10-31_13-29-55.jpg',
    result: 'Перестала зриватись увечері, нормалізувала сон і знову полюбила себе у дзеркалі.',
  },
];

const reviewVideos = [
  {
    src: '/video/IMG_6187.MP4',
    poster: '/images/IMG_6187-poster.jpg',
    caption: 'Живий відгук: мінус 7 кг за 21 день',
  },
  {
    src: '/video/IMG_6194.MP4',
    poster: '/images/IMG_6194-poster.jpg',
    caption: 'Живий відгук: повернулася впевненість у собі',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative bg-white py-14 text-[#1a1a1a] sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,126,95,0.1),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            Фото До / Після клієнтів
          </span>
          <h2 className="mt-3 font-extrabold leading-tight text-[1.9rem] sm:text-[2.1rem]">
            Живі результати людей, які просто діяли за моєю системою
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[#333]">
            Ніяких “до” трирічної давнини. Свіжі трансформації з Fit Intensive. Виконуєш кроки — і цифри на вагах падають.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2">
          {transformations.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="overflow-hidden rounded-[1.5rem] border border-[#ffd2e0] bg-white shadow-[0_16px_30px_rgba(255,126,95,0.16)]"
            >
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <Image src={item.before} alt={`${item.name} — результат до старту`} width={520} height={640} className="h-full w-full object-cover" />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-[#1a1a1a]/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white">
                    До
                  </figcaption>
                </figure>
                <figure className="relative">
                  <Image src={item.after} alt={`${item.name} — результат після програми`} width={520} height={640} className="h-full w-full object-cover" />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-[#ff7e5f] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white">
                    Після
                  </figcaption>
                </figure>
              </div>
              <div className="space-y-1.5 px-4 py-3">
                <p className="text-[0.95rem] font-bold">{item.name}</p>
                <p className="text-[0.9rem] text-[#444]">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mt-9 flex flex-col gap-3 rounded-2xl border border-[#ffd2e0] bg-[#fff6f1] px-5 py-5 text-[0.95rem] text-[#1a1a1a] shadow-[0_12px_26px_rgba(255,126,95,0.15)] sm:px-7"
        >
          <p>95% людей після схуднення утримують результат. Я контролюю, щоб ти була серед них.</p>
          <p className="font-semibold text-[#ff4fa2]">Хочеш опинитися у цій добірці? Усе, що потрібно — стартувати сьогодні.</p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {reviewVideos.map((video, index) => (
            <motion.figure
              key={video.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="overflow-hidden rounded-[1.6rem] border border-[#ffd2e0] bg-white shadow-[0_14px_30px_rgba(255,126,95,0.14)]"
            >
              <video controls preload="metadata" poster={video.poster} className="h-52 w-full bg-black object-cover sm:h-56">
                <source src={video.src} type="video/mp4" />
              </video>
              <figcaption className="px-4 py-3 text-[0.9rem] font-semibold text-[#1a1a1a]">{video.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
