import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { i18n } from './config';

type Locale = (typeof i18n.locales)[number];

const isSupportedLocale = (value: string): value is Locale =>
  (i18n.locales as readonly string[]).includes(value);

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const acceptLanguage = headerStore.get('accept-language') ?? '';
  const accepted = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .map((part) => part.split('-')[0]);

  const browserLocale = accepted.find(isSupportedLocale);
  const locale = cookieLocale || browserLocale || i18n.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
