import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Metadata for Transport & Haulage service page
export const metadata: Metadata = {
  title: 'Transport & Haulage Services | Alatar Logistics Group Ltd',
  description: 'Professional transport and haulage services across the UK. Reliable pallet delivery, container transport, and general haulage services for businesses.',
};

// Transport & Haulage service page
export default function TransportHaulagePage() {
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
          poster="/images/white_truck_on_road_large.jpg"
        >
          <source src="/video/Trucks_on_road.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="hero-overlay"></div>
        
        {/* Hero Content */}
        <div className="hero-content max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transport & Haulage
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Reliable, efficient transportation solutions across the United Kingdom
          </p>
          <div className="animate-slide-up">
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Transport & Haulage Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Alatar Logistics Group provides reliable and efficient transportation solutions across the United Kingdom.
                Our modern fleet and experienced drivers ensure your goods reach their destination safely and on time.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in the transport industry, we specialize in delivering personalized haulage 
                services that meet your specific business requirements. Whether you need regular scheduled deliveries 
                or one-time transport, we have the capability and expertise to handle your needs.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary px-6 py-3">
                  Request a Quote
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/scania_truck_on_the_coast_evening_medium.jpg" unoptimized={true}
                alt="Alatar Logistics transport truck"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Transport & Haulage Services</h2>
            <p className="section-subtitle">
              We offer a comprehensive range of transport and haulage solutions to meet all your logistics needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">General Haulage</h3>
              <p className="text-gray-600 mb-4">
                Our core service provides reliable transportation for various cargo types across the UK with our versatile fleet.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Full and part load services</li>
                <li>Scheduled delivery routes</li>
                <li>Nationwide coverage</li>
                <li>Flexible scheduling options</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pallet Transport</h3>
              <p className="text-gray-600 mb-4">
                Efficient movement of palletized goods with flexible options for businesses of all sizes.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Single pallet deliveries</li>
                <li>Multi-pallet shipments</li>
                <li>Secure handling procedures</li>
                <li>Cost-effective solutions</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Container Transport</h3>
              <p className="text-gray-600 mb-4">
                Specialized container transportation from ports to distribution centers or final destinations.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Port collections</li>
                <li>Standard and specialized containers</li>
                <li>Customs handling assistance</li>
                <li>Timely delivery service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/video/Driver_driving_a_truck.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Modern Fleet & Equipment</h2>
              <p className="mb-4">
                Our modern fleet of vehicles is maintained to the highest standards, ensuring reliability and efficiency. 
                We continuously invest in our equipment to provide the best service to our customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Modern, well-maintained vehicles with regular service schedules</span>
                </li>
                <li className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>GPS tracking for real-time updates on your shipment location</span>
                </li>
                <li className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Specialized equipment for various cargo types and requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Fuel-efficient transportation options to reduce environmental impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Our Transport Services</h2>
          <p className="section-subtitle text-center">
            Alatar Logistics Group delivers exceptional value through our commitment to quality and service
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-block">
              <div className="flex">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timely Deliveries</h3>
                  <p className="text-gray-600">We understand the importance of meeting delivery schedules. Our planning and route optimization ensure your goods arrive on time, every time.</p>
                </div>
              </div>
            </div>
            
            <div className="feature-block">
              <div className="flex">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
                  <p className="text-gray-600">Your cargo's security is our priority. We implement proper securing methods and careful handling to protect your goods throughout transit.</p>
                </div>
              </div>
            </div>
            
            <div className="feature-block">
              <div className="flex">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-gray-600">We monitor key performance indicators to ensure consistent service quality and continuously improve our delivery processes.</p>
                </div>
              </div>
            </div>
            
            <div className="feature-block">
              <div className="flex">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">We offer transparent, competitive pricing structures with no hidden fees, providing excellent value for our professional services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Client Success Story</h2>
              <p className="mb-4 text-lg">
                A UK retailer needed reliable transportation for their products to multiple locations across the country. 
                By implementing our scheduled delivery service, we helped them reduce delivery times by 20% and improve
                their supply chain efficiency.
              </p>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg mb-6">
                <p className="italic text-lg">
                  "Alatar Logistics has transformed our distribution process. Their reliable service and excellent
                  communication have made them an invaluable partner in our growth."
                </p>
                <p className="mt-3 font-medium">— Operations Director, UK Retail Chain</p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-lg">Results Achieved:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>20% reduction in delivery times</li>
                  <li>Improved inventory management</li>
                  <li>Enhanced customer satisfaction</li>
                  <li>Cost savings through optimized routes</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/Lorry_being_loaded_interior.jpg" unoptimized={true}
                  alt="Warehouse loading operation"
                  fill
                  style={{objectFit: 'cover'}}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="section-title">Ready to Discuss Your Transport Needs?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our team today to learn more about our transport and haulage services and how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Contact Us
            </Link>
            <Link href="/services" className="btn btn-outline px-8 py-3 text-lg">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
