'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/components/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discount = product.originalPrice && product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group block h-full">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col relative">
        {/* Product Image with Hover Zoom Effect */}
        <Link href={product.link} className="relative aspect-square overflow-hidden bg-gray-50 block">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />

          {/* Product Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] font-bold px-3 py-1 bg-black/90 text-white uppercase tracking-wider rounded-full shadow-md backdrop-blur-sm"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </Link>

        {/* Quick Add Button (visible on hover) */}
        <button
          onClick={handleAddToCart}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20 bg-white text-dark p-2 rounded-full shadow-lg hover:bg-primary hover:text-white focus:outline-none"
          title="Add to Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>


        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.category}</p>
          <Link href={product.link} className="mb-2 block flex-grow">
            <h3 className="text-[15px] font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-[18px] font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </p>
              )}
              {discount > 0 && (
                <span className="text-xs font-bold text-green-600">
                  {discount}% OFF
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-2 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors uppercase tracking-wide md:hidden"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToCart}
              className="hidden md:block w-full py-2 rounded-lg bg-gray-50 text-gray-800 font-medium text-sm hover:bg-primary hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
