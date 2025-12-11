'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/components/types';

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('shopomatix_cart');
            if (storedCart) {
                try {
                    setItems(JSON.parse(storedCart));
                } catch (error) {
                    console.error('Error parsing stored cart:', error);
                    localStorage.removeItem('shopomatix_cart');
                }
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        if (mounted && typeof window !== 'undefined') {
            localStorage.setItem('shopomatix_cart', JSON.stringify(items));
        }
    }, [items, mounted]);

    const addToCart = (product: Product, quantity: number = 1) => {
        setItems((prevItems) => {
            const existingitem = prevItems.find((item) => item.id === product.id);
            if (existingitem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('shopomatix_cart');
        }
    };

    const cartTotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
