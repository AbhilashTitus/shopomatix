'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/components/types';

interface ModernHeroBannerProps {
  products: Product[];
}

export default function ModernHeroBanner({ products }: ModernHeroBannerProps) {
  const { user } = useAuth();
  
  // Filter products between ₹100-200
  const budgetProducts = products.filter(
    (product) => product.price >= 100 && product.price <= 200
  ).slice(0, 6);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-2 lg:py-4 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium">New Arrivals Daily</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Shop Smart,
                <br />
                <span className="text-primary">
                  Save More
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Discover amazing deals on electronics, fashion, home essentials & more. 
                <span className="font-semibold text-primary"> Quality products at unbeatable prices.</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3.5 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
              >
                Shop Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {!user && (
                <Link
                  href="/auth/login"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white border-2 border-primary text-primary text-sm sm:text-base font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-wrap lg:items-center lg:gap-6 justify-center lg:justify-start pt-4 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-primary/10 rounded-lg">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm font-medium text-center lg:text-left">Timely Delivery</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-primary/10 rounded-lg">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm font-medium text-center lg:text-left">Easy Returns</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-primary/10 rounded-lg">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm font-medium text-center lg:text-left">Secure Payment</span>
              </div>
            </div>
          </div>
          
          {/* Right Products Grid */}
          <div className="flex-1 relative w-full lg:max-w-3xl lg:-ml-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl"></div>
              
              {/* Products Grid */}
              <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                {budgetProducts.map((product, index) => (
                  <Link
                    key={product.id}
                    href={product.link}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square bg-gray-50 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 300px"
                      />
                      {/* Discount Badge */}
                      {product.discountPercentage && product.discountPercentage > 0 && (
                        <div className="absolute top-1.5 left-1.5 lg:top-2.5 lg:left-2.5 bg-red-500/80 backdrop-blur-sm text-white text-[10px] lg:text-sm font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full shadow-md">
                          {product.discountPercentage}% OFF
                        </div>
                      )}
                    </div>
                    
                    {/* Product Info - Fixed Height */}
                    <div className="p-2.5 lg:p-4 bg-white flex flex-col flex-1">
                      <h3 className="text-xs lg:text-base font-semibold text-gray-900 mb-1.5 lg:mb-2 line-clamp-2 min-h-[2rem] lg:min-h-[3rem] group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 lg:gap-2 mt-auto">
                        <span className="text-base lg:text-xl font-bold text-primary">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-[10px] lg:text-sm text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* View More Link */}
              <div className="mt-5 text-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg"
                >
                  View More Deals
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
