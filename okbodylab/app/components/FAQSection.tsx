'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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

    return (
        <section id="faq" className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-12">
                    Поширені запитання
                </h2>

                <div className="space-y-4 text-left">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-rose/30 rounded-3xl shadow-sm bg-ivory"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="font-semibold text-graphite text-base md:text-lg">
                                    {item.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-coral" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="px-6 pb-4"
                                    >
                                        <p className="text-graphite/80 text-sm md:text-base">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Заключна CTA */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-graphite mb-4">
                        Годі відкладати зміни 💪
                    </h3>
                    <p className="text-graphite/70 mb-6">
                        Приєднуйся сьогодні та отримай систему, яка реально працює.
                    </p>
                    <button className="btn-cta px-12 py-4 text-lg font-semibold shadow-cta">
                        Змінюй себе сьогодні
                    </button>
                </div>
            </div>
        </section>
    );
}
