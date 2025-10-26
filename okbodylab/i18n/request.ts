import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';
import {i18n} from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const acceptLanguage = headerStore.get('accept-language') || '';
  const accepted = acceptLanguage
    .split(',')
    .map((l) => l.split(';')[0].trim().toLowerCase())
    .map((l) => l.split('-')[0]);

  const browserLocale = accepted.find((l) => i18n.locales.includes(l as any));

  const locale = cookieLocale || browserLocale || i18n.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
