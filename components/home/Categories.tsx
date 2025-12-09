import Image from 'next/image';
import Link from 'next/link';
import { CategoriesProps } from '@/components/types';

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading - 32px, dark text, centered */}
        <h2 className="text-[32px] font-bold text-dark text-center mb-8">
          Categories
        </h2>

        {/* Category Grid - 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay - darker on hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Category Label - coral/red background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-primary text-white text-[14px] font-semibold uppercase tracking-wide px-6 py-2 rounded">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
