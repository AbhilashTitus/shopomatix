import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/components/types';

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.link} className="block group">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Product Image with Hover Zoom Effect */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />

          {/* Product Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
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

          {/* Quick Add Button (Optional, visible on hover) */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-white text-dark p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.category}</p>
          <h3 className="text-[15px] font-medium text-gray-900 mb-2 line-clamp-2 min-h-[44px] group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-[18px] font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            {/* Rating stars could go here */}
          </div>
        </div>
      </div>
    </Link>
  );
}
