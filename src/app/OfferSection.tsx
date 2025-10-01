// components/OfferSection.tsx
import { Phone } from "lucide-react";

export default function OfferSection() {
  return (
    <section className="w-full">
      {/* Top Banner */}
      <div className="bg-cyan-600 text-white text-center py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Jetzt kostenloses Angebot anfordern!
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-cyan-600 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition">
            JETZT ANFRAGEN
          </button>
          <a
            href="tel:08005893414647"
            className="flex items-center gap-2 bg-cyan-700 text-white rounded-full px-6 py-3 hover:bg-cyan-800 transition"
          >
            <Phone size={18} /> 0800 5893414647
          </a>
        </div>
      </div>

      {/* Pricing Factors */}
      <div className="bg-white text-center py-12 px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Wovon hängt der Preis ab?
        </h3>
        <p className="mb-6 text-gray-700 font-medium">
          Der Endpreis Ihres persönlichen Angebots hängt nur von diesen Faktoren ab:
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>1. Art des Artikels (z.B. Sessel, Sofa, Teppich, Matratze)</li>
          <li>2. Größe des Artikels (z.B. Sitzer-Anzahl, Quadratmeter, Matratzengröße)</li>
        </ul>
        <p className="mt-6 font-semibold text-gray-800">
          Wichtig: Wie stark etwas verschmutzt ist, beeinflusst unseren Preis nicht!
        </p>
      </div>

      {/* Always Included */}
      <div className="bg-cyan-50 text-center py-12 px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Immer inklusive bei Polsterbiorein
        </h3>
        <ul className="text-gray-700 space-y-2 mb-6 max-w-xl mx-auto text-left">
          <li>• Kostenlose Anfahrt in unserem Servicegebiet</li>
          <li>• Umweltfreundliche Reinigungsmittel (100% Bio & Vegan)</li>
          <li>• Alle benötigten Maschinen und Materialien</li>
          <li>• Unsere Festpreis-Garantie (basierend auf dem Angebot)</li>
          <li>• Individuelle Beratung direkt bei Ihnen vor Ort</li>
        </ul>
        <p className="font-semibold text-gray-800">
          Wichtig: Wie stark etwas verschmutzt ist, beeinflusst unseren Preis nicht!
        </p>
      </div>
    </section>
  );
}
