'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePurchaseModal } from './PurchaseModalContext';

const BONUS_TIMER_SECONDS = 2280; // ~38 минут

export default function BonusTimer({ discount = 90 }: { discount?: number }) {
  const { openModal } = usePurchaseModal();
  const [timeLeft, setTimeLeft] = useState(BONUS_TIMER_SECONDS);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = window.setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const timer = useMemo(() => {
    const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const s = String(timeLeft % 60).padStart(2, '0');
    return `${m}:${s}`;
  }, [timeLeft]);

  return (
    <div className="mt-8 w-full max-w-sm mx-auto flex flex-col items-center rounded-2xl bg-gradient-to-b from-white/85 to-[#fff5f3]/90 backdrop-blur-sm px-5 py-6 text-[#1a1a1a] shadow-[0_6px_24px_rgba(255,126,95,0.15)] ring-1 ring-[#ffdce7] sm:max-w-none sm:px-8">
      {/* === Header === */}
      <div className="flex items-center justify-center gap-2 text-center">
        <span className="text-xl leading-none">🔥</span>
        <p className="text-[0.95rem] leading-snug text-[#333]">
          <span className="font-semibold text-[#ff4fa2]">Увага!</span> Бонуси активні лише сьогодні
        </p>
      </div>

      {/* === Price block === */}
      <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-3">
        <p className="text-[1.7rem] font-extrabold text-[#ff4fa2] leading-none">399 ₴</p>
        <p className="text-sm line-through text-[#999] leading-none">3999 ₴</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_10px_rgba(255,126,95,0.3)]">
          −{discount}%
        </span>
      </div>

      {/* === Discount + Timer === */}
      <div className="mt-4 flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3">
        <div className="inline-flex items-center rounded-full border border-[#ff4fa2] px-4 py-1 text-[#ff4fa2] shadow-[0_2px_10px_rgba(255,79,162,0.15)]">
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em]">Знижка</span>
          <span className="ml-1 text-[1rem] font-bold">−{discount}%</span>
        </div>
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#666]">
          Діє ще{' '}
          <span className="ml-1 text-[1rem] font-extrabold text-[#ff4fa2]">{timer}</span>
        </p>
      </div>

      {/* === Progress bar === */}
      <div className="mt-2 h-[3px] w-[70%] rounded-full bg-[#ffe4ee] sm:w-[60%]">
        <div
          className="h-[3px] rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] transition-all"
          style={{ width: `${(timeLeft / BONUS_TIMER_SECONDS) * 100}%` }}
        />
      </div>

      {/* === CTA === */}
      <button
        onClick={openModal}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-8 py-3 text-[0.95rem] font-semibold uppercase text-white shadow-[0_8px_20px_rgba(255,79,162,0.25)] transition hover:scale-[1.04] active:scale-[0.98] sm:w-auto"
      >
        Взяти участь
      </button>
    </div>
  );
}
