import { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='13' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

/**
 * Individual product card.
 * - Single unique image per card (NO image duplication).
 * - If multiple models/sizes share this product, display them cleanly as a specifications/models pill list.
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
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      {/* ── Image Container ── */}
      <div className="product-img-wrap bg-gray-50 border-b border-gray-100">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
        />

        {/* Badge if multiple models available */}
        {hasVariants && (
          <span className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <Layers size={12} />
            {product.variants.length} Models
          </span>
        )}
      </div>

      {/* ── Product Name & Attributes ── */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
            {product.name}
          </h3>

          {/* Single product code (if only 1 item) */}
          {!hasVariants && product.code && (
            <p className="mt-1 text-[11px] text-gray-400 font-mono">
              Code: {product.code}
            </p>
          )}

          {/* Model / Size / Power Variants List */}
          {hasVariants && (
            <div className="mt-2.5 pt-2.5 border-t border-gray-100">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
                Available Models & Specs:
              </span>
              <div className="flex flex-wrap gap-1">
                {visibleVariants.map((v, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center text-[10px] sm:text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium border border-gray-200/60"
                  >
                    {v.spec || v.name || v.model}
                    {v.code && <span className="ml-1 text-gray-400 font-mono text-[9px]">({v.code})</span>}
                  </span>
                ))}
              </div>

              {/* Show more variants toggle if > 4 models */}
              {product.variants.length > initialVariantsCount && (
                <button
                  type="button"
                  onClick={() => setShowAllVariants(prev => !prev)}
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#c8102e] font-semibold hover:underline"
                >
                  {showAllVariants ? (
                    <>
                      <ChevronUp size={12} /> Show fewer models
                    </>
                  ) : (
                    <>
                      <ChevronDown size={12} /> +{product.variants.length - initialVariantsCount} more models
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
