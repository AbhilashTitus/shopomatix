import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/components/types';

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.link} className="block group">
      <div className="bg-white overflow-hidden">
        {/* Product Image with Hover Zoom Effect */}
        <div className="relative aspect-square overflow-hidden bg-[#F5F5F5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          
          {/* Product Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-0 left-0 flex flex-col gap-1">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] px-2 py-1 bg-black text-white uppercase"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3">
          <h3 className="text-[14px] font-medium text-dark mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[16px] font-bold text-dark">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}
