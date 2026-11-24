import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '01350902312';
const WHATSAPP_NUMBER = '8801350902312';

/**
 * Modern Site Footer
 * Features clean brand identity, verified support helpline, and official copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* ── Branding ── */}
          <div className="flex items-center gap-3">
            <img
              src="https://acimotors-bd.com/assets/images/acimotors-logo.svg"
              alt="ACI Motors Limited"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-slate-900 tracking-tight">
                ACI Motors Limited
              </span>
              <span className="text-xs text-slate-500">
                Official Machinery & Smart Tools Division
              </span>
            </div>
          </div>

          {/* ── Quick Helpline & WhatsApp Contacts ── */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[#c8102e] border border-slate-200 text-xs font-semibold transition-all"
            >
              <Phone size={14} />
              <span>Helpline: {PHONE_NUMBER}</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 text-xs font-semibold transition-all"
            >
              <MessageCircle size={14} />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* ── Bottom Copyright & Guarantee ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} ACI Motors Limited. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Genuine Quality Guaranteed</span>
            <span>•</span>
            <span>Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
