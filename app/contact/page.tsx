import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Us | Alatar Logistics Group Ltd',
  description: 'Get in touch with Alatar Logistics Group Ltd for professional transport, freight forwarding, and warehousing services across the UK.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="relative w-full h-full">
          <Image
            src="/images/warehouse_interior_docks.jpg" unoptimized={true}
            alt="Alatar Logistics Warehouse Interior"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Get in touch with our team for all your logistics needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {/* Hubspot Form */}
              <div id="hubspot-form" className="mt-6">
                <Script
                  strategy="afterInteractive"
                  src="//js-eu1.hsforms.net/forms/embed/v2.js"
                />
                <Script id="hubspot-form-script" strategy="afterInteractive">
                  {`
                    document.addEventListener('DOMContentLoaded', function() {
                      if (window.hbspt) {
                        hbspt.forms.create({
                          region: "eu1",
                          portalId: "26284292",
                          formId: "8e121916-ba2d-4427-964c-e27d3d39704b"
                        });
                      }
                    });
                  `}
                </Script>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-gray-600">
                We value your inquiries and strive to provide timely responses. Choose your preferred 
                contact method to reach our team.
              </p>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <address className="not-italic text-gray-600">
                        Alatar Logistics Group Ltd<br />
                        142-143 Parrock Street,<br />
                        Gravesend,<br />
                        England,<br />
                        DA12 1EY
                      </address>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:sales@alatargroup.co.uk" className="text-primary hover:underline">
                          sales@alatargroup.co.uk
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        For all inquiries regarding our services and quotes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:07803561679" className="text-primary hover:underline">
                          07803 561679
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Available Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Company Details</h3>
                      <p className="text-gray-600">
                        Alatar Logistics Group Ltd<br />
                        Company Number: 13982779<br />
                        Registered in England & Wales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find answers to common questions about our logistics services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What areas do you service?</h3>
              <p className="text-gray-600">
                Alatar Logistics Group provides services across the entire United Kingdom, with comprehensive coverage for all your transport and warehousing needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do I get a quote for your services?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out the contact form on this page, calling us directly, or sending an email to sales@alatargroup.co.uk. We'll respond promptly with a tailored quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What types of goods do you transport?</h3>
              <p className="text-gray-600">
                We transport a wide range of goods including general freight, palletized goods, containers, retail merchandise, and specialized cargo. Contact us for specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How quickly can you arrange transport services?</h3>
              <p className="text-gray-600">
                We pride ourselves on flexibility and can often arrange transport services on short notice. For optimal scheduling, we recommend contacting us as early as possible with your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quote-banner">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how Alatar Logistics Group can help optimize your supply chain and transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#hubspot-form" className="btn btn-white px-8 py-3 text-lg">
              Contact Us Now
            </a>
            <Link href="/services" className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-block">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
