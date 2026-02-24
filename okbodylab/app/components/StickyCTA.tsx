'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CTAButton from './CTAButton';

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // VIP route has its own CTA — hide the main one
    if (pathname?.startsWith('/iejg3234n')) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: '120%', opacity: 0, scale: 0.9 }}
                    animate={{
                        y: ['120%', '-8%', '0%'],
                        opacity: [0, 1, 1],
                        scale: [0.9, 1.07, 1],
                        transition: {
                            duration: 0.85,
                            ease: ['easeOut', 'easeInOut', 'easeOut'],
                            times: [0, 0.65, 1]
                        }
                    }}
                    whileHover={{ scale: 1.03 }}
                    exit={{
                        y: '120%',
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.35, ease: 'easeIn' }
                    }}
                    className="fixed inset-x-0 bottom-6 z-[999] px-4"
                >
                    <div className="mx-auto flex w-full max-w-md items-center justify-center rounded-3xl border border-[#ffd2e0] bg-white/85 p-3 shadow-[0_12px_32px_rgba(255,126,95,0.28)] backdrop-blur-md">
                        <CTAButton className="w-full" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
