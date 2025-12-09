'use client';

import { useState, FormEvent } from 'react';
import { SubscribeFormProps } from '@/components/types';

export default function SubscribeForm({ onSubmit }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(email);
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 500);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dark">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-bold text-[32px] leading-tight text-white mb-4">
          Subscribe Now
        </h2>
        <p className="text-[14px] leading-relaxed text-white mb-8">
          Get E-mail updates about our latest shop and special offers
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white text-dark text-[14px] focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              aria-label="Email address"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email-error' : undefined}
            />
            {error && (
              <p id="email-error" className="text-red-500 text-[12px] mt-1 text-left">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-secondary text-white text-[14px] font-semibold uppercase tracking-wide px-8 py-3 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </section>
  );
}
