"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Upload, Plus, Minus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
// --- Kategorien ---
const categories = [
  {
    title: "Polsterreinigung Preise",
    services: [
      { id: 1, title: "Kissen", price: 10, icon: "/Kissen.png" },
      { id: 2, title: "Stuhl", price: 15, icon: "/Stuhl.png" },
      { id: 3, title: "Bürostuhl", price: 20, icon: "/Bürostuhl.png" },
      { id: 4, title: "Sessel", price: 50, icon: "/sessel.png" },
      { id: 5, title: "Sofa (2-Sitzer)", price: 90, icon: "/sofa 2 sitzer.png" },
      { id: 6, title: "Sofa (3-Sitzer)", price: 120, icon: "/sofa 3 sitzer.png" },
      { id: 7, title: "Autositz (5 Sitze)", price: 150, icon: "/Autositze (5 Sitze).png" },
      { id: 8, title: "Eckcouch klein", price: 180, icon: "/Eckcouch klein.png" },
      { id: 9, title: "Eckcouch groß", price: 230, icon: "/Eckcouch groß.png" },
    ],
  },
  {
    title: "Matratzenreinigung Preise",
    services: [
      { id: 11, title: "Einzelmatratze", price: 60, icon: "/grosse-matratze (1).png" },
      { id: 12, title: "Doppelmatratze", price: 100, icon: "/doppelbett.png" },
    ],
  },
];

