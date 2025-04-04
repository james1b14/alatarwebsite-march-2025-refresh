import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Poppins } from 'next/font/google';

// Setup font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Alatar Logistics Group Ltd",
  description: "Professional logistics solutions for businesses across the UK",
  keywords: "logistics, transport, haulage, freight forwarding, warehousing, UK logistics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* ✅ Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="05h0exlfb2f57mciln38hvtnf81sb1" />
        
        {/* ✅ Favicon Files */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      
    
        {/* ✅ Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9BWHW9');
          `}
        </Script>

        {/* ✅ Meta Pixel Tracking (Fixed Syntax) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            window.fbq = window.fbq || function() {
              (window.fbq.q = window.fbq.q || []).push(arguments);
            };
            window.fbq('init', '684324676154341');
            window.fbq('track', 'PageView');

            (function(f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = true;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = true;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          `}
        </Script>

        {/* ✅ HubSpot Tracking (Ensured HTTPS & Proper Loading) */}
        <Script
          id="hubspot-tracking"
          src="https://js-eu1.hs-scripts.com/26284292.js"
          strategy="afterInteractive"
        />

        {/* ✅ Facebook NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=684324676154341&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* ✅ Ahrefs tracking code */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="EBWsIh3PGHT8iJne9uOWSw" async></script>

        </head>
        
       <body className="font-poppins bg-white text-gray-900 min-h-screen flex flex-col">

        {/* ✅ Website Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo/alatar logo resized.png"
                alt="Alatar Logistics Group Ltd" 
                width={180} 
                height={50} 
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
        </header>

        {/* ✅ Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ✅ Website Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Alatar Logistics Group Ltd. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
