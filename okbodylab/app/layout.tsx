import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import './styles/globals.css';
import BackgroundAura from './components/BackgroundAura';
import { PurchaseModalProvider } from './components/PurchaseModalContext';
import PurchaseModal from './components/PurchaseModal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased relative overflow-x-hidden">
        <PurchaseModalProvider>
          <BackgroundAura />
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
          <PurchaseModal />
        </PurchaseModalProvider>
      </body>
    </html>
  );
}
