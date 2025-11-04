'use client';
import Image from 'next/image';

export default function Promo5() {
  const lines = [
    'Формула схуднення без “чорного списку продуктів”.',
    'Почни з однієї зміни — і тіло почне працювати інакше.',
    'Цей курс створений, щоб бути легким.',
  ];

  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_6993.jpg"
        alt="Promo background"
        fill
        priority
        className="object-cover brightness-[0.45] contrast-[1.1]"
      />

      {/* === Мягкое затемнение с центровкой света === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.85)_100%)]" />

      {/* === Контент === */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] bg-clip-text text-transparent">
              FIT INTENSIVE
            </span>{' '}
            — результат за 5 днів
          </h1>

          <ul className="space-y-3 text-[1.05rem] leading-snug">
            {lines.map((l) => (
              <li
                key={l}
                className="rounded-[1.4rem] bg-white/10 px-6 py-3 backdrop-blur-[3px] shadow-[0_4px_16px_rgba(255,126,95,0.15)]"
              >
                {l}
              </li>
            ))}
          </ul>

          {/* === Ціна + Знижка === */}
          <div className="mt-10 flex flex-col items-center gap-3">
            {/* === Область цены === */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Верхняя строка с ценами */}
              <div className="flex items-end gap-3 mb-2">
                <span className="text-white/60 text-[1rem] line-through">
                  3990 грн
                </span>
                <span className="text-[2rem] font-extrabold bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,79,162,0.4)]">
                  399 грн
                </span>
              </div>

              {/* Кнопка CTA */}
              <div className="relative flex items-center">
                <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-4 text-[1.15rem] font-semibold text-white shadow-[0_0_35px_rgba(255,79,162,0.45)]">
                  Приєднуйся сьогодні!
                </div>

                {/* Значок скидки */}
                <span className="absolute right-[-18px] top-[-12px] rounded-full bg-white text-[#ff4fa2] text-[0.9rem] font-bold px-3 py-1 shadow-[0_0_10px_rgba(255,79,162,0.4)] border border-[#ff4fa2]/30">
                  −90%
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 italic mt-3">
              Тільки сьогодні — найвигідніша пропозиція ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
