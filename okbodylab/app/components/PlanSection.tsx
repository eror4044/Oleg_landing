'use client';

import { motion } from 'framer-motion';
import { usePurchaseModal } from './PurchaseModalContext';
import { useEffect, useMemo, useState } from 'react';
import BonusTimer from './BonusTimer';

const plan = [
  {
    day: 'ДЕНЬ 1',
    items: [
      'Підготовка організму до змін та зниження набряків',
      'Персональний розбір типових помилок у харчуванні',
      'Система харчування, з якою ти почнеш худнути вже сьогодні',
      'Руханка на все тіло',
    ],
  },
  {
    day: 'ДЕНЬ 2',
    items: [
      'Як їсти смачно, бути ситим і не переїдати на дефіциті',
      '5 простих сніданків, обідів та вечерь для комфортного схуднення',
      'Тренування з акцентом на спину',
    ],
  },
  {
    day: 'ДЕНЬ 3',
    items: [
      'Як уникнути здуття, закрепів і “зупинки” травлення',
      'Подкаст від гастроентеролога: “Кишковий комфорт на дефіциті калорій”',
      'Тренування на все тіло',
    ],
  },
  {
    day: 'ДЕНЬ 4',
    items: [
      'Як не зациклюватись на ідеалі та зберігати баланс',
      'Подкаст від психолога: “Як зберегти мотивацію і не зірватись”',
      'Тренування з акцентом на ноги',
    ],
  },
  {
    day: 'ДЕНЬ 5',
    items: [
      'Як адаптувати організм до дефіциту без шкоди для печінки',
      'Подкаст від гастроентеролога: “Як не перегоріти на дієті”',
      'Подкаст від психолога: “Як не повернути вагу після схуднення”',
      'Персональний розбір харчування + бонусна пропозиція',
    ],
  },
];

const BONUS_TIMER_SECONDS = 105;

export default function PlanSection() {
  const { openModal } = usePurchaseModal();
  const [timeLeft, setTimeLeft] = useState(BONUS_TIMER_SECONDS);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = window.setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
    return () => window.clearInterval(interval);
  }, [timeLeft]);

  const timer = useMemo(() => {
    const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const s = String(timeLeft % 60).padStart(2, '0');
    return `${m}:${s}`;
  }, [timeLeft]);

  return (
    <section id="plan" className="relative overflow-hidden bg-[#fff6f1] py-10 sm:py-14 text-[#1a1a1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,79,162,0.1),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="space-y-3 text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2] shadow-[0_8px_18px_rgba(255,126,95,0.15)]">
            План інтенсиву
          </span>
          <h2 className="font-extrabold leading-tight text-[1.9rem] sm:text-[2.15rem]">ПЛАН</h2>
          <p className="text-[0.95rem] leading-relaxed text-[#333] max-w-[540px] mx-auto">
            5 днів — і жодної зайвої секунди. Щодня ти отримуєш чіткий план, тренування, подкасти та підтримку.
          </p>
        </motion.div>

        {/* === Дні інтенсиву === */}
        <div className="mt-8 grid gap-4 sm:gap-6">
          {plan.map((day, index) => (
            <motion.article
              key={day.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="rounded-[1.4rem] border border-[#ffd2e0] bg-white/90 px-4 py-4 shadow-[0_8px_24px_rgba(255,126,95,0.12)] sm:px-6 sm:py-6"
            >
              <header className="flex items-center gap-3">
                <h3 className="text-[0.9rem] font-semibold uppercase tracking-[0.15em] text-[#ff7e5f]">{day.day}</h3>
              </header>

              <ul className="mt-3 space-y-1.5 text-[0.9rem] leading-snug sm:space-y-2 sm:text-[0.95rem]">
                {day.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[3px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] text-white shadow-[0_1px_4px_rgba(255,79,162,0.3)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <BonusTimer/>
      </div>
    </section>
  );
}
