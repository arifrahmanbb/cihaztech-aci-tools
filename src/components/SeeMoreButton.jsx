import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * See More / Show Less toggle button.
 * Shown only when a category has more than 3 products.
 * Each category manages its own expanded state independently.
 */
export default function SeeMoreButton({ expanded, onClick, remaining }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn-aci"
      aria-expanded={expanded}
    >
      {expanded ? (
        <>
          <ChevronUp size={16} aria-hidden="true" />
          Show Less
        </>
      ) : (
        <>
          <ChevronDown size={16} aria-hidden="true" />
          See More Products
          {remaining > 0 && (
            <span className="ml-1 bg-white/20 rounded px-1.5 py-0.5 text-xs font-mono">
              +{remaining}
            </span>
          )}
        </>
      )}
    </button>
  );
}

