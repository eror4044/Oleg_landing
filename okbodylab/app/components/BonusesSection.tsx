'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clock, HeartPulse, ChefHat, Book, Dumbbell, Brain } from 'lucide-react';

const bonuses = [
    {
        icon: <HeartPulse className="w-7 h-7 text-coral" />,
        title: 'Лекція від Сексолога',
        desc: '«Як лишня вага впливає на сексуальне здоров’я жінки»',
    },
    {
        icon: <Brain className="w-7 h-7 text-peach" />,
        title: 'Лекція від Гастроентеролога',
        desc: '«Травна система спортсмена: як дієта впливає на ШКТ»',
    },
    {
        icon: <ChefHat className="w-7 h-7 text-mint" />,
        title: 'Меню на тиждень',
        desc: 'Прості продукти, повністю розписані КБЖВ — підходить для всієї сім’ї.',
    },
    {
        icon: <Book className="w-7 h-7 text-coral" />,
        title: '5 бонусних матеріалів',
        desc: 'Рецепти, чек-листи, поради для щоденного прогресу.',
    },
    {
        icon: <Dumbbell className="w-7 h-7 text-peach" />,
        title: 'Заминка + тренування',
        desc: 'Комплекс вправ з акцентом на руки, ноги та спину.',
    },
];

export default function BonusesSection() {
    const [timeLeft, setTimeLeft] = useState(29 * 60 + 59); // 29:59 минут

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    return (
        <section id="bonuses" className="bg-gradient-to-b from-white to-rose/30 py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-graphite mb-10"
                >
                    🎁 Додаткові бонуси при оплаті сьогодні
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {bonuses.map((bonus, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-lg border border-peach/40 hover:shadow-xl transition text-left"
                        >
                            <div className="mb-3">{bonus.icon}</div>
                            <h3 className="font-semibold text-graphite mb-2">{bonus.title}</h3>
                            <p className="text-graphite/70 text-sm leading-relaxed">{bonus.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Таймер */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 inline-flex flex-col items-center bg-graphite text-white py-6 px-10 rounded-3xl shadow-cta"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-peach" />
                        <p className="text-sm uppercase tracking-wide">Пропозиція діє ще</p>
                    </div>
                    <p className="text-4xl font-bold font-mono text-peach">
                        {minutes}:{seconds}
                    </p>
                    <button className="btn-cta mt-6 px-10 py-4 text-lg font-semibold shadow-cta">
                        Оплатити зараз
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
