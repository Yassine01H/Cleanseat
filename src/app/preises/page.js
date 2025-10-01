"use client";
import React from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

export default function PreisesPage() {
  const categories = [
    {
      title: "Polsterreinigung Preise",
      services: [
        { id: 1, title: "Kissen", price: "€10", icon: "/Kissen.png" },
        { id: 2, title: "Stuhl", price: "€15", icon: "/Stuhl.png" },
        { id: 3, title: "Bürostuhl", price: "€20", icon: "/Bürostuhl.png" },
        { id: 4, title: "Sessel", price: "€50", icon: "/sessel.png" },
        { id: 5, title: "Sofa (2-Sitzer)", price: "€90", icon: "/sofa 2 sitzer.png" },
        { id: 6, title: "Sofa (3-Sitzer)", price: "€120", icon: "/sofa 3 sitzer.png" },
        { id: 7, title: "Autositz (5 Sitze)", price: "€150", icon: "/Autositze (5 Sitze).png" },
        { id: 8, title: "Eckcouch klein", price: "€180", icon: "/Eckcouch klein.png" },
        { id: 9, title: "Eckcouch groß", price: "€230", icon: "/Eckcouch groß.png" },
      ],
    },
    {
      title: "Matratzenreinigung Preise",
      services: [
        { id: 10, title: "Einzelmatratze", price: "€80", icon: "/grosse-matratze (1).png" },
        { id: 11, title: "Doppelmatratze", price: "€100", icon: "/doppelbett.png" },
      ],
    },
  ];

  return (
    <div>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-[#002b5c] to-[#004080] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Unsere Preise
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Transparente Preise für professionelle Polster- & Teppichreinigung —
              keine versteckten Kosten. Für größere Objektarbeiten erstellen wir ein
              individuelles Angebot.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/ReinigungBuchen"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold 
                bg-white text-[#002b5c] shadow-xl hover:scale-105 transition-all duration-300"
              >
                JETZT ANFRAGEN
              </a>
              <a
                href="/Kontakt"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold 
                border border-white text-white bg-transparent shadow-lg 
                hover:bg-white hover:text-[#002b5c] transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

        {/* Kategorien */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 relative inline-block">
                {cat.title}
                <span className="absolute -bottom-3 left-0 w-28 h-1 
                bg-gradient-to-r from-[#002b5c] to-[#0055aa] rounded-full shadow-sm"></span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cat.services.map((s) => (
                  <div
                    key={s.id}
                    className="group flex flex-col items-center text-center 
                    bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-100
                    hover:-translate-y-3 hover:shadow-2xl hover:border-[#0055aa]/40 
                    transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Glare Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                    {/* Icon */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-full 
                    bg-gradient-to-r from-[#e6f0fa] to-[#f8fbff] shadow-inner 
                    group-hover:shadow-lg group-hover:scale-105 transition">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={50}
                        height={50}
                        className="transition-transform group-hover:scale-110"
                      />
                    </div>

                    {/* Titel & Preis */}
                    <h3 className="mt-5 text-lg font-semibold text-gray-800">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-2xl font-extrabold text-[#0055aa] drop-shadow-sm">
                      {s.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
