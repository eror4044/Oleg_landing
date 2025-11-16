'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { usePurchaseModal } from './PurchaseModalContext';

export default function PurchaseModal() {
  const { open, closeModal } = usePurchaseModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-dark/50 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-[90%] max-w-lg overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 p-8 shadow-glow backdrop-blur-lg"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand text-dark transition hover:bg-secondary/40"
              aria-label="Закрити"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4 text-center text-dark">
              <p className="inline-flex rounded-full bg-primary/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Знижка −90%
              </p>
              <h2 className="font-display text-3xl">Оплатити інтенсив сьогодні</h2>
              <p className="text-sm text-slate">
                Отримай миттєвий доступ до Fit Intensive, бонусів і чату підтримки. Після оплати вся
                інформація надходить на твою пошту.
              </p>
              <div className="rounded-3xl bg-sand/80 p-4 text-sm text-slate">
                <p className="font-semibold text-primary">До списку бонусів входять:</p>
                <p>щоденник харчування, 5 рецептів, релакс-практика, чат підтримки і ще 4 подарунки.</p>
              </div>
              <motion.a
                href="https://secure.wayforpay.com/button/b6f9c11949069"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="btn-cta w-full justify-center"
              >
                Перейти до оплати
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
