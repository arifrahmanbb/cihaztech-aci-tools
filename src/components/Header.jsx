import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const PHONE_NUMBER = '01350902312';
const WHATSAPP_NUMBER = '8801350902312';
const FACEBOOK_URL = 'https://www.facebook.com/acimotors';
const YOUTUBE_URL = 'https://www.youtube.com/@ACIMotors';

/**
 * Header Component
 *
 * Requirements:
 * - Left side: ONLY the menu icon.
 * - Right side: Phone icon, Social media icons (Facebook, YouTube), and WhatsApp icon.
 * - Clicking menu icon opens the category drawer for navigation.
 * - Container: max-w-[1320px] mx-auto.
 */
export default function Header({ categories = [] }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const drawerRef = useRef(null);

  /* Close drawer on click outside */
  useEffect(() => {
    if (!drawerOpen) return;
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

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
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs"
        style={{ height: 'var(--header-height, 64px)' }}
      >
        <div className="max-w-[1320px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ── Left Side: ONLY Menu Icon ── */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="p-2 -ml-2 rounded-xl text-gray-800 hover:text-[#c8102e] hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e]"
              aria-label="Open category navigation menu"
              aria-expanded={drawerOpen}
            >
              <Menu size={24} strokeWidth={2.2} />
            </button>
          </div>

          {/* ── Right Side: Phone, Social Media Icons, WhatsApp ── */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Phone Icon */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2 rounded-full text-gray-700 hover:text-[#c8102e] hover:bg-red-50 transition-colors"
              title={`Call Helpline: ${PHONE_NUMBER}`}
              aria-label={`Call Helpline ${PHONE_NUMBER}`}
            >
              <Phone size={19} />
            </a>

            {/* Facebook Icon */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-[#1877F2] hover:bg-blue-50 transition-colors"
              title="ACI Motors Facebook"
              aria-label="ACI Motors on Facebook"
            >
              <svg
                className="w-4.5 h-4.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-[#FF0000] hover:bg-red-50 transition-colors"
              title="ACI Motors YouTube"
              aria-label="ACI Motors on YouTube"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-emerald-600 hover:text-white hover:bg-emerald-600 bg-emerald-50 transition-all duration-200"
              title={`WhatsApp Order Helpline: ${WHATSAPP_NUMBER}`}
              aria-label="Order via WhatsApp"
            >
              <svg
                className="w-4.5 h-4.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 0C5.396 0 .029 5.367.029 11.987c0 2.108.549 4.168 1.595 5.97L0 24l6.235-1.587a11.94 11.94 0 0 0 5.784 1.488h.005c6.634 0 12.002-5.367 12.002-11.987A11.93 11.93 0 0 0 12.031 0zm0 21.913h-.004a9.94 9.94 0 0 1-5.068-1.385l-.364-.216-3.766.96.99-3.67-.237-.376a9.92 9.92 0 0 1-1.528-5.239c0-5.485 4.464-9.95 9.972-9.95 2.664 0 5.168 1.038 7.05 2.92a9.88 9.88 0 0 1 2.915 7.03c0 5.486-4.465 9.95-9.968 9.95zm5.467-7.464c-.3-.15-1.774-.874-2.049-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.495-1.78-1.67-2.08-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.505-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.634.72.229 1.375.197 1.893.12.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts below fixed header */}
      <div style={{ height: 'var(--header-height, 64px)' }} aria-hidden="true" />

      {/* ── Drawer Overlay ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Slide-over Navigation Drawer (Opens from Left) ── */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Category Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors"
              className="h-7 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-extrabold text-base text-gray-900 tracking-tight">
              Categories
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Navigation List */}
        <nav className="flex-1 overflow-y-auto p-3.5 space-y-1.5">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const count = cat.products ? cat.products.length : 0;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollTo(cat.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-red-50 text-[#c8102e] border border-red-100 shadow-2xs'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? 'bg-[#c8102e]' : 'bg-gray-300'
                    }`}
                  />
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className="text-xs text-gray-400 font-mono shrink-0">
                  {count > 0 ? `${count} items` : String(idx + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer with Quick Actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/60 space-y-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-lg transition-colors"
          >
            <span>Order via WhatsApp</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full flex items-center justify-center gap-2 text-gray-700 hover:text-[#c8102e] bg-white border border-gray-200 font-medium text-xs py-2 px-3 rounded-lg transition-colors"
          >
            <Phone size={14} />
            <span>Call Helpline: {PHONE_NUMBER}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
