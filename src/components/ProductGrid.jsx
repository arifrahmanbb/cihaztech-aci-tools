import ProductCard from './ProductCard.jsx';

/**
 * ProductGrid Component
 *
 * Mobile-first responsive e-commerce grid inside a 1320px container:
 * - Mobile (< 640px): 2 cards per row (clean, user-friendly density)
 * - Tablet (640px - 1023px): 3 cards per row (adapting to available screen space)
 * - Desktop (1024px+): 4 cards per row (rich e-commerce browsing layout)
 * - Auto-adapting spacing: gap-3.5 on mobile, gap-5 on tablet, gap-6 on desktop
 */
export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-xs sm:text-sm text-gray-400 italic">
          No products available in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6 w-full items-stretch"
        role="list"
        aria-label="Product list"
      >
        {products.map((product) => (
          <li
            key={product.id}
            role="listitem"
            className="flex flex-col h-full w-full"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
