'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = auraRef.current;
    if (!el) return;

    let frame = 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || 0;
          // лёгкое смещение (чем дальше прокрутка, тем чуть больше параллакса)
          const translate = scrollY * 0.03;
          el.style.transform = `translate3d(0, ${translate}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none will-change-transform"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      {/* === Основная дымная волна === */}
      <div
        className="absolute inset-0 opacity-45 blur-[100px] animate-[smokeDrift_38s_ease-in-out_infinite]"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(251,174,88,0.22), rgba(231,104,31,0.16), rgba(251,174,88,0.22))',
        }}
      />

      {/* === Вторичная волна === */}
      <div
        className="absolute inset-0 opacity-35 blur-[120px] animate-[smokeWave_52s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 40% 60%, rgba(231,104,31,0.18), transparent 75%)',
        }}
      />

      {/* === Мягкое дыхание / свечение === */}
      <div
        className="absolute inset-0 opacity-25 blur-[140px] animate-[auraBreath_20s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(251,174,88,0.12), transparent 80%)',
        }}
      />

      <style jsx global>{`
        @keyframes smokeDrift {
          0% {
            transform: translate3d(-2%, -2%, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate3d(2%, 3%, 0) rotate(180deg) scale(1.05);
          }
          100% {
            transform: translate3d(-2%, -2%, 0) rotate(360deg) scale(1);
          }
        }

        @keyframes smokeWave {
          0% {
            transform: translate3d(2%, -3%, 0) rotate(0deg) scale(1.05);
          }
          50% {
            transform: translate3d(-2%, 2%, 0) rotate(180deg) scale(0.96);
          }
          100% {
            transform: translate3d(2%, -3%, 0) rotate(360deg) scale(1.05);
          }
        }

        @keyframes auraBreath {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
