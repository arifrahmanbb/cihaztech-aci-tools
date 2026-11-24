import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Modern, centered See More / Show Less toggle button.
 * Shown only when a category has more than initial products.
 * High-contrast, tactile, with smooth hover and active scale animations.
 */
export default function SeeMoreButton({ expanded, onClick, remaining }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center gap-2.5
        px-7 py-3 sm:px-8 sm:py-3.5
        rounded-full font-bold text-sm
        transition-all duration-300 ease-out cursor-pointer
        shadow-sm hover:shadow-lg active:scale-95
        focus:outline-none focus:ring-4 focus:ring-red-100
        ${
          expanded
            ? 'bg-slate-900 text-white hover:bg-slate-800'
            : 'bg-[#c8102e] hover:bg-[#a00d24] text-white shadow-red-900/15'
        }
      `}
      aria-expanded={expanded}
    >
      {expanded ? (
        <>
          <span className="tracking-wide">Show Less</span>
          <span className="p-1 rounded-full bg-white/15 transition-transform duration-300 group-hover:-translate-y-0.5">
            <ChevronUp size={15} aria-hidden="true" />
          </span>
        </>
      ) : (
        <>
          <span className="tracking-wide">See More Products</span>
          {remaining > 0 && (
            <span className="inline-flex items-center justify-center bg-white/20 text-white text-xs font-bold px-2.5 py-0.5 rounded-full font-mono">
              +{remaining}
            </span>
          )}
          <span className="p-1 rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0.5">
            <ChevronDown size={15} aria-hidden="true" />
          </span>
        </>
      )}
    </button>
  );
}
