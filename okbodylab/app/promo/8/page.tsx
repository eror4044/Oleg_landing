'use client';
import Image from 'next/image';

export default function PromoStoryPerfect() {
  const points = [
    'Не марафон — система, що працює 💥',
    'Формула схуднення без заборонених продуктів 🍑',
    'Реальні результати без виснажень ⚡',
  ];

  return (
    <section className="relative aspect-[9/16] w-full overflow-hidden text-white">
      {/* === Фото === */}
      <Image
        src="/images/IMG_6976.jpg"
        alt="OK body lab background"
        fill
        priority
        className="object-cover object-[center_40%] brightness-[1.15] contrast-[1.1]"
      />

      {/* === Градиент слева для контраста === */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

      {/* === Контент === */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-10">
        {/* === Заголовок === */}
        <div className="mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          <h1 className="text-[2.8rem] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ffa24f] bg-clip-text text-transparent">
              OK body lab
            </span>
            <br />
            <span className="text-white">твій новий старт</span>
          </h1>
        </div>

        {/* === Фразы === */}
        <div className="flex flex-col gap-3 mb-8">
          {points.map((p) => (
            <div
              key={p}
              className="text-center rounded-full bg-gradient-to-r from-[#ff4fa2]/25 to-[#ff7e5f]/15 border border-white/10 px-6 py-2.5 text-[1.05rem] font-medium backdrop-blur-[1px] shadow-[0_0_10px_rgba(255,79,162,0.25)]"
            >
              {p}
            </div>
          ))}
        </div>

        {/* === Ціна + CTA === */}
        <div className="flex flex-col items-start gap-4">
          {/* Ціна */}
          <div className="flex items-end gap-3 mb-1">
            <span className="text-white/60 text-[1.1rem] line-through">
              3990 грн
            </span>
            <span className="text-[2.2rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.4)]">
              399 грн
            </span>
          </div>

          {/* Кнопка CTA */}
          <div className="relative flex items-center justify-start">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ffa24f] px-14 py-4 text-[1.2rem] font-semibold text-white shadow-[0_0_40px_rgba(255,79,162,0.5)]">
              Приєднуйся сьогодні!
            </div>
            <span className="absolute right-[-22px] top-[-14px] rounded-full bg-white text-[#ff4fa2] text-[0.95rem] font-bold px-3 py-0.5 shadow-[0_0_12px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
              −90%
            </span>
          </div>

          <p className="text-sm text-white/85 italic mt-3">
            Лише сьогодні — найвигідніша пропозиція ✨
          </p>
        </div>
      </div>
    </section>
  );
}
