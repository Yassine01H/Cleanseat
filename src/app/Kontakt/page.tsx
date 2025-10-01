"use client";
import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    anrede: "",
    name: "",
    phone: "",
    zip: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Nachricht erfolgreich gesendet!");
        setFormData({
          anrede: "",
          name: "",
          phone: "",
          zip: "",
          email: "",
          message: "",
          privacy: false,
        });
      } else {
        alert("❌ Fehler beim Senden der Nachricht!");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Unerwarteter Fehler!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20 px-6">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 relative border border-gray-200">
          <h2 className="text-3xl font-extrabold text-center text-[#002b5c] mb-2 drop-shadow-sm">
            Kontaktformular
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Wir freuen uns auf Ihre Nachricht – schnell, unkompliziert und persönlich.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md 
                        focus:ring-2 focus:ring-[#002b5c] focus:border-[#002b5c] focus:outline-none transition"
            />

            {/* Telefon */}
            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md 
                        focus:ring-2 focus:ring-[#002b5c] focus:border-[#002b5c] focus:outline-none transition"
            />

            {/* Postleitzahl */}
            <input
              type="text"
              name="zip"
              placeholder="Ihre Postleitzahl"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md 
                        focus:ring-2 focus:ring-[#002b5c] focus:border-[#002b5c] focus:outline-none transition"
            />

            {/* E-Mail */}
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md 
                        focus:ring-2 focus:ring-[#002b5c] focus:border-[#002b5c] focus:outline-none transition"
            />

            {/* Nachricht */}
            <textarea
              name="message"
              placeholder="Ihre Nachricht"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md 
                        focus:ring-2 focus:ring-[#002b5c] focus:border-[#002b5c] focus:outline-none transition"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 accent-[#002b5c]"
                required
              />
              <span>
                Hiermit akzeptiere ich die{" "}
                <a href="#" className="text-[#002b5c] underline">
                  Datenschutzerklärung
                </a>{" "}
                *
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#002b5c] to-[#004080] text-white font-semibold 
                        rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl disabled:opacity-50"
            >
              {loading ? "⏳ Wird gesendet..." : "📤 Formular absenden"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
