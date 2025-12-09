'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound, useParams } from 'next/navigation';
import { products, categories } from '@/data/products';
import ProductGrid from '@/components/home/ProductGrid';

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Find category meta
    const category = categories.find(c => c.slug === slug || c.link.endsWith(`/${slug}`));

    if (!category) {
        return notFound();
    }

    // Filter products
    const categoryProducts = products.filter(p =>
        p.category.toLowerCase() === category.slug.toLowerCase() ||
        p.category.toLowerCase() === category.name.toLowerCase() ||
        (category.slug === 'fashion' && p.category === 'fashion') || // Fallback
        (category.slug === 'home-kitchen' && p.category === 'home-kitchen') ||
        (category.slug === 'mobile-accessories' && p.category === 'mobile-accessories')
    );

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
                        {category.description && (
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                        )}
                    </div>

                    {categoryProducts.length > 0 ? (
                        <ProductGrid products={categoryProducts} />
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
