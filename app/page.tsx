import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import Categories from '@/components/home/Categories';
import ProductGrid from '@/components/home/ProductGrid';
import SubscribeForm from '@/components/ui/SubscribeForm';
import { products, categories } from '@/data/products';

export default function Home() {
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
          <ProductGrid products={products} />
        </section>

        {/* Newsletter Subscription Section */}
        <SubscribeForm />
      </main>
      <Footer />
    </>
  );
}
