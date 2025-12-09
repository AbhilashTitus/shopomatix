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
  openGraph: {
    title: 'Shopomatix - Your One-Stop Shopping Destination',
    description: 'Shopomatix is a modern ecommerce marketplace offering Electronics, Fashion, and Home Appliances. Discover the best deals and latest products.',
    url: 'https://shopomatix.com',
    siteName: 'Shopomatix',
    images: [
      {
        url: '/assets/shopomatix-logo.avif',
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
    images: ['/assets/shopomatix-logo.avif'],
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

import { Providers } from '@/components/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
