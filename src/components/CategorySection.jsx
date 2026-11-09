import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

const INITIAL_COUNT = 3;

/**
 * Centered Category Section:
 * – Centered category heading, badge, and product count
 * – Centered product cards grid (no awkward left-alignment or empty gaps)
 * – Centered See More / Show Less toggle button
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
      className="pt-16 pb-10 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 border-b border-gray-200/60 last:border-b-0 flex flex-col items-center"
      aria-labelledby={`section-heading-${category.id}`}
    >
      {/* ── Center-Aligned Category Header ── */}
      <div className="mb-8 sm:mb-10 md:mb-12 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5">
          {/* Sequential number badge */}
          <span
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#d81b3a] to-[#a80c23] text-white text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center shadow-xs select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h2
            id={`section-heading-${category.id}`}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            {category.name}
          </h2>
        </div>

        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500 font-medium">
          {category.products.length} product{category.products.length !== 1 ? 's' : ''} available
        </p>

        {/* Subtle decorative center accent */}
        <div className="w-12 h-1 bg-[#c8102e]/30 rounded-full mt-3 sm:mt-4" aria-hidden="true" />
      </div>

      {/* ── Centered Product Cards Grid ── */}
      <div className="w-full flex justify-center">
        <ProductGrid products={visibleProducts} categoryId={category.id} />
      </div>

      {/* ── Centered See More / Show Less Button ── */}
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
