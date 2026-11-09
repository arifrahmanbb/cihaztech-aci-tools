import { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='14' font-family='sans-serif'%3ENo Image Available%3C/text%3E%3C/svg%3E";

/**
 * Individual product card with device-based scaling:
 * - Mobile: Compact, readable, touch-optimized (2 columns).
 * - Desktop/Large Screens: Card dimensions, image height, typography, and model tags scale up gracefully.
 * - Single unique image per card (no unnecessary duplicates).
 * - Models and specifications are cleanly presented in a pill list.
 */
export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);
  const [showAllVariants, setShowAllVariants] = useState(false);

  const hasVariants = product.variants && product.variants.length > 1;
  const initialVariantsCount = 4;
  const visibleVariants = showAllVariants || !hasVariants
    ? product.variants
    : product.variants.slice(0, initialVariantsCount);

  return (
    <article className="group bg-white border border-gray-200/90 rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* ── Image Container (Scales up on larger devices) ── */}
      <div className="relative w-full h-36 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-gradient-to-b from-gray-50/80 to-gray-100/50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-7 border-b border-gray-100 overflow-hidden">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
        />

        {/* Badge if multiple models available */}
        {hasVariants && (
          <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-gray-900/85 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 shadow-xs">
            <Layers size={13} aria-hidden="true" />
            {product.variants.length} Models
          </span>
        )}
      </div>

      {/* ── Product Name & Attributes (Device-based scaling) ── */}
      <div className="p-3.5 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-base md:text-lg font-bold text-gray-900 tracking-tight leading-snug line-clamp-2 group-hover:text-[#c8102e] transition-colors">
            {product.name}
          </h3>

          {/* Single product code (if only 1 item) */}
          {!hasVariants && product.code && (
            <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-gray-500 font-mono">
              Code: <span className="font-semibold text-gray-700">{product.code}</span>
            </p>
          )}

          {/* Model / Size / Power Variants List */}
          {hasVariants && (
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Available Models & Specs:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {visibleVariants.map((v, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center text-[10px] sm:text-xs md:text-sm bg-gray-100/90 hover:bg-red-50 text-gray-800 hover:text-[#c8102e] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg font-medium border border-gray-200/70 transition-colors"
                  >
                    {v.spec || v.name || v.model}
                    {v.code && (
                      <span className="ml-1 text-gray-400 font-mono text-[9px] sm:text-[10px]">
                        ({v.code})
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Show more variants toggle if > 4 models */}
              {product.variants.length > initialVariantsCount && (
                <button
                  type="button"
                  onClick={() => setShowAllVariants((prev) => !prev)}
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] sm:text-xs md:text-sm text-[#c8102e] font-bold hover:underline cursor-pointer"
                >
                  {showAllVariants ? (
                    <>
                      <ChevronUp size={14} /> Show fewer models
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} /> +{product.variants.length - initialVariantsCount} more models
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
