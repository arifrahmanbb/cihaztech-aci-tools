import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

const INITIAL_COUNT = 3;

/**
 * Renders a single category section:
 * – Section heading with sequential number and product count
 * – First 3 products initially (or all if ≤3)
 * – Beautiful centered See More / Show Less toggle button
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
      className="pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 border-b border-gray-200/60 last:border-b-0"
      aria-labelledby={`section-heading-${category.id}`}
    >
      {/* ── Section Header ── */}
      <div className="mb-6 sm:mb-8 md:mb-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sequential number badge */}
          <span
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#d81b3a] to-[#a80c23] text-white text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center shadow-xs select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <h2
              id={`section-heading-${category.id}`}
              className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              {category.name}
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-500 font-medium">
              {category.products.length} product{category.products.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
      </div>

      {/* ── Responsive Product Grid ── */}
      <ProductGrid products={visibleProducts} categoryId={category.id} />

      {/* ── Perfectly Centered See More / Show Less Button ── */}
      {hasMore && (
        <div className="w-full flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
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
