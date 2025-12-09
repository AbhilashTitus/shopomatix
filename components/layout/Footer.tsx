'use client';

import Link from 'next/link';
import { FooterProps } from '@/components/types';

// Organized links into logical groups
const shopLinks = [
  { label: 'Electronics', href: '/category/electronics' },
  { label: 'Fashion', href: '/category/fashion' },
  { label: 'Home Appliance', href: '/category/home-appliance' },
  { label: 'Mobile Accessories', href: '/category/mobile-accessories' },
];

const helpLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Order Status', href: '/order-status' }, // Added useful link
];

const policyLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' }, // New
  { label: 'Shipping & Delivery', href: '/shipping-policy' },   // New
];

export default function Footer({ }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section: Branding, Newsletter, and Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand & Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Shopomatix</h2>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
                Your premium destination for electronics, fashion, and home essentials.
                Experience shopping redefined with quality and trust.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Subscribe to updates</h3>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-4 pr-12 py-3.5 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-500"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-secondary transition-colors"
                  >
                    Join
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Policy and acknowledge you&apos;ve read our Privacy Notice.
                </p>
              </form>
            </div>
          </div>

          {/* Links Grid (Span 8 cols) - 3 Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1: Shop */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Shop</h3>
              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-gray-400 hover:text-primary hover:pl-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Help & Access */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Help & Access</h3>
              <ul className="space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-gray-400 hover:text-primary hover:pl-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="text-[15px] text-gray-400 pt-2">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Customer Support</p>
                    <p className="hover:text-white transition-colors">support@shopomatix.com</p>
                    <p className="hover:text-white transition-colors">+1 (555) 123-4567</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Policies</h3>
              <ul className="space-y-3">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-gray-400 hover:text-primary hover:pl-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shopomatix Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-600 text-sm">Secure Payment</span>
            {/* Simple payment icons simulation or just text to keep it minimal as requested */}
            <div className="flex space-x-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for payment icons if available, distinct text for now */}
              <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
              <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">MC</div>
              <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">PAYPAL</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
