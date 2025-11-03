import Image from 'next/image';

export default function FitIntensiveBrochure() {
  return (
    <section className="relative w-[595px] h-[842px] overflow-hidden bg-[#fff8f5] font-[Poppins]">
      {/* Background image */}
      <Image
        src="/images/IMG_7042.jpg"
        alt="Олег Козлов Fit Intensive"
        fill
        className="object-cover"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Top heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white text-lg font-medium uppercase tracking-wide">
          старт 2 листопада
        </p>
      </div>

      {/* Main title */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[85%] text-center">
        <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          Fit Intensive — система схуднення за 5 днів
        </h1>
        <p className="text-[#FFB6A0] mt-3 text-lg font-medium">
          Отримай ефективну програму без зривів та виснажень
        </p>
      </div>

      {/* Features block with styled boxes */}
      <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[85%] text-white text-[17px] font-medium space-y-3">
        <div className="bg-black/40 rounded-xl px-5 py-3 backdrop-blur-sm border border-white/20">
          💪 Формула від нутриціолога — максимум результату, мінімум стресу
        </div>
        <div className="bg-black/40 rounded-xl px-5 py-3 backdrop-blur-sm border border-white/20">
          🔥 Не марафон, а система — ефективна трансформація тіла за 5 днів
        </div>
        <div className="bg-black/40 rounded-xl px-5 py-3 backdrop-blur-sm border border-white/20">
          🥗 Без “чорного списку продуктів” — їж смачно і худни
        </div>
        <div className="bg-black/40 rounded-xl px-5 py-3 backdrop-blur-sm border border-white/20">
          💡 Фітнес і харчування в одному курсі — просто дій за планом
        </div>
        <div className="bg-black/40 rounded-xl px-5 py-3 backdrop-blur-sm border border-white/20">
          ⚡ Реальні результати без виснажень — тренуйся, їж, змінюйся!
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-[80%]">
        <button className="w-full bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] text-white font-semibold py-3 rounded-full text-xl shadow-lg border border-[#FFBFA5]">
          Знижка −82% тільки сьогодні
        </button>
        <button className="w-full bg-white text-[#FF7E5F] border-2 border-[#FF7E5F] font-semibold py-3 rounded-full text-xl hover:bg-[#FF7E5F] hover:text-white transition-all duration-200">
          🎁 Отримай 8 бонусів при оплаті сьогодні
        </button>
      </div>

      {/* Footer note */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/90 italic tracking-wide">
        Почни шлях до свого нового тіла вже сьогодні 💖
      </p>
    </section>
  );
}