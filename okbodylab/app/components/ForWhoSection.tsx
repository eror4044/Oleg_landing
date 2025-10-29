'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, UtensilsCrossed, Zap } from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    text: 'Втомилась від хаотичного харчування та постійних “зривів”',
  },
  {
    icon: <Brain className="w-8 h-8 text-accent" />,
    text: 'Не можеш почати і потребуєш чіткої системи',
  },
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    text: 'Хочеш м’яко, але ефективно увійти у процес схуднення',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    text: 'Хочеш швидко побачити зміни у фігурі й самопочутті',
  },
];

export default function ForWhoSection() {
  return (
    <section
      id="for-who"
      // isolate: свой слой; mt-8 на мобайле — добавляем «воздуха» от Hero
      className="relative sm:mt-12 sm:py-28 text-light overflow-hidden z-0"
    >
      {/* Декор — строго под контентом */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0E0E0E]" />
        {/* Можно вернуть мягкие градиенты, но они не должны ловить клики */}
        <div className="absolute inset-x-0 bottom-0 h-[40vh] [background:radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/ok_body_lab_logo.png"
            alt="OK Body Lab logo"
            width={120}
            height={120}
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(251,174,88,0.4)]"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-secondary mb-12 drop-shadow-[0_0_10px_rgba(251,174,88,0.3)]"
        >
          Цей курс для тебе, якщо ти:
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-6 sm:p-8 bg-[rgba(28,28,28,0.85)] border border-primary/20 shadow-soft hover:shadow-glow hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,174,88,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-base sm:text-lg text-muted leading-snug">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
    </section>
  );
}