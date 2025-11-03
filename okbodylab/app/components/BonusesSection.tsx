'use client';

import { motion } from 'framer-motion';
import { usePurchaseModal } from './PurchaseModalContext';
import BonusTimer from './BonusTimer'; // 👈 підключаємо компонент

const bonuses = [
  'Заминка з акцентом на ноги',
  'Лекція від Сексолога: «Як лишня вага впливає на сексуальне здоров’я жінки»',
  'Тренування з акцентом на спину',
  'Лекція від лікаря Гастроентеролога: «Травна система спортсмена: як дієта, білкові добавки та жироспалювачі впливають на ШКТ»',
  'Меню на тиждень з простих продуктів з повністю розписаними КБЖВ. Підійде для всієї сім’ї.',
  'Заминка з акцентом на руки',
];

export default function BonusesSection() {
  const { openModal } = usePurchaseModal();

  return (
    <section id="bonuses" className="relative overflow-hidden bg-white py-12 text-[#1a1a1a] sm:py-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,126,95,0.12),_transparent_62%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-8">
        {/* === Заголовок === */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="space-y-3 text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            Додаткові бонуси
          </span>
          <h2 className="font-extrabold leading-tight text-[1.9rem] sm:text-[2.2rem]">ДОДАТКОВІ БОНУСИ</h2>
          <p className="text-[0.95rem] leading-relaxed text-[#333]">
            При швидкій оплаті ти отримаєш всі бонуси протягом 15 хв. Закриваємо слабкі місця ще до старту інтенсиву.
          </p>
        </motion.div>

        {/* === Список бонусів === */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="flex items-start gap-3 rounded-[1.4rem] border border-[#ffd2e0] bg-[#fff6f1] px-4 py-3 text-[0.95rem] leading-relaxed shadow-[0_14px_30px_rgba(255,126,95,0.16)]"
            >
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] text-[0.65rem] text-white shadow-[0_1px_5px_rgba(255,79,162,0.3)]">
                🎁
              </span>
              <span>{bonus}</span>
            </motion.div>
          ))}
        </div>

        {/* === Таймер і кнопка (уніфікований компонент) === */}
        <BonusTimer discount={72} />
      </div>
    </section>
  );
}
