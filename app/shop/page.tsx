'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import ProductGrid from '@/components/home/ProductGrid';

export default function ShopPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our wide range of products across all categories.</p>
                    </div>

                    <ProductGrid products={products} />
                </div>
            </div>
            <Footer />
        </>
    );
}
