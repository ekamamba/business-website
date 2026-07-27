import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { isRateLimited } from "@/lib/rateLimiter";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional(),
   website: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");

const ip = forwardedFor?.split(",")[0].trim() ?? "unknown";

    const body = await request.json();

    const data = contactSchema.parse(body);

    if (isRateLimited(ip)) {
  return NextResponse.json(
    {
      success: false,
      message: "Please wait 30 seconds before sending another message.",
    },
    {
      status: 429,
    }
  );
}

    if (data.website) {
  return NextResponse.json(
    {
      success: true,
      message: "Message received.",
    },
    {
      status: 200,
    }
  );
}

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "dmkitsolutions2005@gmail.com",
      subject: `New message from ${data.name}`,
      text: `
Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone ?? "Not provided"}

Message:

${data.message}
`,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}