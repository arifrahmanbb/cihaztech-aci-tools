import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

// Show 4 items initially to fill an entire 4-column desktop row
const INITIAL_COUNT = 4;

/**
 * CategorySection Component
 *
 * Requirements:
 * - Center-aligned category heading with subtle brand accent
 * - Container: max-w-[1320px] mx-auto
 * - Clean e-commerce product section listing
 * - Initially renders first 4 grouped cards (matching 4 per row on desktop)
 * - Independent See More / Show Less toggle per category
 * - Hidden See More button if category contains <= 4 grouped cards
 */
export default function CategorySection({ category }) {
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
      className="w-full max-w-[1320px] mx-auto flex flex-col items-center scroll-mt-24"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* ── Center-Aligned Category Title ── */}
      <div className="mb-8 sm:mb-10 text-center flex flex-col items-center justify-center">
        <h2
          id={`heading-${category.id}`}
          className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          {category.name}
        </h2>
        <div className="w-12 h-1 bg-[#c8102e] rounded-full mt-3" aria-hidden="true" />
      </div>

      {/* ── Responsive Product Grid ── */}
      <div className="w-full">
        <ProductGrid products={visibleProducts} />
      </div>

      {/* ── See More / Show Less Button ── */}
      {hasMore && (
        <div className="w-full flex justify-center items-center mt-8 sm:mt-12">
          <SeeMoreButton
            expanded={expanded}
            onClick={toggle}
            remaining={groupedCount - INITIAL_COUNT}
          />
        </div>
      )}

      {/* Subtle divider between categories */}
      <div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-12 sm:mt-16"
        aria-hidden="true"
      />
    </section>
  );
}
