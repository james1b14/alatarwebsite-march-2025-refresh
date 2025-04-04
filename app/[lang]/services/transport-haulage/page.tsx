import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { generateSEOMetadata, defaultLocale } from '@/app/lib/utils';

export async function generateStaticParams() {
  return [
      { lang: 'en' }, // English
      { lang: 'fr' }, // French
      { lang: 'es' }, // Spanish
  ];
}

interface ServicePageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const lang = params.lang || defaultLocale;
  const dictionary = await getDictionary(lang);
  
  return generateSEOMetadata({
    title: `${dictionary.navigation.transportHaulage} - Alatar Logistics Group Ltd`,
    description: 'Professional transport and haulage services including pallet transport, container transport, and port collections across the UK.',
    locale: lang,
    path: '/services/transport-haulage',
  });
}

export default async function TransportHaulagePage({ params }: ServicePageProps) {
  const lang = params.lang || defaultLocale;
  const dictionary = await getDictionary(lang);
  
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/video/ariel_road_footage.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {dictionary.services.transportHaulage.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {dictionary.services.transportHaulage.subtitle}
            </p>
            <Link href={`/${lang}/contact`} className="btn-primary">
              {dictionary.common.getAQuote}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Transport & Haulage Services</h2>
              <p className="mb-4 text-lg text-gray-700">
                {dictionary.services.transportHaulage.description}
              </p>
              <p className="mb-6 text-gray-700">
                With years of experience in the logistics industry, Alatar Logistics Group Ltd offers reliable transport and haulage services that ensure your goods are delivered safely and efficiently. Our modern fleet and skilled drivers are equipped to handle various types of cargo, from palletised goods to full container loads.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Nationwide Coverage</h3>
                    <p className="text-gray-600">Comprehensive logistics solutions across the entire UK</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Modern Fleet</h3>
                    <p className="text-gray-600">Well-maintained vehicles equipped with the latest technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Experienced Drivers</h3>
                    <p className="text-gray-600">Professional, trained drivers with extensive industry knowledge</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/white_truck_on_road_large.jpg" unoptimized={true}
                alt="Alatar Logistics Transport Fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Transport & Haulage Services</h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of transport and haulage services designed to meet the diverse needs of businesses across the UK.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">{dictionary.services.transportHaulage.features.feature1.title}</h3>
              <p className="text-gray-600 mb-4">
                {dictionary.services.transportHaulage.features.feature1.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Full and part load options</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Next-day and economy delivery services</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Real-time tracking capabilities</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">{dictionary.services.transportHaulage.features.feature2.title}</h3>
              <p className="text-gray-600 mb-4">
                {dictionary.services.transportHaulage.features.feature2.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Experienced in handling all container types</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct deliveries from ports to destination</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Efficient scheduling to minimize delays</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">{dictionary.services.transportHaulage.features.feature3.title}</h3>
              <p className="text-gray-600 mb-4">
                {dictionary.services.transportHaulage.features.feature3.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Collections from all major UK ports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Coordination with shipping lines and port authorities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Timely collections to prevent demurrage charges</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">{dictionary.services.transportHaulage.features.feature4.title}</h3>
              <p className="text-gray-600 mb-4">
                {dictionary.services.transportHaulage.features.feature4.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Cost-effective solutions for smaller shipments</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Efficient consolidation of multiple consignments</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced carbon footprint through optimized loading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Transport Needs?</h2>
            <p className="text-xl mb-8">Contact us today to discuss how we can provide tailored transport and haulage solutions for your business.</p>
            <Link href={`/${lang}/contact`} className="btn-lg inline-block bg-white text-primary hover:bg-gray-100">
              {dictionary.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
