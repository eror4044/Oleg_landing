'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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
    return (
        <section id="faq" className="relative overflow-hidden text-light py-24 sm:py-28">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.96)_0%,rgba(14,14,14,0.9)_55%,rgba(251,174,88,0.08)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-[rgba(251,174,88,1)]"
                >
                    Поширені <span className="text-[rgba(231,104,31,1)]">запитання</span>
                </motion.h2>

                <Accordion.Root
                    type="single"
                    collapsible
                    className="space-y-5 text-left"
                >
                    {faqs.map((item, i) => (
                        <Accordion.Item
                            key={i}
                            value={`item-${i}`}
                            className="rounded-3xl border border-[rgba(251,174,88,0.15)] bg-[rgba(28,28,28,0.85)] shadow-[0_0_20px_rgba(251,174,88,0.05)] overflow-hidden backdrop-blur-sm"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger
                                    className="group w-full flex justify-between items-center px-6 py-5 text-left text-[#FFD9B5] font-semibold text-base md:text-lg transition-all"
                                >
                                    {item.q}
                                    <ChevronDown className="w-5 h-5 text-[rgba(251,174,88,1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>

                            {/* контент с отдельным fade-анимированием текста */}
                            <Accordion.Content
                                className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25, delay: 0.05 }}
                                    className="px-6 pb-5 text-[#FFD9B5]/80 text-sm md:text-base leading-relaxed"
                                >
                                    {item.a}
                                </motion.div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
}
