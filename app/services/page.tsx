import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Metadata for the Services page
export const metadata: Metadata = {
  title: 'Our Services | Alatar Logistics Group Ltd',
  description: 'Comprehensive logistics solutions including transport, haulage, freight forwarding, specialized haulage, and warehousing services across the UK.',
};

// Services page showcasing all logistics services
export default function ServicesPage() {
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
          poster="/images/container_port_logistics_evening.jpg"
        >
          <source src="/video/Container_logistics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="hero-overlay"></div>
        
        {/* Hero Content */}
        <div className="hero-content max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Logistics Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Comprehensive logistics solutions tailored to your business needs
          </p>
          <div className="animate-slide-up">
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="section-title text-center">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center">
              Alatar Logistics Group offers a comprehensive range of professional logistics services designed to 
              meet the diverse needs of businesses across the United Kingdom. From transportation and warehousing 
              to specialized solutions, we provide reliable and efficient services to support your supply chain.
            </p>
          </div>

          {/* Transport & Haulage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/white_truck_on_road_large.jpg" unoptimized={true}
                  alt="Alatar Logistics transport truck on the road"
                  fill
                  style={{objectFit: 'cover'}}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Transport & Haulage</h2>
              <p className="mb-4">
                Our fleet of modern vehicles provides reliable road transport services across the UK. 
                Whether you need to move a single pallet or arrange full load deliveries, our experienced 
                drivers ensure your goods reach their destination safely and on time.
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>General haulage services</li>
                <li>Pallet delivery and collection</li>
                <li>Container transport</li>
                <li>Port collections</li>
                <li>UK-wide coverage</li>
              </ul>
              <Link href="/transport-haulage" className="btn btn-primary px-6 py-3">
                Learn More
              </Link>
            </div>
          </div>

          {/* Freight Forwarding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Freight Forwarding</h2>
              <p className="mb-4">
                Our comprehensive freight forwarding services take the complexity out of shipping. 
                We handle all aspects of the logistics process, from documentation and customs clearance to 
                transportation coordination, making international shipping straightforward and efficient.
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Customs handling and documentation</li>
                <li>International shipping coordination</li>
                <li>Import and export services</li>
                <li>Supply chain management</li>
                <li>Multi-modal transportation solutions</li>
              </ul>
              <Link href="/services" className="btn btn-primary px-6 py-3">
                Learn More
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/Import_contrainers_medium_dark.jpg" unoptimized={true}
                  alt="Freight containers at port"
                  fill
                  style={{objectFit: 'cover'}}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Specialised Haulage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/red_renault_truck_close.jpg" unoptimized={true}
                  alt="Specialized haulage vehicle"
                  fill
                  style={{objectFit: 'cover'}}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Specialised Haulage</h2>
              <p className="mb-4">
                For oversized, heavy, or unusual cargo, our specialised haulage services provide tailored solutions. 
                We have the equipment and expertise to handle challenging loads safely and efficiently, complying with 
                all relevant regulations and permits.
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Heavy haulage for oversized loads</li>
                <li>Abnormal load transport</li>
                <li>Permit and escort arrangements</li>
                <li>Route planning for special cargoes</li>
                <li>Equipment with specific handling capabilities</li>
              </ul>
              <Link href="/services" className="btn btn-primary px-6 py-3">
                Learn More
              </Link>
            </div>
          </div>

          {/* Warehousing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Warehousing</h2>
              <p className="mb-4">
                Our modern warehousing facilities offer secure storage solutions with comprehensive inventory 
                management systems. Whether you need short-term storage or a long-term distribution center, we 
                provide flexible options to meet your business requirements.
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Secure storage facilities</li>
                <li>Inventory management</li>
                <li>Order fulfillment services</li>
                <li>Cross-docking capabilities</li>
                <li>Distribution center operations</li>
              </ul>
              <Link href="/services" className="btn btn-primary px-6 py-3">
                Learn More
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <div className="relative h-80 w-full">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/video/guy_walking_in_a_warehouse.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Tailored Logistics Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center mb-12">
            We understand that every business has unique logistics requirements. Our team works closely with you 
            to develop customized solutions that optimize your supply chain and support your business goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-block">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Business Support</h3>
              <p>Specialized logistics solutions for small businesses, providing affordable and scalable services as your business grows.</p>
            </div>
            
            <div className="feature-block">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail Logistics</h3>
              <p>Comprehensive services for retailers, including storage, distribution, and last-mile delivery to meet customer expectations.</p>
            </div>
            
            <div className="feature-block">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Project Logistics</h3>
              <p>End-to-end management of complex logistics projects, ensuring coordinated delivery and minimizing disruptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quote-banner">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your requirements and discover how our services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn btn-white px-8 py-3 text-lg">
              Contact Us
            </Link>
            <Link href="/about" className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-block">
              About Our Company
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
