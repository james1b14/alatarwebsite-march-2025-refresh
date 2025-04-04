import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 mb-8">
            <Image 
              src="/logo/Alatar logo resized.png" unoptimized={true}
              alt="Alatar Logistics Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          
          <p className="text-lg text-gray-600 max-w-md text-center mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <Link 
              href="/" 
              className="btn btn-primary px-6 py-3 rounded-md font-medium"
            >
              Go to Homepage
            </Link>
            
            <Link 
              href="/contact" 
              className="btn btn-outline px-6 py-3 rounded-md font-medium"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 text-gray-600">
            <div className="space-y-2">
              <p className="font-medium">You might be looking for:</p>
              <ul className="space-y-2 text-primary">
                <li>
                  <Link href="/services" className="hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
