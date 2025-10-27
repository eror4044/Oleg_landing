import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import './styles/globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased relative overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
