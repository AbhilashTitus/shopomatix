'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import Categories from '@/components/home/Categories';
import ProductGrid from '@/components/home/ProductGrid';
import SubscribeForm from '@/components/ui/SubscribeForm';
import { categories } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroBanner
          title="Shopomatix"
          subtitle="Your one-stop shopping destination"
          ctaText="LOGIN"
          ctaLink="/auth/login"
          backgroundImage="/assets/generated.avif"
        />

        {/* Categories Section */}
        <Categories categories={categories} />

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <h2 className="font-bold text-[32px] leading-tight text-dark mb-8 text-center">
            Featured Products
          </h2>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </section>

        {/* Newsletter Subscription Section */}
        <SubscribeForm />
      </main>
      <Footer />
    </>
  );
}
