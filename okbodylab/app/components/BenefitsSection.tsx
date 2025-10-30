'use client';

import { motion } from 'framer-motion';
import {
    Leaf,
    Heart,
    CheckCircle2,
    Flame,
    Dumbbell,
    Star,
    Sparkles,
    Tag,
} from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

const benefits = [
    {
        icon: <Leaf className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
        text: 'Вже за перші дні в тебе зійдуть набряки і твої перші кілограми',
    },
    {
        icon: <Heart className="w-6 h-6 text-[rgba(231,104,31,1)]" />,
        text: 'З’являться корисні звички займатися собою щодня і готувати смачну та корисну їжу',
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
        text: 'Розуміння, як формувати свою збалансовану тарілку на кожен прийом їжі самостійно',
    },
    {
        icon: <Flame className="w-6 h-6 text-[rgba(231,104,31,1)]" />,
        text: 'З’явиться легкість та краще розуміння свого тіла',
    },
    {
        icon: <Dumbbell className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
        text: 'Отримаєш комплекс тренувань на все тіло, який підійде навіть тим, хто ніколи не займався спортом',
    },
    {
        icon: <Star className="w-6 h-6 text-[rgba(231,104,31,1)]" />,
        text: 'Навчишся їсти смачно, бути ситим і не переїдати на дефіциті',
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
        text: 'Розберемо твої типові помилки у харчуванні',
    },
];

export default function BenefitsSection() {
    const { openModal } = usePurchaseModal();
    return (
        <section
            id="benefits"
            className="relative py-28 text-light overflow-hidden"
        >
            {/* === Фон === */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.95)_0%,rgba(14,14,14,0.9)_55%,rgba(251,174,88,0.08)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[40vh]
          [background:radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                {/* === Заголовок === */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-[rgba(251,174,88,1)] drop-shadow-[0_0_15px_rgba(251,174,88,0.35)]"
                >
                    В чому <span className="text-[rgba(231,104,31,1)]">користь</span> курсу?
                </motion.h2>

                {/* === Сітка переваг === */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: i * 0.07,
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true }}
                            className="relative group bg-[rgba(28,28,28,0.85)] rounded-3xl p-6 border border-[rgba(251,174,88,0.15)] shadow-[0_0_25px_rgba(251,174,88,0.08)] hover:shadow-[0_0_40px_rgba(251,174,88,0.25)] transition-all hover:scale-[1.03]"
                        >
                            <div className="relative flex items-start gap-4 text-left">
                                <div className="flex-shrink-0 p-3 bg-[rgba(251,174,88,0.12)] rounded-2xl backdrop-blur-sm group-hover:bg-[rgba(251,174,88,0.22)] transition-all">
                                    {b.icon}
                                </div>
                                <p className="text-[#FFD9B5]/90 text-base leading-relaxed">
                                    {b.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* === Мотиваційний блок === */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <p className="text-lg md:text-xl text-[#FFD9B5]/95 leading-relaxed mb-6">
                        Це твій <span className="text-[rgba(251,174,88,1)] font-semibold">реальний шанс</span> за короткий проміжок часу зробити струнку фігуру.
                    </p>
                    <p className="text-lg md:text-xl text-[#FFD9B5]/90 leading-relaxed">
                        Якщо ти виконаєш усі рекомендації інтенсиву — ти отримаєш
                        <span className="text-[rgba(231,104,31,1)] font-semibold"> помітне зменшення ваги і об’ємів вже у перші дні!</span>
                    </p>
                </motion.div>

                {/* === Плашка === */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onClick={openModal}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgba(231,104,31,1)] to-[rgba(251,174,88,1)] text-[#0E0E0E] px-10 py-6 rounded-3xl shadow-[0_0_25px_rgba(251,174,88,0.35)] mb-8"
                >
                    <Tag className="w-6 h-6" />
                    <p className="text-xl font-semibold tracking-wide">
                        Найдоступніший курс
                    </p>
                </motion.button>
            </div>
        </section>
    );
}
