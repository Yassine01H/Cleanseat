// components/StatsSection.tsx
import { Users, Car, Smile } from "lucide-react"; // Icons

export default function StatsSection() {
  return (
    <section className="w-full">
      {/* Top Navigation Bar */}
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#002b5c] to-[#003b7a] text-white text-center text-lg font-semibold shadow-md">
        <a
          href="/Kontakt"
          className="py-4 hover:bg-white/10 transition flex items-center justify-center"
        >
          ZUM KONTAKTFORMULAR &raquo;
        </a>
        <a
          href="#termin"
          className="py-4 hover:bg-white/10 transition flex items-center justify-center"
        >
          &laquo; ZUM KONFIGURATOR
        </a>
      </div>

      {/* Stats Section */}
      <div className="relative bg-gray-50 py-16 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002b5c]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Unsere mehrjährige Erfahrung zahlt sich aus!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Vertrauen Sie auf Qualität und Zuverlässigkeit für ein
              makelloses Ergebnis – Ihre Zufriedenheit steht bei uns an erster Stelle.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card Template */}
            {[
              {
                icon: <Users size={36} />,
                label: "Kunden",
                value: "+200",
              },
              {
                icon: <Car size={36} />,
                label: "Gereinigte Polster",
                value: "+800",
              },
              {
                icon: <Smile size={36} />,
                label: "Zufriedenheit",
                value: "99%",
              },
            ].map(({ icon, label, value }, i) => (
              <div
                key={i}
                className="relative bg-white/80 backdrop-blur-md text-gray-800 rounded-2xl p-6 w-44 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#002b5c] to-[#004080] text-white shadow-lg">
                  {icon}
                </div>
                <p className="uppercase text-xs tracking-wider text-gray-600">
                  {label}
                </p>
                <p className="text-3xl font-extrabold text-[#002b5c] drop-shadow-sm">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
