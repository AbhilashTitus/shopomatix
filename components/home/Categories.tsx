import Image from 'next/image';
import Link from 'next/link';
import { CategoriesProps } from '@/components/types';

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-gray-500 text-lg">Browse our collections</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide text-shadow-sm">
                  {category.name}
                </span>
                <div className="h-1 w-12 bg-primary rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

                <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-white hover:text-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 delay-200">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
