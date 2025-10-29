'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ScrollIndicatorProps = {
    sections?: { id: string; label: string; icon?: string }[];
};

export default function ScrollIndicator({
    sections = [
        { id: 'hero', label: 'Старт', icon: '🔥' },
        { id: 'for-who', label: 'Для кого', icon: '🎯' },
        { id: 'speaker', label: 'Спікер', icon: '💪' },
        { id: 'results', label: 'Результати', icon: '🏆' },
        { id: 'plan', label: 'План', icon: '📅' },
        { id: 'bonuses', label: 'Бонуси', icon: '🎁' },
        { id: 'benefits', label: 'Користь', icon: '🌿' },
        { id: 'after', label: 'Після курсу', icon: '✨' },
        { id: 'faq', label: 'FAQ', icon: '❓' },
    ],
}: ScrollIndicatorProps) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const elements = sections
            .map((s) => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) {
                    const idx = elements.indexOf(visible.target as HTMLElement);
                    setActive(idx);
                }
            },
            { threshold: [0.3, 0.6] }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            {/* ===== Desktop vertical version ===== */}
            <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center z-50">
                {/* vertical line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40" />
                <div className="flex flex-col gap-6 relative">
                    {sections.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            aria-label={s.label}
                            className="relative group"
                        >
                            {/* glowing dot */}
                            <motion.span
                                animate={{
                                    scale: i === active ? 1.5 : 1,
                                    opacity: i === active ? 1 : 0.4,
                                    background: i === active
                                        ? 'linear-gradient(135deg,#FF6B6B,#FFB199,#FFD4B2)'
                                        : 'rgba(255,255,255,0.15)',
                                    boxShadow:
                                        i === active
                                            ? '0 0 18px rgba(255,177,153,0.8)'
                                            : '0 0 0 rgba(0,0,0,0)',
                                }}
                                transition={{ duration: 0.25 }}
                                className="block w-[14px] h-[14px] rounded-full"
                            />
                            {/* label tooltip */}
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{
                                    opacity: i === active ? 1 : 0,
                                    x: i === active ? 0 : 10,
                                }}
                                transition={{ duration: 0.25 }}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-semibold text-light whitespace-nowrap bg-dark/80 px-2 py-[2px] rounded-full shadow-[0_0_10px_rgba(255,177,153,0.3)] backdrop-blur-sm"
                            >
                                {s.icon} {s.label}
                            </motion.span>
                        </button>
                    ))}
                </div>
            </div>

            {/* ===== Mobile bottom bar version ===== */}
            <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 px-4 py-2 bg-dark/80 border border-white/10 rounded-full backdrop-blur-md z-50 shadow-[0_0_25px_rgba(255,107,107,0.5)]">
                {sections.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        aria-label={s.label}
                        className="relative flex flex-col items-center"
                    >
                        <motion.span
                            animate={{
                                scale: i === active ? 1.3 : 1,
                                opacity: i === active ? 1 : 0.6,
                                color: i === active ? '#FFB199' : '#FFE8E0',
                            }}
                            transition={{ duration: 0.2 }}
                            className="text-[18px]"
                        >
                            {s.icon}
                        </motion.span>
                        <motion.div
                            animate={{
                                scaleX: i === active ? 1 : 0,
                                opacity: i === active ? 1 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="w-2 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full origin-center"
                        />
                    </button>
                ))}
            </div>
        </>
    );
}
