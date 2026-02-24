'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const promos = [
  { id: 1, component: dynamic(() => import('../promo/1/page')) },
  { id: 2, component: dynamic(() => import('../promo/2/page')) },
  { id: 3, component: dynamic(() => import('../promo/3/page')) },
  { id: 4, component: dynamic(() => import('../promo/4/page')) },
  { id: 5, component: dynamic(() => import('../promo/5/page')) },
  { id: 6, component: dynamic(() => import('../promo/6/page')) },
  { id: 7, component: dynamic(() => import('../promo/7/page')) },
  { id: 8, component: dynamic(() => import('../promo/8/page')) },
  { id: 9, component: dynamic(() => import('../promo/9/page')) },
];

export default function PromoGallery() {
  const [index, setIndex] = useState(0);
  const [aspect, setAspect] = useState<'square' | 'story'>('story');
  const PromoComponent = promos[index].component;

  const next = () => setIndex((i) => (i + 1) % promos.length);
  const prev = () => setIndex((i) => (i - 1 + promos.length) % promos.length);
  const toggleAspect = () =>
    setAspect((a) => (a === 'square' ? 'story' : 'square'));

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] text-black">
      {/* === Preview === */}
      <div
        className={`relative overflow-hidden bg-white border border-gray-300
          ${aspect === 'square' ? 'w-[540px] h-[540px]' : 'w-[405px] h-[720px]'}
        `}
      >
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            aspectRatio: aspect === 'square' ? '1 / 1' : '9 / 16',
          }}
        >
          <div className="absolute inset-0 w-full h-full">
            <PromoComponent />
          </div>
        </div>
      </div>

      {/* === Controls === */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-wrap gap-3 z-50">
        <button
          onClick={prev}
          className="rounded bg-white px-4 py-2 text-[#ff4fa2] font-semibold shadow hover:scale-[1.05] transition"
        >
          ‹ Попередній
        </button>
        <button
          onClick={next}
          className="rounded bg-white px-4 py-2 text-[#ff4fa2] font-semibold shadow hover:scale-[1.05] transition"
        >
          Наступний ›
        </button>
        <button
          onClick={toggleAspect}
          className="rounded bg-white px-4 py-2 text-[#ff4fa2] font-semibold shadow hover:scale-[1.05] transition"
        >
          {aspect === 'square'
            ? '📱 1080×1920 (Story)'
            : '🖼️ 1080×1080 (Post)'}
        </button>
      </div>

      {/* === Indicators === */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {promos.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? 'bg-[#ff4fa2]' : 'bg-black/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
