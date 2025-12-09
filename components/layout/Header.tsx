'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HeaderProps, NavItem } from '@/components/types';

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Mobile Accessories', href: '/mobile-accessories' },
  { label: 'Home Appliance', href: '/home-appliance' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/shopomatix-logo-new-dWxLo2qMG0u6996g.avif"
              alt="Shopomatix Logo"
              width={150}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] text-dark hover:text-primary hover:font-bold hover:underline hover:decoration-primary hover:underline-offset-4 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              className="p-2 hover:text-primary transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>

            {/* Seller Onboarding Button */}
            <Link
              href="/seller-onboarding"
              className="hidden md:inline-block px-4 py-2 bg-primary text-white text-[14px] font-semibold uppercase tracking-wide rounded hover:bg-secondary transition-colors"
            >
              Become a Seller
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-dark hover:text-primary hover:font-bold py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/seller-onboarding"
                className="md:hidden inline-block px-4 py-2 bg-primary text-white text-[14px] font-semibold uppercase tracking-wide rounded hover:bg-secondary transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Seller
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
