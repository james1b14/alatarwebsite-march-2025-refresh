'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dictionary } from '@/app/lib/i18n/getDictionary';
import { locales } from '@/app/lib/utils';
import { Container } from '@/app/components/ui/Container';
import { Logo } from '@/app/components/ui/Logo';
import { LinkButton } from '@/app/components/ui/Button';

interface HeaderProps {
  dict: Dictionary;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Get the path without the language prefix
  const pathnameWithoutLang = pathname.replace(new RegExp(`^/${lang}`), '') || '/';
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLanguageMenuOpen) setIsLanguageMenuOpen(false);
  };
  
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo lang={lang} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${lang}`} 
              className={`text-base font-medium ${
                pathname === `/${lang}` ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'
              }`}
            >
              {dict.navigation.home}
            </Link>
            <Link 
              href={`/${lang}/services`} 
              className={`text-base font-medium ${
                pathname.includes(`/${lang}/services`) ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'
              }`}
            >
              {dict.navigation.services}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className={`text-base font-medium ${
                pathname === `/${lang}/about` ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'
              }`}
            >
              {dict.navigation.about}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className={`text-base font-medium ${
                pathname === `/${lang}/contact` ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'
              }`}
            >
              {dict.navigation.contact}
            </Link>
            
            {/* Language Switcher - Desktop */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center text-base font-medium text-gray-800 hover:text-primary"
                aria-expanded={isLanguageMenuOpen}
              >
                <span className="sr-only">{dict.navigation.languageSwitcher}</span>
                <span className="uppercase">{lang}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={`/${locale}${pathnameWithoutLang}`}
                      className={`block px-4 py-2 text-sm ${
                        locale === lang ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsLanguageMenuOpen(false)}
                    >
                      {locale === 'en-GB' && 'English (UK)'}
                      {locale === 'ur' && 'اردو (Urdu)'}
                      {locale === 'ro' && 'Română (Romanian)'}
                      {locale === 'pl' && 'Polski (Polish)'}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <LinkButton href={`/${lang}/contact`} variant="primary">
              {dict.common.contactUs}
            </LinkButton>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguageMenu}
              className="p-2 rounded-md text-gray-800 mr-2"
              aria-expanded={isLanguageMenuOpen}
            >
              <span className="sr-only">{dict.navigation.languageSwitcher}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
              </svg>
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <Container className="space-y-1">
            <Link 
              href={`/${lang}`} 
              className={`block py-2 px-3 rounded-md ${
                pathname === `/${lang}` ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.navigation.home}
            </Link>
            <Link 
              href={`/${lang}/services`} 
              className={`block py-2 px-3 rounded-md ${
                pathname.includes(`/${lang}/services`) ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.navigation.services}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className={`block py-2 px-3 rounded-md ${
                pathname === `/${lang}/about` ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.navigation.about}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className={`block py-2 px-3 rounded-md ${
                pathname === `/${lang}/contact` ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.navigation.contact}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="block py-2 px-3 mt-4 mb-2 bg-primary text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.common.contactUs}
            </Link>
          </Container>
        </div>
      )}
      
      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <Container className="space-y-1">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${pathnameWithoutLang}`}
                className={`block py-2 px-3 rounded-md ${
                  locale === lang ? 'bg-primary/10 text-primary' : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsLanguageMenuOpen(false)}
              >
                {locale === 'en-GB' && 'English (UK)'}
                {locale === 'ur' && 'اردو (Urdu)'}
                {locale === 'ro' && 'Română (Romanian)'}
                {locale === 'pl' && 'Polski (Polish)'}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
