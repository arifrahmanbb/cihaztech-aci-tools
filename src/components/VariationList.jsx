import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * VariationList Component
 * 
 * Displays available product variations (sizes, weights, models, specifications)
 * along with their verified individual prices in a sleek, modern e-commerce option box.
 */
export default function VariationList({
  variations = [],
  heading = 'Available Options',
  initialLimit = 3
}) {
  const [expanded, setExpanded] = useState(false);

  if (!variations || variations.length === 0) return null;

  const hasMore = variations.length > initialLimit;
  const visibleList = expanded ? variations : variations.slice(0, initialLimit);
  const remainingCount = variations.length - initialLimit;

  return (
    <div className="mt-3 bg-slate-50/90 rounded-xl p-2.5 sm:p-3 border border-slate-200/70">
      {/* ── Section Header ── */}
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200/60">
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
          {heading}
        </span>
        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md font-mono">
          {variations.length} {variations.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* ── Option Items List (Clean Card Row Style) ── */}
      <ul
        className={`flex flex-col space-y-1.5 ${
          expanded && variations.length > 6 ? 'max-h-56 overflow-y-auto pr-1' : ''
        }`}
        role="list"
      >
        {visibleList.map((item, idx) => {
          const label = item.label || item.spec || item.name || '';
          const code = item.code || '';
          const showCode = code && !label.toLowerCase().includes(code.toLowerCase());
          const price = item.mrp && item.mrp > 0 ? `৳ ${item.mrp.toLocaleString('en-IN')}` : '';

          return (
            <li
              key={item.id || idx}
              className="flex items-center justify-between text-xs bg-white border border-slate-200/60 rounded-lg px-2.5 py-1.5 shadow-2xs gap-2"
            >
              <div className="flex items-center gap-1.5 truncate min-w-0">
                <span className="truncate font-medium text-slate-800" title={label}>
                  {label}
                </span>
                {showCode && (
                  <span className="text-[10px] text-slate-400 font-mono shrink-0">
                    ({code})
                  </span>
                )}
              </div>

              {price && (
                <span className="shrink-0 text-xs font-bold text-slate-900 font-sans">
                  {price}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {/* ── Show More / Less Toggle ── */}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 w-full py-1.5 text-center inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#c8102e] hover:text-[#91081c] bg-white hover:bg-red-50 border border-slate-200/80 hover:border-red-200 rounded-lg transition-colors cursor-pointer"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp size={13} aria-hidden="true" />
              <span>Show fewer</span>
            </>
          ) : (
            <>
              <ChevronDown size={13} aria-hidden="true" />
              <span>+{remainingCount} more options</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
