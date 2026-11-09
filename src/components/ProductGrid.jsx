import ProductCard from './ProductCard.jsx';

/**
 * ProductGrid Component
 * 
 * Centered responsive grid inside 1320px container:
 * - Mobile (< 640px): 2 cards per row (tested down to 320px)
 * - Tablet (640px - 1023px): 2 to 3 cards per row
 * - Desktop (1024px+):
 *   - For <= 3 cards (e.g. Bearing): 3 columns spanning the container centered (max 410px each)
 *   - For 4+ cards: 4 columns (max 320px each)
 * 
 * Uses flexbox with `justify-center` so cards are ALWAYS centered on the page.
 */
export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-xs sm:text-sm text-gray-400 italic">No products available in this category.</p>
      </div>
    );
  }

  const isThreeOrFewer = products.length <= 3;

  return (
    <div className="w-full flex justify-center">
      <ul
        className="w-full flex flex-wrap justify-center gap-3.5 sm:gap-5 lg:gap-6"
        role="list"
        aria-label="Product list"
      >
        {products.map((product) => (
          <li
            key={product.id}
            role="listitem"
            className={`flex flex-col h-full w-[calc(50%-7px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] ${
              isThreeOrFewer
                ? 'lg:w-[calc(33.333%-16px)] max-w-[400px]'
                : 'lg:w-[calc(25%-18px)] max-w-[310px]'
            } min-w-[140px]`}
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
