import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

/**
 * Fixed top header with:
 * – ACI Motors logo
 * – Site title
 * – Category navigation (desktop horizontal pills, mobile drawer)
 * Clicking a category name smooth-scrolls to its section.
 */
export default function Header({ categories }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);

  /* Close drawer on outside click */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm"
        style={{ height: 'var(--header-height)' }}
      >
        <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* ── Logo ── */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 shrink-0 text-left focus:outline-none"
            aria-label="ACI Motors – scroll to top"
          >
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors Limited logo"
              className="h-9 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="hidden sm:inline text-base font-bold text-gray-900 tracking-tight">
              ACI Motors
            </span>
          </button>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center gap-1 overflow-x-auto scrollbar-none"
            aria-label="Product categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 hover:text-[#c8102e] hover:bg-red-50 transition-colors whitespace-nowrap"
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Spacer so page content starts below fixed header */}
      <div style={{ height: 'var(--header-height)' }} aria-hidden="true" />

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" aria-hidden="true" />
      )}

      {/* ── Mobile drawer panel ── */}
      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out lg:hidden
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Category navigation"
        role="navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-sm text-gray-800">Browse Categories</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-60px)] py-3 px-3">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="w-full flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-[#c8102e] transition-colors text-left"
            >
              <span className="text-xs text-gray-400 w-6 shrink-0 font-mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              {cat.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

