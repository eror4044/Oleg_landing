'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePurchaseModal } from './PurchaseModalContext';
import { X } from 'lucide-react';

export default function PurchaseModal() {
    const { open, closeModal } = usePurchaseModal();

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-[#111] text-light rounded-3xl p-8 w-[90%] max-w-md border border-[rgba(251,174,88,0.3)] shadow-[0_0_40px_rgba(251,174,88,0.3)]"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-[#FFD9B5]/80 hover:text-accent transition"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-bold text-[rgba(251,174,88,1)] mb-3 text-center">
                            Купи інтенсив зі знижкою −82%
                        </h2>
                        <p className="text-[#FFD9B5]/80 text-sm text-center mb-6">
                            Отримай 8 бонусних матеріалів і стартуй до нової себе 💪
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full rounded-2xl bg-gradient-to-r from-[rgba(251,174,88,1)] to-[rgba(231,104,31,1)] text-dark font-bold py-4 text-lg shadow-[0_0_40px_rgba(251,174,88,0.3)]"
                        >
                            🔥 Купити зараз
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
