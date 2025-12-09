import Image from 'next/image';
import Link from 'next/link';
import { HeroBannerProps } from '@/components/types';

export default function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero banner background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-white font-extrabold text-[48px] sm:text-[64px] md:text-[80px] leading-[1.1] mb-6 drop-shadow-md">
            {title}
          </h1>
          <p className="text-gray-100 text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed mb-10 max-w-xl font-light">
            {subtitle}
          </p>
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-dark text-[15px] font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
