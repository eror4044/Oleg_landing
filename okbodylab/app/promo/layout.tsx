import type { ReactNode } from 'react';

export default function PromoLayout({ children }: { children: ReactNode }) {
  return <div className="bg-black text-white">{children}</div>;
}
