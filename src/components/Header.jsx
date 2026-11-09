import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Fixed top header with:
 * – Official ACI Motors logo
 * – ACI Product Catalogue title
 * – Category navigation pills that smooth-scroll to their section
 * – Mobile drawer navigation
 */
export default function Header({ categories = [] }) {
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
    return () => {
      document.body.style.overflow = '';
    };
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
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-3 px-3.5 sm:px-6 lg:px-8">
          {/* ── Logo & Title ── */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 shrink-0 text-left focus:outline-none cursor-pointer group"
            aria-label="ACI Product Catalogue – scroll to top"
          >
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors Logo"
              className="h-7 sm:h-8 md:h-9 w-auto transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight leading-tight">
                ACI Product Catalogue
              </span>
              <span className="text-[10px] text-gray-400 font-medium hidden sm:block">
                Official Machinery & Smart Tools
              </span>
            </div>
          </button>

          {/* ── Desktop Category Navigation ── */}
          <nav
            className="hidden xl:flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1"
            aria-label="Categories"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
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
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close category menu' : 'Open category menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Spacer so page content starts below fixed header */}
      <div style={{ height: 'var(--header-height)' }} aria-hidden="true" />

      {/* ── Mobile Drawer Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity xl:hidden"
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer Content ── */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out xl:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Category Navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors"
              className="h-6 w-auto"
            />
            <span className="font-bold text-sm text-gray-900">Categories</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-red-50 text-[#c8102e] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
