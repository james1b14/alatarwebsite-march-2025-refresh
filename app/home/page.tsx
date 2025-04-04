import Link from 'next/link';

// Simple home page without i18n complexity
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Alatar Logistics Group Ltd</h1>
      <p className="text-lg mb-8">Professional Logistics Solutions for Your Business</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Professional Logistics Solutions</h2>
          <p>Alatar Logistics Group Ltd provides comprehensive transport, haulage, and warehousing solutions across the UK.</p>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Expert Services</h2>
          <p>From transport and haulage to specialized freight forwarding, we have the expertise to handle your logistics needs.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Transport and Haulage</h3>
          <p>Reliable and efficient transport services for your goods.</p>
        </div>
        <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Freight Forwarding</h3>
          <p>Professional management of your shipping and logistics needs.</p>
        </div>
        <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Specialised Haulage</h3>
          <p>Custom solutions for oversized or sensitive cargo.</p>
        </div>
        <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Warehousing</h3>
          <p>Secure storage solutions with flexible options.</p>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">Get in touch to discuss your logistics requirements</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Alatar Logistics Group Ltd</h3>
            <address className="not-italic mb-4">
              142-143 Parrock Street,<br />
              Gravesend,<br />
              England,<br />
              DA12 1EY
            </address>
            <p className="mb-2">Company Number: 13982779</p>
          </div>
          <div>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:sales@alatargroup.co.uk" className="underline">sales@alatargroup.co.uk</a></p>
            <p className="mb-2"><strong>Telephone:</strong> 07803 561679</p>
            <div className="mt-6">
              <Link href="/contact" className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
