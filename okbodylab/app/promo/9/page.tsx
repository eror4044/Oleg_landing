'use client';
import Image from 'next/image';

export default function PromoSquareFocus() {
  const points = [
    'Не марафон — система, що працює 🔥',
    'Формула схуднення без заборонених продуктів 🍑',
    'Реальні результати без виснажень ⚡',
  ];

  return (
    <section className="relative aspect-square w-full overflow-hidden text-white">
      {/* === Фото === */}
      <Image
        src="/images/IMG_6948.jpg"
        alt="OK body lab background"
        fill
        priority
        className="object-cover object-[center_45%] brightness-[1.25] contrast-[1.1]"
      />

      {/* === Градієнт для читабельності === */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* === Контент === */}
      <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 text-center">
        {/* === Заголовок === */}
        <div className="mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          <h1 className="text-[2.2rem] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ffa24f] bg-clip-text text-transparent">
              OK body lab
            </span>
            <br />
            <span className="text-white">твій новий старт</span>
          </h1>
        </div>

        {/* === Переваги (легкі, щоб не забивали фон) === */}
        <div className="flex flex-col items-center gap-2 mb-5">
          {points.map((p) => (
            <div
              key={p}
              className="rounded-full bg-black/35 text-white/95 px-6 py-2 text-[0.95rem] font-medium backdrop-blur-[1px] border border-white/10"
            >
              {p}
            </div>
          ))}
        </div>

        {/* === Ціна + CTA === */}
        <div className="flex flex-col items-center gap-3">
          {/* Ціна */}
          <div className="flex items-end gap-3 mb-1">
            <span className="text-white/60 text-[0.95rem] line-through">
              3990 грн
            </span>
            <span className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.45)]">
              399 грн
            </span>
          </div>

          {/* Кнопка CTA */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ffa24f] px-10 py-3 text-[1rem] font-semibold text-white shadow-[0_0_30px_rgba(255,79,162,0.5)]">
              Приєднуйся сьогодні!
            </div>
            <span className="absolute right-[-18px] top-[-10px] rounded-full bg-white text-[#ff4fa2] text-[0.8rem] font-bold px-3 py-0.5 shadow-[0_0_12px_rgba(255,79,162,0.5)] border border-[#ff4fa2]/30">
              −90%
            </span>
          </div>

          <p className="text-xs text-white/80 italic mt-2">
            Лише сьогодні — найвигідніша пропозиція ✨
          </p>
        </div>
      </div>
    </section>
  );
}
