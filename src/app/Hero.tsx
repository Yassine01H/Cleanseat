"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden z-0">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
          <div className="relative group max-h-[500px]">
            <Image
              src="/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
              alt="Professionelle Polsterreinigung"
              width={480}
              height={520}
              priority
              className="rounded-xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#002b5c] rounded-lg opacity-10 blur-sm"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-lg"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Professionelle{" "}
            <span className="text-[#002b5c] drop-shadow-sm">Polsterreinigung</span>{" "}
            in Essen
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Ihre Polstermöbel wie neu – schnell, zuverlässig und ohne versteckte Kosten.
          </p>

          {/* Benefits Box kompakter */}
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg space-y-2 text-gray-700 text-sm border border-gray-100">
            {[
              "Ohne Anfahrtskosten",
              "Direkt vor Ort",
              "Mit Festpreisgarantie",
              "Zufriedenheitsgarantie",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#002b5c]" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons kleiner */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-3">
            <a
              href="#termin"
              className="px-5 py-2.5 bg-gradient-to-r from-[#002b5c] to-[#003b7a] text-white text-base font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Jetzt anfragen
            </a>
            <a
              href="/Kontakt"
              className="px-5 py-2.5 bg-white text-[#002b5c] text-base font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
