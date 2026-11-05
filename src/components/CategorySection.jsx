import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

const INITIAL_COUNT = 3;

/**
 * Renders a single category section:
 * – Section heading with sequential number
 * – First 3 products (or all if ≤3)
 * – See More / Show Less toggle (independent per category)
 */
export default function CategorySection({ category, index }) {
  const [expanded, setExpanded] = useState(false);

  const hasMore = category.products.length > INITIAL_COUNT;
  const visibleProducts = expanded
    ? category.products
    : category.products.slice(0, INITIAL_COUNT);

  const toggle = useCallback(() => setExpanded((e) => !e), []);

  return (
    <section
      id={category.id}
      className="pt-16 pb-4 md:pt-24"
      aria-labelledby={`section-heading-${category.id}`}
    >
      {/* ── Section Header ── */}
      <div className="mb-7 flex items-start gap-4">
        {/* Sequential number badge */}
        <span
          className="shrink-0 mt-0.5 w-9 h-9 rounded-full bg-[#c8102e] text-white text-sm font-bold flex items-center justify-center select-none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div>
          <h2
            id={`section-heading-${category.id}`}
            className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight"
          >
            {category.name}
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            {category.products.length} product{category.products.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 mb-7" aria-hidden="true" />

      {/* ── Product Grid ── */}
      <ProductGrid products={visibleProducts} categoryId={category.id} />

      {/* ── See More / Show Less ── */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <SeeMoreButton
            expanded={expanded}
            onClick={toggle}
            remaining={category.products.length - INITIAL_COUNT}
          />
        </div>
      )}
    </section>
  );
}

