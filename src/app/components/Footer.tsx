// No "use client" needed – this is a pure presentational component
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#1F299C] text-[#F9FAFB]">
      {/* Top area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          {/* Logo placeholder – replace /logo.svg when ready */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] flex items-center justify-center">
              {/* If you have a logo file, uncomment this and remove the div above:
              <Image src="/logo.svg" alt="Savenest logo" width={48} height={48} />
              */}
              <span className="text-[#1F299C] font-poppins font-bold">SN</span>
            </div>
            <span className="text-xl font-poppins font-bold">Savenest</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed font-nunito opacity-90">
            Save with purpose. Grow with your community. Gain control of your money —
            one goal at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 font-poppins text-sm">
            <li>
              <Link href="/" className="hover:text-[#FF9F1C] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#FF9F1C] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#FF9F1C] transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#FF9F1C] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#FF9F1C] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-[#FF9F1C] transition-colors">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-4">Stay in touch</h3>

          {/* Socials – inline SVGs to avoid extra packages */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-lg bg-[#0466C8]/20 hover:bg-[#0466C8]/30 transition"
              title="Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F9FAFB]">
                <path d="M22 5.8c-.7.3-1.5.6-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1a3.7 3.7 0 0 0-6.4 3.3 10.5 10.5 0 0 1-7.7-3.9 3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.5 1.9 2.6 3.6 2.7a7.5 7.5 0 0 1-4.6 1.6H3a10.6 10.6 0 0 0 5.7 1.7c6.8 0 10.6-5.7 10.6-10.6v-.5c.7-.5 1.3-1.2 1.7-1.9Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-[#0466C8]/20 hover:bg-[#0466C8]/30 transition"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F9FAFB]">
                <path d="M13 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-[#0466C8]/20 hover:bg[#0466C8]/30 transition"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F9FAFB]">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.6-.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
              </svg>
            </a>
          </div>

          <p className="text-sm font-nunito opacity-90">
            Need help? <a href="mailto:support@savenest.com" className="underline hover:text-[#FF9F1C]">support@savenest.com</a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#0466C8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-poppins opacity-90">
            © {new Date().getFullYear()} Savenest. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-poppins">
            <Link href="/privacy" className="hover:text-[#FF9F1C]">Privacy</Link>
            <span className="opacity-50">•</span>
            <Link href="/terms" className="hover:text-[#FF9F1C]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
