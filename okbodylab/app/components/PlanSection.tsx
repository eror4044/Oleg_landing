'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const days = [
    {
        title: 'День 1. Підготовка організму до змін та зниження набряків',
        content: [
            'Персональний розбір твоїх типових помилок у харчуванні',
            'Дієва система харчування, завдяки якій ти почнеш худнути вже сьогодні',
            'Руханка на все тіло',
        ],
    },
    {
        title: 'День 2. Як їсти смачно, бути ситим і не переїдати',
        content: [
            '5 смачних та простих у приготуванні сніданків, обідів і вечерь',
            'Загальне тренування з акцентом на спину',
        ],
    },
    {
        title: 'День 3. Як уникнути здуття, закрепів і “зупинки” травлення',
        content: [
            'Подкаст від гастроентеролога: «Кишковий комфорт на дефіциті калорій»',
            'Загальне тренування на все тіло',
        ],
    },
    {
        title: 'День 4. Як не зациклюватися на ідеалі та зберегти баланс',
        content: [
            'Подкаст від психолога: «Як не зірватися на дефіциті калорій»',
            'Загальне тренування з акцентом на ноги',
        ],
    },
    {
        title: 'День 5. Як адаптувати організм без шкоди для здоров’я',
        content: [
            'Подкаст від гастроентеролога та психолога',
            'Персональний розбір харчування та діагностика організму',
            'Акційна пропозиція на індивідуальний супровід 💫',
        ],
    },
];

export default function PlanSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="plan" className="bg-ivory py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-10">
                    <span className="text-coral">План курсу</span> Fit Intensive
                </h2>

                <div className="text-left max-w-3xl mx-auto space-y-4">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl shadow-md border border-rose/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="font-semibold text-graphite text-base md:text-lg">
                                    {day.title}
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
                                        <ul className="list-disc list-inside text-graphite/80 text-sm md:text-base space-y-1 mt-2">
                                            {day.content.map((line, idx) => (
                                                <li key={idx}>{line}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <h3 className="text-2xl font-semibold text-graphite mb-4">
                        Готова до змін?
                    </h3>
                    <p className="text-graphite/70 mb-6">
                        Приєднуйся до Fit Intensive сьогодні та отримай індивідуальний супровід
                        від Олега Козлова зі знижкою −82%.
                    </p>
                    <button className="btn-cta px-10 py-4 text-lg font-semibold shadow-cta">
                        Приєднатись зараз
                    </button>
                </div>
            </div>
        </section>
    );
}
