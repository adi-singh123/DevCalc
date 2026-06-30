// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, category, message } = await req.json();

    // ── Basic server-side validation ─────────────────────────────────────────
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    // ── Nodemailer transporter ───────────────────────────────────────────────
    // Uses Gmail — add these to your .env.local:
    //   GMAIL_USER=your@gmail.com
    //   GMAIL_PASS=your_app_password   ← NOT your Gmail login password
    //
    // How to get Gmail App Password:
    //   Google Account → Security → 2-Step Verification → App Passwords
    //   Select "Mail" + "Other" → copy the 16-char password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ── Email to YOU (DevCalc inbox) ─────────────────────────────────────────
    await transporter.sendMail({
      from: `"DevCalc Contact" <${process.env.GMAIL_USER}>`,
      to:   process.env.GMAIL_USER,       // you receive it
      replyTo: email,                     // reply goes directly to the user
      subject: `[${category}] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1e40af">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#64748b;width:120px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Email</td>
              <td style="padding:8px 0">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Category</td>
              <td style="padding:8px 0">${category}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;vertical-align:top">Message</td>
              <td style="padding:8px 0;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0"/>
          <p style="color:#94a3b8;font-size:12px">
            Sent from devcalc.in contact form
          </p>
        </div>
      `,
    });

    // ── Auto-reply to the USER ───────────────────────────────────────────────
    await transporter.sendMail({
      from: `"DevCalc" <${process.env.GMAIL_USER}>`,
      to:   email,
      subject: "We received your message — DevCalc",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1e40af">Thanks for reaching out, ${name}!</h2>
          <p style="color:#475569">
            We received your message and will get back to you within
            <strong>24–48 hours</strong>.
          </p>
          <div style="background:#f8fafc;border-radius:12px;padding:16px;margin:20px 0">
            <p style="margin:0;color:#64748b;font-size:14px">Your message:</p>
            <p style="margin:8px 0 0;white-space:pre-wrap;color:#1e293b">
              ${message}
            </p>
          </div>
          <p style="color:#475569">
            In the meantime, explore our
            <a href="https://www.devcalc.in/calculators" style="color:#1e40af">
              100+ free calculators
            </a>.
          </p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0"/>
          <p style="color:#94a3b8;font-size:12px">
            DevCalc · Free Online Calculators · devcalc.in
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}