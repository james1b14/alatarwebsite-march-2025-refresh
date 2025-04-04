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

type AboutPageProps = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return generateSEOMetadata({
    title: `${dictionary.about.title} - Alatar Logistics Group Ltd`,
    description: 'Learn about Alatar Logistics Group, a professional logistics company providing comprehensive transport, haulage, and warehousing solutions across the UK.',
    locale: lang,
    path: '/about',
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dictionary.about.title}
            </h1>
            <p className="text-xl">{dictionary.about.subtitle}</p>
          </div>
        </div>
      </section>
      
      {/* Company Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Alatar Logistics Group Ltd</h2>
              <p className="mb-4">
                Founded with a vision to provide reliable and efficient logistics solutions, Alatar Logistics Group Ltd has grown to become a trusted partner for businesses across the United Kingdom.
              </p>
              <p className="mb-4">
                Based in Gravesend, England, we leverage our strategic location and extensive network to offer comprehensive transport, haulage, freight forwarding, and warehousing services tailored to our clients' specific needs.
              </p>
              <p className="mb-4">
                Our team of experienced professionals is dedicated to ensuring your goods reach their destination safely and on time, every time. We pride ourselves on our customer-centric approach, combining industry expertise with a commitment to excellence.
              </p>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/white_truck_on_road_large.jpg"
                alt="Alatar Logistics Group Fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{dictionary.about.mission.title}</h2>
            <p className="text-lg">
              {dictionary.about.mission.content}
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-12">{dictionary.about.values.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">{dictionary.about.values.value1.title}</h4>
              <p className="text-gray-600">
                {dictionary.about.values.value1.description}
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">{dictionary.about.values.value2.title}</h4>
              <p className="text-gray-600">
                {dictionary.about.values.value2.description}
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">{dictionary.about.values.value3.title}</h4>
              <p className="text-gray-600">
                {dictionary.about.values.value3.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of logistics solutions to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <Image
                  src="/images/white_truck_on_road_small.jpg"
                  alt={dictionary.navigation.transportHaulage}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{dictionary.navigation.transportHaulage}</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our transport and haulage services include pallet transport, container transport, and port collections. We ensure your goods reach their destination safely and on time.
                </p>
                <Link href={`/${lang}/services/transport-haulage`} className="text-primary font-medium inline-flex items-center mt-auto">
                  {dictionary.common.learnMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <Image
                  src="/images/import_logistics_maersk.jpg"
                  alt={dictionary.navigation.freightForwarding}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{dictionary.navigation.freightForwarding}</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our freight forwarding services provide expert customs handling, documentation management, and international shipping solutions for smooth global logistics operations.
                </p>
                <Link href={`/${lang}/services/freight-forwarding`} className="text-primary font-medium inline-flex items-center mt-auto">
                  {dictionary.common.learnMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <Image
                  src="/images/euro_truck_in_the_snow_from_a_car.jpg"
                  alt={dictionary.navigation.specialisedHaulage}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{dictionary.navigation.specialisedHaulage}</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our specialised haulage services cater to unique requirements, including heavy haulage, oversized loads, and project cargo, with all necessary permits and equipment.
                </p>
                <Link href={`/${lang}/services/specialised-haulage`} className="text-primary font-medium inline-flex items-center mt-auto">
                  {dictionary.common.learnMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <Image
                  src="/images/warehouse_racking_empty_2.jpg"
                  alt={dictionary.navigation.warehousing}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{dictionary.navigation.warehousing}</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our warehousing operations provide secure storage, inventory management, and distribution services with modern facilities and advanced tracking systems.
                </p>
                <Link href={`/${lang}/services/warehousing`} className="text-primary font-medium inline-flex items-center mt-auto">
                  {dictionary.common.learnMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{dictionary.about.team.title}</h2>
            <p className="text-lg text-gray-600">{dictionary.about.team.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Example, to be replaced with actual team members */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-gray-500">Operations Director</p>
              </div>
            </div>
            
            {/* Team Member 2 - Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-500">Logistics Manager</p>
              </div>
            </div>
            
            {/* Team Member 3 - Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">David Williams</h3>
                <p className="text-gray-500">Fleet Manager</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg">
              Our team is backed by a dedicated group of drivers, warehouse staff, and administrative personnel who work together to deliver exceptional service.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Partner with Alatar Logistics Group</h2>
            <p className="text-xl mb-8">Ready to experience reliable, efficient logistics solutions? Contact us today to discuss how we can support your business.</p>
            <Link href={`/${lang}/contact`} className="btn-lg inline-block bg-white text-primary hover:bg-gray-100">
              {dictionary.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
