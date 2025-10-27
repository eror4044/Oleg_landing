'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, UtensilsCrossed, Zap } from 'lucide-react';

const items = [
    {
        icon: <UtensilsCrossed className="w-8 h-8 text-coral" />,
        text: 'Втомилась від хаотичного харчування та постійних “зривів”',
    },
    {
        icon: <Brain className="w-8 h-8 text-peach" />,
        text: 'Не можеш почати і потребуєш чіткої системи',
    },
    {
        icon: <Heart className="w-8 h-8 text-mint" />,
        text: 'Хочеш м’яко, але ефективно увійти у процес схуднення',
    },
    {
        icon: <Zap className="w-8 h-8 text-coral" />,
        text: 'Хочеш швидко побачити зміни у фігурі й самопочутті',
    },
];

export default function ForWhoSection() {
    return (
        <section id="for-who" className="bg-ivory py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-graphite mb-10"
                >
                    Цей курс для тебе, якщо ти:
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-lg border border-rose/20 hover:shadow-xl transition"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <p className="text-graphite/80 text-base leading-snug">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
