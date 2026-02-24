'use client';
import Image from 'next/image';

export default function Promo2() {
  const list = [
    'Фітнес і харчування в одному курсі — не гадай, просто дій за планом.',
    'Розроблена нутриціологом формула: максимум результату, мінімум стресу.',
    'Побачиш зміни вже за перші 5 днів!',
  ];

  return (
    <section className="relative aspect-[1/1] w-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_7042.jpg"
        alt="OK body lab background"
        fill
        priority
        className="object-cover object-[center_10%] brightness-[0.7] contrast-[1.1]"
      />

      {/* === Контент === */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 py-8">
        {/* === Верхний блок === */}
        <div className="text-left">
          <h1 className="text-[1.9rem] font-extrabold leading-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="text-white">OK body lab</span>
            <br />
            <span className="bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] bg-clip-text text-transparent">
              трансформація за 5 днів
            </span>
          </h1>
        </div>

        {/* === Средний блок — список === */}
        <div className="flex flex-col gap-3 mt-2">
          {list.slice(0, 2).map((t) => (
            <div
              key={t}
              className="rounded-[1.2rem] bg-black/45 px-5 py-2.5 text-[0.95rem] leading-snug backdrop-blur-[6px] shadow-[0_0_25px_rgba(255,79,162,0.3)] text-white/95"
            >
              {t}
            </div>
          ))}
        </div>

        {/* === Нижний блок (цены и CTA) === */}
        <div className="mt-5 flex flex-col items-start gap-3">
          {/* Цены */}
          <div className="flex items-end gap-3">
            <span className="text-white/60 text-[0.9rem] line-through">
              3990 грн
            </span>
            <span className="text-[1.6rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,79,162,0.4)]">
              399 грн
            </span>
          </div>

          {/* Кнопка и скидка */}
          <div className="relative flex items-center justify-start">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-7 py-3 text-[1rem] font-semibold text-white shadow-[0_0_30px_rgba(255,79,162,0.45)]">
              Приєднуйся сьогодні!
            </div>

            <span className="absolute right-[-16px] top-[-10px] rounded-full bg-white text-[#ff4fa2] text-[0.8rem] font-bold px-2.5 py-0.5 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
              −90%
            </span>
          </div>

          <p className="text-xs text-white/80 italic mt-1">
            Тільки сьогодні — найвигідніша пропозиція ✨
          </p>
        </div>
      </div>
    </section>
  );
}
