import ProductCard from './ProductCard.jsx';

/**
 * ProductGrid Component
 *
 * Mobile-first responsive e-commerce grid inside a 1320px container:
 * - Mobile (< 640px): 2 cards per row (clean, user-friendly density)
 * - Tablet (640px - 1023px): 3 cards per row
 * - Desktop (1024px+):
 *   - For exactly 3 cards (e.g. Bearing: 2RS, Ball, Roller): 3 columns centered in max-w-5xl
 *   - For 4+ cards: 4 columns
 * - Auto-adapting spacing: gap-4 on mobile, gap-5 on tablet, gap-6 on desktop
 */
export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-xs sm:text-sm text-slate-400 italic">
          No products available in this category.
        </p>
      </div>
    );
  }

  const isThreeItems = products.length === 3;

  return (
    <div className={`w-full ${isThreeItems ? 'max-w-5xl mx-auto' : ''}`}>
      <ul
        className={`grid grid-cols-2 md:grid-cols-3 ${
          isThreeItems ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
        } gap-4 sm:gap-5 lg:gap-6 w-full items-stretch`}
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
