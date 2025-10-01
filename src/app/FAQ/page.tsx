// components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Kostet die Anfahrt zur Polsterreinigung etwas?",
    answer: "Nein, die Anfahrt ist im Service inbegriffen und für Sie komplett kostenlos."
  },
  {
    question: "Muss ich für eine telefonische Beratung vorab bezahlen?",
    answer: "Nein, eine Beratung am Telefon vor der Reinigung ist selbstverständlich gratis."
  },
  {
    question: "Welche Bezahlmöglichkeiten gibt es?",
    answer:
      "Sie können bequem per Überweisung, Barzahlung vor Ort, Kartenzahlung oder als Geschäftskunde auch auf Rechnung bezahlen."
  },
  {
    question: "Wofür sorgt die Imprägnierung während der Reinigung?",
    answer:
      "Durch die Imprägnierung werden Ihre Polster langfristig vor neuen Flecken geschützt und die Lebensdauer wird verlängert."
  },
  {
    question: "Wann kann ich die gereinigten Möbel wieder nutzen?",
    answer: "Je nach Material sind die Polster nach etwa 10 bis 15 Stunden wieder vollständig trocken."
  },
  {
    question: "Bekommen Sie auch schwierige Flecken wie Kaffee oder Rotwein heraus?",
    answer: "Ja, wir sind auf die Entfernung hartnäckiger Verschmutzungen wie Kaffee-, Wein- oder Saftflecken spezialisiert."
  },
  {
    question: "Sind empfindliche Stoffe bei der Reinigung gefährdet?",
    answer: "Nein, wir passen unsere Reinigungsmethode den jeweiligen Materialien an, sodass auch sensible Stoffe sicher behandelt werden."
  },
  {
    question: "Wie oft ist eine professionelle Polsterreinigung sinnvoll?",
    answer: "Wir empfehlen, alle zwei bis drei Jahre eine gründliche Reinigung durchführen zu lassen, um Hygiene und Optik zu bewahren."
  },
  {
    question: "Bieten Sie eine Garantie auf das Reinigungsergebnis?",
    answer: "Ja, wir geben eine Zufriedenheitsgarantie. Sollten Sie unzufrieden sein, bessern wir kostenfrei nach oder erstatten Ihr Geld."
  },
  {
    question: "Sind Ihre Reinigungsmittel nachhaltig?",
    answer: "Ja, wir verwenden ausschließlich umweltfreundliche und biologisch abbaubare Produkte."
  },
  {
    question: "Wie kurzfristig kann ich einen Termin erhalten?",
    answer: "Meist können wir innerhalb von ein bis zwei Werktagen einen passenden Termin anbieten."
  },
  {
    question: "Kann ich während der Reinigung anwesend sein?",
    answer: "Natürlich. Sie können während der Arbeit zu Hause bleiben – wir arbeiten sauber, diskret und respektvoll."
  },
  {
    question: "Was passiert, falls meine Polster bei der Reinigung Schaden nehmen?",
    answer: "Unsere Mitarbeiter sind geschult, Schäden zu vermeiden. Sollte dennoch etwas passieren, übernimmt unsere Versicherung die Kosten."
  },
  {
    question: "Reinigen Sie auch Autopolster?",
    answer: "Ja, wir bieten ebenfalls eine professionelle Polsterreinigung für Fahrzeuginnenräume an."
  },
  {
    question: "Mit welchem Verfahren reinigen Sie die Polster?",
    answer: "Hauptsächlich nutzen wir das Sprühextraktionsverfahren, bei dem Flüssigkeit und Schmutz gleichzeitig abgesaugt werden. Bei leichter Verschmutzung setzen wir auch Dampfreinigung ein."
  },
  {
    question: "Werden die Möbel abgeholt oder direkt vor Ort gereinigt?",
    answer: "Wir reinigen direkt bei Ihnen zuhause, sodass Sie Ihre Möbel sofort wieder nutzen können und keine Transportkosten entstehen."
  },
  {
    question: "Sind Ihre Reinigungsmittel für Tiere gefährlich?",
    answer: "Nein, unsere biologisch abbaubaren Produkte sind sowohl für Menschen als auch für Haustiere völlig unbedenklich."
  },
  {
    question: "Haben die Reinigungsmittel einen starken chemischen Geruch?",
    answer: "Nein, unsere Mittel sind geruchsneutral. Lediglich bei einer speziellen Geruchsneutralisation kann kurzzeitig ein leichter Desinfektionsgeruch entstehen."
  },
  {
    question: "Welche Vorbereitungen sollte ich vor der Reinigung treffen?",
    answer: "Bitte stellen Sie sicher, dass die Möbel frei zugänglich sind und keine Gegenstände darauf liegen. Zudem benötigen wir lediglich Zugang zu Wasser und Strom."
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header/>
        <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Häufige Fragen (FAQ)
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {item.answer || "Antwort wird hier noch ergänzt."}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  
  );
}
