import { ExternalLink } from 'lucide-react';

/**
 * Minimal site footer with ACI Motors branding, copyright, and official link.
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
          <span className="text-sm text-gray-500">
            ACI Motors Limited – Product Catalogue
          </span>
        </div>

        {/* ── Copyright + Link ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-400">
          <span>© {year} ACI Motors Limited. All rights reserved.</span>
          <a
            href="https://acimotors-bd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#c8102e] hover:underline font-medium"
          >
            Visit official website
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

