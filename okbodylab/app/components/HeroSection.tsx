'use client';

import Image from 'next/image';
import { usePurchaseModal } from './PurchaseModalContext';

export default function HeroSection() {
  const { openModal } = usePurchaseModal();

  return (
    <>
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[#fff8f5] pb-20 pt-8 text-[#1a1a1a] sm:px-8 md:px-12 md:pt-0 lg:-mt-6 lg:px-16 lg:pb-24 lg:pt-0 xl:-mt-10 xl:px-20">
        {/* Фото фоном для мобайл */}
        <div className="absolute inset-0 -z-10 overflow-hidden lg:hidden">
          <Image
            src="/images/hero.png"
            alt="Олег Козлов — тренер Fit Intensive"
            fill
            priority
            className="object-contain object-right-bottom translate-x-[15%] scale-[1.05] md:translate-x-[18%] md:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
          />
          <div
            className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#fff8f5] via-[#fff8f5]/95 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto w-full px-5 sm:px-6 md:max-w-5xl md:px-8 lg:max-w-7xl lg:px-0">
          <div className="flex flex-col justify-center gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-14 xl:gap-20">
            <div>
              {/* Верхній ряд */}
              <div className="mb-6 flex flex-wrap items-center gap-x-6 text-[0.85rem] font-semibold uppercase tracking-[0.15em] text-[#e84c83] sm:text-[0.95rem] md:gap-x-10">
                <span>
                  Старт <span className="text-[#ff7e5f]">7 листопада</span>
                </span>
                <span className="text-[#ff4fa2] text-[0.95rem] font-extrabold tracking-[0.22em] sm:text-[1.05rem] lg:text-[1.18rem]">
                  Легкі — мінус 8 кг
                </span>
              </div>

              {/* Основний блок тексту */}
              <div className="max-w-[70%] text-left md:max-w-[420px] lg:max-w-none lg:pr-6 xl:pr-10">
                <h1 className="text-[1.9rem] font-extrabold leading-tight sm:text-[2.1rem] md:text-[2.3rem] lg:text-[2.75rem] lg:leading-[1.1]">
                  <span className="text-[#222]">Секретна система</span> <br />
                  <span className="bg-gradient-to-r from-[#ff7e5f] to-[#ff4fa2] bg-clip-text text-transparent">
                    схуднення
                  </span>
                </h1>

                <p className="mt-4 max-w-[95%] text-[1rem] leading-snug text-[#222] sm:text-[1.05rem] lg:mt-6 lg:max-w-none lg:text-[1.12rem] lg:leading-relaxed">
                  Отримай <span className="font-semibold text-[#ff7e5f]">результат без виснажуючих дієт</span>{' '}
                  та <span className="font-medium text-[#ff4fa2]">жорстких обмежень</span> — перевірена програма,
                  що реально працює вже з перших днів.
                </p>

                {/* === Ціновий блок === */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <p className="text-[1.5rem] font-extrabold text-[#ff4fa2]">399 ₴</p>
                    <p className="text-sm line-through text-[#999]">3999 ₴</p>
                    <span className="text-[#ff7e5f] font-bold uppercase tracking-wide">−90%</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 lg:mt-8 lg:items-start lg:gap-4">
                  <button
                    onClick={openModal}
                    className="
      relative w-full overflow-hidden whitespace-nowrap
      flex items-center justify-center
      rounded-full bg-gradient-to-r from-[#ff4fa2] via-[#ff7e5f] to-[#ff4fa2]
      bg-[length:300%_300%] px-12 py-3 text-[1.1rem] font-extrabold uppercase tracking-wide text-white
      shadow-[0_0_35px_rgba(255,79,162,0.55),0_0_65px_rgba(255,126,95,0.45)]
      transition-all duration-300 sm:w-auto lg:min-w-[250px] lg:px-16 lg:py-4
      hover:scale-[1.08] active:scale-[0.97]
      animate-gradientFire
    "
                  >
                    {/* Aura */}
                    <span
                      className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,79,162,0.7),rgba(255,126,95,0.5),transparent_70%)]
      blur-[70px] opacity-80 animate-auraFlash"
                      aria-hidden="true"
                    />

                    {/* Gradient core */}
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff007f] via-[#ff7e5f] to-[#ff007f]
      bg-[length:400%_400%] animate-gradientFire opacity-90"
                      aria-hidden="true"
                    />

                    {/* Shine */}
                    <span
                      className="absolute left-[-180%] top-0 h-full w-[180%] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70 hover:animate-shineRun"
                      aria-hidden="true"
                    />

                    {/* Text — центрируем вертикально и горизонтально */}
                    <span className="relative z-10 flex items-center justify-center leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                      Купити зі знижкою
                    </span>
                  </button>
                </div>


                {/* Плашка довіри */}
                <div className="mt-8 flex flex-col items-start gap-3 sm:gap-6 lg:mt-10">
                  <span className="rounded-xl bg-[#fff0ea] px-8 py-4 text-center text-[1rem] font-semibold text-[#ff7e5f] shadow-[0_4px_12px_rgba(255,126,95,0.25)] sm:px-10 sm:text-[1.05rem] lg:px-12 lg:py-5 lg:text-[1.1rem]">
                    Мені можна довіряти
                  </span>
                  <a
                    href="#results"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ff4fa2]/40 bg-white px-6 py-3 text-sm font-semibold text-[#ff4fa2] shadow-[0_6px_18px_rgba(255,79,162,0.16)] transition hover:border-[#ff4fa2] hover:text-[#ff2169]"
                  >
                    Живі відео відгуки
                    <span aria-hidden="true">▶</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Фото на десктопі */}
            <div className="relative hidden lg:flex lg:items-end lg:justify-end lg:pb-0">
              <div
                className="absolute inset-y-10 right-[16%] -z-10 hidden w-[460px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,126,95,0.32),_rgba(255,248,245,0))] blur-3xl lg:block"
                aria-hidden="true"
              />
              <Image
                src="/images/hero.png"
                alt="Олег Козлов — тренер Fit Intensive"
                width={560}
                height={760}
                priority
                className="h-auto max-w-[520px] object-contain lg:translate-y-12 xl:translate-y-28"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                className="pointer-events-none absolute -bottom-40 right-[4%] h-60 w-[640px] rounded-full bg-gradient-to-t from-[#fff1eb] via-[#fff1eb]/90 to-transparent blur-[70px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Блок бонусів === */}
      <section className="relative z-20 -mt-14 bg-transparent pb-10 lg:-mt-32 lg:h-[260px] lg:pb-0">
        <div className="mx-4 flex max-w-5xl items-start gap-3 rounded-2xl border border-[#ffd2e0] bg-white/95 p-5 text-[0.95rem] leading-snug shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm transition lg:absolute lg:left-1/2 lg:top-10 lg:w-[70%] lg:-translate-x-1/2 lg:translate-y-[30px] lg:gap-5 lg:p-8 lg:text-[1.05rem] xl:w-[58%] xl:px-10 xl:py-9">
          <div className="mt-1 text-[1.8rem] lg:text-[2.2rem]">🎁</div>
          <div className="space-y-2 lg:space-y-3">
            <p>
              <span className="font-semibold text-[#ff4fa2]">Розбір типових помилок</span>{' '}
              <span className="text-[#333]">у харчуванні від фітнес-нутриціолога</span>
            </p>
            <p>
              <span className="text-[#555]">Зі мною більше</span>{' '}
              <strong className="text-[#ff4fa2] font-semibold">1000 людей</strong>{' '}
              <span className="text-[#333]">
                змінили своє життя та відчули <span className="font-medium text-[#ff7e5f]">легкість, енергію</span> і
                впевненість у своєму тілі
              </span>
            </p>
            <p>
              <span className="text-[#555]">Протягом спільної роботи спалено</span>{' '}
              <strong className="text-[#ff7e5f] font-semibold">3247 кг жиру</strong>{' '}
              <span className="text-[#555]">та</span>{' '}
              <strong className="text-[#ff7e5f] font-semibold">17 280 000 Ккал</strong>
            </p>
            <p>
              <strong className="text-[#ff4fa2]">Бонус:</strong>{' '}
              <span className="text-[#333]">
                5 смачних і простих у приготуванні <span className="font-medium text-[#ff7e5f]">сніданків, обідів</span>{' '}
                та <span className="font-medium text-[#ff7e5f]">вечерь</span>
              </span>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
