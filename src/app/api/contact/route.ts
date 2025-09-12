import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "", company = "" } = await req.json();

    // Honeypot
    if (company) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio - New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Email failed" }, { status: 500 });
  }
}