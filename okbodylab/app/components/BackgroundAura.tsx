'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = auraRef.current;
    if (!node) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || 0;
        node.style.transform = `translate3d(0, ${scrollY * 0.04}px, 0)`;
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={auraRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden will-change-transform"
      style={{ background: 'linear-gradient(160deg, #FFF5EB 0%, #FFFFFF 55%, #FFEFE5 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-60 blur-[110px] animate-[pastelDrift_42s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255, 180, 123, 0.45), transparent 45%), radial-gradient(circle at 80% 25%, rgba(255, 126, 95, 0.38), transparent 50%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-40 blur-[140px] animate-[pastelWave_60s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 30% 70%, rgba(255, 205, 176, 0.5), transparent 60%), radial-gradient(circle at 75% 65%, rgba(255, 186, 150, 0.45), transparent 65%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-35 blur-[150px] animate-[glowBreath_26s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 206, 186, 0.45), transparent 70%)',
        }}
      />

      <style jsx global>{`
        @keyframes pastelDrift {
          0% {
            transform: translate3d(-4%, -3%, 0) scale(1);
          }
          50% {
            transform: translate3d(3%, 2%, 0) scale(1.05);
          }
          100% {
            transform: translate3d(-4%, -3%, 0) scale(1);
          }
        }

        @keyframes pastelWave {
          0% {
            transform: translate3d(3%, 4%, 0) scale(1.05);
          }
          50% {
            transform: translate3d(-3%, -3%, 0) scale(0.97);
          }
          100% {
            transform: translate3d(3%, 4%, 0) scale(1.05);
          }
        }

        @keyframes glowBreath {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
