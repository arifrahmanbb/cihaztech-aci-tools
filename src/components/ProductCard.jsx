import { useState } from 'react';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='13' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

/**
 * Individual product card — extremely minimal.
 * Shows: product image (with lazy loading + fallback) and product name.
 * No prices, ratings, stock, or decorative elements.
 */
export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      {/* ── Image ── */}
      <div className="product-img-wrap">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
        />
      </div>

      {/* ── Product name ── */}
      <div className="px-3 py-3 flex-1 flex flex-col justify-start">
        <h3 className="text-xs sm:text-sm font-medium text-gray-800 leading-snug line-clamp-3">
          {product.name}
        </h3>
        {product.code && (
          <p className="mt-1 text-[10px] text-gray-400 font-mono">
            {product.code}
          </p>
        )}
      </div>
    </article>
  );
}

