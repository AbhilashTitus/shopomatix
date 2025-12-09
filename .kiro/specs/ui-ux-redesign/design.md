# Design Document

## Overview

This design document outlines the technical approach for redesigning the Shopomatix e-commerce website to match the provided visual design. The redesign focuses on updating the visual styling, layout, and interactive behaviors of existing React components while maintaining the current component architecture and functionality. The implementation will leverage Next.js 14, React, TypeScript, and Tailwind CSS to achieve pixel-perfect alignment with the target design.

The redesign is primarily a visual update that modifies CSS classes, color schemes, typography, spacing, and hover effects without requiring significant architectural changes to the existing codebase.

## Architecture

### Component Structure

The existing component architecture will be maintained with visual updates applied to each component:

```
app/
├── page.tsx (Homepage composition)
├── layout.tsx (Root layout)
└── globals.css (Global styles and Tailwind configuration)

components/
├── layout/
│   ├── Header.tsx (Navigation bar)
│   └── Footer.tsx (Footer section)
├── home/
│   ├── HeroBanner.tsx (Hero section)
│   ├── Categories.tsx (Category grid)
│   └── ProductGrid.tsx (Product listing)
└── ui/
    ├── ProductCard.tsx (Individual product card)
    └── SubscribeForm.tsx (Newsletter subscription)
```

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Image Optimization**: Next.js Image component
- **State Management**: React hooks (useState for UI state)

### Design System

The redesign implements a cohesive design system with the following specifications:

**Color Palette:**
- Primary: `#FF6B6B` (Coral/Red for CTAs and accents)
- Secondary: `#FF5252` (Darker red for hover states)
- Dark: `#2D3436` (Primary text and dark backgrounds)
- Light: `#FFFFFF` (Backgrounds and light text)
- Gray: `#F5F5F5` (Product card backgrounds)
- Overlay: `rgba(0, 0, 0, 0.4)` (Image overlays)

**Typography:**
- Font Family: System font stack (default Tailwind)
- Heading Sizes: 32px-96px (responsive)
- Body Text: 14px-16px
- Button Text: 14px uppercase with letter spacing

**Spacing:**
- Container: max-width with horizontal padding
- Section Padding: 48px-80px vertical
- Component Gaps: 16px-24px
- Card Padding: 12px

## Components and Interfaces

### Header Component

**Visual Updates:**
- White background with subtle shadow (`shadow-sm`)
- Logo positioned left with fixed height
- Centered navigation menu with hover effects
- Right-aligned cart icon and "Become a Seller" button
- Coral/red button styling with uppercase text
- Sticky positioning at top of viewport

**Hover States:**
- Navigation links: underline with coral color
- Buttons: darker coral background transition
- Icons: coral color transition

**Responsive Behavior:**
- Desktop: Full horizontal navigation
- Mobile: Hamburger menu with slide-down navigation

### Hero Banner Component

**Visual Updates:**
- Full-width background image with dark overlay
- Large centered white typography (96px on desktop)
- Subtitle text below title (24px)
- White outlined "LOGIN" button with uppercase text
- Overlay opacity: 40%

**Dimensions:**
- Height: 500px (mobile) to 700px (desktop)

### Categories Component

**Visual Updates:**
- Section heading: "Categories" in 32px dark text
- Three-column grid on desktop
- Category cards with background images
- Coral/red label badges centered on cards
- Semi-transparent overlay on images

**Hover States:**
- Scale effect on images (105%)
- Darker overlay transition

**Responsive Behavior:**
- Desktop: 3 columns
- Tablet: 3 columns
- Mobile: 1 column (stacked)

### Product Grid Component

**Visual Updates:**
- Five-column grid on desktop
- Consistent gap spacing (16px)
- White background for cards

**Responsive Behavior:**
- Desktop: 5 columns
- Tablet: 3 columns
- Mobile: 2 columns

### Product Card Component

