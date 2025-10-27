'use client';

import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Flame, Heart, Star, Dumbbell, Leaf } from 'lucide-react';

const benefits = [
    { icon: <Leaf className="w-6 h-6 text-mint" />, text: 'Вже за перші дні зійдуть набряки і підуть перші кілограми' },
    { icon: <Heart className="w-6 h-6 text-peach" />, text: 'Зʼявляться корисні звички догляду за тілом і харчуванням' },
    { icon: <CheckCircle2 className="w-6 h-6 text-coral" />, text: 'Навчишся формувати збалансовану тарілку без дієт' },
    { icon: <Flame className="w-6 h-6 text-coral" />, text: 'Відчуєш легкість, енергію та впевненість у собі' },
    { icon: <Dumbbell className="w-6 h-6 text-peach" />, text: 'Отримаєш комплекс тренувань, навіть якщо ти новачок' },
    { icon: <Star className="w-6 h-6 text-coral" />, text: 'Розберемо твої типові помилки у харчуванні' },
    { icon: <Sparkles className="w-6 h-6 text-peach" />, text: 'Реальний шанс змінити тіло за короткий час' },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="relative bg-gradient-to-b from-white to-rose/20 py-28 overflow-hidden">
            {/* softly glowing accents */}
            <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-peach/40 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-coral/30 blur-[130px] rounded-full" />

            <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-graphite mb-16"
                >
                    В чому <span className="text-coral">користь</span> курсу?
                </motion.h2>

                {/* GRID benefits */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-white/70 backdrop-blur-sm border border-rose/20 rounded-3xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 p-2 bg-peach/30 rounded-2xl group-hover:bg-peach/50 transition">
                                    {b.icon}
                                </div>
                                <p className="text-graphite/80 leading-relaxed text-left text-base sm:text-lg">
                                    {b.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Плашка */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col items-center bg-gradient-to-r from-peach to-coral text-white px-10 py-6 rounded-3xl shadow-cta mb-12"
                >
                    <Sparkles className="mb-2 w-6 h-6" />
                    <p className="text-xl font-semibold tracking-wide">НайДоступніший курс</p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold text-graphite mb-3">
                        Почни зміни вже сьогодні
                    </h3>
                    <p className="text-graphite/70 mb-6">
                        Якщо виконаєш усі рекомендації інтенсиву — побачиш реальні результати вже у перші дні.
                    </p>
                    <button className="btn-cta px-12 py-4 text-lg font-semibold shadow-cta">
                        Купити інтенсив
                    </button>
                </motion.div>
            </div>
        </section>
    );
}