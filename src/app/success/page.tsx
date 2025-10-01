"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return (
    <div>
      <Header />
      {/* 🎉 Konfetti-Effekt */}
      <Confetti width={windowSize.width} height={windowSize.height} />

      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#dbeafe] px-6 text-center">
        <div
          className={`
            relative bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 
            max-w-lg w-full border border-slate-200 transition hover:scale-[1.02] duration-300
          `}
        >
          {/* Glow Hintergrund */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0077cc44] to-[#00cc8844] blur-3xl -z-10"></div>

          {/* Logo */}
          <Image
            src="/1.png"
            alt="CleanSeat Logo"
            width={90}
            height={90}
            className="mx-auto mb-6 drop-shadow-2xl animate-bounce"
          />

          <h1 className="text-4xl font-extrabold text-[#0055aa] mb-4 drop-shadow-sm">
            ✅ Anfrage erfolgreich gesendet!
          </h1>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Vielen Dank für Ihr Vertrauen. <br />
            Wir melden uns in Kürze telefonisch oder per E-Mail bei Ihnen,  
            um Ihren Termin zu bestätigen.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col gap-4 mb-6">
            <Link
              href="/"
              className="bg-gradient-to-r from-[#0055aa] to-[#0077cc] hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition transform hover:scale-105"
            >
              🚀 Zurück zur Startseite
            </Link>
            <Link
              href="/FAQ"
              className="bg-white hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-xl shadow-md font-semibold transition transform hover:scale-105 border border-slate-200"
            >
              ❓ Häufige Fragen (FAQ)
            </Link>
          </div>

          {/* Hinweis Termin absagen */}
          <p className="text-sm text-slate-500">
            Falls Sie Ihren Termin absagen möchten, schreiben Sie uns bitte an{" "}
            <a
              href="mailto:cleanseat08@gmail.com"
              className="text-[#0055aa] font-semibold hover:underline"
            >
              cleanseat08@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
