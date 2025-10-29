'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    CheckCircle2,
    Flame,
    Utensils,
    Heart,
    Timer,
    Sparkles,
    ShieldCheck,
    BadgePercent,
} from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

export default function HeroSection() {
    const { openModal } = usePurchaseModal();

    return (
        <section
            id="hero"
            // isolate — свой контекст наложения; overflow-hidden чтобы фоны не выходили
            className="relative isolate text-light pt-16 pb-24 sm:pb-28 bg-[#0E0E0E] overflow-hidden"
        >
            {/* если есть декоративные ауры — следим за pointer-events-none и -z-10 */}
            {/* <BackgroundDecor className="pointer-events-none absolute inset-0 -z-10" /> */}

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 sm:gap-14 items-center">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <div className="mb-6">
                        <Image
                            src="/images/ok_body_lab_logo.png"
                            alt="OK Body Lab logo"
                            width={120}
                            height={120}
                            priority
                            className="object-contain drop-shadow-[0_0_16px_rgba(251,174,88,0.5)]"
                        />
                    </div>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-graphite/60 px-4 py-1 text-xs sm:text-sm text-muted shadow-soft backdrop-blur-sm">
                        <BadgePercent className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-accent animate-blink">
                            Старт 2 листопада • −82% тільки сьогодні
                        </span>
                    </div>

                    <h1 className="mb-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(231,104,31,0.45)] block">
                            Легкі — мінус 8 кг
                        </span>
                        <span className="text-secondary block">без зривів та виснажень</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
                        Отримай <strong className="text-primary">дієву систему схуднення</strong> без жорстких дієт. 5 днів: харчування, тренування, подкасти з лікарями.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start w-full sm:w-auto mb-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={openModal}
                            // z-30 + pointer-events-auto гарантирует, что ничего сверху не перекроет
                            className="relative z-30 pointer-events-auto overflow-hidden rounded-3xl px-8 py-4 text-base sm:text-lg font-semibold text-dark shadow-cta bg-cta-gradient w-full sm:w-auto"
                        >
                            <span className="relative z-10">🔥 Купити інтенсив −82%</span>
                            <span className="absolute inset-0 translate-x-[-120%] bg-white/40 blur-md mix-blend-overlay animate-shine" />
                        </motion.button>

                        <button
                            onClick={openModal}
                            className="relative z-30 pointer-events-auto rounded-3xl px-6 py-4 text-sm sm:text-base font-semibold border border-primary/50 hover:bg-primary/10 transition w-full sm:w-auto"
                        >
                            Дивитися програму
                        </button>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full bg-graphite/70 px-3 py-1 border border-primary/20">
                            <Timer className="h-4 w-4 text-primary" />
                            Пропозиція діє ще <span className="text-accent font-semibold">00:24:51</span>
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-graphite/70 px-3 py-1 border border-primary/20">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            Гарантія повернення 7 днів
                        </span>
                    </div>

                    {/* List */}
                    <ul className="space-y-3 text-left text-sm sm:text-base max-w-md mx-auto md:mx-0 mb-6">
                        <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> Розбір типових помилок у харчуванні</li>
                        <li className="flex items-center gap-2"><Heart className="text-accent w-5 h-5" /> 1000+ історій успіху</li>
                        <li className="flex items-center gap-2"><Flame className="text-primary w-5 h-5" /> 3247 кг жиру спалено</li>
                        <li className="flex items-center gap-2"><Utensils className="text-secondary w-5 h-5" /> Бонус: 5 простих рецептів</li>
                    </ul>

                    {/* Trust */}
                    <div className="relative z-20 inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-graphite/70 px-5 py-2 backdrop-blur-sm mb-8">
                        <Sparkles className="text-primary w-4 h-4" />
                        <span className="text-xs sm:text-sm text-light">
                            МЕНІ МОЖНА ДОВІРЯТИ — реальні відео-відгуки
                        </span>
                    </div>

                    {/* Duplicate main CTA */}
                    <div className="w-full sm:w-auto">
                        <button
                            onClick={openModal}
                            className="relative z-30 pointer-events-auto w-full rounded-2xl px-6 sm:px-8 py-4 text-base sm:text-lg text-dark font-semibold bg-cta-gradient shadow-glow animate-bounce-slow"
                        >
                            Купити зараз −82% + 8 бонусів 🎁
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT SIDE — image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative order-first md:order-last"
                >
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                        <Image
                            src="/images/oleg-coach-white.jpg"
                            alt="Олег Козлов — тренер і нутриціолог OK BODY LAB"
                            width={640}
                            height={800}
                            priority
                            className="object-cover w-full h-auto"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/70 p-3 sm:p-5 text-center sm:text-left">
                            <p className="text-base font-semibold">
                                <span className="text-primary">Олег Козлов</span> — тренер і нутриціолог
                            </p>
                            <p className="text-xs opacity-80">Майстер спорту України з силового екстріму</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}