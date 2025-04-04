import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        {/* Video Background */}
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/images/white_truck_on_road_large.jpg" // Fallback image
          preload="auto"
        >
          <source src="/video/ariel_road_footage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="hero-overlay"></div>
        
        {/* Hero Content */}
        <div className="hero-content max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Professional Logistics Solutions Across the UK
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Transport, Haulage, Freight Forwarding, and Warehousing Services Tailored to Your Business Needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/services" className="btn btn-primary px-8 py-3 text-lg">
              Our Services
            </Link>
            <Link href="/contact" className="btn btn-white px-8 py-3 text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Logistics Services</h2>
            <p className="section-subtitle">
              Alatar Logistics Group provides comprehensive solutions to help your business operate efficiently and meet your delivery needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transport & Haulage</h3>
              <p className="text-gray-600 mb-4">Reliable and efficient transport services across the UK, with a modern fleet and experienced drivers.</p>
              <div className="mt-auto">
                <Link href="/services/transport-haulage" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Freight Forwarding</h3>
              <p className="text-gray-600 mb-4">Expert management of your shipping process including documentation and customs clearance.</p>
              <div className="mt-auto">
                <Link href="/services" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialised Haulage</h3>
              <p className="text-gray-600 mb-4">Custom solutions for oversized, heavy, or unusual cargo with specialized equipment.</p>
              <div className="mt-auto">
                <Link href="/services" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Warehousing</h3>
              <p className="text-gray-600 mb-4">Secure storage solutions with inventory management systems for all your storage needs.</p>
              <div className="mt-auto">
                <Link href="/services" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Alatar Logistics Group?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nationwide Coverage</h3>
                    <p className="text-gray-600">We provide comprehensive logistics services across the entire United Kingdom.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Fleet</h3>
                    <p className="text-gray-600">Our vehicles are equipped with the latest technology for efficient and reliable deliveries.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
                    <p className="text-gray-600">Our staff brings years of industry expertise to ensure your goods are handled professionally.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Customer-Focused</h3>
                    <p className="text-gray-600">We prioritize clear communication and exceptional service to meet your needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about" className="btn btn-primary px-6 py-3">
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              <Image 
                src="/images/scania_truck_on_the_coast_evening_medium.jpg"
                alt="Alatar Logistics Truck" 
                width={600} 
                height={400}
                className="w-full h-auto"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Quote Section */}
      <section className="quote-banner">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your logistics requirements and get a personalized quote for your business.
          </p>
          <Link href="/contact" className="btn btn-white px-8 py-3 text-lg">
            Request a Quote
          </Link>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section bg-white" id="contact-form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to get started? Fill out the form and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <address className="not-italic text-gray-600">
                      Alatar Logistics Group Ltd<br />
                      142-143 Parrock Street,<br />
                      Gravesend, England, DA12 1EY
                    </address>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:sales@alatargroup.co.uk" className="hover:text-primary transition-colors">
                        sales@alatargroup.co.uk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:07803561679" className="hover:text-primary transition-colors">
                        07803 561679
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {/* Hubspot Form */}
              <div id="hubspot-form">
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
          </div>
        </div>
      </section>
      
      {/* Clients/Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stats-counter">98%</div>
              <p className="text-lg font-medium">On-Time Delivery Rate</p>
            </div>
            <div>
              <div className="stats-counter">25+</div>
              <p className="text-lg font-medium">Years of Experience</p>
            </div>
            <div>
              <div className="stats-counter">500+</div>
              <p className="text-lg font-medium">Satisfied Clients</p>
            </div>
            <div>
              <div className="stats-counter">24/7</div>
              <p className="text-lg font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
