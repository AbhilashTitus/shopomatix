'use client';

import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { products as staticProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { Product } from '@/components/types';

export default function ProductDetailPage() {
    const params = useParams();
    const { addToCart } = useCart();
    const [qty, setQty] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    const productSlug = params.id as string;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                
                // First try to fetch from API
                const response = await fetch('/api/products', {
                    cache: 'no-store',
                });
                
                let products = staticProducts; // fallback
                
                if (response.ok) {
                    const data = await response.json();
                    products = data.products || staticProducts;
                }
                
                // Find product by slug or ID
                const foundProduct = products.find(p => 
                    p.link.endsWith(`/${productSlug}`) || p.id === productSlug
                );
                
                setProduct(foundProduct || null);
            } catch (error) {
                console.error('Error fetching product:', error);
                // Fallback to static products
                const foundProduct = staticProducts.find(p => 
                    p.link.endsWith(`/${productSlug}`) || p.id === productSlug
                );
                setProduct(foundProduct || null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productSlug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!product) {
        return notFound();
    }

    const discount = product.originalPrice && product.price
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto align-middle">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:flex">
                    {/* Image Section */}
                    <div className="lg:w-1/2 bg-white relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-8"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                        <nav className="flex mb-4 text-sm text-gray-500">
                            <span className="uppercase tracking-wide font-medium text-xs bg-gray-100 px-3 py-1 rounded-full">
                                {product.category}
                            </span>
                            {product.seller && (
                                <span className="ml-3 flex items-center">
                                    Seller: <span className="font-semibold text-gray-900 ml-1">{product.seller}</span>
                                </span>
                            )}
                        </nav>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center mb-6">
                                <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm font-bold">
                                    {product.rating} ★
                                </div>
                                <span className="ml-2 text-gray-500 text-sm">({product.reviewCount?.toLocaleString()} ratings)</span>
                            </div>
                        )}

                        <div className="mb-8">
                            <div className="flex items-baseline gap-4">
                                <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                )}
                                {discount > 0 && (
                                    <span className="text-lg font-bold text-green-600">{discount}% OFF</span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                        </div>

                        <div className="prose prose-sm text-gray-600 mb-8 border-t border-b py-6 border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                            <p>{product.description || 'No description available for this product.'}</p>
                        </div>

                        <div className="mt-auto">
                            <div className="flex items-center mb-6">
                                <span className="mr-4 font-medium text-gray-900">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 text-gray-900 font-medium border-x border-gray-300 min-w-[3rem] text-center">
                                        {qty}
                                    </span>
                                    <button
                                        onClick={() => setQty(qty + 1)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => addToCart(product, qty)}
                                    className="flex-1 bg-[#FF6B6B] border border-transparent rounded-full py-4 px-8 text-base font-bold text-white hover:bg-[#FF5252] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] shadow-sm uppercase tracking-wider transition-transform active:scale-95"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className="flex-1 bg-white border-2 border-gray-900 rounded-full py-4 px-8 text-base font-bold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm uppercase tracking-wider transition-colors"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
