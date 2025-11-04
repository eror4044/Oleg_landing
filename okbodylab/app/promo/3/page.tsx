'use client';
import Image from 'next/image';

export default function Promo3() {
  const phrases = [
    'Не марафон — а система, що працює.',
    'Цей курс не про “менше їсти” — а про “їсти правильно”.',
    'Побачиш результат швидше, ніж встигнеш засумніватись.',
  ];

  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_6965.jpg"
        alt="Fit Intensive background"
        fill
        priority
        className="object-cover brightness-[0.45] contrast-[1.05]"
      />

      {/* === Мягкое затемнение === */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.6)_40%,rgba(0,0,0,0.65)_100%)]" />

      {/* === Контент === */}
      <div
        className={`
          relative z-10 flex h-full flex-col justify-center
          px-8 md:px-14
          text-center md:text-left
          items-center md:items-start
        `}
      >
        <div className="max-w-[680px]">
          <h1 className="text-[2.4rem] font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent">
              Мінікурс, який перезапустить тіло
            </span>
          </h1>

          <ul className="space-y-3 text-[1.05rem] leading-snug">
            {phrases.map((p) => (
              <li
                key={p}
                className="rounded-[1.4rem] bg-white/10 px-6 py-3 backdrop-blur-[2px] shadow-[0_4px_16px_rgba(255,126,95,0.15)]"
              >
                {p}
              </li>
            ))}
          </ul>

          {/* === Ціна + Знижка (эстетичная компоновка) === */}
          <div className="mt-10 flex flex-col items-center md:items-start gap-2">
            <div className="relative flex items-center">
              <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.2rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
                399 грн — приєднуйся сьогодні!
              </div>

              {/* Значок скидки аккуратно встроен в угол */}
              <span className="absolute right-[-18px] top-[-12px] rounded-full bg-white text-[#ff4fa2] text-[0.9rem] font-bold px-3 py-1 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
                −90%
              </span>
            </div>

            <p className="text-sm text-white/75 italic mt-3 text-center md:text-left">
              Тільки сьогодні — найвигідніша пропозиція ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
