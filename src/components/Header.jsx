import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Fixed top header with:
 * – ACI Motors logo (click to scroll to top)
 * – Only Category menu items in navigation (desktop pills & mobile drawer)
 * – Clicking any category smooth-scrolls to its section
 */
export default function Header({ categories }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
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

  /* Track active category on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

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
        className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs"
        style={{ height: 'var(--header-height)' }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* ── Logo ── */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 shrink-0 text-left focus:outline-none cursor-pointer group"
            aria-label="ACI Motors – scroll to top"
          >
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors"
              className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="hidden sm:inline text-base sm:text-lg font-bold text-gray-900 tracking-tight">
              ACI Motors
            </span>
          </button>

          {/* ── Desktop Category Navigation (Just Category Menu) ── */}
          <nav
            className="hidden lg:flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1"
            aria-label="Categories"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#c8102e] text-white shadow-xs'
                      : 'text-gray-600 hover:text-[#c8102e] hover:bg-red-50'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close category menu' : 'Open category menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Spacer so page content starts below fixed header */}
      <div style={{ height: 'var(--header-height)' }} aria-hidden="true" />

      {/* ── Mobile Drawer Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden" aria-hidden="true" />
      )}

      {/* ── Mobile Drawer (Strictly Category Menu Items Only) ── */}
      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 z-50 h-full w-72 sm:w-80 bg-white shadow-2xl
          transform transition-transform duration-300 ease-out lg:hidden flex flex-col
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Category navigation"
        role="navigation"
      >
        {/* Drawer Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <img
            src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
            alt="ACI Motors"
            className="h-7 w-auto"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Menu Items List Only */}
        <nav className="overflow-y-auto flex-1 p-3 space-y-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-150 text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#c8102e] text-white font-semibold shadow-xs'
                    : 'text-gray-700 hover:bg-red-50 hover:text-[#c8102e] font-medium'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {cat.products.length}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
