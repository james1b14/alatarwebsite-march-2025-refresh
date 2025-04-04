import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { locales, defaultLocale } from '@/app/lib/utils';

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// The page component - keeping it simple for now to avoid Next.js 14 issues
export default async function HomePage({ 
  params 
}: { 
  params: { lang: string }
}) {
  // We know the route pattern guarantees 'lang' will be there
  const lang = params.lang || defaultLocale;
  
  // Get the dictionary
  const dictionary = await getDictionary(lang as Locale);
  
  // Render the page
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Home Page in {lang}</h1>
      <p className="text-lg mb-8">{dictionary.homepage.hero.title}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Professional Logistics Solutions</h2>
          <p>Alatar Logistics Group Ltd provides comprehensive transport, haulage, and warehousing solutions across the UK.</p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Expert Services</h2>
          <p>From transport and haulage to specialized freight forwarding, we have the expertise to handle your logistics needs.</p>
        </div>
      </div>
    </div>
  );
}
