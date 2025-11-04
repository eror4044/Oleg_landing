'use client';
import Image from 'next/image';

export default function Promo4() {
  const points = [
    'Розроблена нутриціологом формула схуднення.',
    'Без виснаження — максимум результату.',
    'Кожен день може бути першим кроком до нового тіла.',
  ];

  return (
    <section className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* === Ліва частина === */}
      <div className="relative flex flex-col justify-center px-8 md:px-14 py-10 text-white bg-[#0f0f0f]">
        {/* Мягкий градиент на фоне текста */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.7)_50%,rgba(0,0,0,0.8)_100%)]" />
        
        <div className="relative z-10">
          <h1 className="text-[2.4rem] font-extrabold mb-6 leading-tight">
            Фітнес-інтенсив{' '}
            <span className="bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent">
              FIT INTENSIVE
            </span>
          </h1>

          <ul className="space-y-3 text-[1.05rem] leading-snug max-w-[520px]">
            {points.map((p) => (
              <li
                key={p}
                className="rounded-[1.4rem] bg-white/10 px-6 py-3 backdrop-blur-[2px] shadow-[0_4px_12px_rgba(255,126,95,0.15)]"
              >
                {p}
              </li>
            ))}
          </ul>

          {/* === Цінник + Знижка === */}
          <div className="mt-10 flex flex-col items-start gap-2">
            <div className="relative flex items-center">
              <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.2rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
                399 грн — приєднуйся зараз!
              </div>

              {/* Аккуратная встроенная скидка */}
              <span className="absolute right-[-18px] top-[-12px] rounded-full bg-white text-[#ff4fa2] text-[0.9rem] font-bold px-3 py-1 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
                −90%
              </span>
            </div>

            <p className="text-sm text-white/80 italic mt-3">
              Тільки сьогодні — найвигідніша пропозиція ✨
            </p>
          </div>
        </div>
      </div>

      {/* === Права частина === */}
      <div className="relative">
        <Image
          src="/images/IMG_6965.jpg"
          alt="Promo background"
          fill
          priority
          className="object-cover brightness-[0.45] contrast-[1.1]"
        />
        {/* затемнение справа, чтобы картинка не спорила с текстом */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
      </div>
    </section>
  );
}
