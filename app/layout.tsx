import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Shopomatix',
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

const isMaintenanceMode = true; // Toggle to true to enable maintenance mode

const MaintenanceScreen = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center space-y-6">
      <div className="flex justify-center">
        <img 
          src="/assets/shopomatix-logo-new.avif" 
          alt="Shopomatix" 
          className="h-20 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Under Maintenance</h1>
        <p className="text-slate-500 font-medium leading-relaxed">
          We&apos;re upgrading Shopomatix to provide you with a better shopping experience. 
          Please check back soon!
        </p>
      </div>
      <div className="pt-2">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold border border-orange-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Currently Down for Updates
        </span>
      </div>
      <div className="text-xs text-slate-400 pt-4">
        &copy; {new Date().getFullYear()} Shopomatix. Professional Marketplace.
      </div>
    </div>
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B6B" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {isMaintenanceMode ? <MaintenanceScreen /> : children}
        </Providers>
      </body>
    </html>
  )
}
