// Core Data Models

export interface ProductTag {
  label: string;
  type: 'best-seller' | 'new-arrival' | 'combo-offer';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tags?: ProductTag[];
  link: string;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Component Props Interfaces

export interface HeaderProps {
  // No props needed for static version
}

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface CategoriesProps {
  categories: Category[];
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductGridProps {
  products: Product[];
}

export interface SubscribeFormProps {
  onSubmit?: (email: string) => void;
}

export interface FooterProps {
  // No props needed for static version
}
