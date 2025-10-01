"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";



export default function uberuns() {
  

  return (
    <div>
    <Header/>

<section className="bg-gray-50 py-16 relative overflow-hidden">
  {/* Dekoration */}
  <div className="absolute top-10 -left-10 w-40 h-40 bg-[#002b5c] rounded-full opacity-10 blur-2xl"></div>
  <div className="absolute bottom-10 -right-10 w-48 h-48 bg-[#0055aa] rounded-full opacity-10 blur-2xl"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
    
    {/* Bild mit 3D Effekt */}
    <div className="relative group perspective">
      <div
        className="rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 
                   group-hover:rotate-x-3 group-hover:-rotate-y-2 group-hover:scale-105"
      >
        <img
          src="/kathyryn-tripp-6abl43xbcx8-unsplash.jpg"
          alt="Professionelle Reinigung"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#002b5c] rounded-xl opacity-20 blur-lg"></div>
    </div>

    {/* Textblock */}
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
        Cleanseat
      </h2>
      <h3 className="text-lg md:text-xl text-gray-800 font-medium">
        Frische, die begeistert!
      </h3>

      <p className="text-base text-gray-700 leading-relaxed">
        Bei <span className="font-semibold text-[#002b5c]">Cleanseat</span> steht die
        Sauberkeit und Frische Ihrer Polstermöbel im Mittelpunkt. Wir bringen Sofas,
        Sessel und Matratzen wieder in Bestform – gründlich, schonend und nachhaltig.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        Mit moderner Reinigungstechnik und jahrelanger Erfahrung sorgen wir für ein
        gesundes Zuhause. Ob private Haushalte oder Unternehmen – wir garantieren
        höchste Qualität und zufriedene Kunden.
      </p>

      <div>
        <a
          href="/ReinigungBuchen"
          className="inline-block px-6 py-3 bg-[#002b5c] text-white text-sm font-semibold 
                     rounded-lg shadow hover:bg-[#003b7a] transition"
        >
          JETZT TERMIN VEREINBAREN
        </a>
      </div>
    </div>
  </div>
</section>

    <Footer/>
        </div>
  );
}
