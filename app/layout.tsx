import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Shopomatix - Your One-Stop Shopping Destination',
  description: 'Shopomatix is a modern ecommerce marketplace offering Electronics, Fashion, and Home Appliances. Discover the best deals and latest products.',
  keywords: ['ecommerce', 'marketplace', 'electronics', 'fashion', 'home appliances', 'online shopping'],
  authors: [{ name: 'Shopomatix' }],
  icons: {
    icon: [
      { url: '/assets/shopomatix-logo-new.avif', sizes: '32x32', type: 'image/avif' },
      { url: '/assets/shopomatix-logo-new.avif', sizes: '16x16', type: 'image/avif' },
    ],
    shortcut: '/assets/shopomatix-logo-new.avif',
    apple: [
      { url: '/assets/shopomatix-logo-new.avif', sizes: '180x180', type: 'image/avif' },
    ],
  },
  openGraph: {
    title: 'Shopomatix - Your One-Stop Shopping Destination',
    description: 'Shopomatix is a modern ecommerce marketplace offering Electronics, Fashion, and Home Appliances. Discover the best deals and latest products.',
    url: 'https://shopomatix.com',
    siteName: 'Shopomatix',
    images: [
      {
        url: '/assets/shopomatix-logo-new.avif',
        width: 1200,
        height: 630,
        alt: 'Shopomatix Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopomatix - Your One-Stop Shopping Destination',
    description: 'Shopomatix is a modern ecommerce marketplace offering Electronics, Fashion, and Home Appliances.',
    images: ['/assets/shopomatix-logo-new.avif'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

import dynamic from 'next/dynamic'

const Providers = dynamic(() => import('@/components/Providers').then(mod => ({ default: mod.Providers })), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  )
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B6B" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
