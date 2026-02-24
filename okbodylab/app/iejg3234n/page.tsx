'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════
   GLOBAL FIXED CANVAS — scroll-reactive particles
   ═══════════════════════════════════════════════ */
function GlobalParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    // track scroll velocity
    let lastScrollY = window.scrollY;
    let scrollVel = 0;   // 0–1 normalised burst
    let scrollDecay = 0; // smoothed velocity

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      scrollVel = Math.min(delta / 40, 1); // clamp 0-1
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Particle = {
      x: number; y: number;
      baseVx: number; baseVy: number;
      r: number; baseOpacity: number;
      color: string; pulse: number; pulseSpeed: number;
    };

    const colors = ['#a855f7', '#ec4899', '#8b5cf6', '#f472b6', '#c084fc', '#e879f9', '#d946ef'];
    const COUNT = 110;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseVx: (Math.random() - 0.5) * 0.45,
      baseVy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2.8 + 0.5,
      baseOpacity: Math.random() * 0.45 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.022 + 0.007,
    }));

    const draw = () => {
      // Smooth scroll decay
      scrollDecay += (scrollVel - scrollDecay) * 0.12;
      scrollVel *= 0.88; // dampen each frame
      const boost = 1 + scrollDecay * 5;   // speed multiplier
      const glowBoost = 1 + scrollDecay * 3; // glow multiplier

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.baseVx * boost;
        p.y += p.baseVy * boost;
        p.pulse += p.pulseSpeed * boost;
        if (p.x < 0) { p.x = 0; p.baseVx *= -1; }
        if (p.x > canvas.width) { p.x = canvas.width; p.baseVx *= -1; }
        if (p.y < 0) { p.y = 0; p.baseVy *= -1; }
        if (p.y > canvas.height) { p.y = canvas.height; p.baseVy *= -1; }

        const sinVal = Math.sin(p.pulse);
        const glowR = p.r * (1 + sinVal * 0.4) * glowBoost;
        const opacity = p.baseOpacity * (0.65 + sinVal * 0.35) * Math.min(glowBoost, 2.2);

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR * 9);
        grd.addColorStop(0, p.color + Math.round(Math.min(opacity, 1) * 220).toString(16).padStart(2, '0'));
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR * 9, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(opacity * 1.6, 1);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen', opacity: 0.45 }}
    />
  );
}

/* ═══════════════════════════════════════════════
   COUNTDOWN TIMER
   ═══════════════════════════════════════════════ */
