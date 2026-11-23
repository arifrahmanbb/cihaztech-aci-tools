import { useState } from 'react';
import { Layers, MessageCircle, PhoneCall } from 'lucide-react';
import VariationList from './VariationList.jsx';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='13' font-family='sans-serif'%3ENo Image Available%3C/text%3E%3C/svg%3E";

const WHATSAPP_NUMBER = '8801350902312';
const PHONE_NUMBER = '01350902312';

/**
 * ProductCard Component – E-Commerce Style
 * 
 * Features:
 * - Verified authentic MRP price displayed prominently as the regular price
 * - No TP prices used anywhere
 * - Clean e-commerce card layout with In-Stock status
 * - Variation list with model-specific MRP prices
 * - Direct WhatsApp & Phone call action buttons
 */
export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  const variations = product.variations || [];
  const hasMultipleVariations = variations.length > 1;
  const heading = product.variationHeading || 'Available Models';
  const priceDisplay = product.priceDisplay || (product.mrp ? `৳ ${product.mrp.toLocaleString('en-IN')}` : '');

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\nProduct: ${product.name}\n${product.code ? `Code: ${product.code}\n` : ''}Price: ${priceDisplay || 'MRP'}\nPlease confirm availability.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <article className="group bg-white border border-gray-200/90 hover:border-red-400/80 rounded-2xl overflow-hidden h-full w-full flex flex-col hover:shadow-xl transition-all duration-300">
      {/* ── Image Container ── */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 lg:h-52 bg-gradient-to-b from-gray-50/80 to-gray-100/40 flex items-center justify-center p-3 sm:p-4 border-b border-gray-100 overflow-hidden">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
        />

        {/* E-Commerce In Stock Badge */}
        <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          In Stock
        </span>

        {/* Badge showing variation count if grouped */}
        {hasMultipleVariations && (
          <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 bg-gray-900/85 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs select-none">
            <Layers size={11} aria-hidden="true" />
            {variations.length} Options
          </span>
        )}
      </div>

      {/* ── Card Content ── */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Model / Series Badge if applicable */}
          {product.model && (
            <span className="inline-block text-[10px] font-bold text-[#c8102e] uppercase tracking-wide bg-red-50 border border-red-100 px-2 py-0.5 rounded-sm mb-1.5">
              Model: {product.model}
            </span>
          )}

          {/* Product Title */}
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 tracking-tight leading-snug line-clamp-2 group-hover:text-[#c8102e] transition-colors">
            {product.name}
          </h3>

          {/* Single Product Code (when only 1 item without variation list) */}
          {!hasMultipleVariations && product.code && (
            <p className="mt-1 text-[11px] sm:text-xs text-gray-500 font-mono">
              Code: <span className="font-semibold text-gray-700">{product.code}</span>
            </p>
          )}

          {/* Single Product Specification */}
          {!hasMultipleVariations && product.spec && (
            <p className="mt-0.5 text-[11px] sm:text-xs text-gray-600 line-clamp-1">
              Spec: <span className="font-medium text-gray-800">{product.spec}</span>
            </p>
          )}

          {/* ── E-Commerce Pricing (Regular MRP Price Only) ── */}
          {priceDisplay && (
            <div className="mt-2.5 pt-2 border-t border-dashed border-gray-100">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                Regular MRP Price
              </span>
              <div className="text-sm sm:text-base md:text-lg font-black text-[#c8102e] font-sans tracking-tight">
                {priceDisplay}
              </div>
            </div>
          )}
        </div>

        {/* ── Variations List (3 items initially visible) ── */}
        <div>
          {hasMultipleVariations && (
            <VariationList
              variations={variations}
              heading={heading}
              initialLimit={3}
            />
          )}

          {/* ── E-Commerce Order Action Button ── */}
          <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 sm:gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-xs py-2 px-2 sm:px-3 rounded-lg shadow-2xs transition-all duration-200 active:scale-[0.98]"
              title="Order this product via WhatsApp"
            >
              <MessageCircle size={14} className="shrink-0" />
              <span className="truncate">Order WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2 shrink-0 text-gray-600 hover:text-[#c8102e] bg-gray-100 hover:bg-red-50 border border-gray-200/80 rounded-lg transition-colors flex items-center justify-center"
              title={`Call Helpline: ${PHONE_NUMBER}`}
              aria-label="Call Helpline"
            >
              <PhoneCall size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
