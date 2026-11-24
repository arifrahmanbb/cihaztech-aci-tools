import { useState } from 'react';
import { Layers, MessageCircle, PhoneCall } from 'lucide-react';
import VariationList from './VariationList.jsx';

/** Fallback placeholder shown when product image fails to load */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='13' font-family='sans-serif'%3ENo Image Available%3C/text%3E%3C/svg%3E";

const WHATSAPP_NUMBER = '8801350902312';
const PHONE_NUMBER = '01350902312';

/**
 * ProductCard Component – Premium E-Commerce Style
 * 
 * Features:
 * - High-end visual hierarchy, elevated borders & smooth depth shadows
 * - Product imagery with subtle hover zoom and frosted badges
 * - Prominent product price without any MRP label
 * - Clean option specification box for grouped products
 * - High-converting WhatsApp & Phone action buttons
 */
export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  const variations = product.variations || [];
  const hasMultipleVariations = variations.length > 1;
  const heading = product.variationHeading || 'Available Models';
  const priceDisplay = product.priceDisplay || (product.mrp ? `৳ ${product.mrp.toLocaleString('en-IN')}` : '');

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\nProduct: ${product.name}\n${product.code ? `Code: ${product.code}\n` : ''}Price: ${priceDisplay || 'Official Price'}\nPlease confirm availability.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <article className="group bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl overflow-hidden h-full w-full flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05),0_6px_16px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.1),0_6px_16px_-4px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 relative">
      {/* ── Image Showcase Stage ── */}
      <div className="relative w-full h-44 sm:h-52 md:h-56 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 flex items-center justify-center p-3.5 sm:p-4 border-b border-slate-100 overflow-hidden">
        <img
          src={imgError || !product.image ? PLACEHOLDER : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-106"
          onError={() => setImgError(true)}
        />

        {/* E-Commerce In Stock Badge */}
        <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-emerald-700 border border-emerald-100 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          In Stock
        </span>

        {/* Badge showing variation count if grouped */}
        {hasMultipleVariations && (
          <span className="absolute top-2.5 right-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs select-none">
            <Layers size={11} aria-hidden="true" />
            {variations.length} Options
          </span>
        )}
      </div>

      {/* ── Card Body Content ── */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Model / Series Badge if applicable */}
          {product.model && (
            <span className="inline-block text-[10px] font-bold text-[#c8102e] uppercase tracking-wider bg-red-50 border border-red-100 px-2 py-0.5 rounded-md mb-2">
              Model: {product.model}
            </span>
          )}

          {/* Product Title */}
          <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-[#c8102e] transition-colors">
            {product.name}
          </h3>

          {/* Single Product Code */}
          {!hasMultipleVariations && product.code && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <span className="text-slate-400">Code:</span>
              <span className="font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                {product.code}
              </span>
            </div>
          )}

          {/* Single Product Specification */}
          {!hasMultipleVariations && product.spec && (
            <p className="mt-1 text-xs text-slate-500 line-clamp-1">
              Spec: <span className="font-medium text-slate-700">{product.spec}</span>
            </p>
          )}

          {/* ── Price Section (Clean, Authoritative, NO MRP Label) ── */}
          {priceDisplay && (
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-baseline">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight font-sans">
                {priceDisplay}
              </span>
            </div>
          )}
        </div>

        {/* ── Variations List ── */}
        <div>
          {hasMultipleVariations && (
            <VariationList
              variations={variations}
              heading={heading}
              initialLimit={3}
            />
          )}

          {/* ── Action Buttons ── */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              title="Order this product via WhatsApp"
            >
              <MessageCircle size={15} className="shrink-0" />
              <span className="truncate">Order via WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2.5 shrink-0 text-slate-700 hover:text-[#c8102e] bg-slate-100 hover:bg-red-50 border border-slate-200/80 hover:border-red-200 rounded-xl transition-all duration-200 flex items-center justify-center"
              title={`Call Helpline: ${PHONE_NUMBER}`}
              aria-label="Call Helpline"
            >
              <PhoneCall size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