**Visual Updates:**
- Square aspect ratio for images
- Light gray background (#F5F5F5)
- Black promotional tags in top-left corner
- Product name: 14px medium weight
- Price: 16px bold
- Card padding: 12px

**Hover States:**
- Image zoom effect (110% scale)
- Smooth transition (300ms)

**Tag Styling:**
- Black background with white text
- 10px font size, uppercase
- 8px horizontal padding, 4px vertical padding
- Positioned absolute in top-left

### Newsletter Section Component

**Visual Updates:**
- Dark background (#2D3436)
- White heading: "Subscribe Now"
- White descriptive text below heading
- Horizontal input and button layout
- Light background input field
- Coral/red "SUBMIT" button
- Centered content

**Form Layout:**
- Input: flex-grow with light background
- Button: coral background, uppercase text
- Combined in flex container

### Footer Component

**Visual Updates:**
- Dark background (#2D3436)
- Four-column layout
- White text for headings and content
- Coral/red submit button in newsletter column
- Social media icons at bottom
- Hover effects on links

**Column Structure:**
1. Company: Contact information
2. Newsletter Sign Up: Email form
3. Information: Navigation links
4. Find Us: Social media

**Responsive Behavior:**
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column (stacked)

## Data Models

No changes to existing data models are required. The current TypeScript interfaces will remain unchanged:

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  link: string;
  category: string;
  tags?: { label: string; type: string }[];
}

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all acceptance criteria, several properties can be consolidated:

- Properties 2.2, 2.3, and 2.4 all relate to category card rendering and can be combined into comprehensive category card properties
- Properties 3.2, 3.3, 3.4, and 3.5 all relate to product card rendering and can be combined
- Property 8.1 and 8.6 both relate to button styling and can be combined
- Many "example" test cases are specific UI rendering checks that verify correct styling classes are applied

The following properties represent the unique, non-redundant correctness guarantees:

Property 1: Category card count matches input
*For any* array of categories passed to the Categories component, the number of rendered category cards should equal the length of the input array
**Validates: Requirements 2.2**

Property 2: Category cards contain required elements
*For any* category in the categories array, the rendered category card should contain an image element, an overlay element, and a label displaying the category name with coral/red background styling
**Validates: Requirements 2.3, 2.4**

Property 3: Product cards display all required information
*For any* product in the products array, the rendered product card should contain the product image, product name text, and formatted price text with bold styling
**Validates: Requirements 3.2, 3.3, 3.4**

Property 4: Product tags are rendered when present
*For any* product with a non-empty tags array, the rendered product card should display all tags with black background and white text styling in the top-left corner
**Validates: Requirements 3.5**

Property 5: Mobile menu toggle controls navigation visibility
*For any* header component state, when the mobile menu toggle is clicked, the navigation menu visibility should toggle between shown and hidden states
**Validates: Requirements 7.4**

Property 6: Buttons use consistent styling
*For any* button element in the application, it should have uppercase text transformation and use the primary coral/red color for backgrounds or borders
**Validates: Requirements 8.1, 8.6**

## Error Handling

### Component Error Boundaries

Since this is primarily a visual redesign, error handling focuses on graceful degradation:

**Missing Images:**
- Use Next.js Image component's built-in error handling
- Provide fallback background colors for failed image loads
- Log errors to console in development mode

**Missing Data:**
- Render empty states gracefully when no products or categories provided
- Display placeholder text for missing content
- Ensure layout doesn't break with empty arrays

**Invalid Props:**
- Use TypeScript interfaces to enforce prop types at compile time
- Provide default values for optional props
- Validate required props exist before rendering

### User Input Validation

**Newsletter Form:**
- Validate email format before submission
- Display error messages for invalid inputs
- Prevent submission of empty or malformed emails
- Show success message after successful submission

**Navigation:**
- Handle invalid routes gracefully
- Ensure all links have valid href attributes
- Provide 404 page for non-existent routes

## Testing Strategy

### Unit Testing Approach

The testing strategy will use **React Testing Library** for component testing, focusing on:

**Component Rendering Tests:**
- Verify components render without crashing
- Check that correct text content appears
- Validate that images have correct src and alt attributes
- Ensure proper CSS classes are applied for styling

**Interaction Tests:**
- Test mobile menu toggle functionality
- Verify form submission behavior
- Test hover states where applicable (using fireEvent)
- Validate link navigation

**Responsive Behavior Tests:**
- Test that responsive CSS classes are present
- Verify grid layouts have correct column classes
- Check that mobile-specific elements appear/hide correctly

### Property-Based Testing Approach

Property-based testing will use **fast-check** library for JavaScript/TypeScript to verify universal properties:

**Test Configuration:**
- Each property test should run a minimum of 100 iterations
- Use appropriate generators for test data (arrays, strings, numbers)
- Configure shrinking to find minimal failing cases

**Property Test Requirements:**
- Each property-based test MUST include a comment tag referencing the design document
- Tag format: `**Feature: ui-ux-redesign, Property {number}: {property_text}**`
- Each correctness property MUST be implemented by a SINGLE property-based test
- Tests should generate random but valid data structures matching TypeScript interfaces

**Test Data Generators:**
- Product generator: random id, name, price, image path, category, optional tags
- Category generator: random id, name, image path, link, description
- Tag generator: random label and type strings

**Property Test Examples:**

1. **Category Count Property**: Generate random arrays of categories (0-10 items), render Categories component, verify rendered card count matches input length

2. **Product Card Content Property**: Generate random products, render ProductCard component, verify all required elements present with correct content

3. **Tag Rendering Property**: Generate products with varying tag arrays (0-3 tags), verify tags render only when present and match input

4. **Button Styling Property**: Generate random button text, render buttons, verify all have uppercase class and primary color class

### Testing Tools

- **Testing Framework**: Jest
- **Component Testing**: React Testing Library (@testing-library/react)
- **Property-Based Testing**: fast-check
- **Test Utilities**: @testing-library/jest-dom for custom matchers
- **Coverage**: Aim for 80%+ coverage on component logic

### Test Organization

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Header.test.tsx
│   ├── Footer.tsx
│   └── Footer.test.tsx
├── home/
│   ├── HeroBanner.tsx
│   ├── HeroBanner.test.tsx
│   ├── Categories.tsx
│   ├── Categories.test.tsx
│   └── ...
└── ui/
    ├── ProductCard.tsx
    ├── ProductCard.test.tsx
    └── ...
```

## Implementation Notes

### Tailwind Configuration

Update `tailwind.config.ts` to include custom colors:

```typescript
colors: {
  primary: '#FF6B6B',
  secondary: '#FF5252',
  dark: '#2D3436',
}
```

### Global Styles

Update `app/globals.css` to include:
- Custom CSS variables for colors
- Base typography styles
- Transition utilities for hover effects

### Image Optimization

- Use Next.js Image component for all images
- Provide appropriate sizes prop for responsive images
- Use priority prop for above-the-fold images (hero banner)
- Optimize image formats (WebP/AVIF)

### Accessibility Considerations

- Maintain proper heading hierarchy (h1, h2, h3)
- Ensure sufficient color contrast (WCAG AA compliance)
- Add focus indicators for keyboard navigation
- Include proper ARIA labels for interactive elements
- Ensure mobile menu is keyboard accessible

### Performance Optimization

- Lazy load images below the fold
- Use CSS transforms for hover effects (GPU acceleration)
- Minimize layout shifts with proper image dimensions
- Optimize bundle size by removing unused Tailwind classes

### Browser Compatibility

- Target modern browsers (last 2 versions)
- Use CSS Grid and Flexbox (widely supported)
- Test on Chrome, Firefox, Safari, Edge
- Ensure mobile Safari compatibility for iOS devices
