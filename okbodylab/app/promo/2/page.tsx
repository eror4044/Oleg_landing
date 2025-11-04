'use client';
import Image from 'next/image';

export default function Promo2() {
  const list = [
    'Фітнес і харчування в одному курсі — не гадай, просто дій за планом.',
    'Розроблена нутриціологом формула: максимум результату, мінімум стресу.',
    'Побачиш зміни вже за перші 5 днів!',
  ];

  return (
    <section className="relative w-full h-full overflow-hidden text-white">
      {/* === Фон === */}
      <Image
        src="/images/IMG_6929.jpg"
        alt="Fit Intensive background"
        fill
        priority
        className="object-cover brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* === Контент === */}
      <div
        className={`
          relative z-10 flex h-full flex-col justify-center
          px-8 md:px-12 max-w-[680px]
          transition-all text-center lg:text-left
        `}
      >
        <h1 className="text-[2.3rem] font-extrabold mb-5 leading-tight">
          FIT INTENSIVE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f]">
            — трансформація за 5 днів
          </span>
        </h1>

        <ul className="space-y-3 text-[1.05rem] leading-snug">
          {list.map((t) => (
            <li
              key={t}
              className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-[4px] shadow-[0_0_20px_rgba(255,79,162,0.3)]"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* === Блок з ціною і знижкою === */}
        <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-to-r from-[#ff4fa2] to-[#ff7e5f] px-10 py-3 text-[1.15rem] font-semibold shadow-[0_0_25px_rgba(255,79,162,0.5)]">
              399 грн — приєднуйся!
            </div>
            <span className="rounded-full bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] text-white text-[1rem] font-bold px-4 py-2 shadow-[0_0_15px_rgba(255,126,95,0.5)] animate-pulse">
              −90%
            </span>
          </div>

          <p className="text-sm text-white/70 italic">
            Тільки сьогодні — найвигідніша пропозиція 🔥
          </p>
        </div>
      </div>
    </section>
  );
}
