import Link from 'next/link';
import Image from 'next/image';
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
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer Content */}
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info & Contact */}
          <div className="space-y-4">
            <div className="mb-4">
              {/* Company Logo */}
              <div className="inline-block mb-4">
                <Image 
                  src="/Images/LargeLogo.png" 
                  alt="Alatar Logistics Group Ltd Logo" 
                  width={180} 
                  height={60} 
                  className="h-auto w-auto max-h-12"
                  priority
                />
              </div>
              
              {/* Company Address */}
              <address className="text-gray-600 not-italic mt-4 mb-3 text-sm leading-relaxed">
                Alatar Logistics Group Ltd<br />
                142-143 Parrock Street<br />
                Gravesend, England<br />
                DA12 1EY
              </address>
              
              {/* Company Registration */}
              <p className="text-gray-500 text-sm mb-3">
                Company Registration: 13982779
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@alatargroup.co.uk" className="text-primary hover:text-primary-dark transition-colors">
                  sales@alatargroup.co.uk
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:07803561679" className="text-primary hover:text-primary-dark transition-colors">
                  07803 561679
                </a>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/447803561679" className="text-primary hover:text-primary-dark transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">{dict.navigation.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/transport-haulage`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.navigation.transportHaulage}
                </Link>
              </li>
              <li>
                <Link href={`/services/specialised-haulage`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.navigation.specialisedHaulage}
                </Link>
              </li>
              <li>
                <Link href={`/warehousing`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.navigation.warehousing}
                </Link>
              </li>
              <li>
                <Link href={`/about`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/contact`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal Documents */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">{dict.navigation.termsOfUse}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/terms-of-use`} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.common.termsOfUse}
                </Link>
              </li>
              <li>
                <Link href={'/Privacy/Alatar%20Logistics%20Group%20Ltd%20Privacy%20Policy.pdf'} className="text-gray-600 hover:text-primary transition-colors">
                  {dict.common.privacyPolicy}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Modern Slavery Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Cookie Declaration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Compliance Covenants
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">{dict.contact.title}</h3>
            <div className="flex space-x-4 mb-6">
              {/* LinkedIn */}
              <a 
                href="#" 
                className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="#" 
                className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            {/* Mini Company Description */}
            <p className="text-gray-600 text-sm">
              Professional logistics solutions for businesses across the UK and Europe. Transport, haulage, and warehousing services.
            </p>
          </div>
        </div>
      </Container>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-6 bg-primary">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>&copy; {currentYear} Alatar Logistics Group Ltd. {dict.common.allRightsReserved}</p>
            <p className="mt-2 md:mt-0">Company Registration: 13982779</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
