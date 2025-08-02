import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  openGraph: {
    type: (process.env.NEXT_PUBLIC_OG_TYPE as 'website') || 'website',
    locale: process.env.NEXT_PUBLIC_OG_LOCALE || 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com',
    siteName: process.env.NEXT_PUBLIC_OG_SITE_NAME || 'LocusStay',
    title: process.env.NEXT_PUBLIC_OG_TITLE || 'LocusStay - Revolutionizing Global Hotel Distribution',
    description: process.env.NEXT_PUBLIC_OG_DESCRIPTION || 'LocusStay covers 180+ countries and regions, using cutting-edge technology and global networks to completely transform how hotels connect with travelers. 150+ distribution channels, AI-driven revenue optimization, helping 3,500+ hotel partners achieve +42% revenue growth.',
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO_URL || '/logo_180x78.png',
        width: parseInt(process.env.NEXT_PUBLIC_LOGO_WIDTH || '180'),
        height: parseInt(process.env.NEXT_PUBLIC_LOGO_HEIGHT || '78'),
        alt: process.env.NEXT_PUBLIC_LOGO_ALT || 'LocusStay - Global Hotel Distribution Platform',
      },
    ],
  },
  twitter: {
    card: (process.env.NEXT_PUBLIC_TWITTER_CARD as 'summary_large_image') || 'summary_large_image',
    site: process.env.NEXT_PUBLIC_TWITTER_SITE || '@LocusStay',
    creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR || '@LocusStay',
    title: process.env.NEXT_PUBLIC_TWITTER_TITLE || 'LocusStay - Revolutionizing Global Hotel Distribution',
    description: process.env.NEXT_PUBLIC_TWITTER_DESCRIPTION || 'LocusStay covers 180+ countries and regions, 150+ distribution channels, AI-driven revenue optimization, helping hotels achieve +42% revenue growth.',
    images: [process.env.NEXT_PUBLIC_LOGO_URL || '/logo_180x78.png'],
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ROBOTS_INDEX === 'true',
    follow: process.env.NEXT_PUBLIC_ROBOTS_FOLLOW === 'true',
    googleBot: {
      index: process.env.NEXT_PUBLIC_ROBOTS_INDEX === 'true',
      follow: process.env.NEXT_PUBLIC_ROBOTS_FOLLOW === 'true',
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-verification-code',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'your-yandex-verification-code',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || 'your-yahoo-verification-code',
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com'}${process.env.NEXT_PUBLIC_LOGO_URL || '/logo_180x78.png'}`,
    width: parseInt(process.env.NEXT_PUBLIC_LOGO_WIDTH || '180'),
    height: parseInt(process.env.NEXT_PUBLIC_LOGO_HEIGHT || '78')
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
  sameAs: [
    process.env.NEXT_PUBLIC_COMPANY_LINKEDIN || 'https://linkedin.com/company/locusstay',
    process.env.NEXT_PUBLIC_COMPANY_TWITTER || 'https://twitter.com/locusstay',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}