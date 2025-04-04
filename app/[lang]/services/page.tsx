import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { generateSEOMetadata } from '@/app/lib/utils';

export async function generateStaticParams() {
  return [
      { lang: 'en' }, // English
      { lang: 'fr' }, // French
      { lang: 'es' }, // Spanish
  ];
}

interface ServicesPageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({ params: { lang } }: ServicesPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  
  return generateSEOMetadata({
    title: `${dictionary.services.common.title} - Alatar Logistics Group Ltd`,
    description: 'Comprehensive logistics solutions including transport, freight forwarding, specialized haulage, and warehousing services across the UK.',
    locale: lang,
    path: '/services',
  });
}

export default async function ServicesPage({ params: { lang } }: ServicesPageProps) {
  const dictionary = await getDictionary(lang);
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dictionary.services.common.title}
            </h1>
            <p className="text-xl">
              {dictionary.services.common.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-lg text-gray-600">
              At Alatar Logistics Group, we offer a wide range of logistics services designed to meet the diverse needs of businesses across the UK. Explore our services below to discover how we can support your supply chain operations.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Transport & Haulage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">{dictionary.navigation.transportHaulage}</h2>
                <p className="mb-4 text-lg text-gray-600">
                  {dictionary.services.transportHaulage.subtitle}
                </p>
                <p className="mb-6">
                  {dictionary.services.transportHaulage.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.transportHaulage.features.feature1.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.transportHaulage.features.feature2.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.transportHaulage.features.feature3.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.transportHaulage.features.feature4.title}</h3>
                    </div>
                  </div>
                </div>
                <Link href={`/${lang}/services/transport-haulage`} className="btn-primary">
                  {dictionary.common.learnMore}
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-96">
                <Image
                  src="/images/white_truck_on_road_large.jpg" unoptimized={true}
                  alt="Transport and Haulage"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Freight Forwarding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96">
                <Image
                  src="/images/import_logistics_maersk.jpg" unoptimized={true}
                  alt="Freight Forwarding"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{dictionary.navigation.freightForwarding}</h2>
                <p className="mb-4 text-lg text-gray-600">
                  {dictionary.services.freightForwarding.subtitle}
                </p>
                <p className="mb-6">
                  {dictionary.services.freightForwarding.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.freightForwarding.features.feature1.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.freightForwarding.features.feature2.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.freightForwarding.features.feature3.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.freightForwarding.features.feature4.title}</h3>
                    </div>
                  </div>
                </div>
                <Link href={`/${lang}/services/freight-forwarding`} className="btn-primary">
                  {dictionary.common.learnMore}
                </Link>
              </div>
            </div>
            
            {/* Specialised Haulage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">{dictionary.navigation.specialisedHaulage}</h2>
                <p className="mb-4 text-lg text-gray-600">
                  {dictionary.services.specialisedHaulage.subtitle}
                </p>
                <p className="mb-6">
                  {dictionary.services.specialisedHaulage.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.specialisedHaulage.features.feature1.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.specialisedHaulage.features.feature2.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.specialisedHaulage.features.feature3.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.specialisedHaulage.features.feature4.title}</h3>
                    </div>
                  </div>
                </div>
                <Link href={`/${lang}/services/specialised-haulage`} className="btn-primary">
                  {dictionary.common.learnMore}
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-96">
                <Image
                  src="/images/euro_truck_in_the_snow_from_a_car.jpg" unoptimized={true}
                  alt="Specialised Haulage"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Warehousing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96">
                <Image
                  src="/images/Warehouse_racking_empty.jpg" unoptimized={true}
                  alt="Warehousing"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{dictionary.navigation.warehousing}</h2>
                <p className="mb-4 text-lg text-gray-600">
                  {dictionary.services.warehousing.subtitle}
                </p>
                <p className="mb-6">
                  {dictionary.services.warehousing.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.warehousing.features.feature1.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.warehousing.features.feature2.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.warehousing.features.feature3.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{dictionary.services.warehousing.features.feature4.title}</h3>
                    </div>
                  </div>
                </div>
                <Link href={`/${lang}/services/warehousing`} className="btn-primary">
                  {dictionary.common.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Tailored Logistics Solution?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to discuss your specific logistics requirements and how we can create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={`/${lang}/contact`} className="btn-primary">
                {dictionary.common.contactUs}
              </Link>
              <a href="tel:07803561679" className="btn-outline">
                {dictionary.common.phone}: 07803 561679
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
