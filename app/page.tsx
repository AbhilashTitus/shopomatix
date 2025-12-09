import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import Categories from '@/components/home/Categories';
import ProductGrid from '@/components/home/ProductGrid';
import SubscribeForm from '@/components/ui/SubscribeForm';
import { Category, Product } from '@/components/types';

// Mock data for categories
const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: '/assets/generated.avif',
    link: '/category/electronics',
    description: 'Latest gadgets and electronic devices',
  },
  {
    id: '2',
    name: 'Fashion',
    image: '/assets/generated.avif',
    link: '/category/fashion',
    description: 'Trendy clothing and accessories',
  },
  {
    id: '3',
    name: 'Home Appliance',
    image: '/assets/generated.avif',
    link: '/category/home-appliance',
    description: 'Essential home appliances and tools',
  },
];

// Mock data for products
const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: '/assets/generated.avif',
    link: '/product/wireless-headphones',
    category: 'Electronics',
    tags: [{ label: 'BEST SELLER', type: 'best-seller' }],
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: '/assets/generated.avif',
    link: '/product/smart-watch',
    category: 'Electronics',
    tags: [{ label: 'NEW ARRIVAL', type: 'new-arrival' }],
  },
  {
    id: '3',
    name: 'USB-C Fast Charger',
    price: 24.99,
    image: '/assets/generated.avif',
    link: '/product/usb-c-charger',
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Portable Power Bank 20000mAh',
    price: 49.99,
    image: '/assets/generated.avif',
    link: '/product/power-bank',
    category: 'Electronics',
    tags: [{ label: 'COMBO OFFER', type: 'combo-offer' }],
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    price: 34.99,
    image: '/assets/generated.avif',
    link: '/product/wireless-mouse',
    category: 'Electronics',
  },
  {
    id: '6',
    name: 'Mechanical Keyboard RGB',
    price: 129.99,
    image: '/assets/generated.avif',
    link: '/product/mechanical-keyboard',
    category: 'Electronics',
    tags: [{ label: 'BEST SELLER', type: 'best-seller' }],
  },
  {
    id: '7',
    name: '4K Webcam',
    price: 89.99,
    image: '/assets/generated.avif',
    link: '/product/4k-webcam',
    category: 'Electronics',
  },
  {
    id: '8',
    name: 'Laptop Stand Adjustable',
    price: 39.99,
    image: '/assets/generated.avif',
    link: '/product/laptop-stand',
    category: 'Electronics',
  },
  {
    id: '9',
    name: 'Phone Case Premium',
    price: 19.99,
    image: '/assets/generated.avif',
    link: '/product/phone-case',
    category: 'Electronics',
    tags: [{ label: 'NEW ARRIVAL', type: 'new-arrival' }],
  },
  {
    id: '10',
    name: 'Screen Protector Pack',
    price: 14.99,
    image: '/assets/generated.avif',
    link: '/product/screen-protector',
    category: 'Electronics',
  },
];

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
