'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

const faqs = [
    {
        q: 'Чи складне меню?',
        a: 'Ні, меню складається з простих продуктів, які є в кожної вдома: крупи, овочі, фрукти, м’ясо, риба. Ніяких складних рецептів чи екзотичних інгредієнтів.',
    },
    {
        q: 'Чи потрібно купувати інвентар для занять?',
        a: 'Ні. Тренування розраховані на виконання вдома, навіть без інвентарю — достатньо власної ваги тіла.',
    },
    {
        q: 'Скільки триває інтенсив?',
        a: 'Курс триває 5 днів. Доступ до матеріалів зберігається на місяць, тому ти можеш проходити його у зручний для тебе час.',
    },
    {
        q: 'Це точно для мене?',
        a: 'Так! Якщо ти читаєш це — ти вже готова до змін. Навіть якщо сумніваєшся, результат прийде після першого кроку 💫',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { openModal } = usePurchaseModal();

    return (
        <section
            id="faq"
            className="relative overflow-hidden text-light py-24 sm:py-28"
        >
            {/* === Фон секції === */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Градиент знизу вверх */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.96)_0%,rgba(14,14,14,0.9)_55%,rgba(251,174,88,0.08)_100%)]" />
                {/* Тепле свічення */}
                <div className="absolute inset-x-0 bottom-0 h-[40vh]
          [background:radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                {/* === Заголовок === */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-[rgba(251,174,88,1)] drop-shadow-[0_0_15px_rgba(251,174,88,0.3)]"
                >
                    Поширені <span className="text-[rgba(231,104,31,1)]">запитання</span>
                </motion.h2>

                {/* === Список питань === */}
                <div className="space-y-5 text-left">
                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-[rgba(251,174,88,0.15)] bg-[rgba(28,28,28,0.85)] shadow-[0_0_20px_rgba(251,174,88,0.05)] overflow-hidden backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-[#FFD9B5] text-base md:text-lg">
                                    {item.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-[rgba(251,174,88,1)]" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="px-6 pb-5"
                                    >
                                        <p className="text-[#FFD9B5]/80 text-sm md:text-base leading-relaxed">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* === Заключна CTA === */}
                <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openModal}
                    className="mt-8 relative overflow-hidden rounded-3xl px-12 py-4 text-lg font-semibold text-dark
    bg-gradient-to-r from-[rgba(231,104,31,1)] via-[rgba(251,174,88,1)] to-[rgba(231,104,31,1)]
    shadow-[0_0_30px_rgba(251,174,88,0.4)]
    animate-pulseGlow transition-transform duration-300"
                >
                    <span className="relative z-10">🔥 Змінюй себе сьогодні</span>
                    <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
    translate-x-[-100%] animate-shineMove" />
                </motion.button>
            </div>
        </section>
    );
}
