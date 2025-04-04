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

interface TermsPageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({ params: { lang } }: TermsPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  

  
  return generateSEOMetadata({
    title: `${dictionary.termsOfUse.title} - Alatar Logistics Group Ltd`,
    description: 'Terms of Use for Alatar Logistics Group Ltd website and services.',
    locale: lang,
    path: '/terms-of-use',
  });
}

export default async function TermsPage({ params: { lang } }: TermsPageProps) {
  const dictionary = await getDictionary(lang);
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dictionary.termsOfUse.title}
            </h1>
            <p className="text-xl">
              {dictionary.termsOfUse.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Terms of Use Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2>{dictionary.termsOfUse.sections.introduction.title}</h2>
              <p>{dictionary.termsOfUse.sections.introduction.content}</p>
              
              {/* Definitions */}
              <h2>{dictionary.termsOfUse.sections.definitions.title}</h2>
              <p>{dictionary.termsOfUse.sections.definitions.content}</p>
              
              {/* Service Usage */}
              <h2>{dictionary.termsOfUse.sections.serviceUsage.title}</h2>
              <p>{dictionary.termsOfUse.sections.serviceUsage.content}</p>
              <p>By using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of any account information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with the proper operation of our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              
              {/* User Obligations */}
              <h2>{dictionary.termsOfUse.sections.userObligations.title}</h2>
              <p>{dictionary.termsOfUse.sections.userObligations.content}</p>
              <p>Additional user obligations include:</p>
              <ul>
                <li>Ensuring that goods to be transported or stored comply with all applicable regulations</li>
                <li>Providing accurate descriptions and declarations of goods</li>
                <li>Informing us of any special handling requirements</li>
                <li>Obtaining necessary insurance coverage for goods in transit or storage</li>
                <li>Making prompt payment for services rendered</li>
              </ul>
              
              {/* Intellectual Property */}
              <h2>{dictionary.termsOfUse.sections.intellectualProperty.title}</h2>
              <p>{dictionary.termsOfUse.sections.intellectualProperty.content}</p>
              <p>You may not:</p>
              <ul>
                <li>Use our trademarks, logos, or service marks without our prior written consent</li>
                <li>Copy, reproduce, modify, or create derivative works of our website content</li>
                <li>Decompile, reverse engineer, or disassemble any software provided by us</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
              </ul>
              
              {/* Liability */}
              <h2>{dictionary.termsOfUse.sections.liability.title}</h2>
              <p>{dictionary.termsOfUse.sections.liability.content}</p>
              <p>Our liability limitations include:</p>
              <ul>
                <li>Liability for loss or damage to goods is as set out in our service contracts and is subject to applicable transport and warehousing regulations</li>
                <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                <li>Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim</li>
                <li>We are not liable for delays, losses, or damages caused by factors beyond our reasonable control</li>
              </ul>
              
              {/* Changes to Terms */}
              <h2>{dictionary.termsOfUse.sections.termsChanges.title}</h2>
              <p>{dictionary.termsOfUse.sections.termsChanges.content}</p>
              <p>When changes are made to these Terms:</p>
              <ul>
                <li>We will post the updated terms on our website</li>
                <li>We may notify you of significant changes via email or other means</li>
                <li>Your continued use of our services after changes constitutes acceptance of the new terms</li>
                <li>If you do not agree with the updated terms, you must stop using our services</li>
              </ul>
              
              {/* Governing Law */}
              <h2>{dictionary.termsOfUse.sections.governingLaw.title}</h2>
              <p>{dictionary.termsOfUse.sections.governingLaw.content}</p>
              <p>Additional legal information:</p>
              <ul>
                <li>Any disputes shall be resolved in the courts of England and Wales</li>
                <li>These terms shall be governed by and construed in accordance with the laws of England and Wales</li>
                <li>If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in effect</li>
                <li>Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights</li>
              </ul>
              
              {/* Contact Information */}
              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Use, please contact us at:</p>
              <address>
                Alatar Logistics Group Ltd<br />
                142-143 Parrock Street,<br />
                Gravesend,<br />
                England,<br />
                DA12 1EY<br />
                Email: <a href="mailto:sales@alatargroup.co.uk">sales@alatargroup.co.uk</a><br />
                Phone: <a href="tel:07803561679">07803 561679</a>
              </address>
              
              {/* Last Updated */}
              <p className="text-gray-500 mt-8">Last Updated: March 16, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
