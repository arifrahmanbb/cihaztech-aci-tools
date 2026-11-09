import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * VariationList Component
 * 
 * Displays available product variations (sizes, weights, models, specifications)
 * as a clean, structured, responsive list.
 * 
 * Guarantees:
 * - Redundant codes (e.g. "4 Inch (J026) (J026)") are NEVER displayed.
 * - Clean bulleted or tagged presentation matching Section 4.
 * - Collapsible toggle if variation count exceeds initial limit, keeping cards balanced.
 */
export default function VariationList({
  variations = [],
  heading = 'Available Variations',
  initialLimit = 4
}) {
  const [expanded, setExpanded] = useState(false);

  if (!variations || variations.length === 0) return null;

  const hasMore = variations.length > initialLimit;
  const visibleList = expanded ? variations : variations.slice(0, initialLimit);
  const remainingCount = variations.length - initialLimit;

  return (
    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col">
      {/* ── Section Heading (e.g. Available Sizes, Available Weights) ── */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">
          {heading}:
        </span>
        <span className="text-[10px] text-gray-400 font-mono">
          {variations.length} {variations.length === 1 ? 'option' : 'options'}
        </span>
      </div>

      {/* ── Structured Variation List ── */}
      <ul className="flex flex-wrap gap-1.5" role="list">
        {visibleList.map((item, idx) => {
          // Format label & code cleanly without redundant duplicate codes
          const label = item.label || item.spec || item.name || '';
          const code = item.code || '';
          const showCode = code && !label.toLowerCase().includes(code.toLowerCase());

          return (
            <li
              key={item.id || idx}
              className="inline-flex items-center text-[11px] sm:text-xs bg-gray-50 hover:bg-red-50/60 text-gray-800 hover:text-[#c8102e] px-2 py-0.5 rounded-md font-medium border border-gray-200/80 transition-colors"
            >
              <span className="text-gray-400 mr-1.5 select-none leading-none">•</span>
              <span className="truncate max-w-[160px] sm:max-w-[200px]" title={label}>
                {label}
              </span>
              {showCode && (
                <span className="ml-1 text-[10px] text-gray-400 font-mono font-normal">
                  ({code})
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {/* ── Show More / Less Variations Toggle ── */}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 self-start inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#c8102e] hover:text-[#a00d24] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-200 rounded px-1 py-0.5 transition-colors"
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
              <span>+{remainingCount} more</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

