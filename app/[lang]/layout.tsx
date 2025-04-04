import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RootLayout from '@/app/components/layout/RootLayout';
import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { isValidLocale, defaultLocale } from '@/app/lib/utils';

// For metadata generation - using a simple static approach for now to avoid Next.js 14 issues
export function generateMetadata(): Metadata {
  return {
    title: 'Alatar Logistics Group Ltd',
    description: 'Professional logistics solutions for businesses across the United Kingdom',
  };
}

// Layout component
export default async function LanguageLayout({ 
  children,
  params,
}: { 
  children: React.ReactNode,
  params: { lang: string }
}) {
  // We know the route pattern guarantees 'lang' will be there
  const lang = params.lang || defaultLocale;
  
  // For safety, validate the locale
  if (!isValidLocale(lang)) {
    notFound();
  }
  
  // Get dictionary asynchronously
  const dictionary = await getDictionary(lang as Locale);
  
  return (
    <RootLayout lang={lang as Locale} dictionary={dictionary}>
      {children}
    </RootLayout>
  );
}