function useCountdown(hours: number) {
  const endRef = useRef<number>(0);
  const [time, setTime] = useState({ h: hours, m: 59, s: 59 });

  useEffect(() => {
    const stored = localStorage.getItem('vip_countdown_end');
    if (stored && Number(stored) > Date.now()) {
      endRef.current = Number(stored);
    } else {
      endRef.current = Date.now() + hours * 3600_000;
      localStorage.setItem('vip_countdown_end', String(endRef.current));
    }
    const tick = () => {
      const diff = Math.max(0, endRef.current - Date.now());
      setTime({
        h: Math.floor(diff / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [hours]);

  return time;
}

function CountdownBadge() {
  const { h, m, s } = useCountdown(23);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 rounded-full border border-pink-400/70 bg-pink-500/20 px-5 py-2.5 text-[0.9rem] font-extrabold text-pink-200"
      animate={{
        boxShadow: [
          '0 0 12px rgba(236,72,153,0.5), 0 0 30px rgba(236,72,153,0.25)',
          '0 0 24px rgba(236,72,153,0.9), 0 0 60px rgba(236,72,153,0.5)',
          '0 0 12px rgba(236,72,153,0.5), 0 0 30px rgba(236,72,153,0.25)',
        ],
      }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-90" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-300" />
      </span>
      Ціна зникає через{' '}
      <span className="tabular-nums text-white">{pad(h)}:{pad(m)}:{pad(s)}</span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════ */
function VipModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative w-full sm:max-w-md overflow-hidden rounded-t-[2.5rem] sm:rounded-3xl bg-[#0c0c1e] border-t-2 border-purple-500/60 sm:border-2 p-7 pb-12 shadow-[0_-30px_80px_rgba(168,85,247,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-white/20 sm:hidden" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition"
              aria-label="Закрити"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="space-y-5">
              <div>
                <span className="inline-flex rounded-full bg-purple-500/20 border border-purple-500/40 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-purple-300 mb-3">
                  🔥 Залишилось місць: 7
                </span>
                <h2 className="text-[1.7rem] font-extrabold text-white leading-tight">
                  Починай сьогодні —{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    перший результат за 7 днів
                  </span>
                </h2>
              </div>
              <div className="rounded-2xl bg-[#12122a] border border-white/15 p-4 space-y-2">
                {[
                  { icon: '🎥', text: '4 тижні відеоуроків із завданнями' },
                  { icon: '🧠', text: 'Система впевненості від нуля до дій' },
                  { icon: '💬', text: 'Скрипти знайомств + розбір твоїх помилок' },
                  { icon: '⚡', text: 'Закритий Telegram-чат із куратором 24/7' },
                  { icon: '🎯', text: 'Особистий фідбек від Олега' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-[0.88rem] text-white/80">
                    <span className="text-base shrink-0">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <p className="text-[2.2rem] font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">
                    1999 грн
                  </p>
                  <p className="text-white/35 text-sm line-through mt-0.5">3998 грн</p>
                </div>
                <span className="rounded-2xl bg-pink-500/20 border border-pink-500/40 px-4 py-2 text-[0.85rem] font-extrabold text-pink-300">
                  −50% 🔥
                </span>
              </div>
              <motion.a
                href="https://secure.wayforpay.com/button/b6f9c11949069"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(168,85,247,0.8)' }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-[1.05rem] font-extrabold text-white shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                Оплатити зараз →
              </motion.a>
              <p className="text-center text-[0.68rem] text-white/30">
                🔒 Безпечна оплата · Доступ одразу · Повернення за 7 днів
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   STICKY CTA
   ═══════════════════════════════════════════════ */
function StickyVipCTA({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-[150] px-3 pb-4 pt-1"
        >
          <motion.button
            onClick={onClick}
            animate={{
              boxShadow: [
                '0 0 30px rgba(168,85,247,0.55), 0 0 60px rgba(236,72,153,0.3)',
                '0 0 65px rgba(168,85,247,1), 0 0 120px rgba(236,72,153,0.7)',
                '0 0 30px rgba(168,85,247,0.55), 0 0 60px rgba(236,72,153,0.3)',
              ],
              scale: [1, 1.015, 1],
            }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-lg mx-auto flex items-center justify-between rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 px-5 py-3.5 border border-purple-400/50"
          >
            <div className="text-left">
              <p className="text-[0.6rem] text-white/60 uppercase tracking-widest font-bold">🔥 Лімітована ціна</p>
              <p className="text-white font-extrabold text-[1rem] leading-none mt-0.5">Хочу в марафон</p>
            </div>
            <div className="text-right">
              <p className="text-[0.62rem] text-white/50 line-through">3998 грн</p>
              <p className="text-white font-extrabold text-[1.2rem] leading-none">1999 грн</p>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   REVEAL WRAPPER
   ═══════════════════════════════════════════════ */
function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function VipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);

  return (
    <>
      {/* Global canvas — fixed, full-page, scroll-reactive */}
      <GlobalParticleCanvas />

      <VipModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <StickyVipCTA onClick={open} />

      {/* 1. HERO */}
      <section className="relative h-screen overflow-hidden flex">
        <div className="absolute inset-0 bg-[#06060f]" />
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-purple-900/30 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-pink-900/20 blur-[100px] pointer-events-none" />

        <div className="absolute inset-0 lg:left-auto lg:w-1/2">
          <Image
            src="/images/oleg-coach-black.jpg"
            alt="Олег Козлов"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/75 to-[#06060f]/20 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#06060f] via-[#06060f]/40 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-end lg:justify-center w-full lg:w-1/2 px-6 pb-12 sm:px-10 lg:px-16 xl:px-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <CountdownBadge />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 text-[2.8rem] font-extrabold leading-[1.0] sm:text-[3.4rem] lg:text-[4rem]"
          >
            <span className="text-white">Вона не чекатиме.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Дій першим.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-5 text-white/80 text-[1.1rem] leading-relaxed max-w-[420px]"
          >
            За 4 тижні ти перестанеш боятись і почнеш{' '}
            <span className="text-white font-bold">підходити, фліртувати</span>{' '}та отримувати{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">реальні побачення.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <motion.button
              onClick={open}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: [
                  '0 0 25px rgba(168,85,247,0.5), 0 0 50px rgba(236,72,153,0.25)',
                  '0 0 55px rgba(168,85,247,0.95), 0 0 100px rgba(236,72,153,0.6)',
                  '0 0 25px rgba(168,85,247,0.5), 0 0 50px rgba(236,72,153,0.25)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-9 py-4 text-[1.05rem] font-extrabold text-white"
            >
              Хочу в марафон →
            </motion.button>
            <div className="text-left">
              <motion.p
                className="text-[2rem] font-extrabold leading-none bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                1999 <span className="text-[1.1rem]">грн</span>
              </motion.p>
              <p className="text-white/35 text-xs line-through">3998 грн</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {[
              { label: '🔒 Безпечна оплата', color: '#22d3ee', glow: 'rgba(34,211,238,', border: 'border-cyan-400/60', bg: 'bg-cyan-400/15', text: 'text-cyan-200' },
              { label: '⚡ Доступ одразу',   color: '#facc15', glow: 'rgba(250,204,21,',  border: 'border-yellow-400/60', bg: 'bg-yellow-400/15', text: 'text-yellow-200' },
              { label: '✅ 7 днів гарантія', color: '#4ade80', glow: 'rgba(74,222,128,',  border: 'border-green-400/60', bg: 'bg-green-400/15', text: 'text-green-200' },
            ].map(({ label, glow, border, bg, text }, i) => (
              <motion.span
                key={label}
                className={`inline-flex items-center rounded-full border ${border} ${bg} ${text} px-4 py-2 text-[0.78rem] font-bold`}
                animate={{
                  boxShadow: [
                    `0 0 6px ${glow}0.35), 0 0 14px ${glow}0.15)`,
                    `0 0 16px ${glow}0.85), 0 0 36px ${glow}0.45)`,
                    `0 0 6px ${glow}0.35), 0 0 14px ${glow}0.15)`,
                  ],
                  scale: [1, 1.04, 1],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 lg:left-1/4">
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="text-white/20">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 4v14M5 12l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="relative z-[2] border-y border-purple-500/20 bg-[#0d0d20] py-7 overflow-hidden">
        <Reveal>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: '500+', label: 'чоловіків вже діють', glow: 'rgba(168,85,247,' },
              { num: '89%',  label: 'побачення за перший місяць', glow: 'rgba(236,72,153,' },
              { num: '4 тижні', label: 'від страху — до дій', glow: 'rgba(192,132,252,' },
              { num: '8+ років', label: 'досвід наставника', glow: 'rgba(244,114,182,' },
            ].map(({ num, label, glow }, i) => (
              <div key={label}>
                <motion.p
                  className="text-[2.2rem] font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent leading-none"
                  animate={{
                    textShadow: [
                      `0 0 8px ${glow}0)`,
                      `0 0 24px ${glow}0.9), 0 0 48px ${glow}0.5)`,
                      `0 0 8px ${glow}0)`,
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >{num}</motion.p>
                <p className="text-white/70 text-[0.82rem] font-medium mt-1.5 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. PAIN */}
      <section className="relative py-20 px-6 sm:px-10 lg:py-28 overflow-hidden">
        {/* bg accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/15 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-rose-900/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-rose-500/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-rose-300 mb-6"
                animate={{ boxShadow: ['0 0 8px rgba(244,63,94,0.25)', '0 0 22px rgba(244,63,94,0.7)', '0 0 8px rgba(244,63,94,0.25)'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🚨 Впізнаєш себе?
              </motion.span>
              <h2 className="text-[2.2rem] font-extrabold leading-tight lg:text-[3rem]">
                Поки ти думаєш —{' '}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">вона йде далі.</span>
                <br /><span className="text-white/70 text-[1.6rem] lg:text-[2rem] font-bold">І це відбувається щодня.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { n: '01', icon: '😶', line1: 'Мовчиш.', line2: 'Вона пішла.', sub: 'Черговий раз. І ти це знаєш.' },
              { n: '02', icon: '🔄', line1: 'Friendzone.', line2: 'Назавжди.', sub: '«Ти класний друг» — гірше ніж відмова.' },
              { n: '03', icon: '👀', line1: 'Не підійшов.', line2: 'Знову.', sub: 'Жалкуєш вже через 10 секунд.' },
              { n: '04', icon: '📱', line1: 'В чаті — ок.', line2: 'Вживу — ступор.', sub: 'Слова зникають коли вона поруч.' },
              { n: '05', icon: '💭', line1: '«Не для мене.»', line2: 'Це страх.', sub: 'Ця думка — єдина перешкода.' },
              { n: '06', icon: '⏳', line1: 'Ще один рік', line2: 'без змін.', sub: 'Потім буде пізно. І ти це відчуваєш.' },
            ].map(({ n, icon, line1, line2, sub }, i) => (
              <Reveal key={n} delay={i * 0.07}>
                <motion.div
                  className="group relative rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-950/60 to-[#12090e] p-5 h-full overflow-hidden cursor-default"
                  whileHover={{ borderColor: 'rgba(244,63,94,0.55)', boxShadow: '0 0 28px rgba(244,63,94,0.18)' }}
                  transition={{ duration: 0.2 }}
                >
                  {/* top stripe */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-600/60 via-pink-500/40 to-transparent" />
                  {/* large bg number */}
                  <span className="absolute bottom-2 right-3 text-[4.5rem] font-extrabold text-rose-500/10 leading-none select-none pointer-events-none">{n}</span>

                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-[1.6rem] leading-none shrink-0">{icon}</span>
                    <div>
                      <p className="font-extrabold text-white text-[1rem] leading-snug">{line1}</p>
                      <p className="font-extrabold text-rose-300 text-[1rem] leading-snug">{line2}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-[0.82rem] leading-snug group-hover:text-white/80 transition-colors italic">{sub}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <motion.div
              className="mt-8 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-900/60 to-pink-900/40 px-6 py-5 flex items-center gap-5"
              animate={{ boxShadow: ['0 0 0px rgba(168,85,247,0)', '0 0 30px rgba(168,85,247,0.25)', '0 0 0px rgba(168,85,247,0)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-[2rem] shrink-0">⚡</div>
              <div>
                <p className="text-white font-extrabold text-[1.1rem]">Все це — лікується. За 4 тижні.</p>
                <p className="text-white/65 text-[0.88rem] mt-0.5">500+ чоловіків вже пройшли цей шлях. <strong className="text-white">Зараз — твоя черга.</strong></p>
              </div>
              <div className="ml-auto shrink-0 hidden sm:block">
                <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-[0.8rem] font-extrabold text-white whitespace-nowrap">500+ учасників</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* 4. PHOTO BREAK — photo left, insight right */}
      <section className="relative z-[2] overflow-hidden">
        {/* BG glow blobs */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/30 blur-[120px] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-pink-900/20 blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row">
          {/* PHOTO — left */}
          <div className="relative lg:w-[48%] shrink-0">
            <Image
              src="/images/IMG_6929.jpg"
              alt="Впевненість"
              width={1200}
              height={900}
              className="w-full h-auto block lg:h-full lg:object-cover lg:object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* right-side fade into content */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#06060f]" />
            {/* bottom fade on mobile */}
            <div className="lg:hidden absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#06060f] to-transparent" />
          </div>

          {/* CONTENT — right */}
          <div className="relative flex-1 flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-14 lg:py-20 bg-[#06060f]">
            <Reveal>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-purple-300 mb-6"
                animate={{
                  boxShadow: [
                    '0 0 8px rgba(168,85,247,0.3)',
                    '0 0 24px rgba(168,85,247,0.8)',
                    '0 0 8px rgba(168,85,247,0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                💡 Те, що ти боїшся знати
              </motion.span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-[2rem] font-extrabold leading-tight lg:text-[2.6rem] mb-6">
                Це <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">не зовнішність.</span>
                <br />Це <span className="text-white">100%</span> внутрішня гра.
              </h2>
            </Reveal>

            <div className="space-y-4 mb-8">
              {[
                { num: '01', icon: '🔥', title: 'Страх — це навичка', text: 'І вона вимикається. За 4 тижні.', color: 'text-purple-300' },
                { num: '02', icon: '💪', title: 'Тіло каже все', text: '80% привабливості — до першого слова. Постава. Погляд. Енергія.', color: 'text-fuchsia-300' },
                { num: '03', icon: '⚡', title: 'Дії > Думки', text: 'Не планувати. Діяти. З першого дня.', color: 'text-pink-300' },
              ].map(({ num, icon, title, text, color }, i) => (
                <Reveal key={num} delay={0.1 + i * 0.08}>
                  <motion.div
                    className="flex gap-4 rounded-2xl border border-white/12 bg-[#111126] p-4 hover:border-purple-500/50 hover:bg-[#141432] transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <span className={`text-[1.6rem] font-extrabold ${color} opacity-60 leading-none w-8 shrink-0`}>{num}</span>
                    <div>
                      <p className="font-extrabold text-white text-[0.95rem] mb-1">{icon} {title}</p>
                      <p className="text-white/70 text-[0.82rem] leading-snug">{text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <motion.button
                onClick={open}
                className="self-start rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3.5 text-[0.95rem] font-extrabold text-white"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168,85,247,0.4)',
                    '0 0 50px rgba(168,85,247,0.9), 0 0 80px rgba(236,72,153,0.5)',
                    '0 0 20px rgba(168,85,247,0.4)',
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Хочу в марафон →
              </motion.button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. TRANSFORMATION */}
      <section className="relative py-20 px-6 sm:px-10 lg:py-28 bg-[#0c0c1c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/20 via-transparent to-purple-950/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-purple-300 mb-5"
                animate={{ boxShadow: ['0 0 8px rgba(168,85,247,0.2)', '0 0 22px rgba(168,85,247,0.6)', '0 0 8px rgba(168,85,247,0.2)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Трансформація
              </motion.span>
              <h2 className="text-[2.2rem] font-extrabold leading-tight lg:text-[2.8rem]">
                Два варіанти твого{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">майбутнього</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            {/* BEFORE */}
            <Reveal>
              <div className="relative rounded-2xl border border-rose-500/35 bg-gradient-to-br from-rose-950/70 to-[#100a0c] p-6 h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-600 via-rose-400 to-transparent" />
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-rose-500/5 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-extrabold text-sm">✕</div>
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-rose-400">Зараз</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: '😶', text: 'Мовчиш — вона пішла' },
                    { icon: '👀', text: 'Боїшся підійти першим' },
                    { icon: '🔄', text: 'Застряг у friendzone' },
                    { icon: '💭', text: '«Я недостатньо для неї»' },
                    { icon: '⏳', text: 'Вже рік «наступного разу»' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 rounded-xl bg-rose-500/10 border border-rose-500/15 px-3.5 py-2.5">
                      <span className="text-base shrink-0">{icon}</span>
                      <p className="text-white/70 text-[0.85rem] font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* AFTER */}
            <Reveal delay={0.12}>
              <div className="relative rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-950/70 to-[#0d0916] p-6 h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-400 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[3px] blur-sm bg-gradient-to-r from-purple-500 via-pink-400 to-transparent" />
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-purple-500/25 border border-purple-400/50 flex items-center justify-center text-purple-300 font-extrabold text-sm">✓</div>
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-purple-300">Після 4 тижнів</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: '💬', text: 'Підходиш першим — легко' },
                    { icon: '🔥', text: 'Флірт — як дихати' },
                    { icon: '📲', text: 'Номер — в першу зустріч' },
                    { icon: '💌', text: 'Вона пише першою' },
                    { icon: '🏆', text: 'Побачення щотижня' },
                  ].map(({ icon, text }, i) => (
                    <motion.div
                      key={text}
                      className="flex items-center gap-3 rounded-xl bg-purple-500/15 border border-purple-400/25 px-3.5 py-2.5"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                    >
                      <span className="text-base shrink-0">{icon}</span>
                      <p className="text-white text-[0.85rem] font-semibold">{text}</p>
                      <span className="ml-auto text-purple-400 text-xs font-bold shrink-0">✓</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* VS divider pill */}
          <div className="flex justify-center -mt-[calc(50%-1rem)] mb-0 pointer-events-none lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-0">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-white/20 flex items-center justify-center text-white font-extrabold text-[0.75rem] shadow-xl z-10"
              animate={{ boxShadow: ['0 0 12px rgba(168,85,247,0.5)', '0 0 35px rgba(168,85,247,1)', '0 0 12px rgba(168,85,247,0.5)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >VS</motion.div>
          </div>
        </div>
      </section>

      {/* 6. COACH */}
      <section className="relative z-[2] overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:min-h-[85vh]">
          <Reveal className="relative h-[90vw] sm:h-[75vw] lg:h-full lg:min-h-[85vh] overflow-hidden">
            <Image src="/images/oleg-coach-white.jpg" alt="Олег Козлов" fill className="object-cover object-[center_30%]" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#06060f]" />
          </Reveal>
          <div className="relative px-6 py-14 sm:px-10 lg:px-14 lg:py-20 flex flex-col justify-center bg-[#06060f]">
            <Reveal>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-purple-400 mb-4">Твій наставник</p>
              <h2 className="text-[2.2rem] font-extrabold leading-tight lg:text-[2.8rem] mb-1">Олег Козлов</h2>
              <p className="text-purple-300 text-sm font-bold uppercase tracking-wide mb-8">Ментор з впевненості · Коуч зі знайомств</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🏆', text: '8+ років роботи з чоловіками над впевненістю' },
                  { icon: '👥', text: '500+ учасників вже знайомляться без страху' },
                  { icon: '🚫', text: 'Жодних маніпуляцій — лише справжня впевненість, що притягує' },
                  { icon: '💡', text: '90% невдач — це не зовнішність, а внутрішня невпевненість і страх' },
                ].map(({ icon, text }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="flex items-start gap-3.5">
                    <span className="text-xl shrink-0">{icon}</span>
                    <p className="text-white/85 text-[0.9rem] leading-snug">{text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/[0.12] px-5 py-4 text-[0.92rem] text-white/80 italic leading-relaxed">
                «Я сам був тим хлопцем, який не міг подивитися їй в очі. <span className="text-white font-bold not-italic">Тепер я вчу інших пройти цей шлях за тижні, а не за роки.</span>»
                <p className="mt-2 text-purple-300 font-semibold not-italic text-[0.8rem]">— Олег Козлов</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PROGRAM */}
      <section className="relative z-[2] py-20 px-6 sm:px-10 lg:py-28 overflow-hidden">
        {/* bg blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <Reveal>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-purple-300 mb-5"
              animate={{ boxShadow: ['0 0 8px rgba(168,85,247,0.3)', '0 0 24px rgba(168,85,247,0.8)', '0 0 8px rgba(168,85,247,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              📋 Програма марафону
            </motion.span>
            <h2 className="text-[2rem] font-extrabold leading-tight lg:text-[2.8rem] mb-2">
              4 тижні,{' '}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                що змінять твоє життя
              </span>
            </h2>
            <p className="text-white/55 mb-10 text-[0.95rem] max-w-lg">Кожен тиждень — конкретна навичка. Кожен день — дія. <strong className="text-white">Ніякої води.</strong></p>
          </Reveal>

          {/* Week progress bar */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-0 mb-10 overflow-x-auto pb-2">
              {[
                { label: 'Тиждень 1', color: 'bg-purple-500', glow: 'rgba(168,85,247,0.8)' },
                { label: 'Тиждень 2', color: 'bg-cyan-400', glow: 'rgba(34,211,238,0.8)' },
                { label: 'Тиждень 3', color: 'bg-pink-500', glow: 'rgba(236,72,153,0.8)' },
                { label: 'Тиждень 4', color: 'bg-amber-400', glow: 'rgba(251,191,36,0.8)' },
              ].map(({ label, color, glow }, i) => (
                <div key={label} className="flex items-center shrink-0">
                  <motion.div
                    className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-[0.75rem] font-extrabold text-white shrink-0`}
                    animate={{ boxShadow: [`0 0 0px ${glow.replace('0.8', '0')}`, `0 0 16px ${glow}`, `0 0 0px ${glow.replace('0.8', '0')}`] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  >{i + 1}</motion.div>
                  <p className="text-white/50 text-[0.7rem] font-semibold ml-2 mr-1 whitespace-nowrap">{label}</p>
                  {i < 3 && <div className="w-8 sm:w-16 h-[2px] bg-gradient-to-r from-white/20 to-white/5 mx-2 shrink-0" />}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-4">
            {[
              {
                num: '01', week: 'Тиждень 1', icon: '🧠', title: 'Фундамент впевненості',
                desc: 'Вбиваємо страх знайомства з коренем. Переписуємо сценарій «я недостатньо».',
                tags: ['Психологія', 'Мислення', 'Практика'],
                from: 'from-purple-500', to: 'to-violet-600',
                cardFrom: 'from-purple-900/80', cardTo: 'to-[#0e0b1a]',
                border: 'border-purple-500/50', hoverBorder: 'hover:border-purple-400/80',
                numColor: 'text-purple-400', tagBorder: 'border-purple-400/40', tagBg: 'bg-purple-500/25', tagText: 'text-purple-200',
                glow: 'rgba(168,85,247,',
              },
              {
                num: '02', week: 'Тиждень 2', icon: '💪', title: 'Мова тіла та харизма',
                desc: 'Постава, погляд, голос. Ти приваблюєш до першого слова.',
                tags: ['Тіло', 'Голос', 'Харизма'],
                from: 'from-cyan-500', to: 'to-sky-600',
                cardFrom: 'from-cyan-900/80', cardTo: 'to-[#090e16]',
                border: 'border-cyan-500/50', hoverBorder: 'hover:border-cyan-400/80',
                numColor: 'text-cyan-400', tagBorder: 'border-cyan-400/40', tagBg: 'bg-cyan-500/25', tagText: 'text-cyan-200',
                glow: 'rgba(34,211,238,',
              },
              {
                num: '03', week: 'Тиждень 3', icon: '🔥', title: 'Підхід. Флірт. Номер.',
                desc: 'Кафе, вулиця, DM. Конкретні скрипти для реальних ситуацій.',
                tags: ['Скрипти', 'Флірт', 'DM'],
                from: 'from-pink-500', to: 'to-rose-600',
                cardFrom: 'from-pink-900/80', cardTo: 'to-[#160b10]',
                border: 'border-pink-500/50', hoverBorder: 'hover:border-pink-400/80',
                numColor: 'text-pink-400', tagBorder: 'border-pink-400/40', tagBg: 'bg-pink-500/25', tagText: 'text-pink-200',
                glow: 'rgba(236,72,153,',
              },
              {
                num: '04', week: 'Тиждень 4', icon: '🎯', title: 'Побачення. Результат.',
                desc: 'Номер → побачення → продовження. Як не злити момент.',
                tags: ['Побачення', 'Номер', 'Результат'],
                from: 'from-amber-400', to: 'to-orange-500',
                cardFrom: 'from-amber-900/80', cardTo: 'to-[#160e07]',
                border: 'border-amber-500/50', hoverBorder: 'hover:border-amber-400/80',
                numColor: 'text-amber-400', tagBorder: 'border-amber-400/40', tagBg: 'bg-amber-500/25', tagText: 'text-amber-200',
                glow: 'rgba(251,191,36,',
              },
              {
                num: '05', week: 'Бонус', icon: '✨', title: 'Внутрішня свобода',
                desc: 'Незалежність від оцінки інших. Стань тим, кого помічають.',
                tags: ['Свобода', 'Харизма', 'Фінал'],
                from: 'from-green-500', to: 'to-emerald-600',
                cardFrom: 'from-green-900/80', cardTo: 'to-[#090f0d]',
                border: 'border-green-500/50', hoverBorder: 'hover:border-green-400/80',
                numColor: 'text-green-400', tagBorder: 'border-green-400/40', tagBg: 'bg-green-500/25', tagText: 'text-green-200',
                glow: 'rgba(74,222,128,',
              },
              {
                num: '06', week: 'Бонус', icon: '💬', title: 'Розбір твоїх помилок',
                desc: 'Реальні кейси: чому не відписала, чому friendzone, що змінити.',
                tags: ['Кейси', 'Практика', 'Фідбек'],
                from: 'from-fuchsia-500', to: 'to-purple-600',
                cardFrom: 'from-fuchsia-900/80', cardTo: 'to-[#120b18]',
                border: 'border-fuchsia-500/50', hoverBorder: 'hover:border-fuchsia-400/80',
                numColor: 'text-fuchsia-400', tagBorder: 'border-fuchsia-400/40', tagBg: 'bg-fuchsia-500/25', tagText: 'text-fuchsia-200',
                glow: 'rgba(217,70,239,',
              },
            ].map((mod, i) => (
              <Reveal key={mod.num} delay={i * 0.07}>
                <motion.div
                  className={`group relative rounded-2xl border ${mod.border} ${mod.hoverBorder} bg-gradient-to-br ${mod.cardFrom} ${mod.cardTo} transition-all duration-300 p-5 flex gap-4 h-full overflow-hidden`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 30px ${mod.glow}0.35), 0 0 60px ${mod.glow}0.15)`,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* top color stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${mod.from} ${mod.to} opacity-70`} />

                  {/* large number */}
                  <div className="shrink-0 pt-1">
                    <span className={`text-[2.8rem] font-extrabold ${mod.numColor} opacity-50 leading-none block w-12 group-hover:opacity-80 transition-opacity`}>{mod.num}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{mod.icon}</span>
                      <p className={`text-[0.6rem] font-bold uppercase tracking-widest ${mod.numColor} opacity-80`}>{mod.week}</p>
                    </div>
                    <p className="font-extrabold text-white text-[1rem] mb-2 leading-snug">{mod.title}</p>
                    <p className="text-[0.8rem] text-white/80 leading-snug mb-3">{mod.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.tags.map(tag => (
                        <span key={tag} className={`rounded-full border ${mod.tagBorder} ${mod.tagBg} px-2.5 py-0.5 text-[0.65rem] font-semibold ${mod.tagText}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECOND PHOTO — content left, photo right */}
      <section className="relative z-[2] overflow-hidden bg-[#0e0614]">
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-950/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-700/15 blur-[140px] pointer-events-none" />
        {/* top border accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

        <div className="flex flex-col-reverse lg:flex-row">
          {/* CONTENT — left */}
          <div className="relative flex-1 flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-14 lg:py-20">
            {/* vertical accent right */}
            <div className="hidden lg:block absolute right-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-pink-500/60 to-transparent" />

            <Reveal>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-pink-400/60 bg-pink-400/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-pink-200 mb-6"
                animate={{ boxShadow: ['0 0 8px rgba(236,72,153,0.3)', '0 0 28px rgba(236,72,153,0.85)', '0 0 8px rgba(236,72,153,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🏆 Реальні результати
              </motion.span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-[2rem] font-extrabold leading-tight lg:text-[2.6rem] mb-4">
                <span className="text-white">500+</span> чоловіків
                <br />
                <span className="bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
                  вже перестали боятись.
                </span>
              </h2>
              <p className="text-white/60 text-[0.98rem] mb-8 leading-relaxed max-w-md">
                Від <span className="text-white font-semibold">«я не можу підійти»</span> до <span className="text-white font-semibold">«вона сама пише»</span>.
              </p>
            </Reveal>

            <div className="space-y-3 mb-8">
              {[
                { avatar: 'МК', name: 'Макс, Київ', result: '3 побачення за 2 тижні', color: 'from-purple-600 to-purple-800' },
                { avatar: 'ДС', name: 'Данило, Харків', result: 'Подруга стала дівчиною', color: 'from-fuchsia-600 to-pink-700' },
                { avatar: 'ВМ', name: 'Вадим, Одеса', result: 'Дівчата самі пишуть першими', color: 'from-pink-600 to-rose-700' },
              ].map(({ avatar, name, result, color }, i) => (
                <Reveal key={name} delay={0.1 + i * 0.07}>
                  <motion.div
                    className="flex items-center gap-3.5 rounded-2xl border border-pink-500/15 bg-pink-500/[0.05] backdrop-blur-sm px-4 py-3 hover:border-pink-400/40 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-[0.75rem] font-extrabold text-white shrink-0`}>{avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[0.82rem] font-semibold truncate">{name}</p>
                      <p className="text-[0.75rem] truncate"><span className="text-green-400 font-bold">✓</span> <span className="text-white/55">{result}</span></p>
                    </div>
                    <span className="text-yellow-400 text-[0.7rem] shrink-0">★★★★★</span>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* Big animated stat */}
            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-pink-500/25 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm px-5 py-4 flex items-center gap-4">
                <motion.p
                  className="text-[2.8rem] font-extrabold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent leading-none shrink-0"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >89%</motion.p>
                <p className="text-white/65 text-[0.88rem] leading-snug">знайшли <strong className="text-white">реальне побачення</strong> протягом <strong className="text-white">30 днів</strong> після старту</p>
              </div>
            </Reveal>
          </div>

          {/* PHOTO — right */}
          <div className="relative lg:w-[48%] shrink-0">
            <Image
              src="/images/IMG_6965.jpg"
              alt="Чоловіча впевненість"
              width={1200}
              height={800}
              className="w-full h-auto block lg:h-full lg:object-cover lg:object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-l from-transparent to-[#0e0614]" />
            <div className="lg:hidden absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0e0614] to-transparent" />
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 px-6 sm:px-10 lg:py-28 bg-[#0c0c1c] relative z-[2] overflow-hidden">
        <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-purple-800/15 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/60 bg-purple-400/15 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-purple-200 mb-5"
                animate={{ boxShadow: ['0 0 8px rgba(168,85,247,0.3)', '0 0 28px rgba(168,85,247,0.85)', '0 0 8px rgba(168,85,247,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                💬 Справжні історії
              </motion.span>
              <h2 className="text-[2rem] font-extrabold leading-tight lg:text-[2.6rem]">Вони <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-300 bg-clip-text text-transparent">вже зробили крок.</span></h2>
              <p className="text-white/50 text-[0.9rem] mt-3 max-w-md mx-auto">А ти досі читаєш. <strong className="text-white/80">Ось що вони кажуть:</strong></p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { avatar: 'МК', name: 'Макс, 23, Київ', result: '3 побачення за 2 тижні', text: 'Раніше навіть підійти — як пройти крізь стіну. Зараз підходжу легко. 3 дівчини самі дали номер. Це не магія — це навичка.', highlight: '3 номери за 14 днів' },
              { avatar: 'ДС', name: 'Данило, 27, Харків', result: 'Вийшов із френдзони', text: 'Рік дружив із дівчиною. Після 3-го тижня написав їй по-іншому. Тепер ми разом. Олег, це змінило все.', highlight: 'з «друга» → у стосунки' },
              { avatar: 'ВМ', name: 'Вадим, 25, Одеса', result: 'Дівчата пишуть першими', text: 'Мова тіла + погляд = відкриття. Дівчата самі починають розмову. Те, що вважав «удачею» — виявилося навичкою.', highlight: 'дівчата пишуть самі' },
            ].map(({ avatar, name, result, text, highlight }, i) => (
              <Reveal key={name} delay={i * 0.12}>
                <motion.div
                  className="rounded-2xl border border-purple-500/25 bg-gradient-to-b from-[#13132a] to-[#0c0c1c] p-6 flex flex-col gap-4 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 items-center justify-center text-white font-extrabold text-sm shrink-0 ring-2 ring-purple-500/30">{avatar}</div>
                    <div>
                      <p className="font-bold text-white text-[0.88rem]">{name}</p>
                      <p className="text-[0.7rem] text-purple-300 font-semibold">{result}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => <motion.span key={j} className="text-yellow-400 text-sm" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.15 }}>★</motion.span>)}
                  </div>
                  <p className="text-white/75 text-[0.85rem] leading-relaxed flex-1 italic">&ldquo;{text}&rdquo;</p>
                  <div className="mt-auto pt-2 border-t border-purple-500/15">
                    <p className="text-[0.72rem] font-bold uppercase tracking-wider"><span className="text-green-400">✓</span> <span className="text-green-300/80">{highlight}</span></p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA PRICING */}
      <section className="relative z-[2] py-20 px-6 sm:px-10 lg:py-28 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/25 blur-[100px] pointer-events-none" />
        <Reveal className="relative max-w-2xl mx-auto">
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#10102a] to-[#0d0d1e] p-8 lg:p-14 text-center shadow-[0_0_100px_rgba(168,85,247,0.2)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <CountdownBadge />
            <h2 className="mt-6 text-[2.2rem] font-extrabold leading-tight lg:text-[3rem]"><span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">Досить думати.</span><br/>Час діяти.</h2>
            <p className="mt-3 text-white/60 text-[0.95rem] max-w-sm mx-auto leading-relaxed">
              Кожен день без дій — ще одна <strong className="text-white">дівчина пройде мимо</strong>.
              <br/><strong className="text-pink-300">Місця обмежені. Ціна росте.</strong>
            </p>
            <div className="my-8 flex items-center justify-center gap-5">
              <div className="text-left">
                <motion.p
                  className="text-[3.5rem] font-extrabold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent leading-none lg:text-[4rem]"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(168,85,247,0)',
                      '0 0 30px rgba(168,85,247,0.8), 0 0 60px rgba(236,72,153,0.4)',
                      '0 0 0px rgba(168,85,247,0)',
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >1999</motion.p>
                <p className="text-white/40 text-sm">гривень</p>
              </div>
              <div className="text-left border-l border-white/10 pl-5 space-y-1">
                <p className="text-white/35 text-sm line-through">3998 грн</p>
                <motion.p
                  className="text-pink-300 text-sm font-extrabold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >-50% · заощаджуєш 1999 грн</motion.p>
                <p className="text-white/50 text-xs font-semibold">⏰ Ціна зросте після лічильника</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
              {[
                { icon: '🎥', text: '6 тижнів відеоуроків' },
                { icon: '💬', text: 'Закритий чат з наставником' },
                { icon: '🎯', text: 'Особистий розбір від Олега' },
                { icon: '🔥', text: 'Практичні завдання щодня' },
                { icon: '🛡️', text: '7 днів гарантія повернення' },
                { icon: '⚡', text: 'Доступ одразу після оплати' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-[0.82rem] text-white/75">
                  <span className="text-base">{icon}</span> {text}
                </div>
              ))}
            </div>
            <motion.button
              onClick={open}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  '0 0 25px rgba(168,85,247,0.5), 0 0 50px rgba(236,72,153,0.25)',
                  '0 0 60px rgba(168,85,247,1), 0 0 110px rgba(236,72,153,0.7)',
                  '0 0 25px rgba(168,85,247,0.5), 0 0 50px rgba(236,72,153,0.25)',
                ],
                scale: [1, 1.012, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 py-[1.1rem] text-[1.15rem] font-extrabold text-white mb-4 uppercase tracking-wide"
            >
              Забрати місце за 1999 грн →
            </motion.button>
            <p className="text-[0.68rem] text-white/40">🔒 Безпечна оплата WayForPay · Миттєвий доступ · Гарантія повернення</p>
          </div>
        </Reveal>
      </section>

      {/* 11. FAQ */}
      <section className="relative z-[2] py-20 px-6 sm:px-10 pb-36 max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/60 mb-5"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❓ FAQ
            </motion.span>
            <h2 className="text-[2rem] font-extrabold leading-tight lg:text-[2.4rem]">Ще <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">сумніваєшся?</span></h2>
          </div>
        </Reveal>
        <div className="space-y-2">
          {[
            { q: 'Потрібен досвід у стосунках?', a: 'Ні. Курс створений для <strong class="text-white">будь-якого рівня</strong> — навіть якщо ти ніколи не підходив до дівчини. Саме тому він працює.' },
            { q: 'Це маніпуляції?', a: '<strong class="text-white">Жодних.</strong> Тільки психологія, впевненість і чесна комунікація. Ніяких брудних трюків — тільки те, що працює довгостроково.' },
            { q: 'Скільки часу на день?', a: '<strong class="text-white">30–45 хв.</strong> Всі матеріали записані — дивишся у зручний час. Практика вбудована у повсякденне життя.' },
            { q: 'А якщо не спрацює?', a: '<strong class="text-white">7 днів гарантія</strong> повернення — 100%, без запитань. Ми на стільки впевнені в результаті, що ризикуємо самі.' },
            { q: 'Коли отримаю доступ?', a: '<strong class="text-white">Миттєво.</strong> Після оплати — посилання на пошту. Починаєш у своєму темпі.' },
          ].map(({ q, a }) => (
            <Reveal key={q}>
              <details className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#111128] to-[#0d0d1e] px-5 py-4 open:border-purple-500/35 transition-all duration-300 hover:border-white/20 hover:bg-[#12122a]">
                <summary className="cursor-pointer font-bold text-white text-[0.95rem] list-none flex items-center justify-between gap-4 select-none">
                  {q}
                  <span className="shrink-0 text-purple-400 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
                </summary>
                <p className="mt-3 text-[0.84rem] text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
