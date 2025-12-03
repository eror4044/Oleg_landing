'use client';

import { DefaultSeo, ProductJsonLd, SocialProfileJsonLd } from 'next-seo';

const canonicalUrl = 'https://fit-intensive.com';
const ogImageUrl = `${canonicalUrl}/images/IMG_6184-poster.jpg`;

export default function SeoDefaults() {
  return (
    <>
      <DefaultSeo
        titleTemplate="OK body lab · %s"
        defaultTitle="OK body lab — мінус 10 кг без зривів та виснажень"
        description="OK body lab — жіночий інтенсив від Олега Козлова: легка система мінус 10 кг без дієт. Харчування, тренування, підтримка, бонуси й чат 24/7."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          type: 'website',
          locale: 'uk_UA',
          title: 'OK body lab — легкий шлях до мінус 10 кг',
          description:
            'Легка програма схуднення без зривів: харчування, тренування, ментальні практики й бонуси від Олега Козлова.',
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: 'OK body lab — результати клієнток',
            },
          ],
          siteName: 'OK body lab',
        }}
        additionalLinkTags={[
          { rel: 'icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        ]}
        twitter={{
          handle: '@fitintensive',
          site: '@fitintensive',
          cardType: 'summary_large_image',
        }}
      />

      <ProductJsonLd
        productName="OK body lab — жіночий інтенсив"
        images={[ogImageUrl]}
        description="Легкі −10 кг без зривів та виснажень. Система харчування, тренування, подкасти та підтримка від Олега Козлова."
        brand="OK Body Lab"
        offers={[
          {
            price: '1290.00',
            priceCurrency: 'UAH',
            url: canonicalUrl,
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2025-12-31',
            seller: {
              name: 'OK Body Lab',
            },
          },
        ]}
        aggregateRating={{
          ratingValue: '4.9',
          reviewCount: '126',
        }}
        reviews={[
          {
            author: { type: 'Person', name: 'Світлана' },
            reviewBody: 'Мінус 8 кг за місяць і багато енергії — без дієт та заборон.',
            reviewRating: {
              ratingValue: '5',
              bestRating: '5',
            },
          },
        ]}
        sku="FIT-INTENSIVE"
      />

      <SocialProfileJsonLd
        name="Олег Козлов"
        url={canonicalUrl}
        sameAs={['https://www.instagram.com/okbodylab', 'https://www.youtube.com/@okbodylab']}
        type="Person"
      />
    </>
  );
}
