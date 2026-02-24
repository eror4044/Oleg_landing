'use client';
import Image from 'next/image';

export default function Promo7() {
  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон без затемнения === */}
      <Image
        src="/images/IMG_6929.jpg"
        alt="Poster background"
        fill
        priority
        className="object-cover brightness-[0.7] contrast-[1.1]"
      />

      {/* === Контент === */}
      <div
        className={`
          relative z-10 flex h-full flex-col items-center justify-center
          px-8 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
        `}
      >
        <h1 className="max-w-[680px] text-[2.7rem] sm:text-[3rem] font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] bg-clip-text text-transparent">
            Мінікурс, який перезапустить тіло
          </span>
          <br />
          <span className="text-white">і харчові звички</span>
        </h1>

        <p className="max-w-[600px] text-[1.15rem] text-white/90 mb-10">
          Не марафон — система. Ефективна трансформація тіла всього за 5 днів.
        </p>

        {/* === Блок ціни === */}
        <div className="flex flex-col items-center gap-3">
          {/* Верхняя часть с ценами */}
          <div className="flex items-end gap-3 mb-2">
            <span className="text-white/70 text-[1rem] line-through">
              3990 грн
            </span>
            <span className="text-[2rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.45)]">
              399 грн
            </span>
          </div>

          {/* CTA-кнопка со скидкой */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.15rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
              Приєднуйся сьогодні!
            </div>

            {/* Значок знижки */}
            <span className="absolute right-[-18px] top-[-12px] rounded-full bg-white text-[#ff4fa2] text-[0.9rem] font-bold px-3 py-1 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
              −90%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
