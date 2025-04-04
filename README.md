# Alatar Logistics Group Website

## Overview

This is a multi-language Next.js 14 website for Alatar Logistics Group Ltd, a logistics company offering transport, haulage, freight forwarding, specialized haulage, and warehousing services across the UK.

## Features

- **Multi-language Support**: English (UK), Urdu, Romanian, and Polish
- **Static Site Generation**: Fast loading with ISR (Incremental Static Regeneration)
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and language alternates
- **Modern UI Components**: Reusable components built with TypeScript and Tailwind

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export
- **Form Handling**: HubSpot integration

## Project Structure

```
alatar-website/
├── app/
│   ├── [lang]/                  # Language-specific routes
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── services/            # Services index page
│   │   │   ├── transport-haulage/  # Transport & Haulage service page
│   │   │   ├── freight-forwarding/ # Freight Forwarding service page
│   │   │   ├── specialised-haulage/ # Specialized Haulage service page
│   │   │   └── warehousing/     # Warehousing service page
│   │   ├── terms-of-use/        # Terms of Use page
│   │   └── page.tsx             # Homepage
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Basic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Logo.tsx
│   │   └── layout/              # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── RootLayout.tsx
│   ├── lib/                     # Utility functions and libraries
│   │   ├── i18n/                # Internationalization
│   │   │   ├── dictionaries/    # Language-specific dictionaries
│   │   │   └── getDictionary.ts # Dictionary loader
│   │   └── utils.ts             # Utility functions
│   ├── public/                  # Static assets
│   │   ├── Images/              # Image assets
│   │   ├── Video/               # Video assets
│   │   ├── Logo/                # Logo assets
│   │   ├── Privacy/             # Privacy policy PDF
│   │   └── favicon/             # Favicon assets
│   ├── favicon.ico              # Favicon (root level)
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page (redirects to language)
├── middleware.ts                # Language routing middleware
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd alatar-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the static site:

```bash
npm run build
# or
yarn build
```

The output will be generated under the `build` directory.

## Internationalization (i18n)

### Adding a New Language

1. Create a new dictionary file in `app/lib/i18n/dictionaries/`
2. Add the new locale to the `locales` array in `app/lib/utils.ts`
3. Update the dictionary interface in `app/lib/i18n/getDictionary.ts` if needed

### Translation Process

All text content is stored in language-specific JSON files in the `app/lib/i18n/dictionaries/` directory. The default language is British English (`en-GB`).

## Development Guidelines

### Creating a New Page

1. Create a new directory in `app/[lang]/` for your page
2. Add the page component in `page.tsx`
3. Implement `generateStaticParams` to pre-render the page for all languages
4. Implement `generateMetadata` for SEO optimization

Example:

```tsx
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/app/lib/i18n/getDictionary';
import { generateSEOMetadata, locales } from '@/app/lib/utils';

interface PageProps {
  params: {
    lang: Locale;
  };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Page Title',
    description: 'Page description',
    locale: params.lang,
    path: '/page-path',
  });
}

export default async function Page({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  
  return (
    // Your page content
  );
}
```

### Adding New Components

1. For UI components, add them to `app/components/ui/`
2. For layout components, add them to `app/components/layout/`
3. Use TypeScript interfaces to define props

### Styling Guidelines

- Use Tailwind CSS for styling
- Use CSS variables for theme colors (defined in `app/globals.css`)
- Follow the responsive design patterns (mobile-first)

## Deployment

The website is built as a static site and can be deployed to any static hosting service:

1. Run the build process:
   ```bash
   npm run build
   ```

2. Deploy the generated `build` directory to your hosting provider

## Contact Information

- **Company**: Alatar Logistics Group Ltd
- **Email**: sales@alatargroup.co.uk
- **Phone**: 07803 561679
- **Address**: 142-143 Parrock Street, Gravesend, England, DA12 1EY

## License

[Specify license information]