export default function CleaningWizard() {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<{ id: number; title: string; price: number; qty: number; icon: string }[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    anrede: "",
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // --- Validation ---
  const isStep1Valid = cart.length > 0;
  const isStep3Valid =
    formData.anrede !== "" &&
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.zip.trim() !== "";

  // --- Warenkorb Funktionen ---
  const addToCart = (service: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...service, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeAllFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Upload ---
const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return; // Abbrechen falls null

  setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
};

  // --- Form ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // --- Preise ---
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const rabatt = total >= 250 ? Math.round(total * 0.1) : 0;
  const finalTotal = total - rabatt;

  // --- Navigation ---
  const handleNext = () => {
    if (step === 1 && !isStep1Valid) {
      alert("⚠️ Bitte wählen Sie zuerst mindestens einen Service aus!");
      return;
    }
    if (step === 3 && !isStep3Valid) {
      alert("⚠️ Bitte füllen Sie alle Pflichtfelder (Anrede, Name, E-Mail, Telefon, PLZ) aus!");
      return;
    }
    setStep(step + 1);
  };

  // Heute + 1 Tag
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

// innerhalb deiner Komponente (React) — ersetze die alte handleSubmit
const fileToDataURL = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1) konvertiere alle Uploads in Data-URLs
    const filesData = await Promise.all(
      uploadedFiles.map(async (file, idx) => {
        const dataUrl = await fileToDataURL(file); // z.B. "data:image/png;base64,iVBORw0..."
        return {
          filename: file.name,
          content: dataUrl, // komplette Data-URL, der Server kann prefix entfernen
          content_type: file.type || "application/octet-stream",
          cid: `img-${Date.now()}-${idx}@cleanseat`, // eindeutige content_id für inline img
        };
      })
    );

    // 2) sende Request an API-Route
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart,
        formData,
        uploadedFiles: filesData,
        total,
        rabatt,
        finalTotal,
      }),
    });

    if (res.ok) {
      // 🚀 Direkt weiterleiten
      router.push("/success");

      // 🔹 Aufräumen im Hintergrund (stört Navigation nicht)
      setStep(1);
      setCart([]);
      setUploadedFiles([]);
      setFormData({
        anrede: "",
        name: "",
        email: "",
        phone: "",
        zip: "",
        message: "",
        date: "",
      });
    } else {
      const err = await res.text();
      console.error("Send failed:", err);
      alert("❌ Fehler beim Senden der Anfrage!");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Unerwarteter Fehler!");
  } finally {
    setLoading(false);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
    
    >
    <section className="relative max-w-7xl mx-auto my-12 px-4 grid md:grid-cols-[2fr_1fr] gap-8">
      {/* LEFT */}

     <div
  className={`w-full bg-white shadow-lg rounded-2xl 
              p-4 sm:p-6 md:p-10 border border-slate-200 
              ${cart.length > 0 ? "mt-48" : "mt-4"} md:mt-0`}
>
  

        {/* Fortschritt */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-10 shadow-inner">
          <div
            className={`h-2 rounded-full transition-all duration-500 ease-out shadow-lg ${
              step === 1 ? "w-1/5" :
              step === 2 ? "w-2/5" :
              step === 3 ? "w-3/5" :
              step === 4 ? "w-4/5" :
              "w-full"
            } bg-gradient-to-r from-[#0055aa] to-[#0077cc]`}
          />
        </div>

        {/* Step 1 - Services */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-extrabold text-center text-slate-900">
              🛋️ Services auswählen
            </h2>
            <p className="text-center text-slate-500 mt-2 mb-8 text-sm">
              Wählen Sie Ihre gewünschten Services aus
            </p>
            {categories.map((category, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-lg font-semibold text-[#0055aa] mb-4 text-center uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.services.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 flex flex-col items-center border border-slate-200 hover:border-[#0055aa]/50 transition-all"
                    >
                      <Image src={item.icon} alt={item.title} width={45} height={45} className="mb-2" />
                      <span className="font-medium text-sm text-slate-800 text-center">{item.title}</span>
                      <span className="text-xs text-slate-500">{item.price} €</span>
                      <div className="flex gap-2 mt-3">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                        >
                          <Minus size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0055aa] hover:bg-[#004080] text-white shadow-md"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2 - Fotos */}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">📷 Polsterfotos hochladen</h2>
            <p className="text-slate-500 mb-6 text-sm">Optional – hilft uns, den Termin besser einzuschätzen.</p>
            <label className="cursor-pointer flex flex-col items-center justify-center w-full p-10 border-2 border-dashed rounded-2xl bg-slate-50 hover:bg-slate-100 transition">
              <Upload size={40} className="text-[#0055aa] mb-3" />
              <span className="text-slate-700 font-medium">Dateien hier ablegen oder klicken</span>
              <input type="file" multiple className="hidden" onChange={handleFileUpload} />
            </label>
            {uploadedFiles.length > 0 && (
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {uploadedFiles.map((file, idx) => (
                  <li key={idx} className="bg-white shadow rounded-lg p-2">{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Step 3 - Persönliche Daten */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-extrabold text-center text-slate-900 mb-6">👤 Persönliche Daten</h2>
            <div className="flex justify-center gap-6 mb-8 text-sm text-gray-700">
              {["Herr", "Frau", "Divers", "Firma"].map((label) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer hover:text-[#0055aa] transition">
                  <input
                    type="radio"
                    name="anrede"
                    value={label}
                    checked={formData.anrede === label}
                    onChange={handleChange}
                    className="accent-[#0055aa]"
                  />{" "}
                  {label}
                </label>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" name="name" placeholder="Vollständiger Name" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="email" name="email" placeholder="E-Mail" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Telefonnummer" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="text" name="zip" placeholder="PLZ" className="border rounded-lg p-3 w-full" onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Ihre Nachricht (optional)" className="border rounded-lg p-3 w-full mt-6" onChange={handleChange} />
          </div>
        )}

        {/* Step 4 - Termin */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-extrabold text-center text-slate-900 mb-6">📅 Termin buchen</h2>
            <div className="flex flex-col">
              <label className="text-sm text-slate-700 mb-2">Datum auswählen</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate}
                className="border rounded-lg p-3 w-full shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Step 5 – Übersicht */}
        {step === 5 && (
          <div>
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-10">Übersicht Ihrer Angaben</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Services */}
              <div className="p-5 rounded-2xl bg-white shadow-lg border border-slate-100">
                <h3 className="text-lg font-bold text-[#0055aa] mb-3">🛋️ Services</h3>
                {cart.length === 0 ? (
                  <p className="text-sm text-slate-500">Keine Services ausgewählt.</p>
                ) : (
                  <ul className="text-sm space-y-2">
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg">
                        <span>{item.qty}× {item.title}</span>
                        <span className="font-semibold">{item.qty * item.price} €</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Fotos */}
              <div className="p-5 rounded-2xl bg-white shadow-lg border border-slate-100">
                <h3 className="text-lg font-bold text-[#0055aa] mb-3">📷 Hochgeladene Fotos</h3>
                {uploadedFiles.length === 0 ? (
                  <p className="text-sm text-slate-500">Keine Fotos hochgeladen.</p>
                ) : (
                  <div className="flex gap-3 flex-wrap">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="w-20 h-20 rounded-xl overflow-hidden border shadow-md">
                        <Image src={URL.createObjectURL(file)} alt={`Upload ${idx + 1}`} width={80} height={80} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Persönliche Daten */}
              <div className="p-5 rounded-2xl bg-white shadow-lg border border-slate-100 md:col-span-2">
                <h3 className="text-lg font-bold text-[#0055aa] mb-3">👤 Persönliche Daten</h3>
                <ul className="grid sm:grid-cols-2 gap-y-2 text-sm">
                  <li><strong>Anrede:</strong> {formData.anrede || "-"}</li>
                  <li><strong>Name:</strong> {formData.name || "-"}</li>
                  <li><strong>Email:</strong> {formData.email || "-"}</li>
                  <li><strong>Telefon:</strong> {formData.phone || "-"}</li>
                  <li><strong>PLZ:</strong> {formData.zip || "-"}</li>
                  <li><strong>Nachricht:</strong> {formData.message || "-"}</li>
                </ul>
              </div>
              {/* Termin */}
              <div className="p-5 rounded-2xl bg-white shadow-lg border border-slate-100 md:col-span-2">
                <h3 className="text-lg font-bold text-[#0055aa] mb-3">📅 Termin</h3>
                <p className="text-sm"><strong>Datum:</strong> {formData.date || "-"}</p>
              </div>
            </div>
          </div>
        )}

{/* Navigation */}
<div className="flex items-center justify-between mt-8">
  {step > 1 ? (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-medium shadow-md"
    >
      <ArrowLeft size={16} /> Zurück
    </button>
  ) : (
    <div />
  )}
{step < 5 ? (
  <button
    type="button"
    onClick={handleNext}
    disabled={
      (step === 1 && !isStep1Valid) || (step === 3 && !isStep3Valid)
    } // 🔹 Button deaktiviert falls ungültig
    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold shadow-lg
      ${(step === 1 && !isStep1Valid) || (step === 3 && !isStep3Valid)
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-gradient-to-r from-[#0055aa] to-[#0077cc] hover:opacity-90 text-white"}`}
  >
    Weiter <ArrowRight size={16} />
  </button>
) : (
  <button
    type="button" // ⬅️ kein submit mehr!
    onClick={handleSubmit} // ⬅️ handleSubmit nur beim Klick
    disabled={loading}
    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg"
  >
    {loading ? "Senden..." : "Anfrage absenden ✅"}
  </button>
)}

</div>


      </div>
  
{/* Desktop Sidebar (rechts) */}
{cart.length > 0 && (
  <aside className="hidden md:block bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sticky top-24 h-fit">
    <h3 className="text-lg font-bold text-slate-900 mb-4">🛒 Ihre Auswahl</h3>
      <p className="text-xs text-green-600 mb-4">✅ 10% Rabatt ab 250 €</p>
<ul className="space-y-3">
  {cart.map((item) => (
    <li
      key={item.id}
      className="flex items-center justify-between bg-slate-50 rounded-xl p-3 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <Image src={item.icon} alt={item.title} width={30} height={30} />
        <div>
          <p className="text-sm font-semibold text-slate-800">{item.title}</p>
          <p className="text-xs text-slate-500">{item.qty} × {item.price} €</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
        >
          <Minus size={14} />
        </button>
        <span className="font-bold w-6 text-center">{item.qty}</span>
        <button
          type="button"
          onClick={() => addToCart(item)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0055aa] hover:bg-[#004080] text-white"
        >
          <Plus size={14} />
        </button>
        <button
          type="button"
          onClick={() => removeAllFromCart(item.id)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600"
        >
          <Trash size={14} />
        </button>
      </div>
    </li>
  ))}
</ul>

    <div className="border-t border-slate-200 mt-4 pt-4 space-y-2">
      <p className="flex justify-between font-bold text-slate-900">
        Zwischensumme <span>{total} €</span>
      </p>
      {rabatt > 0 && (
        <p className="flex justify-between text-green-600 font-medium">
          Rabatt (10%) <span>-{rabatt} €</span>
        </p>
      )}
      <p className="flex justify-between font-bold text-lg text-slate-900">
        Gesamt <span>{finalTotal} €</span>
      </p>
    </div>
  </aside>
)}

{/* Mobile Fixed Auswahl-Bar */}
{cart.length > 0 && (
  <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-2xl border-b border-slate-200 md:hidden rounded-b-3xl">
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
      <div className="flex flex-col">
        <span className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          🛒 Ihre Auswahl
          <span className="text-xs font-medium text-slate-500">
            ({cart.reduce((sum, item) => sum + item.qty, 0)} Artikel)
          </span>
        </span>
        <span className="text-xs font-semibold text-green-600 mt-1">
          ✅ 10% Rabatt ab 250 €
        </span>
      </div>
    </div>

    {/* Details */}
    <div className="max-h-52 overflow-y-auto px-4 py-3 space-y-3">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow-md rounded-2xl px-4 py-3 border border-slate-100 hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3">
            <Image
              src={item.icon}
              alt={item.title}
              width={32}
              height={32}
              className="rounded-lg shadow-sm"
            />
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-500">{item.qty} × {item.price} €</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Minus */}
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 shadow-inner"
            >
              <Minus size={14} />
            </button>

            <span className="font-bold text-slate-900 min-w-[40px] text-center">
              {item.qty * item.price} €
            </span>

            {/* Plus */}
            <button
              type="button"
              onClick={() => addToCart(item)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0055aa] hover:bg-[#004080] text-white shadow-md"
            >
              <Plus size={14} />
            </button>

            {/* Entfernen */}
            <button
              type="button"
              onClick={() => removeAllFromCart(item.id)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 shadow-md"
            >
              <Trash size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Footer mit Rabatt */}
    <div className="border-t border-slate-200 px-5 py-4 bg-gradient-to-r from-slate-50 to-white rounded-b-3xl shadow-inner">
      <div className="flex justify-between mb-1 text-sm">
        <span className="text-slate-600">Zwischensumme</span>
        <span className="font-medium text-slate-800">{total} €</span>
      </div>
      {rabatt > 0 && (
        <div className="flex justify-between text-green-600 font-semibold mb-1 text-sm">
          <span>Rabatt (10%)</span>
          <span>-{rabatt} €</span>
        </div>
      )}
      <div className="flex justify-between font-bold text-lg text-slate-900">
        <span>Gesamt</span>
        <span>{finalTotal} €</span>
      </div>
    </div>
  </div>
)}


    </section>
    </form>
  );
}
