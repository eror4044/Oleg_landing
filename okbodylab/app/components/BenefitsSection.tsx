'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const benefits = [
    '🌿 Вже за перші дні зійдуть набряки і підуть перші кілограми',
    '💪 Зʼявляться корисні звички догляду за тілом і харчуванням',
    '🥗 Навчишся формувати збалансовану тарілку без дієт',
    '🔥 Відчуєш легкість, енергію та впевненість у собі',
    '🏋️‍♀️ Отримаєш комплекс тренувань, навіть якщо ти новачок',
    '💖 Розберемо твої типові помилки у харчуванні',
    '✨ Реальний шанс змінити тіло за короткий час',
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="bg-white py-24 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-graphite mb-8"
                >
                    В чому <span className="text-coral">користь</span> курсу?
                </motion.h2>

                <div className="max-w-3xl mx-auto text-left space-y-3 mb-12">
                    {benefits.map((b, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg text-graphite/80 flex items-start"
                        >
                            {b}
                        </motion.p>
                    ))}
                </div>

                {/* Плашка */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col items-center bg-gradient-to-r from-peach to-coral text-white px-10 py-6 rounded-3xl shadow-cta mb-10"
                >
                    <Sparkles className="mb-2 w-6 h-6" />
                    <p className="text-xl font-semibold tracking-wide">НайДоступніший курс</p>
                </motion.div>

                {/* CTA */}
                <div>
                    <h3 className="text-2xl font-semibold text-graphite mb-3">
                        Почни зміни вже сьогодні
                    </h3>
                    <p className="text-graphite/70 mb-6">
                        Якщо виконаєш усі рекомендації інтенсиву — побачиш реальні результати вже у перші дні.
                    </p>
                    <button className="btn-cta px-12 py-4 text-lg font-semibold shadow-cta">
                        Купити інтенсив
                    </button>
                </div>
            </div>
        </section>
    );
}
