import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";
import Termin from "./Termin";
import Hero from "./Hero";
import Header from "./Header";
import StatsSection from "./StatsSection";
import OfferSection from "./OfferSection";

export default function Home() {
  return (
  <div>
<Header/>

{/* Hero Section */}
<Hero/>


<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
{/* Left Content */}
<div className="space-y-6">
  {/* Headline */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
    <span className="text-[#002b5c]">Sauberkeit</span>, die man spürt –{" "}
    <span className="text-[#002b5c]">Frische</span>, die man atmet!
  </h2>

  {/* Einleitung */}
  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
    Genießen Sie das gute Gefühl frisch gereinigter Polster – frei von Schmutz,
    Staub und unangenehmen Gerüchen.
  </p>

  {/* Zusatztext */}
  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
    Unser erfahrenes Team sorgt für hygienische Reinheit und neuen Komfort in
    Ihrem Zuhause. Gönnen Sie sich ein gesundes Wohnumfeld mit unserer
    professionellen Polsterreinigung.
  </p>

  {/* CTA Button */}
  <div>
    <a
  href="#termin"
  className="inline-block px-6 py-2 bg-[#002b5c] text-white text-base font-medium rounded-lg shadow hover:bg-[#003b7a] transition"
>
  JETZT REINIGUNG BUCHEN
</a>
  </div>
</div>



    {/* Right Image */}
    <div className="relative">
      <img
        src="/front-view-woman-cleaning-home (1).jpg"
        alt="Saubere Matratze"
        className="rounded-2xl shadow-xl w-full h-auto object-cover"
      />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#002b5c] rounded-2xl opacity-10"></div>
    </div>
  </div>
</section>

<div id="termin">
  <Termin />
</div>
<StatsSection/>
<Footer/>

  </div>
  )
}
