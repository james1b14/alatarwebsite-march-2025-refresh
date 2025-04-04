import { Locale } from './i18n/getDictionary';

export const locales: Locale[] = ['en-GB', 'ur', 'ro', 'pl'];
export const defaultLocale: Locale = 'en-GB';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Helper for generating hreflang URLs
export function generateHrefLangURL(locale: string, path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alatarlogisticsgroup.co.uk';
  return `${baseUrl}/${locale}${path}`;
}

// Function to generate SEO metadata
export function generateSEOMetadata({
  title,
  description,
  locale = defaultLocale,
  ogImage = '/og-image.jpg',
  path = '',
}: {
  title: string;
  description: string;
  locale?: Locale;
  ogImage?: string;
  path?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alatarlogisticsgroup.co.uk';
  const url = `${baseUrl}/${locale}${path}`;
  
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'en-GB': `${baseUrl}/en-GB${path}`,
        'ur': `${baseUrl}/ur${path}`,
        'ro': `${baseUrl}/ro${path}`,
        'pl': `${baseUrl}/pl${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Alatar Logistics Group Ltd',
      locale: locale.includes('-') ? locale : `${locale}_${locale.toUpperCase()}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
  };
}
