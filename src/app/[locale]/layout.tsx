import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

const locales = ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'];

export const metadata: Metadata = {
  title: {
    default: "LocusStay - Revolutionizing Global Hotel Distribution",
    template: "%s | LocusStay"
  },
  description: "LocusStay partners with hotels across 180+ countries and regions, using cutting-edge technology, data insights, and an unparalleled global network to completely transform how hotels connect with travelers.",
  keywords: ["LocusStay", "Global Hotel Distribution", "Revenue Management", "OTA Channels", "Hotel Management System", "RevPAR Optimization", "AI-Driven Pricing", "Intelligent Automation Operations", "Hotel Technology", "Distribution Solutions"],
  authors: [{ name: "LocusStay Team" }],
  creator: "LocusStay",
  publisher: "LocusStay",
  applicationName: "LocusStay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://locusstay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://locusstay.com',
    siteName: 'LocusStay',
    title: 'LocusStay - Revolutionizing Global Hotel Distribution',
    description: 'LocusStay covers 180+ countries and regions, using cutting-edge technology and global networks to completely transform how hotels connect with travelers. 150+ distribution channels, AI-driven revenue optimization, helping 3,500+ hotel partners achieve +42% revenue growth.',
    images: [
      {
        url: '/logo_180x78.png',
        width: 180,
        height: 78,
        alt: 'LocusStay - Global Hotel Distribution Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LocusStay',
    creator: '@LocusStay',
    title: 'LocusStay - Revolutionizing Global Hotel Distribution',
    description: 'LocusStay covers 180+ countries and regions, 150+ distribution channels, AI-driven revenue optimization, helping hotels achieve +42% revenue growth.',
    images: ['/logo_180x78.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LocusStay',
  alternateName: 'LocusStay Global Hotel Distribution Platform',
  description: 'LocusStay partners with hotels across 180+ countries and regions, using cutting-edge technology, data insights, and an unparalleled global network to completely transform how hotels connect with travelers',
  url: 'https://locusstay.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://locusstay.com/logo_180x78.png',
    width: 180,
    height: 78
  },
  foundingDate: '2020',
  knowsAbout: ['Hotel Distribution', 'Revenue Management', 'AI-Powered Pricing', 'Global Hotel Networks', 'Hospitality Technology'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'service@locusstay.com',
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English', 'Japanese', 'Korean', 'French', 'German', 'Spanish'],
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'France'
    },
    {
      '@type': 'Country', 
      name: 'Spain'
    },
    {
      '@type': 'Country',
      name: 'United States'
    },
    {
      '@type': 'Country',
      name: 'Italy'
    },
    {
      '@type': 'Country',
      name: 'Turkey'
    },
    {
      '@type': 'Country',
      name: 'Mexico'
    },
    {
      '@type': 'Country',
      name: 'Germany'
    },
    {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    {
      '@type': 'Country',
      name: 'Thailand'
    },
    {
      '@type': 'Country',
      name: 'Japan'
    },
    {
      '@type': 'Country',
      name: 'Austria'
    },
    {
      '@type': 'Country',
      name: 'Greece'
    },
    {
      '@type': 'Country',
      name: 'Portugal'
    },
    {
      '@type': 'Country',
      name: 'Canada'
    },
    {
      '@type': 'Country',
      name: 'Netherlands'
    },
    {
      '@type': 'Country',
      name: 'Malaysia'
    },
    {
      '@type': 'Country',
      name: 'India'
    },
    {
      '@type': 'Country',
      name: 'Poland'
    },
    {
      '@type': 'Country',
      name: 'Switzerland'
    },
    {
      '@type': 'Country',
      name: 'Australia'
    }
  ],
  sameAs: [
    'https://linkedin.com/company/locusstay',
    'https://twitter.com/locusstay',
  ],
  offers: {
    '@type': 'Service',
    name: 'LocusStay Global Hotel Distribution Service',
    description: '150+ distribution channels, AI-driven revenue optimization, intelligent automation operations, dedicated partner support',
    provider: {
      '@type': 'Organization',
      name: 'LocusStay',
    },
    serviceType: 'Hotel Distribution Platform',
    areaServed: 'Worldwide',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '3500',
    bestRating: '5',
    worstRating: '1'
  }
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // 验证语言
  if (!locales.includes(locale)) {
    notFound();
  }

  // 获取翻译消息
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#003580" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}