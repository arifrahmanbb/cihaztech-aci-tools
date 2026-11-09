import { useMemo, useEffect } from 'react';
import Header from './components/Header.jsx';
import CategorySection from './components/CategorySection.jsx';
import Footer from './components/Footer.jsx';
import categoriesData from './data/categories.js';
import rawProductsData from './data/products.js';
import { getCategoriesWithGroupedProducts } from './utils/groupProducts.js';
import { validateProductGroups } from './utils/validateProductGroups.js';

/**
 * Root Application Component
 * 
 * Production-ready single-page product catalogue for ACI Motors.
 * Adheres to:
 * - 1320px centered container (margin: 0 auto)
 * - Category title only (no number badge, no subtitles)
 * - Section gap requirement: Mobile 72px, Desktop 100px
 * - Single representative images per card
 */
export default function App() {
  const categories = useMemo(() => {
    return getCategoriesWithGroupedProducts(categoriesData, rawProductsData);
  }, []);

  useEffect(() => {
    const report = validateProductGroups(categories, rawProductsData);
    if (!report.isValid) {
      console.error('[Grouping Validation Errors]', report.errors);
    } else {
      console.info('[Grouping Validation OK]', report.summary);
    }
    if (report.warnings.length > 0) {
      console.warn('[Grouping Validation Warnings]', report.warnings);
    }
  }, [categories]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header categories={categories} />

      {/* ── Main 1320px Centered Container ── */}
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col gap-[72px] md:gap-[100px]">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
