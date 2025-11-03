'use client';

import { motion } from 'framer-motion';
import { usePurchaseModal } from './PurchaseModalContext';
import BonusTimer from './BonusTimer'; // 👈 додаємо спільний компонент

const benefits = [
  'Вже за перші дні в тебе зійдуть набряки і твої перші кілограми',
  'З’являться корисні звички займатися собою щодня і готувати смачну та корисну їжу',
  'Розуміння, як формувати свою збалансовану тарілку на кожен прийом їжі самостійно',
  'З’явиться легкість та краще розуміння свого тіла',
  'Навчишся їсти смачно, бути ситим і не переїдати на дефіциті',
  'Отримаєш комплекс тренувань на все тіло, який підійде навіть тим, хто ніколи не займався спортом',
  'Розберем твої типові помилки у харчуванні',
];

export default function BenefitsSection() {
  const { openModal } = usePurchaseModal();

  return (
    <section id="benefits" className="relative overflow-hidden bg-[#fff6f1] py-12 text-[#1a1a1a] sm:py-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,162,0.12),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 sm:px-6 md:px-8 lg:flex-row lg:items-start lg:gap-10">
        {/* === Ліва частина з користю === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex-1 space-y-3 text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2] shadow-[0_8px_18px_rgba(255,126,95,0.15)]">
            В чому користь курсу?
          </span>
          <h2 className="text-[1.9rem] font-extrabold leading-tight sm:text-[2.15rem]">В ЧОМУ КОРИСТЬ КУРСУ?</h2>

          <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-[#1a1a1a]">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] border border-[#ffd2e0] bg-white px-5 py-3 shadow-[0_6px_16px_rgba(255,126,95,0.12)] hover:shadow-[0_8px_22px_rgba(255,126,95,0.18)] transition"
              >
                {/* Гарна брендова “галочка” */}
                <span className="mt-[3px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] text-white shadow-[0_2px_6px_rgba(255,79,162,0.4)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="pt-[1px]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[0.95rem] leading-relaxed text-[#333]">
            Це твій реальний шанс за короткий проміжок часу зробити струнку фігуру. Якщо виконаєш усі рекомендації —
            мінуси на вагах побачиш уже за кілька днів.
          </p>
        </motion.div>

        {/* === Права частина з CTA і таймером === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 space-y-6 rounded-[1.6rem] border border-[#ffd2e0] bg-white px-6 py-6 shadow-[0_18px_34px_rgba(255,126,95,0.18)] sm:px-8"
        >
          {/* === Верхній бейдж === */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff4fa2]">
            <span aria-hidden="true">💥</span>
            НАЙДОСТУПНІШИЙ КУРС
          </div>

          {/* === Опис курсу === */}
          <div className="space-y-4 text-[#333]">
            <p className="text-[1rem] leading-relaxed">
              Це твій <span className="font-semibold text-[#ff4fa2]">реальний шанс</span> за короткий проміжок часу
              зробити <span className="font-semibold text-[#ff7e5f]">струнку фігуру</span>.
            </p>
            <p className="text-[0.95rem] leading-relaxed">
              Якщо ти виконаєш усі рекомендації інтенсиву, ти зможеш реально швидко стартувати й отримати
              <b className="text-[#ff4fa2]"> зменшення на вагах і в об’ємах</b> вже в перші дні!
            </p>
          </div>

          {/* === Ціна і таймер === */}
          <BonusTimer discount={90} />
        </motion.div>
      </div>
    </section>
  );
}
