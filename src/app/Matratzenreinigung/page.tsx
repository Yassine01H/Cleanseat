import Footer from "../Footer";
import Header from "../Header";
import Termin from "../Termin";
import { CheckCircle } from "lucide-react";

export default function Matratzenreinigung() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/kathyryn-tripp-6abl43xbcx8-unsplash.jpg"
            alt="Matratzenreinigung"
            className="rounded-2xl shadow-2xl w-full h-[480px] object-cover"
          />
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Professionelle{" "}
              <span className="text-[#002b5c]">Matratzenreinigung</span> für
              erholsamen Schlaf
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gesünder schlafen beginnt mit einer sauberen Matratze. Unser Service
              befreit zuverlässig von Staub, Milben und Allergenen – direkt vor Ort.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#kontaktformular"
                className="px-8 py-4 bg-[#002b5c] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#003b7a] transition transform hover:scale-105"
              >
                Jetzt Termin sichern
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            "Frei von Staubmilben & Allergenen",
            "Schonende & effektive Methoden",
            "Mehr Hygiene und längere Lebensdauer",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-[#002b5c] mb-4" />
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Warum eine regelmäßige Reinigung sinnvoll ist
            </h2>
            <p className="text-lg text-gray-700">
              Mehr Wohlbefinden – weniger Allergien.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In Matratzen sammeln sich schnell Hautschuppen, Staub und Milben.
              Dies kann Allergien, Atemprobleme und unruhigen Schlaf verursachen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unsere professionelle Reinigung entfernt selbst tiefsitzende
              Verunreinigungen und sorgt für ein gesundes Schlafklima.
            </p>
          </div>
          <img
            src="/lissete-laverde-4zs-UFz5uK4-unsplash.jpg"
            alt="Saubere Matratze"
            className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/zulian-firmansyah-3AvEi1EoIyM-unsplash.jpg"
            alt="Bett nach Reinigung"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Unser individueller Ansatz
            </h2>
            <p className="text-lg text-gray-700">Jede Matratze ist einzigartig.</p>
            <p className="text-gray-600 leading-relaxed">
              Wir prüfen zuerst den Zustand Ihrer Matratze und wählen die optimale
              Methode: ob Fleckenentfernung, Tiefendesinfektion oder
              Geruchsneutralisation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              So garantieren wir die besten Ergebnisse – für ein frisches und
              hygienisches Schlafgefühl.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Erfahrung, der Sie vertrauen können
            </h2>
            <p className="text-lg text-gray-700">
              Seit Jahren Ihr Experte für Matratzenpflege.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unser Team kombiniert langjährige Erfahrung mit modernen
              Reinigungsverfahren. Wir arbeiten zuverlässig, gründlich und mit
              höchstem Qualitätsanspruch.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vertrauen Sie auf unser Know-how – für langanhaltende Sauberkeit
              und gesunden Schlafkomfort.
            </p>
          </div>
          <img
            src="/d-koi-W1rK4mBImv4-unsplash.jpg"
            alt="Frische Matratze"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>
      </section>
      <Termin/>
      <Footer />
    </div>
  );
}
