'use client';
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { usePurchaseModal } from './PurchaseModalContext';

export default function CTAButton({
    label = 'Купити зі знижкою',
    className = '',
}: {
    label?: string;
    className?: string;
}) {
    const { openModal } = usePurchaseModal();
    const pulseControls = useAnimationControls();

    useEffect(() => {
        pulseControls.start({
            scale: [1, 1.08, 1],
            transition: {
                duration: 1.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.25
            }
        });
    }, [pulseControls]);

    return (
        <motion.button
            onClick={openModal}
            animate={pulseControls}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`
        relative flex items-center justify-center overflow-hidden whitespace-nowrap
        rounded-full px-12 py-3 text-[1.1rem] font-extrabold uppercase tracking-wide text-white
        shadow-[0_0_35px_rgba(255,79,162,0.55),0_0_65px_rgba(255,126,95,0.45)]
        bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ff4fa2]
        bg-[length:300%_300%] animate-gradientFire
        transition-all duration-300 ${className}
      `}
        >
            {/* Aura */}
            <span
                className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,79,162,0.7),rgba(255,126,95,0.5),transparent_70%)]
        blur-[70px] opacity-80 animate-auraFlash"
                aria-hidden="true"
            />
            {/* Gradient core */}
            <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff007f] via-[#ff7e5f] to-[#ff007f]
        bg-[length:400%_400%] animate-gradientFire opacity-90"
                aria-hidden="true"
            />
            {/* Shine */}
            <span
                className="absolute left-[-180%] top-0 h-full w-[180%] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70 hover:animate-shineRun"
                aria-hidden="true"
            />
            {/* Label */}
            <span className="relative z-10 flex items-center justify-center leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                {label}
            </span>
        </motion.button>
    );
}
