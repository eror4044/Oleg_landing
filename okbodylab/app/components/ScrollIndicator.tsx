'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ScrollIndicatorProps = {
    sections?: { id: string; label: string }[];
};

export default function ScrollIndicator({
    sections = [
        { id: 'hero', label: 'Старт' },
        { id: 'for-who', label: 'Для кого' },
        { id: 'speaker', label: 'Спікер' },
        { id: 'results', label: 'Результати' },
        { id: 'plan', label: 'План' },
        { id: 'bonuses', label: 'Бонуси' },
        { id: 'benefits', label: 'Користь' },
        { id: 'after', label: 'Після курсу' },
        { id: 'faq', label: 'FAQ' },
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
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-50">
            {/* Вертикальна лінія */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-peach/30 via-coral/40 to-peach/30" />

            <div className="flex flex-col gap-6 relative">
                {sections.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className="relative group"
                        aria-label={s.label}
                    >
                        <motion.span
                            animate={{
                                scale: i === active ? 1.4 : 1,
                                opacity: i === active ? 1 : 0.5,
                                backgroundColor: i === active ? '#FF8A80' : '#FFD4B2',
                                boxShadow:
                                    i === active
                                        ? '0 0 14px rgba(255,138,128,0.6)'
                                        : '0 0 0 rgba(0,0,0,0)',
                            }}
                            transition={{ duration: 0.25 }}
                            className="block w-[12px] h-[12px] rounded-full"
                        />
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{
                                opacity: i === active ? 1 : 0,
                                x: i === active ? 0 : 10,
                            }}
                            transition={{ duration: 0.25 }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-medium text-graphite whitespace-nowrap bg-white/80 px-2 py-[2px] rounded-full shadow-sm backdrop-blur-sm"
                        >
                            {s.label}
                        </motion.span>
                    </button>
                ))}
            </div>
        </div>
    );
}
