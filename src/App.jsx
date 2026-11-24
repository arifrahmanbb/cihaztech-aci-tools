import { useMemo, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Truck, Headphones } from 'lucide-react';
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
 * - Category title with clean brand accent
 * - Balanced rhythm and proper typographic scale
 * - Polished industrial e-commerce design system
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      <Header categories={categories} />

      {/* ── Top Hero / Catalog Intro Banner ── */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50/60 to-slate-50 pt-8 sm:pt-12 pb-6 sm:pb-8 border-b border-slate-200/60">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100/90 text-[#c8102e] text-xs font-bold tracking-wide uppercase shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c8102e] animate-pulse" />
            Official Product Catalogue
          </div>

          {/* Catalog Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl leading-tight">
            ACI Smart Tools & Machinery
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Explore certified industrial machinery, heavy-duty power tools, precision weight scales, and hand tools with authentic warranty across Bangladesh.
          </p>

          {/* Trust Highlights Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="p-2 rounded-lg bg-red-50 text-[#c8102e] shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">100% Genuine</div>
                <div className="text-[11px] text-slate-500">Official ACI Products</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Official Warranty</div>
                <div className="text-[11px] text-slate-500">Certified Support</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Truck size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Nationwide Delivery</div>
                <div className="text-[11px] text-slate-500">Fast & Secure Dispatch</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                <Headphones size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Direct Helpline</div>
                <div className="text-[11px] text-slate-500">01350902312</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Catalogue Body ── */}
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-14 sm:gap-20">
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
