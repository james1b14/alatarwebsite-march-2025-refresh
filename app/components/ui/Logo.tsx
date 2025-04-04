import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  lang: string;
  className?: string;
}

export function Logo({ lang, className = '' }: LogoProps) {
  return (
    <Link href={`/${lang}`} className={`flex items-center ${className}`}>
      {/* As a fallback, we'll create a text/SVG logo when no image is available */}
      <div className="flex items-center">
        <div className="mr-2 rounded-md bg-primary p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <path d="M12 4v16" />
            <path d="M4 12h16" />
          </svg>
        </div>
        <div className="font-bold text-xl leading-tight">
          <span className="text-primary">Alatar</span><br />
          <span className="text-sm">Logistics Group</span>
        </div>
      </div>
    </Link>
  );
}

export function ImageLogo({ lang, className = '' }: LogoProps) {
  // Use this once an actual logo image is available
  return (
    <Link href={`/${lang}`} className={`flex items-center ${className}`}>
      <Image
        src="/logo/Alatar logo resized.png" unoptimized={true}
        alt="Alatar Logistics Group Ltd"
        width={180}
        height={60}
        className="h-12 w-auto"
      />
    </Link>
  );
}
