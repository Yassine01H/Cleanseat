"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "STARTSEITE" },
    { href: "/preises", label: "PREISE" },
    { href: "/Uber-uns", label: "ÜBER UNS" },
    { href: "/FAQ", label: "FAQ" },
    { href: "/Kontakt", label: "KONTAKT" },
  ];

  return (
    <>
      {/* Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-[#002b5c] to-[#003b7a] text-white text-sm shadow-md">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
            <a
              href="mailto:cleanseat08@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              ✉ cleanseat08@gmail.com
            </a>
            <a
              href="https://instagram.com/polsterglanz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm shadow-inner hover:scale-110 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white shadow-md rounded-2xl hover:scale-105 transition">
                <img
                  src="/2.png"
                  alt="CleanSeat Logo"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#002b5c] drop-shadow-sm">
                  Clean<span className="text-slate-600">Seat</span>
                </span>
                <span className="text-xs md:text-sm text-slate-500 uppercase tracking-[0.15em]">
                  Reinigung & Frische
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-base font-medium">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition font-medium ${
                    pathname === href
                      ? "text-[#002b5c] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:rounded-full after:bg-gradient-to-r from-[#002b5c] to-[#0057a3] drop-shadow-md"
                      : "text-slate-700 hover:text-[#002b5c]"
                  }`}
                >
                  {label}
                </Link>
              ))}
              {/* Dropdown */}
              <div className="relative group">
                <button
                  className={`transition ${
                    pathname.startsWith("/Polster") ||
                    pathname.startsWith("/Sofa") ||
                    pathname.startsWith("/Matratzen")
                      ? "text-[#002b5c] font-semibold"
                      : "text-slate-700 hover:text-[#002b5c]"
                  }`}
                >
                  REINIGUNG ▾
                </button>
                <div className="absolute left-0 mt-3 hidden group-hover:block bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl w-56 py-3 border border-slate-100/40">
                  <Link
                    href="/Polsterreinigung"
                    className="block px-5 py-2 text-slate-600 hover:text-[#002b5c] hover:bg-slate-50 rounded-lg transition"
                  >
                    Polsterreinigung
                  </Link>
                  <Link
                    href="/Sofareinigung"
                    className="block px-5 py-2 text-slate-600 hover:text-[#002b5c] hover:bg-slate-50 rounded-lg transition"
                  >
                    Sofareinigung
                  </Link>
                  <Link
                    href="/Matratzenreinigung"
                    className="block px-5 py-2 text-slate-600 hover:text-[#002b5c] hover:bg-slate-50 rounded-lg transition"
                  >
                    Matratzenreinigung
                  </Link>
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/ReinigungBuchen"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#002b5c] to-[#0057a3] text-white font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Jetzt buchen 🚀
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block text-lg font-medium ${
                      pathname === href
                        ? "text-[#002b5c]"
                        : "text-slate-700 hover:text-[#002b5c]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/ReinigungBuchen"
                  className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#002b5c] to-[#0057a3] text-white font-semibold shadow-lg text-center hover:scale-105 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Jetzt buchen 🚀
                </Link>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Platzhalter für Header Höhe */}
      <div className="h-[120px] md:h-[140px]" />
    </>
  );
}
