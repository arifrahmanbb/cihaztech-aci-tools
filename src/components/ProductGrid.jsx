import ProductCard from './ProductCard.jsx';

/**
 * Mobile-first responsive product grid:
 * – Mobile (<640px):          2 columns (compact, touch-friendly)
 * – Small Tablet (640-768px):  2 columns (cards expand significantly)
 * – Tablet (768-1024px):       3 columns (generous breathing room)
 * – Desktop (1024-1440px):     3 columns (large, detailed showcase cards)
 * – Large Desktop (1440px+):   3 to 4 columns depending on available width
 */
export default function ProductGrid({ products, categoryId }) {
  if (!products.length) {
    return (
      <p className="text-sm text-gray-400 italic py-6">No products available in this category.</p>
    );
  }

  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8"
      role="list"
      aria-label="Product list"
    >
      {products.map((product) => (
        <li key={product.id} role="listitem" className="h-full">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
