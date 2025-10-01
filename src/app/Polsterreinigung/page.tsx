import Footer from "../Footer";
import Header from "../Header";
import Termin from "../Termin";
import { CheckCircle2 } from "lucide-react";

export default function Polsterreinigung() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="/front-view-woman-cleaning-home (1).jpg"
              alt="Polsterreinigung"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            {/* Accent Blur Shape */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#002b5c] opacity-10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Professionelle{" "}
              <span className="text-[#002b5c] relative">
                Polsterreinigung
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#ffd700] opacity-50 rounded-md"></span>
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sofas, Sessel und Stühle sorgen für Gemütlichkeit – doch Flecken,
              Tierhaare und unangenehme Gerüche mindern schnell das Wohngefühl.{" "}
              <br />
              <span className="font-semibold text-gray-900">
                Unsere Polsterreinigung bringt Frische, Hygiene und Komfort
                zurück in Ihr Zuhause.
              </span>
            </p>

            {/* Highlight Bullet Points with Icons */}
            <ul className="space-y-3 text-gray-700">
              {[
                "Entfernt Flecken und Gerüche nachhaltig",
                "Sanft und materialschonend",
                "Für ein hygienisches Zuhause",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#002b5c] w-6 h-6" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#kontaktformular"
                className="inline-block px-10 py-4 bg-[#002b5c] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#003b7a] transition transform hover:scale-105"
              >
                Jetzt Termin sichern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Beschreibung */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <img
            src="/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg"
            alt="Polsterreinigung Sofa"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
          />

          {/* Right Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Polsterreinigung im Detail
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unter <span className="font-semibold">Polsterreinigung</span>{" "}
              versteht man das gründliche Reinigen von Sofas, Sesseln, Stühlen
              oder Matratzen. Ziel ist es, tiefsitzende Verschmutzungen,
              Staub, Milben und Gerüche zu entfernen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unsere professionelle Vorgehensweise nutzt spezielle Maschinen
              und Reinigungsmittel, die in die Tiefe des Polsters eindringen.
              Je nach Material und Verschmutzungsgrad setzen wir
              Sprühextraktion oder Dampfreinigung ein.
            </p>
          </div>
        </div>

        {/* Vorteile */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Wichtige Vorteile einer professionellen Polsterreinigung:
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-[#002b5c] mb-2">Hygiene</h4>
              <p>Milben und Bakterien haben keine Chance mehr – ideal für Allergiker.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-[#002b5c] mb-2">Frische Optik</h4>
              <p>Flecken und Grauschleier verschwinden, Farben wirken intensiver.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-[#002b5c] mb-2">Längere Lebensdauer</h4>
              <p>Regelmäßige Pflege schützt das Gewebe und beugt Verschleiß vor.</p>
            </div>
          </div>

          <p className="mt-8 text-gray-800 text-lg">
            Wer seine{" "}
            <span className="font-semibold">
              Möbel mit möglichst wenig Aufwand
            </span>{" "}
            in Bestform halten möchte, kommt an einer gründlichen
            Polsterreinigung nicht vorbei.
          </p>
        </div>
      </section>

      {/* Section 3: Warum lohnt es sich */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Warum eine professionelle Polsterreinigung?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kleine Flecken lassen sich oft selbst entfernen. Doch bei
              großflächigen Verschmutzungen oder empfindlichen Stoffen empfiehlt
              sich eine{" "}
              <span className="font-semibold">
                professionelle Polsterreinigung
              </span>
              .
            </p>

            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">
                  Tiefenwirksame Sauberkeit:
                </span>{" "}
                Profis beseitigen selbst hartnäckige Rückstände und Bakterien.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Schonung des Materials:
                </span>{" "}
                Experten wählen die richtige Methode für jeden Stoff.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Zeit- und Nervenersparnis:
                </span>{" "}
                Profis arbeiten effizient und stressfrei.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Werterhaltung:
                </span>{" "}
                Längere Lebensdauer & gepflegtes Aussehen der Möbel.
              </li>
            </ol>

            <p className="text-gray-800 font-semibold mt-6">
              Das Ergebnis: eine saubere, hygienische und langlebige Couch oder
              andere Polstermöbel, auf denen Sie sich rundum wohlfühlen können.
            </p>
          </div>

          {/* Right Image */}
          <img
            src="/chic-mid-century-modern-luxury-aesthetics-living-room-with-gray-velvet-couch-blue-rug.jpg"
            alt="Polster Sofa"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
          />
        </div>
      </section>

      <Termin />
      <Footer />
    </div>
  );
}
