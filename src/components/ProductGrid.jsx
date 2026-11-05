import ProductCard from './ProductCard.jsx';

/**
 * Responsive product grid.
 * – Mobile:        2 columns
 * – Tablet (md):   3 columns
 * – Laptop (lg):   4 columns
 * – Large (xl+):   5 columns (capped at 5 for readability)
 */
export default function ProductGrid({ products, categoryId }) {
  if (!products.length) {
    return (
      <p className="text-sm text-gray-400 italic">No products available.</p>
    );
  }

  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
      role="list"
      aria-label="Product list"
    >
      {products.map((product) => (
        <li key={product.id} role="listitem">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

