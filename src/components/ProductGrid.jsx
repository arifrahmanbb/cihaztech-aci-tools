import ProductCard from './ProductCard.jsx';

/**
 * Mobile-first responsive, horizontally centered product showcase:
 * – Mobile (<640px):   2 columns (50% - gap), compact & touch-friendly
 * – Tablet (640-1024): 3 columns (33.33% - gap), balanced and clean
 * – Desktop (1024px+): 3 columns, cards scale up generously (up to 380px wide)
 *
 * Uses flexbox with `justify-center` so that whether there are 1, 2, 3, or more products,
 * the cards are ALWAYS perfectly centered horizontally on screen (no awkward empty right-side gaps).
 */
export default function ProductGrid({ products, categoryId }) {
  if (!products.length) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-sm text-gray-400 italic">No products available in this category.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <ul
        className="w-full flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8"
        role="list"
        aria-label="Product list"
      >
        {products.map((product) => (
          <li
            key={product.id}
            role="listitem"
            className="w-[calc(50%-6px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-22px)] max-w-[380px] min-w-[140px] flex flex-col"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
