import Link from 'next/link';
import { Dictionary } from '@/app/lib/i18n/getDictionary';
import { Container } from '@/app/components/ui/Container';
import { Logo } from '@/app/components/ui/Logo';

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="inline-block mb-4">
              <Logo lang={lang} className="text-white" />
            </div>
            <p className="text-gray-400 mb-4">
              Alatar Logistics Group Ltd is a professional logistics company dedicated to providing comprehensive transport, haulage, and warehousing solutions across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.navigation.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/services/transport-haulage`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.transportHaulage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/freight-forwarding`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.freightForwarding}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/specialised-haulage`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.specialisedHaulage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/warehousing`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.warehousing}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.navigation.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terms-of-use`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.termsOfUse}
                </Link>
              </li>
              <li>
                <a href="/privacy/alatar logistics group ltd privacy policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  {dict.common.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{dict.contact.title}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  Alatar Logistics Group Ltd<br />
                  142-143 Parrock Street,<br />
                  Gravesend,<br />
                  England,<br />
                  DA12 1EY
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@alatargroup.co.uk" className="text-gray-400 hover:text-white transition-colors">
                  sales@alatargroup.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:07803561679" className="text-gray-400 hover:text-white transition-colors">
                  07803 561679
                </a>
              </li>
              <li className="flex items-center mt-3">
                <span className="text-gray-400 text-sm">
                  Company Number 13982779
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Alatar Logistics Group Ltd. {dict.common.allRightsReserved}.
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href={`/${lang}/terms-of-use`} 
                className="text-gray-400 hover:text-white text-sm transition-colors mr-4"
              >
                {dict.common.termsOfUse}
              </Link>
              <a 
                href="/privacy/alatar logistics group ltd privacy policy.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {dict.common.privacyPolicy}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
