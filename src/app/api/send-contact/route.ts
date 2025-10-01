import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Sende E-Mail über Resend
    await resend.emails.send({
      from: "CleanSeat <onboarding@resend.dev>", // oder deine eigene Domain bei Resend
      to: "cleanseat08@gmail.com",
      subject: "📩 Neue Kontaktanfrage",
      html: `
        <h2>Neue Nachricht von CleanSeat Kontaktformular</h2>
        <p><b>Anrede:</b> ${body.anrede || "-"}</p>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Telefon:</b> ${body.phone}</p>
        <p><b>PLZ:</b> ${body.zip}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Nachricht:</b><br/>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
