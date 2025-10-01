import Footer from "../Footer";
import Header from "../Header";
import Termin from "../Termin";
import { CheckCircle2 } from "lucide-react";

export default function Teppichreinigung() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#ffd700] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#002b5c] opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Image */}
          <div className="relative">
            <img
              src="/chic-mid-century-modern-luxury-aesthetics-living-room-with-gray-velvet-couch-blue-rug.jpg"
              alt="Sofareinigung"
              className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#002b5c] opacity-20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-wide text-[#002b5c] font-semibold bg-[#002b5c]/10 px-4 py-1.5 rounded-full">
              Sofareinigung vom Profi
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug">
              Professionelle{" "}
              <span className="relative text-[#002b5c]">
                Sofareinigung
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#ffd700] opacity-60 rounded-md"></span>
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Entdecken Sie, was eine Sofareinigung wirklich ausmacht – von den
              Vorteilen über den Ablauf bis hin zur einfachen Terminbuchung.
              Bringen Sie Frische und Hygiene zurück in Ihr Zuhause.
            </p>

            {/* Highlight Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Entfernt Flecken und Gerüche nachhaltig",
                "Sanft und materialschonend",
                "Für ein hygienisches Zuhause",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3 hover:shadow-lg transition"
                >
                  <CheckCircle2 className="text-[#002b5c] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#kontaktformular"
                className="px-8 py-4 bg-[#002b5c] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#003b7a] transition transform hover:scale-105"
              >
                Jetzt Termin sichern
              </a>
              <a
                href="#mehr-erfahren"
                className="px-8 py-4 bg-white border border-[#002b5c] text-[#002b5c] text-lg font-semibold rounded-xl shadow hover:shadow-md transition"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg"
              alt="Sofareinigung"
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#002b5c] opacity-15 rounded-full blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Sofareinigung
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unter dem Begriff{" "}
              <span className="font-semibold">Sofareinigung</span> versteht man
              die gezielte und sorgfältige Reinigung von Sofas und
              Couchlandschaften. Dabei werden Staub, Flecken, Tierhaare sowie
              Bakterien und Milben gründlich entfernt. Unsere Techniken und
              Reinigungsmittel werden exakt auf das Material und den
              Verschmutzungsgrad abgestimmt.
            </p>

            <h3 className="text-2xl font-bold text-[#002b5c]">
              Wesentliche Ziele einer Sofareinigung
            </h3>
            <ul className="space-y-6">
              <li>
                <span className="block text-lg font-semibold text-gray-900">
                  1. Fleckentfernung
                </span>
                <p className="text-gray-700">
                  Ob Kaffee-, Rotwein- oder Ketchupflecken: Eine gründliche
                  Sofareinigung kann selbst tief eingezogene Flecken lösen.
                </p>
              </li>
              <li>
                <span className="block text-lg font-semibold text-gray-900">
                  2. Hygienische Frische
                </span>
                <p className="text-gray-700">
                  In Polstermöbeln setzen sich mit der Zeit Keime und Gerüche
                  fest. Eine regelmäßige Reinigung sorgt für ein hygienisches
                  Umfeld und verbessert das Raumklima.
                </p>
              </li>
              <li>
                <span className="block text-lg font-semibold text-gray-900">
                  3. Werterhalt
                </span>
                <p className="text-gray-700">
                  Hochwertige Sofas sind eine Investition. Durch regelmäßige
                  Sofareinigung bleibt Ihr Möbelstück länger wie neu.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Highlight Text */}
        <div className="max-w-5xl mx-auto mt-16 px-8">
          <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Viele versuchen, ihre Couch mit herkömmlichen Hausmitteln selbst
              zu reinigen. Das kann bei oberflächlichen Flecken manchmal
              funktionieren – stößt jedoch schnell an Grenzen. Deshalb empfehlen
              wir, bei Unsicherheiten oder großflächigen Verschmutzungen immer
              einen{" "}
              <span className="font-semibold text-[#002b5c]">Profi</span>{" "}
              hinzuzuziehen.
            </p>
          </div>
        </div>
      </section>

      <Termin />
      <Footer />
    </div>
  );
}
