'use client';

import { motion } from 'framer-motion';

const reasons = [
  'втомився від хаотичного харчування та постійних “зривів”',
  'не можеш почати і потребуєш чіткої системи',
  'хочеш м’яко, але ефективно увійти у процес схуднення',
  'хочеш швидко побачити зміни у фігурі й самопочутті',
];

export default function ForWhoSection() {
  return (
    <section id="for-who" className="relative overflow-hidden bg-[#fff6f1] py-12 text-[#1a1a1a] sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,126,95,0.22),_transparent_55%)]" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2] shadow-[0_8px_18px_rgba(255,126,95,0.15)]">
            цей курс для тебе
          </span>
          <h2 className="font-extrabold leading-tight text-[1.75rem] sm:text-[2.1rem]">
            Цей курс для тебе, якщо ти:
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="flex items-start gap-3 rounded-2xl border border-[#ffd2e0] bg-white px-4 py-3 text-[0.95rem] font-semibold leading-relaxed shadow-[0_12px_26px_rgba(255,126,95,0.12)]"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4fa2] text-xs font-bold text-white">
                {index + 1}
              </span>
              <span>{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
