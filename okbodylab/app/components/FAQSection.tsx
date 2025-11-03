'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePurchaseModal } from './PurchaseModalContext';

const faqs = [
  {
    question: 'Чи складне меню?',
    answer:
      'Ні, меню з простих продуктів, які завжди є вдома. Основа — крупи, перші страви, м’ясо, риба, овочі, фрукти. Жодних дивних інгредієнтів чи складних рецептів.',
  },
  {
    question: 'Чи потрібно купувати інвентар для занять спортом?',
    answer:
      'Ні, тренування домашні з власною вагою. Можеш робити навіть у піжамі — без гумок і гантелей. Лише килимок і бажання.',
  },
  {
    question: 'Скільки часу займає інтенсив?',
    answer:
      'Інтенсив триває 5 днів, але доступ ти матимеш місяць. Можеш проходити уроки у своєму темпі, переглядати з телефону і тренуватись у зручний час.',
  },
  {
    question: 'Це точно для мене?',
    answer:
      'Так, якщо ти зараз читаєш це — значить готова до змін. За кілька днів побачиш інші цифри на вагах і впевнене відображення в дзеркалі. Я знаю, як страшно почати, але вже після першого дня ти скажеш собі “дякую”.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = usePurchaseModal();

  return (
    <section id="faq" className="relative overflow-hidden bg-[#fff6f1] py-12 text-[#1a1a1a] sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,79,162,0.12),_transparent_58%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-left sm:text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#ff4fa2] shadow-[0_8px_18px_rgba(255,126,95,0.15)]">
            ПОШИРЕНІ ЗАПИТАННЯ
          </span>
          <h2 className="mt-3 text-[1.9rem] font-extrabold leading-tight sm:text-[2.15rem]">ПОШИРЕНІ ЗАПИТАННЯ?</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[#333]">Відповідаю чесно й прямо, щоб ти увійшла в інтенсив без сумнівів.</p>
        </motion.div>

        <div className="mt-8 space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="overflow-hidden rounded-[1.4rem] border border-[#ffd2e0] bg-white shadow-[0_14px_30px_rgba(255,126,95,0.15)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left sm:px-6"
                >
                  <span className="text-[0.95rem] font-semibold text-[#1a1a1a]">{item.question}</span>
                  <span className="text-2xl font-bold text-[#ff4fa2]">{isOpen ? '−' : '+'}</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-[0.95rem] leading-relaxed text-[#333] sm:px-6">{item.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 rounded-[1.6rem] bg-[#1a1a1a] px-5 py-6 text-center text-white sm:px-6"
        >
          <p className="text-[0.95rem] leading-relaxed text-white/80">Є ще запитання? Напиши мені у директ — відповім перед оплатою і дам перші кроки.</p>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full bg-[#ff4fa2] px-10 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_26px_rgba(255,79,162,0.3)] transition hover:bg-[#ff256b]"
          >
            Взяти участь
          </button>
        </motion.div>
      </div>
    </section>
  );
}
