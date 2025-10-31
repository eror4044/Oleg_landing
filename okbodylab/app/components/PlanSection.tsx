'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Flame, Utensils, Brain, Heart, ShieldCheck } from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

const days = [
    {
        day: 'День 1',
        title: 'Підготовка організму до змін та зниження набряків',
        points: [
            'Персональний розбір типових помилок у харчуванні',
            'Дієва система харчування, щоб схуднути вже сьогодні',
            'Руханка на все тіло',
        ],
        icon: <ShieldCheck className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
    },
    {
        day: 'День 2',
        title: 'Як їсти смачно, бути ситим і не переїдати',
        points: [
            '5 простих і смачних сніданків, обідів і вечерь',
            'Загальне тренування з акцентом на спину',
        ],
        icon: <Utensils className="w-6 h-6 text-[rgba(231,104,31,1)]" />,
    },
    {
        day: 'День 3',
        title: 'Як уникнути здуття, закрепів і “зупинки” травлення',
        points: [
            'Подкаст від гастроентеролога: «Кишковий комфорт на дефіциті калорій»',
            'Загальне тренування на все тіло',
        ],
        icon: <Brain className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
    },
    {
        day: 'День 4',
        title: 'Як не зациклюватися на ідеалі та зберегти баланс',
        points: [
            'Подкаст від психолога: «Як не зірватися на дефіциті калорій»',
            'Загальне тренування з акцентом на ноги',
        ],
        icon: <Heart className="w-6 h-6 text-[rgba(231,104,31,1)]" />,
    },
    {
        day: 'День 5',
        title: 'Як адаптувати організм без шкоди для здоров’я',
        points: [
            'Подкасти від гастроентеролога та психолога',
            'Персональний розбір харчування та діагностика організму',
            'Акційна пропозиція на індивідуальний супровід 💫',
        ],
        icon: <Flame className="w-6 h-6 text-[rgba(251,174,88,1)]" />,
    },
];

export default function PlanSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 80%', 'end 20%'],
    });
    const { openModal } = usePurchaseModal();
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // === Countdown Timer ===
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 минут

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <section
            id="plan"
            className="relative overflow-hidden text-light py-24 sm:py-28"
        >
            {/* === Gradient background === */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(251,174,88,0.15)_5%,rgba(14,14,14,0.95)_85%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[radial-gradient(circle_at_bottom,rgba(231,104,31,0.15),transparent_70%)] opacity-70" />

            {/* === Header === */}
            <div className="relative max-w-5xl mx-auto text-center mb-20 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <p>План курсу </p>
                    <span className="text-[rgba(251,174,88,1)]">Body Lab</span>
                    
                </h2>
                <p className="text-[#FFD9B5]/80 max-w-2xl mx-auto text-[17px] leading-relaxed">
                    5 днів — 5 кроків до нової тебе: Зменшення набряків, зміна харчової звички , тонус мʼязів та еластичність твого тіла.
                </p>
            </div>

            {/* === Roadmap line === */}
            <div ref={ref} className="relative max-w-3xl mx-auto px-6">
                <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[rgba(251,174,88,0.15)] -translate-x-1/2 rounded-full" />
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-[rgba(251,174,88,1)] via-[rgba(231,104,31,0.8)] to-[rgba(14,14,14,0.9)] -translate-x-1/2 rounded-full origin-top shadow-[0_0_20px_rgba(251,174,88,0.4)]"
                />

                <div className="flex flex-col gap-20">
                    {days.map((day, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 10 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                rotateX: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.15,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* === Icon === */}
                            <div className="relative z-10 shrink-0">
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(251,174,88,0.25)] to-[rgba(231,104,31,0.2)] blur-2xl"
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.4, 0.8, 0.4],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-[3px] border-[rgba(251,174,88,0.4)] bg-[rgba(20,20,20,0.85)] shadow-[0_0_30px_rgba(251,174,88,0.15)]">
                                    {day.icon}
                                </div>
                            </div>

                            {/* === Calendar card === */}
                            <motion.div
                                whileHover={{
                                    scale: 1.04,
                                    y: -3,
                                    boxShadow:
                                        '0 10px 28px rgba(251,174,88,0.15), 0 0 40px rgba(231,104,31,0.1)',
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative md:w-[60%] rounded-2xl border border-[rgba(251,174,88,0.2)] overflow-hidden bg-[rgba(255,255,255,0.06)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
                            >
                                <div className="bg-gradient-to-r from-[rgba(251,174,88,0.9)] to-[rgba(231,104,31,0.8)] text-dark font-bold text-lg py-2 px-5 flex items-center justify-between border-b border-[rgba(251,174,88,0.3)]">
                                    <span>{day.day}</span>
                                    <span className="text-sm opacity-80">📅</span>
                                </div>

                                <div className="absolute top-[40px] left-0 right-0 h-[1px] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0)_0,rgba(251,174,88,0.3)_5px,transparent_10px)] opacity-70" />

                                <div className="p-6 text-left">
                                    <h3 className="text-[rgba(251,174,88,1)] text-lg font-semibold mb-2">
                                        {day.title}
                                    </h3>
                                    <ul className="list-disc list-inside text-[#FFD9B5]/85 text-[15px] leading-relaxed space-y-1">
                                        {day.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* === Countdown / CTA === */}
            <div className="relative mt-28 text-center">
                <div className="inline-block bg-[rgba(20,20,20,0.85)] border border-[rgba(251,174,88,0.25)] rounded-[2rem] px-8 py-8 shadow-[0_0_40px_rgba(251,174,88,0.15)] backdrop-blur-md">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(251,174,88,1)] to-[rgba(231,104,31,1)] shadow-[0_0_30px_rgba(251,174,88,0.3)]">
                            <span className="text-dark font-extrabold text-sm leading-tight text-center">
                                ЗНИЖКА<br />
                                <span className="text-xl">−82%</span>
                            </span>
                        </div>
                        <img
                            src="/images/ok_body_lab_logo.png"
                            alt="OK Body Lab"
                            className="h-14 w-auto opacity-90"
                        />
                    </div>

                    <p className="text-[#FFD9B5]/80 text-base mb-1">
                        ЗНИЖКА ЗАКІНЧИТЬСЯ ЧЕРЕЗ
                    </p>
                    <motion.p
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-[32px] md:text-[38px] font-extrabold tracking-widest text-[rgba(251,174,88,1)] mb-6 drop-shadow-[0_0_10px_rgba(251,174,88,0.4)] font-mono"
                    >
                        {formatTime(timeLeft)}
                    </motion.p>

                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full px-12 py-4 font-semibold text-dark text-lg bg-gradient-to-r from-[rgba(251,174,88,1)] to-[rgba(231,104,31,1)] shadow-[0_0_40px_rgba(251,174,88,0.3)]"
                    >
                        ВЗЯТИ УЧАСТЬ ЗА 249 ГРН
                    </motion.button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
        </section>
    );
}
