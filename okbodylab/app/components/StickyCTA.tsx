'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const bottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 200;
            setIsVisible(!bottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto z-50"
        >
            <button className="btn-cta px-10 py-4 text-lg font-semibold shadow-cta w-full sm:w-auto">
                Оплатити інтенсив −82%
            </button>
        </motion.div>
    );
}
