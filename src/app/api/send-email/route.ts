import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cart = [], formData = {}, uploadedFiles = [], total = 0, rabatt = 0, finalTotal = 0 } = body;

    // 1) Erstelle attachments-Array für Resend
    const attachments = (uploadedFiles || []).map((f: any, i: number) => {
      // f.content kann entweder "data:...;base64,AAA..." oder schon reines Base64 sein.
      let content = f.content || "";
      const dataUrlMatch = typeof content === "string" && content.match(/^data:(.*);base64,(.*)$/);
      if (dataUrlMatch) {
        content = dataUrlMatch[2]; // reines Base64
      } else if (typeof content === "string" && content.startsWith("base64,")) {
        content = content.replace(/^base64,/, "");
      }
      const filename = f.filename || f.name || `attachment-${i}`;
      const content_type = f.content_type || (dataUrlMatch ? dataUrlMatch[1] : "application/octet-stream");
      const content_id = f.cid || `img-${i}@cleanseat`;

      return {
        filename,
        content, // Base64 string OK per Resend docs
        content_type,
        content_id,
      };
    });

    // 2) Services-HTML
    const servicesHtml =
      cart.length === 0
        ? "<p>Keine Services ausgewählt.</p>"
        : `<ul>${cart.map((it: any) => `<li>${it.qty}× ${it.title} – ${it.qty * it.price} €</li>`).join("")}</ul>`;

    // 3) Bilder-HTML (inline via cid)
    const imagesHtml =
      attachments.length === 0
        ? "<p>Keine Fotos hochgeladen.</p>"
        : attachments
            .map(
              (att: any) =>
                `<div style="margin:8px 0;"><img src="cid:${att.content_id}" alt="${att.filename}" style="max-width:320px;height:auto;border-radius:8px;"/></div>`
            )
            .join("");

    // 4) Rabattanzeige
    const rabattHtml =
      rabatt > 0
        ? `<p style="color:green;">Rabatt (10%): -${rabatt} €</p>`
        : `<p style="color:#b45309;">Kein Rabatt (unter 250 €)</p>`;

const emailHtml = `
  <div style="background:#eef2f7; padding:40px; font-family:'Segoe UI', Arial, sans-serif; line-height:1.6;">
    <div style="max-width:700px; margin:0 auto; background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 12px 32px rgba(0,0,0,0.12);">

      <!-- Header -->
      <div style="background:linear-gradient(135deg, #0077cc, #00aacc); padding:40px; text-align:center; color:white;">
        <h1 style="font-size:28px; margin:0; font-weight:800; letter-spacing:0.5px;">Neue Anfrage — CleanSeat</h1>
        <p style="margin-top:10px; font-size:15px; color:#e6f6ff;">Ihre professionelle Polster- & Matratzenreinigung</p>
      </div>

      <!-- Kundendaten -->
      <div style="padding:30px; border-bottom:1px solid #f0f0f0;">
        <h2 style="font-size:20px; color:#0077cc; margin:0 0 16px 0;">👤 Kundendaten</h2>
        <div style="background:#f9fbfd; padding:20px; border-radius:16px; box-shadow:inset 0 3px 12px rgba(0,0,0,0.05);">
          <p><strong>Anrede:</strong> ${formData.anrede || "-"}</p>
          <p><strong>Name:</strong> ${formData.name || "-"}</p>
          <p><strong>Email:</strong> ${formData.email || "-"}</p>
          <p><strong>Telefon:</strong> ${formData.phone || "-"}</p>
          <p><strong>PLZ:</strong> ${formData.zip || "-"}</p>
          <p><strong>Nachricht:</strong> ${formData.message || "-"}</p>
          <p><strong>Termin:</strong> ${formData.date || "-"}</p>
        </div>
      </div>

      <!-- Services -->
      <div style="padding:30px; border-bottom:1px solid #f0f0f0;">
        <h2 style="font-size:20px; color:#0077cc; margin:0 0 16px 0;">🛋️ Gewählte Services</h2>
        <div style="background:#fff8f2; padding:20px; border-radius:16px; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
          ${servicesHtml}
        </div>
      </div>

      <!-- Fotos -->
      <div style="padding:30px; border-bottom:1px solid #f0f0f0;">
        <h2 style="font-size:20px; color:#0077cc; margin:0 0 16px 0;">📷 Hochgeladene Fotos</h2>
        <div style="display:flex; flex-wrap:wrap; gap:16px;">
          ${imagesHtml}
        </div>
      </div>

      <!-- Kostenübersicht -->
      <div style="padding:30px;">
        <h2 style="font-size:20px; color:#0077cc; margin:0 0 16px 0;">💰 Kostenübersicht</h2>
        <div style="background:#f3fff6; padding:20px; border-radius:16px; box-shadow:inset 0 3px 12px rgba(0,0,0,0.05);">
          <p>Zwischensumme: <strong>${total} €</strong></p>
          ${rabattHtml}
          <p style="font-size:22px; font-weight:800; color:#0077cc; margin-top:15px;">
            Gesamt: ${finalTotal} €
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align:center; padding:40px;">
        <a href="https://cleanseat.de/confirm"
           style="display:inline-block; background:linear-gradient(135deg, #00aacc, #0077cc); color:white; padding:16px 34px; font-size:17px; font-weight:bold; border-radius:40px; text-decoration:none; box-shadow:0 6px 16px rgba(0,0,0,0.25);">
          ✅ Termin bestätigen
        </a>
      </div>

      <!-- Footer -->
      <div style="background:#f5f8fc; padding:20px; text-align:center; font-size:12px; color:#666;">
        <p>© ${new Date().getFullYear()} CleanSeat — Alle Rechte vorbehalten.</p>
      </div>

    </div>
  </div>
`;



    // 5) Absenden via Resend
    await resend.emails.send({
      from: "CleanSeat <onboarding@resend.dev>", // anpassen zu deiner Domain falls möglich
      to: [process.env.NOTIFY_EMAIL || "cleanseat08@gmail.com", formData.email || ""].filter(Boolean),
      subject: "Neue Anfrage über Formular — CleanSeat",
      html: emailHtml,
      attachments,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("send-email error:", error);
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
}
