import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

const INITIAL_COUNT = 3;

/**
 * CategorySection Component
 * 
 * - Section heading with category name & index badge
 * - Product count based on GROUPED product cards (not individual raw variations)
 * - Initially renders first 3 grouped cards
 * - Independent See More / Show Less toggle per category section
 * - Hidden See More button if category contains <= 3 grouped cards
 */
export default function CategorySection({ category, index }) {
  const [expanded, setExpanded] = useState(false);

  const products = category.products || [];
  const groupedCount = products.length;
  const hasMore = groupedCount > INITIAL_COUNT;

  const visibleProducts = expanded || !hasMore
    ? products
    : products.slice(0, INITIAL_COUNT);

  const toggle = useCallback(() => setExpanded((prev) => !prev), []);

  return (
    <section
      id={category.id}
      className="w-full flex flex-col items-center border-b border-gray-200/70 pb-10 sm:pb-12 last:border-b-0"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* ── Center-Aligned Category Header ── */}
      <div className="mb-6 sm:mb-8 text-center flex flex-col items-center justify-center max-w-2xl px-2">
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3">
          {/* Sequential number badge */}
          <span
            className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#c8102e] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center shadow-xs select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h2
            id={`heading-${category.id}`}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            {category.name}
          </h2>
        </div>

        {/* Product count based on GROUPED cards */}
        <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">
          {groupedCount} {groupedCount === 1 ? 'Product Model' : 'Product Models'}
          {category.totalRawItemsCount && category.totalRawItemsCount > groupedCount ? (
            <span className="text-gray-400 font-normal"> · {category.totalRawItemsCount} available specifications</span>
          ) : null}
        </p>

        {category.description && (
          <p className="mt-1.5 text-xs text-gray-500 max-w-lg hidden sm:block">
            {category.description}
          </p>
        )}

        {/* Subtle decorative center accent */}
        <div className="w-10 h-0.5 bg-[#c8102e]/40 rounded-full mt-2.5" aria-hidden="true" />
      </div>

      {/* ── Product Grid ── */}
      <div className="w-full">
        <ProductGrid products={visibleProducts} />
      </div>

      {/* ── See More / Show Less Button (Independent per category) ── */}
      {hasMore && (
        <div className="w-full flex justify-center items-center mt-6 sm:mt-8">
          <SeeMoreButton
            expanded={expanded}
            onClick={toggle}
            remaining={groupedCount - INITIAL_COUNT}
          />
        </div>
      )}
    </section>
  );
}
