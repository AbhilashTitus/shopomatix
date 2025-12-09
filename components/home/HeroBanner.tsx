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
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero banner background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-tight mb-4">
          {title}
        </h1>
        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed mb-8 max-w-2xl">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="border-2 border-white hover:bg-white hover:text-dark text-white font-semibold uppercase tracking-wide px-8 py-3 transition-colors duration-300 text-[14px]"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
