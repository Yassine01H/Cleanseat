// components/Footer.tsximport { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#002b5c] to-[#004080] text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg hover:scale-105 transition">
              <img src="/2.png" alt="CleanSeat Logo" className="h-9 w-auto" />
            </div>
            <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-sm">
              CleanSeat
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
            Experten für Polster-, Matratzen- und Teppichreinigung in Essen und
            Umgebung. Sauberkeit, die man sieht – Frische, die man spürt.
          </p>
          <p className="mt-4 text-sm">
            ✉️{" "}
            <a
              href="mailto:info@polsterbiorein.de"
              className="hover:text-white underline underline-offset-2 transition"
            >
              info@polsterbiorein.de
            </a>
          </p>
        </div>

        {/* Leistungen */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-4 relative after:content-[''] after:block after:w-10 after:h-[3px] after:bg-white after:rounded-full after:mt-1">
            Unsere Leistungen
          </h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="/Polsterreinigung"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                Polsterreinigung
              </a>
            </li>
            <li>
              <a
                href="/Matratzenreinigung"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                Matratzenreinigung
              </a>
            </li>
          </ul>
        </div>

        {/* Seiten */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-4 relative after:content-[''] after:block after:w-10 after:h-[3px] after:bg-white after:rounded-full after:mt-1">
            Wichtige Seiten
          </h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="/"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                Startseite
              </a>
            </li>
            <li>
              <a
                href="/Kontakt"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="/preises"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                Preise
              </a>
            </li>
            <li>
              <a
                href="/FAQ"
                className="hover:text-white hover:translate-x-1 transition inline-block"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media + Button rechts */}
        <div className="flex flex-col items-start md:items-end gap-6">
      

          {/* CTA Button Rechts */}
<a
  href="/ReinigungBuchen"
  className="inline-block px-8 py-3 bg-gradient-to-r from-[#002b5c] to-[#004080] text-white font-bold rounded-xl shadow-[0_5px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_0px_rgba(0,0,0,0.3)] active:translate-y-[2px] transition-all duration-300"
>
  JETZT REINIGUNG BUCHEN
</a>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300 backdrop-blur-sm">
        <p>© 2025 Cleanseat. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
