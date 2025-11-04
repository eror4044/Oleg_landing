'use client';
import Image from 'next/image';

export default function Promo1() {
  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_7024.jpg"
        alt="Fit Intensive background"
        fill
        priority
        className="object-cover brightness-[0.45] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

      {/* === Контент === */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-[2.6rem] font-extrabold leading-tight max-w-[700px] mb-6">
          <span className="bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] bg-clip-text text-transparent">
            Сила, стрункість, впевненість
          </span>
          <br />
          <span className="text-white">не марафон — а стиль життя</span>
        </h1>

        <p className="max-w-[580px] text-[1.15rem] text-white/90 mb-10">
          Не виснажуй себе — тренуйся, їж, змінюйся за розумною системою.
        </p>

        {/* === Ціна + Знижка === */}
        <div className="flex flex-col items-center gap-3">
          {/* Верхняя часть с ценами */}
          <div className="flex items-end gap-3 mb-2">
            <span className="text-white/60 text-[1rem] line-through">
              3990 грн
            </span>
            <span className="text-[2rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.4)]">
              399 грн
            </span>
          </div>

          {/* CTA-кнопка */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.15rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
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
