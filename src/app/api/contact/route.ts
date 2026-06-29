import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 * Receives { name, email, message } from the contact form and
 * forwards a rich Discord embed to the webhook configured in .env.local
 */

const WEBHOOK_URL = process.env.DC_WEBHOOK_URL;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Guard: webhook not configured
    if (!WEBHOOK_URL) {
      console.error("DC_WEBHOOK_URL is not set in .env.local");
      return NextResponse.json(
        { error: "Webhook not configured on the server." },
        { status: 500 }
      );
    }

    // Build Discord embed
    const embed = {
      title: "📬 New Contact Message",
      description: message,
      color: 0x7c5cff, // accent purple
      fields: [
        {
          name: "👤 Name",
          value: name,
          inline: true,
        },
        {
          name: "📧 Email",
          value: email,
          inline: true,
        },
      ],
      footer: {
        text: "MHK Portfolio · Contact Form",
      },
      timestamp: new Date().toISOString(),
    };

    const webhookPayload = {
      username: "MHK Portfolio Bot",
      avatar_url: "https://img.icons8.com/fluency/96/bot.png",
      embeds: [embed],
    };

    // Send to Discord
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        "Discord webhook failed:",
        response.status,
        errorBody
      );
      return NextResponse.json(
        { error: "Failed to send notification." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
