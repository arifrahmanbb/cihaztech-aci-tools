/**
 * Minimal site footer with ACI Motors branding and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* ── Branding ── */}
        <div className="flex items-center gap-3">
          <img
            src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
            alt="ACI Motors Limited"
            className="h-8 w-auto"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="text-sm font-medium text-gray-700">
            ACI Motors
          </span>
        </div>

        {/* ── Copyright ── */}
        <div className="text-xs text-gray-400">
          <span>© {year} ACI Motors Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

