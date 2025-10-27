'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle2, Flame, Sparkles, Utensils, Heart } from 'lucide-react';

export default function HeroSection() {
    const [open, setOpen] = useState(false);

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-gradient-to-b from-rose/30 via-ivory to-white py-24"
        >
            {/* softly glowing background blobs */}
            <div className="absolute top-0 -left-10 w-[300px] h-[300px] bg-peach/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 -right-10 w-[300px] h-[300px] bg-coral/30 rounded-full blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center z-10">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <p className="text-sm text-graphite/60 mb-3 uppercase tracking-wide">
                        Старт <span className="font-semibold text-graphite">2 листопада</span>
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-graphite leading-tight">
                        <span className="bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">
                            Легкі — мінус 10 кг
                        </span>{' '}
                        без зривів та виснажень
                    </h1>

                    <p className="mt-5 text-lg text-graphite/80 max-w-lg mx-auto md:mx-0">
                        Отримай дієву систему схуднення та покращення фізичної форми <br />
                        <span className="text-graphite font-medium">
                            без дієт, виснажень і зривів 💪
                        </span>
                    </p>

                    {/* CTA Block */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center md:justify-start">
                        <button
                            onClick={() => setOpen(true)}
                            className="relative overflow-hidden rounded-3xl px-10 py-4 text-lg font-semibold text-white shadow-cta 
                         bg-gradient-to-r from-coral to-peach transition-transform hover:scale-[1.03]"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.8, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                🔥 Знижка −82%
                            </motion.span>
                        </button>
                        <p className="text-sm text-graphite/70">
                            Оплати сьогодні — отримай <span className="font-semibold">8 бонусів 🎁</span>
                        </p>
                    </div>

                    {/* Список переваг */}
                    <ul className="mt-8 space-y-3 text-graphite/90 text-base text-left mx-auto md:mx-0">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="text-mint w-5 h-5" /> Розбір типових помилок у харчуванні
                        </li>
                        <li className="flex items-center gap-2">
                            <Heart className="text-peach w-5 h-5" /> 1000+ жінок змінили життя
                        </li>
                        <li className="flex items-center gap-2">
                            <Flame className="text-coral w-5 h-5" /> 3247 кг жиру спалено
                        </li>
                        <li className="flex items-center gap-2">
                            <Utensils className="text-mint w-5 h-5" /> Бонус: 5 простих рецептів
                        </li>
                    </ul>

                    {/* Плашка довіри */}
                    <div className="mt-8 inline-flex items-center gap-2 bg-rose/20 px-5 py-2 rounded-2xl border border-peach/30 shadow-sm">
                        <Sparkles className="text-coral w-4 h-4" />
                        <span className="text-sm text-graphite/80 font-medium">
                            Мені можна довіряти — 1000+ історій успіху
                        </span>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(255,138,128,0.25)] bg-rose/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 rounded-[2rem]" />
                    <Image
                        src="/images/IMG_6948.jpg"
                        alt="Олег Козлов — тренер Fit Intensive"
                        width={700}
                        height={800}
                        priority
                        className="object-cover w-full h-auto rounded-[2rem]"
                    />
                </motion.div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/40 grid place-items-center z-50 px-4 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl text-center"
                    >
                        <h3 className="text-xl font-semibold text-graphite">
                            Оплатити інтенсив зі знижкою −82%
                        </h3>
                        <p className="mt-2 text-graphite/70">
                            Сьогодні ти отримаєш <span className="font-semibold">8 бонусних матеріалів 💎</span>
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button className="btn-cta flex-1 py-3">Перейти до оплати</button>
                            <button
                                onClick={() => setOpen(false)}
                                className="flex-1 rounded-2xl border border-graphite/10 py-3 text-graphite hover:bg-rose/20 transition"
                            >
                                Закрити
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
