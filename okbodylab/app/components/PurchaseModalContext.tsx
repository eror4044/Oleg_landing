'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type PurchaseModalContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const PurchaseModalContext = createContext<PurchaseModalContextType | null>(null);

export function PurchaseModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // Автоматичне нагадування про знижку за хвилину після входу
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 60_000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PurchaseModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </PurchaseModalContext.Provider>
  );
}

export function usePurchaseModal(): PurchaseModalContextType {
  const ctx = useContext(PurchaseModalContext);
  if (!ctx) {
    throw new Error('usePurchaseModal must be used within PurchaseModalProvider');
  }
  return ctx;
}
