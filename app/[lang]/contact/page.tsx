import { Metadata } from 'next';
import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { generateSEOMetadata } from '@/app/lib/utils';

export async function generateStaticParams() {
  return [
      { lang: 'en' }, // English
      { lang: 'fr' }, // French
      { lang: 'es' }, // Spanish
  ];
}

// Use Next.js pattern for page params
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang as Locale);
  
  return generateSEOMetadata({
    title: `${dictionary.contact.title} - Alatar Logistics Group Ltd`,
    description: 'Get in touch with our logistics experts for transport, freight forwarding, and warehousing services across the UK.',
    locale: params.lang as Locale,
    path: '/contact',
  });
}

// Page component using Next.js standard props pattern
export default async function ContactPage({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const dictionary = await getDictionary(params.lang as Locale);
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dictionary.contact.title}
            </h1>
            <p className="text-xl">
              {dictionary.contact.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{dictionary.contact.addressTitle}</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700">
                      Alatar Logistics Group Ltd<br />
                      142-143 Parrock Street,<br />
                      Gravesend,<br />
                      England,<br />
                      DA12 1EY
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Company Number 13982779</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">{dictionary.common.email}</h3>
                    <a href="mailto:sales@alatargroup.co.uk" className="text-primary hover:underline">
                      sales@alatargroup.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">{dictionary.common.phone}</h3>
                    <a href="tel:07803561679" className="text-primary hover:underline">
                      07803 561679
                    </a>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{dictionary.contact.hoursTitle}</h2>
              <p className="text-gray-700 mb-6">{dictionary.contact.hours}</p>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-80 mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7089726757185!2d0.36744897670675985!3d51.44192661689219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b26b594e6d43%3A0x7f59ada46b0e3833!2s142-143%20Parrock%20St%2C%20Gravesend%20DA12%201EY!5e0!3m2!1sen!2suk!4v1710624400026!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{dictionary.contact.formTitle}</h2>
                
                {/* HubSpot Form */}
                <div id="hubspot-form">
                  <script charSet="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        hbspt.forms.create({
                          region: "eu1",
                          portalId: "26284292",
                          formId: "8e121916-ba2d-4427-964c-e27d3d39704b"
                        });
                      `,
                    }}
                  />
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your logistics?</h2>
            <p className="text-lg text-gray-600 mb-8">Our logistics experts are here to help. Contact us today for a tailored solution that meets your specific needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:sales@alatargroup.co.uk" className="btn-primary">
                Email Us
              </a>
              <a href="tel:07803561679" className="btn-outline">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
