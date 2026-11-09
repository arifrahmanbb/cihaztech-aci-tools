import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * VariationList Component
 * 
 * Displays available product variations (sizes, weights, models, specifications)
 * as a clean, vertical bulleted list matching Section 4.
 * 
 * Adheres to:
 * - 3 items initially shown in list format ("3 ta item hobe list akara")
 * - Bullet list format: "• Model / Size"
 * - No duplicate codes
 * - Interactive toggle for remaining items (+X more / Show fewer)
 * - Scrollable view when fully expanded for large datasets (e.g. 50 items)
 */
export default function VariationList({
  variations = [],
  heading = 'Available Variations',
  initialLimit = 3
}) {
  const [expanded, setExpanded] = useState(false);

  if (!variations || variations.length === 0) return null;

  const hasMore = variations.length > initialLimit;
  const visibleList = expanded ? variations : variations.slice(0, initialLimit);
  const remainingCount = variations.length - initialLimit;

  return (
    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col">
      {/* ── Section Heading (e.g. Available Models, Available Sizes) ── */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
          {heading}:
        </span>
        <span className="text-[10px] text-gray-400 font-mono font-medium">
          {variations.length} {variations.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* ── Vertical Bullet List Format (3 items visible initially) ── */}
      <ul
        className={`flex flex-col space-y-1 ${
          expanded && variations.length > 8 ? 'max-h-56 overflow-y-auto pr-1' : ''
        }`}
        role="list"
      >
        {visibleList.map((item, idx) => {
          const label = item.label || item.spec || item.name || '';
          const code = item.code || '';
          const showCode = code && !label.toLowerCase().includes(code.toLowerCase());

          return (
            <li
              key={item.id || idx}
              className="flex items-center text-xs sm:text-sm text-gray-800 py-0.5 transition-colors group-hover:text-gray-900"
            >
              <span className="text-[#c8102e] mr-2 text-base leading-none select-none shrink-0">
                •
              </span>
              <span className="truncate font-medium text-gray-700 hover:text-gray-900" title={label}>
                {label}
              </span>
              {showCode && (
                <span className="ml-1.5 text-[11px] text-gray-400 font-mono shrink-0">
                  ({code})
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
          className="mt-2.5 self-start inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#c8102e] hover:text-[#91081c] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-200 rounded px-1 py-0.5 transition-colors"
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
              <span>+{remainingCount} more models</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
