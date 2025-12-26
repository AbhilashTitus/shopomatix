'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Seller } from '@/components/types';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (userData: Omit<User, 'id' | 'role'>, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    updateMembership: (tier: 'Free' | 'Silver' | 'Gold') => void;
    deductCoins: (amount: number) => void;
    addCoins: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        // Check for existing session only after mounting
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('shopomatix_user');
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    // Ensure defaults exist for legacy data
                    if (!parsedUser.membershipTier || parsedUser.coins === undefined) {
                        const updatedUser = {
                            ...parsedUser,
                            membershipTier: parsedUser.membershipTier || 'Free',
                            coins: parsedUser.coins ?? 0
                        };
                        setUser(updatedUser);
                        localStorage.setItem('shopomatix_user', JSON.stringify(updatedUser));
                    } else {
                        setUser(parsedUser);
                    }
                } catch (error) {
                    console.error('Error parsing stored user:', error);
                    localStorage.removeItem('shopomatix_user');
                }
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock login logic
        const mockUser: User = {
            id: '1',
            name: 'Demo User',
            email: email,
            role: 'user',
            membershipTier: 'Free',
            coins: 0,
        };

        setUser(mockUser);
        if (typeof window !== 'undefined') {
            localStorage.setItem('shopomatix_user', JSON.stringify(mockUser));
        }
        setIsLoading(false);
    };

    const register = async (userData: Omit<User, 'id' | 'role'>, password: string) => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newUser: User = {
            ...userData,
            id: Math.random().toString(36).substr(2, 9),
            role: 'user',
            membershipTier: 'Free',
            coins: 0
        };

        setUser(newUser);
        if (typeof window !== 'undefined') {
            localStorage.setItem('shopomatix_user', JSON.stringify(newUser));
        }
        setIsLoading(false);
    };

    const updateMembership = (tier: 'Free' | 'Silver' | 'Gold') => {
        setUser((prev) => {
            if (!prev) return null;
            const updatedUser = { ...prev, membershipTier: tier };
            if (typeof window !== 'undefined') {
                localStorage.setItem('shopomatix_user', JSON.stringify(updatedUser));
            }
            return updatedUser;
        });
    };

    const deductCoins = (amount: number) => {
        setUser((prev) => {
            if (!prev || (prev.coins || 0) < amount) return prev;
            const updatedUser = { ...prev, coins: (prev.coins || 0) - amount };
            if (typeof window !== 'undefined') {
                localStorage.setItem('shopomatix_user', JSON.stringify(updatedUser));
            }
            return updatedUser;
        });
    };

    const addCoins = (amount: number) => {
        setUser((prev) => {
            if (!prev) return null;
            const updatedUser = { ...prev, coins: (prev.coins || 0) + amount };
            if (typeof window !== 'undefined') {
                localStorage.setItem('shopomatix_user', JSON.stringify(updatedUser));
            }
            return updatedUser;
        });
    };

    const logout = () => {
        setUser(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('shopomatix_user');
        }
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                login,
                register,
                logout,
                isAuthenticated: !!user,
                updateMembership,
                deductCoins,
                addCoins,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
