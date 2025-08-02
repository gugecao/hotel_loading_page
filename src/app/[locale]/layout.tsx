import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const locales = ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'];

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_TITLE || "LocusStay - Revolutionizing Global Hotel Distribution",
    template: process.env.NEXT_PUBLIC_SITE_TITLE_TEMPLATE || "%s | LocusStay"
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "LocusStay partners with hotels across 180+ countries and regions, using cutting-edge technology, data insights, and an unparalleled global network to completely transform how hotels connect with travelers.",
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(',') || ["LocusStay", "Global Hotel Distribution", "Revenue Management", "OTA Channels", "Hotel Management System", "RevPAR Optimization", "AI-Driven Pricing", "Intelligent Automation Operations", "Hotel Technology", "Distribution Solutions"],
  authors: [{ name: process.env.NEXT_PUBLIC_SITE_AUTHOR || "LocusStay Team" }],
  creator: process.env.NEXT_PUBLIC_SITE_CREATOR || "LocusStay",
  publisher: process.env.NEXT_PUBLIC_SITE_PUBLISHER || "LocusStay",
  applicationName: process.env.NEXT_PUBLIC_SITE_NAME || "LocusStay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com'),
  alternates: {
    canonical: '/',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'LocusStay',
  alternateName: `${process.env.NEXT_PUBLIC_SITE_NAME || 'LocusStay'} Global Hotel Distribution Platform`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'LocusStay partners with hotels across 180+ countries and regions, using cutting-edge technology, data insights, and an unparalleled global network to completely transform how hotels connect with travelers',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com',
  logo: {
    '@type': 'ImageObject',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com'}${process.env.NEXT_PUBLIC_LOGO_URL || '/logo.png'}`,
    width: 180,
    height: 78
  },
  foundingDate: process.env.NEXT_PUBLIC_COMPANY_FOUNDED || '2020',
  knowsAbout: ['Hotel Distribution', 'Revenue Management', 'AI-Powered Pricing', 'Global Hotel Networks', 'Hospitality Technology'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'service@locusstay.com',
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
    ratingValue: process.env.NEXT_PUBLIC_RATING_VALUE || '4.8',
    ratingCount: process.env.NEXT_PUBLIC_RATING_COUNT || '3500',
    bestRating: process.env.NEXT_PUBLIC_RATING_BEST || '5',
    worstRating: process.env.NEXT_PUBLIC_RATING_WORST || '1'
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
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}