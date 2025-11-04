'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePurchaseModal } from './PurchaseModalContext';

const outcomes = [
  'схуднення БЕЗ шкоди для здоров’я',
  'зменшення у об’ємах',
  'підтягнуте та стрункіше тіло',
  'зменшення целюліту',
  'нові звички та нове мислення',
  'позбудешся зривів',
  'енергію, сили, мотивацію',
  'покращення роботи ЖКТ',
  'знання, як формувати свою тарілку',
];

export default function AfterCourseSection() {
  const { openModal } = usePurchaseModal();

  return (
    <section
      id="after-course"
      className="relative overflow-hidden bg-white py-12 text-[#1a1a1a] sm:py-16"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,126,95,0.12),_transparent_58%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:gap-12">
        {/* === Текстовий блок === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex-1 space-y-3 text-left"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2]/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2]">
            ЯКІ РЕЗУЛЬТАТИ ТИ ОТРИМАЄШ ПІСЛЯ КУРСУ?
          </span>
          <h2 className="text-[1.9rem] font-extrabold leading-tight sm:text-[2.1rem]">
            ЯКІ РЕЗУЛЬТАТИ ТИ ОТРИМАЄШ ПІСЛЯ КУРСУ?
          </h2>

          <ul className="grid gap-2.5 text-[0.95rem] leading-relaxed text-[#1a1a1a]">
            {outcomes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[1.4rem] border border-[#ffd2e0] bg-[#fff6f1] px-5 py-3 shadow-[0_6px_16px_rgba(255,126,95,0.12)] hover:shadow-[0_8px_22px_rgba(255,126,95,0.18)] transition"
              >
                <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] text-white shadow-[0_2px_6px_rgba(255,79,162,0.35)]">
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
            Ти станеш стійкішою до стресів, дисциплінованішою, покращаться фізичні якості, шкіра тіла та обличчя. Самооцінка підніметься, і ти нарешті
            зможеш обирати одяг, який подобається, а не той, що приховує недоліки.
          </p>
          <p className="text-[0.95rem] font-semibold text-[#ff4fa2]">
            95% людей після схуднення утримують результат — я простежу, щоб ти була серед них.
          </p>

          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2] px-10 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_26px_rgba(255,79,162,0.3)] transition hover:bg-[#ff256b]"
          >
            Взяти участь
          </button>
        </motion.div>

        {/* === Фото результатів === */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-[#ffd2e0] bg-white shadow-[0_24px_48px_rgba(255,126,95,0.18)]">
            <Image
              src="/images/photo_14_2025-10-31_13-29-55.jpg"
              alt="Результати після курсу"
              width={640}
              height={860}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Текст під фото */}
          <div className="mt-4 rounded-[1.2rem] bg-[#fff6f1] px-5 py-4 text-center shadow-[0_8px_20px_rgba(255,126,95,0.1)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#ff7e5f]">Після інтенсиву</p>
            <p className="mt-2 text-[0.9rem] leading-snug text-[#333]">
              На фото — реальні учениці після 3 місяці роботи. Ти теж зможеш побачити різницю неозброєним оком.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
