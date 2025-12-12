'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import Categories from '@/components/home/Categories';
import ProductGrid from '@/components/home/ProductGrid';
import SubscribeForm from '@/components/ui/SubscribeForm';
import { Category } from '@/components/types';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { products, loading: productsLoading } = useProducts();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroBanner
          title="Shopomatix"
          subtitle="Your one-stop shopping destination"
          ctaText="Login/Sign Up"
          ctaLink="/auth/login"
          backgroundImage="/assets/banner.png"
        />

        {/* Categories Section */}
        {categoriesLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Categories categories={categories} />
        )}

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <h2 className="font-bold text-[32px] leading-tight text-dark mb-8 text-center">
            Featured Products
          </h2>
          {productsLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <ProductGrid products={products.slice(0, 5)} />
          )}
        </section>

        {/* Newsletter Subscription Section */}
        <SubscribeForm />
      </main>
      <Footer />
    </>
  );
}
