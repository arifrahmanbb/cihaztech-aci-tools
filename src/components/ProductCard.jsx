import { useState } from 'react';
import { Layers } from 'lucide-react';
import VariationList from './VariationList.jsx';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='13' font-family='sans-serif'%3ENo Image Available%3C/text%3E%3C/svg%3E";

/**
 * ProductCard Component
 * 
 * Production-ready, mobile-first product card adhering to Section 4:
 * 1. Exactly ONE representative product image (aspect-ratio container, object-fit: contain)
 * 2. Original product name
 * 3. Model or series name, if applicable
 * 4. Clean, readable variation list using VariationList component
 * - Simple white background, subtle border, clean spacing, no fake data
 */
export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  const variations = product.variations || [];
  const hasMultipleVariations = variations.length > 1;
  const heading = product.variationHeading || 'Available Variations';

  return (
    <article className="group bg-white border border-gray-200/90 hover:border-red-300 rounded-xl sm:rounded-2xl overflow-hidden h-full w-full flex flex-col hover:shadow-lg transition-all duration-300">
      {/* ── Image Container (One representative image per card) ── */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 lg:h-52 bg-gradient-to-b from-gray-50/70 to-gray-100/40 flex items-center justify-center p-3 sm:p-4 border-b border-gray-100 overflow-hidden">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
        />

        {/* Badge showing variation count if grouped */}
        {hasMultipleVariations && (
          <span className="absolute top-2.5 right-2.5 bg-gray-900/85 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs select-none">
            <Layers size={12} aria-hidden="true" />
            {variations.length} Options
          </span>
        )}
      </div>

      {/* ── Card Content ── */}
      <div className="p-3.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Model / Series Badge if applicable */}
          {product.model && (
            <span className="inline-block text-[10px] font-semibold text-[#c8102e] uppercase tracking-wide bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-sm mb-1.5">
              Model: {product.model}
            </span>
          )}

          {/* Product Name */}
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 tracking-tight leading-snug line-clamp-2 group-hover:text-[#c8102e] transition-colors">
            {product.name}
          </h3>

          {/* Single Product Code (when only 1 item without variation list) */}
          {!hasMultipleVariations && product.code && (
            <p className="mt-1 text-[11px] sm:text-xs text-gray-500 font-mono">
              Code: <span className="font-semibold text-gray-700">{product.code}</span>
            </p>
          )}

          {/* Single Product Specification (when only 1 item without variation list) */}
          {!hasMultipleVariations && product.spec && (
            <p className="mt-0.5 text-[11px] sm:text-xs text-gray-600">
              Spec: <span className="font-medium text-gray-800">{product.spec}</span>
            </p>
          )}
        </div>

        {/* ── Available Variations List (3 items initially visible) ── */}
        {hasMultipleVariations && (
          <VariationList
            variations={variations}
            heading={heading}
            initialLimit={3}
          />
        )}
      </div>
    </article>
  );
}
