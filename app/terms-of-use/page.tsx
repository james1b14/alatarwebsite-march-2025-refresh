import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Alatar Logistics Group Ltd',
  description: 'Terms and conditions for using the services of Alatar Logistics Group Ltd, a professional logistics provider in the UK.',
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Alatar Logistics Group Ltd ("Company", "we", "our", "us"). These Terms of Use govern your use of our website located at www.alatarlogisticsgroup.co.uk (the "Site") and form a binding contractual agreement between you, the user of the Site and us.
            </p>
            <p>
              By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
            <p>
              Alatar Logistics Group Ltd is a logistics provider offering transport, haulage, freight forwarding, specialised haulage, and warehousing services across the United Kingdom. Information about our services is provided on the Site for general informational purposes only.
            </p>
            <p>
              All services are subject to separate service agreements. The information provided on the Site does not constitute a contract for services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are owned by Alatar Logistics Group Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>
              You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Site.
            </p>
            <p>
              Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Links To Other Web Sites</h2>
            <p>
              Our Site may contain links to third-party websites or services that are not owned or controlled by Alatar Logistics Group Ltd.
            </p>
            <p>
              Alatar Logistics Group Ltd has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation Of Liability</h2>
            <p>
              In no event shall Alatar Logistics Group Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li>Your access to or use of or inability to access or use the Site;</li>
              <li>Any conduct or content of any third party on the Site;</li>
              <li>Any content obtained from the Site; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
            <p>
              Your use of the Site is at your sole risk. The Site is provided on an "AS IS" and "AS AVAILABLE" basis. The Site is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mb-8">
              <strong>Alatar Logistics Group Ltd</strong><br />
              142-143 Parrock Street,<br />
              Gravesend,<br />
              England,<br />
              DA12 1EY<br />
              Email: <a href="mailto:sales@alatargroup.co.uk" className="text-primary hover:underline">sales@alatargroup.co.uk</a><br />
              Phone: <a href="tel:07803561679" className="text-primary hover:underline">07803 561679</a>
            </address>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/contact" className="text-primary hover:underline">Contact Us</Link> | 
              <Link href="/privacy/alatar logistics group ltd privacy policy.pdf" className="text-primary hover:underline ml-2">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
