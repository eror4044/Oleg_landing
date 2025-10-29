'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

    // Автоматическое открытие через 1 минуту
    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 60000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <PurchaseModalContext.Provider value={{ open, openModal, closeModal }}>
            {children}
        </PurchaseModalContext.Provider>
    );
}

export const usePurchaseModal = () => {
    console.log("modal oopen");
    
    const ctx = useContext(PurchaseModalContext);
    if (!ctx) throw new Error('usePurchaseModal must be used within PurchaseModalProvider');
    return ctx;
};
