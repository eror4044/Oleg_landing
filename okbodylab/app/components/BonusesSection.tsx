'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clock, HeartPulse, ChefHat, Book, Dumbbell, Brain } from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

const bonuses = [
    {
        icon: <Dumbbell className="w-7 h-7 text-[rgba(231,104,31,1)]" />,
        title: 'Заминка з акцентом на ноги',
        desc: 'М’які вправи для розслаблення м’язів ніг після тренування.',
    },
    {
        icon: <HeartPulse className="w-7 h-7 text-[rgba(231,104,31,1)]" />,
        title: 'Лекція від Сексолога',
        desc: '«Як лишня вага впливає на сексуальне здоров’я жінки»',
    },
    {
        icon: <Dumbbell className="w-7 h-7 text-[rgba(251,174,88,1)]" />,
        title: 'Тренування з акцентом на спину',
        desc: 'Комплекс вправ для формування постави та зміцнення м’язів спини.',
    },
    {
        icon: <Brain className="w-7 h-7 text-[rgba(231,104,31,1)]" />,
        title: 'Лекція від лікаря Гастроентеролога',
        desc: '«Травна система спортсмена: як дієта, білкові добавки та жироспалювачі впливають на ШКТ»',
    },
    {
        icon: <ChefHat className="w-7 h-7 text-[rgba(251,174,88,1)]" />,
        title: 'Меню на тиждень',
        desc: 'Прості продукти з повністю розписаними КБЖВ. Підійде для всієї сім’ї.',
    },
    {
        icon: <Dumbbell className="w-7 h-7 text-[rgba(231,104,31,1)]" />,
        title: 'Заминка з акцентом на руки',
        desc: 'Легка розтяжка та вправи для тонусу м’язів рук.',
    },
];

export default function BonusesSection() {
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 минут
    const { openModal } = usePurchaseModal();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    return (
        <section
            id="bonuses"
            className="relative overflow-hidden py-24 bg-[linear-gradient(0deg,rgba(251,174,88,0.12)_5%,rgba(14,14,14,0.96)_95%)]"
        >
            {/* Фоновое сияние */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(231,104,31,0.2),transparent_70%)] opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[rgba(251,174,88,1)] mb-10"
                >
                    🎁 Додаткові бонуси при оплаті сьогодні
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {bonuses.map((bonus, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.04,
                                boxShadow:
                                    '0 8px 25px rgba(251,174,88,0.15), 0 0 35px rgba(231,104,31,0.12)',
                            }}
                            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(251,174,88,0.25)] rounded-3xl p-6 text-left backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)] transition"
                        >
                            <div className="mb-3">{bonus.icon}</div>
                            <h3 className="font-semibold text-[rgba(251,174,88,1)] mb-2 text-lg">
                                {bonus.title}
                            </h3>
                            <p className="text-[#FFD9B5]/85 text-sm leading-relaxed">
                                {bonus.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Таймер / CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 inline-flex flex-col items-center bg-[rgba(20,20,20,0.85)] border border-[rgba(251,174,88,0.25)] py-8 px-10 rounded-[2rem] shadow-[0_0_40px_rgba(251,174,88,0.15)] backdrop-blur-md"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-[rgba(251,174,88,1)]" />
                        <p className="text-sm uppercase tracking-wide text-[#FFD9B5]/90">
                            Пропозиція діє ще
                        </p>
                    </div>

                    <motion.p
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-4xl font-bold font-mono text-[rgba(251,174,88,1)] drop-shadow-[0_0_10px_rgba(251,174,88,0.4)]"
                    >
                        {minutes}:{seconds}
                    </motion.p>

                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 rounded-full px-10 py-4 text-lg font-semibold text-dark bg-gradient-to-r from-[rgba(251,174,88,1)] to-[rgba(231,104,31,1)] shadow-[0_0_40px_rgba(251,174,88,0.3)] transition-transform"
                    >
                        Оплатити зараз
                    </motion.button>

                    <img
                        src="/images/ok_body_lab_logo.png"
                        alt="OK Body Lab"
                        className="mt-6 h-12 w-auto opacity-80"
                    />
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
        </section>
    );
}
