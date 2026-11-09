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
 * - Image-based product grouping (Rules A, B, C)
 * - Strict section gap: 72px mobile, 100px desktop
 * - Mobile-first responsive grids
 * - Verified authentic datasets with validation
 */
export default function App() {
  // Compute grouped products dataset
  const categories = useMemo(() => {
    return getCategoriesWithGroupedProducts(categoriesData, rawProductsData);
  }, []);

  // Run grouping validation on load
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

      {/* ── Main Single-Page Catalogue Container ── */}
      {/* Section gap requirement: Mobile 72px, Desktop 100px */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-[72px] md:gap-[100px]">
        {categories.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
