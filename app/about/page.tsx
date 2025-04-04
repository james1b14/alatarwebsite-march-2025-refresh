import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Alatar Logistics Group Ltd',
  description: 'Learn about Alatar Logistics Group Ltd, a professional logistics company providing transport, haulage, and warehousing solutions across the UK.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="hero-section">
        <div className="relative w-full h-full">
          <Image
            src="/images/scania_truck_on_the_coast_evening_medium.jpg" unoptimized={true}
            alt="Alatar Logistics truck on coastal road"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Alatar Logistics Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Professional logistics solutions you can trust
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Alatar Logistics Group, we combine industry expertise with a commitment to customer service,
                offering comprehensive solutions tailored to your business needs. Our experienced team understands
                the complexities of modern supply chains and works diligently to ensure your goods are transported
                safely and efficiently.
              </p>
              <p className="text-lg text-gray-700">
                Founded on principles of reliability, efficiency, and customer focus, we have grown to become
                a trusted partner for businesses across various sectors, from retail to manufacturing.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/white_truck_on_road_large.jpg" unoptimized={true}
                alt="Alatar Logistics truck on the road"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-600">We understand the importance of timely deliveries and consistent service. Our commitment to reliability means your goods arrive when expected, every time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Professionalism</h3>
                <p className="text-gray-600">From our drivers to our warehouse staff, every member of our team maintains the highest standards of professionalism in all aspects of our operations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Service</h3>
                <p className="text-gray-600">We're dedicated to providing exceptional service that exceeds expectations, building long-term relationships with our clients through trust and performance.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-xl md:order-2">
              <div className="relative h-80 w-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/video/out_of_focus_truck_in_a_transport_yard.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 mb-4">
                What sets Alatar Logistics Group apart is our customer-centric approach to logistics. We don't just transport 
                goods – we develop tailored solutions that address your specific business challenges and goals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team works closely with you to understand your requirements, timelines, and priorities, 
                ensuring that our services align perfectly with your operational needs.
              </p>
              <p className="text-lg text-gray-700">
                With our extensive experience and nationwide network, we can provide cost-effective, efficient solutions 
                that help your business thrive in today's competitive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Alatar Logistics Group provides a comprehensive range of logistics services to meet all your transportation and storage needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Transport & Haulage</h3>
              <p className="mb-4">Reliable and efficient transport services for your goods across the UK.</p>
              <Link href="/services/transport-haulage" className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Freight Forwarding</h3>
              <p className="mb-4">Expert management of your shipping and logistics needs with comprehensive solutions.</p>
              <Link href="/services" className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Specialised Haulage</h3>
              <p className="mb-4">Custom solutions for oversized or sensitive cargo with specialized equipment.</p>
              <Link href="/services" className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Warehousing</h3>
              <p className="mb-4">Secure storage solutions with flexible options to meet your business requirements.</p>
              <Link href="/services" className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <Link href="/services" className="btn btn-white px-8 py-3 text-lg">
            View All Services
          </Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="section-title">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how we can support your logistics needs with our professional solutions.
          </p>
          <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
