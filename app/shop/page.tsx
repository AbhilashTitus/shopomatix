'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/home/ProductGrid';
import { useProducts } from '@/hooks/useProducts';

export default function ShopPage() {
    const { products, loading } = useProducts();

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our wide range of products across all categories.</p>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <ProductGrid products={products} />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
