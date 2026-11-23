import { useState, useCallback } from 'react';
import ProductGrid from './ProductGrid.jsx';
import SeeMoreButton from './SeeMoreButton.jsx';

const INITIAL_COUNT = 3;

/**
 * CategorySection Component
 *
 * Requirements:
 * - Center-aligned category heading (title only, no badges or subtitles)
 * - Container: max-w-[1320px] mx-auto
 * - Clean e-commerce product section listing
 * - Initially renders first 3 grouped cards
 * - Independent See More / Show Less toggle per category
 * - Hidden See More button if category contains <= 3 grouped cards
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
      className="w-full max-w-[1320px] mx-auto flex flex-col items-center border-b border-gray-200/70 pb-12 sm:pb-16 last:border-b-0 scroll-mt-20"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* ── Center-Aligned Category Title ── */}
      <div className="mb-6 sm:mb-8 text-center flex flex-col items-center justify-center">
        <h2
          id={`heading-${category.id}`}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          {category.name}
        </h2>
      </div>

      {/* ── Responsive Product Grid ── */}
      <div className="w-full">
        <ProductGrid products={visibleProducts} />
      </div>

      {/* ── See More / Show Less Button ── */}
      {hasMore && (
        <div className="w-full flex justify-center items-center mt-8 sm:mt-10">
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
