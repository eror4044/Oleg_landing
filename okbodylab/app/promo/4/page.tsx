'use client';
import Image from 'next/image';

export default function Promo4() {
  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_7042.jpg"
        alt="OK body lab background"
        fill
        priority
        className="
          object-cover brightness-[0.8]
          object-[center_10%]    /* поднято вверх */
        "
      />

      {/* === Контент === */}
      <div
        className="
          absolute inset-0 flex flex-col justify-end
          items-start px-6 sm:px-10 pb-6 sm:pb-10
          text-left
        "
      >
        <div className="max-w-[400px] space-y-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] scale-[0.9] sm:scale-100">
          {/* === Заголовок === */}
          <h1 className="text-[1.8rem] sm:text-[2rem] font-extrabold leading-tight">
            Втомився від дієт без результату?
          </h1>

          <p className="text-[0.95rem] text-white/90 leading-snug">
            Почни зі мною — і зроби це{' '}
            <span className="text-[#ff7eae] font-semibold">без зривів</span> та{' '}
            <span className="text-[#ff7eae] font-semibold">виснажень</span>.
          </p>

          {/* === Переваги === */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-5 py-2.5 text-[0.95rem] font-medium text-white shadow-[0_0_20px_rgba(255,79,162,0.4)]">
              Без тренажерного залу і марафонів
            </div>
            <div className="rounded-[1.3rem] bg-white/10 px-5 py-2.5 text-[0.95rem] font-medium text-white/90 backdrop-blur-[3px] shadow-[0_0_15px_rgba(255,126,95,0.25)]">
              Програма, яку{' '}
              <span className="text-[#ff7eae] font-semibold">хочеться</span>{' '}
              виконувати, а не змушувати себе
            </div>
          </div>

          {/* === Назва інтенсиву === */}
          <div className="mt-5">
            <h2 className="text-[1.2rem] font-extrabold leading-snug">
              ФІТНЕС-ІНТЕНСИВ
              <br />
              <span className="text-[#ff4fa2]">OK body lab</span>
            </h2>
          </div>

          {/* === Ціна і знижка === */}
          <div className="mt-4 flex flex-col items-start gap-2">
            {/* Цены */}
            <div className="flex items-end gap-2 mb-1">
              <span className="text-white/60 text-[0.9rem] line-through">
                3990 грн
              </span>
              <span className="text-[1.7rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,79,162,0.4)]">
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
      </div>
    </section>
  );
}
