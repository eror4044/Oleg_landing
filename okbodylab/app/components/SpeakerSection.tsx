'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const highlights = [
  'Фітнес-тренер та нутриціолог з міжнародним досвідом',
  'Майстер спорту міжнародного класу з силового екстріму',
  'Понад 1000 людей під моїм супроводом уже скинули десятки кілограмів',
];

export default function SpeakerSection() {
  return (
    <section id="speaker" className="relative overflow-hidden bg-white py-12 text-[#1a1a1a] sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,126,95,0.12),_transparent_62%)]" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="order-2 flex-1 space-y-4 text-left lg:order-1"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            Спікер навчання
          </span>
          <h2 className="font-extrabold leading-tight text-[1.85rem] sm:text-[2.1rem]">
            Я, Олег Козлов — фітнес-тренер та нутриціолог, Майстер спорту міжнародного класу з силового екстріму.
          </h2>
          <ul className="space-y-3 text-[0.95rem] font-semibold text-[#1a1a1a]">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#fff6f1] px-4 py-3 shadow-[0_10px_22px_rgba(255,126,95,0.12)]">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4fa2] text-[0.65rem] font-bold text-white">
                  ✔
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="order-1 flex-1 lg:order-2"
        >
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-[#ffd2e0] bg-white/95 shadow-[0_24px_50px_rgba(255,126,95,0.18)]">
            <Image
              src="/images/IMG_7042.jpg"
              alt="Олег Козлов — спікер інтенсиву"
              width={640}
              height={860}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent px-5 pb-5 pt-9 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-[#ff7e5f]">Твій наставник</p>
              <p className="mt-2 text-[0.9rem] leading-snug text-white/85">
                Разом доведемо, що схуднення без голоду й виснаження — реальність. Я покажу, як це зробити вже цього тижня.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
