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
        px-6 py-3 sm:px-8 sm:py-3.5
        rounded-full font-semibold text-sm sm:text-base
        transition-all duration-300 ease-out cursor-pointer
        shadow-md hover:shadow-xl active:scale-95
        focus:outline-none focus:ring-4 focus:ring-red-200
        ${
          expanded
            ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10'
            : 'bg-gradient-to-r from-[#d81b3a] to-[#a80c23] hover:from-[#e22040] hover:to-[#91081c] text-white shadow-red-600/20'
        }
      `}
      aria-expanded={expanded}
    >
      {expanded ? (
        <>
          <span className="tracking-wide">Show Less</span>
          <span className="p-1 rounded-full bg-white/15 transition-transform duration-300 group-hover:-translate-y-0.5">
            <ChevronUp size={16} aria-hidden="true" />
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
            <ChevronDown size={16} aria-hidden="true" />
          </span>
        </>
      )}
    </button>
  );
}
