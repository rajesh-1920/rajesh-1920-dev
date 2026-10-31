import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateForm(data: ContactForm): string | null {
  const { name, email, subject, message } = data;
  if (!name || !email || !subject || !message) {
    return "All fields are required.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactForm;
    const error = validateForm(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    // Build mailto fallback payload so the frontend can open the user's email app
    const mailtoBody = `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}\n`;

    // Optional: send via SMTP if SMTP credentials are configured.
    // Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in Vercel env vars.
    const smtpConfigured =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (smtpConfigured) {
      try {
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          text: mailtoBody,
          html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
        });
      } catch (smtpError) {
        console.error("SMTP send failed:", smtpError);
        // Fall through to mailto fallback so the user still gets a success response.
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received.",
        mailto: `mailto:${process.env.CONTACT_TO_EMAIL || "you@example.com"}?subject=${encodeURIComponent(
          `[Portfolio] ${subject}`,
        )}&body=${encodeURIComponent(mailtoBody)}`,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
