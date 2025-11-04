'use client';
import Image from 'next/image';

export default function Promo6() {
  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_6965.jpg"
        alt="Promo background"
        fill
        priority
        className="object-cover brightness-[0.45] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-transparent" />

      {/* === Контент === */}
      <div
        className={`
          relative z-10 flex h-full flex-col justify-center
          px-8 md:px-16
          text-center md:text-left
          items-center md:items-start
        `}
      >
        <p className="text-[1.2rem] text-[#ffb9d2] uppercase tracking-[0.18em] mb-3">
          Фітнес-інтенсив
        </p>

        <h1 className="text-[2.8rem] md:text-[3rem] font-extrabold leading-tight mb-6 max-w-[700px]">
          Почни розумно —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f]">
            я розрахував усе за тебе
          </span>
        </h1>

        <p className="text-[1.1rem] text-white/85 max-w-[550px] mb-10">
          Схудни без стресу й виснаження. Формула, яка реально працює.
        </p>

        {/* === Ціна + Знижка === */}
        <div className="flex flex-col items-center md:items-start gap-3">
          {/* Цены */}
          <div className="flex items-end gap-3 mb-1">
            <span className="text-white/60 text-[1rem] line-through">
              3990 грн
            </span>
            <span className="text-[2rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.4)]">
              399 грн
            </span>
          </div>

          {/* CTA-кнопка */}
          <div className="relative flex items-center">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.10rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
              Приєднуйся сьогодні!
            </div>

            {/* Значок знижки */}
            <span className="absolute right-[-18px] top-[-12px] rounded-full bg-white text-[#ff4fa2] text-[0.9rem] font-bold px-3 py-1 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
              −90%
            </span>
          </div>

          <p className="text-sm text-white/80 italic mt-3">
            Тільки сьогодні — найвигідніша пропозиція ✨
          </p>
        </div>
      </div>
    </section>
  );
}
