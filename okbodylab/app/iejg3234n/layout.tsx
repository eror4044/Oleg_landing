import type { ReactNode } from 'react';

export default function VipLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#08080f] text-white min-h-screen">
      {children}
    </div>
  );
}
