import ProductCard from './ProductCard.jsx';

/**
 * ProductGrid Component
 * 
 * Strict responsive column layout matching Section 9:
 * - Mobile (< 768px): 2 cards per row (tested down to 320px)
 * - Tablet (768px - 1023px): 3 cards per row
 * - Laptop & Desktop (1024px - 1535px): 4 cards per row
 * - Large Desktop (1536px+ / 1920px): 5 cards per row
 * 
 * Consistent card heights with `items-stretch`.
 */
export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-xs sm:text-sm text-gray-400 italic">No products available in this category.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-stretch"
        role="list"
        aria-label="Product list"
      >
        {products.map((product) => (
          <li key={product.id} role="listitem" className="flex flex-col h-full">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
