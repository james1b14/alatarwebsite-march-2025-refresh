import { ReactNode } from 'react';
import { Locale, Dictionary } from '@/app/lib/i18n/getDictionary';
import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
  children: ReactNode;
  lang: Locale;
  dictionary: Dictionary;
}

export default function RootLayout({ children, lang, dictionary }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dictionary} lang={lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer dict={dictionary} lang={lang} />
    </div>
  );
}
