export const dynamic = 'force-static'

import { sendEmail } from "@/lib/mail.utils";

interface EmailData {
  email: string;
  sendTo: string[];
  subject: string;
  text: string;
}

interface ErrorResponse {
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  const data: EmailData = await req.json();

  try {
    const result = await sendEmail({
      email: 'info@jeunessedeporsel.ch',
      sendTo: ['info@jeunessedeporsel.ch', data.email],
      subject: data.subject,
      text: data.text,
    });

    if (result?.messageId) {
      return Response.json({accepted: result.accepted, status: 200 });
    } else {
      const errorResponse: ErrorResponse = { message: 'Failed to send email' };
      return Response.json({errorResponse,  status: 500 });
    }
  } catch (e) {
    if (e instanceof Error) {
      const errorResponse: ErrorResponse = { message: e.message };
      return Response.json({errorResponse,  status: 500 });
    } else {
      const errorResponse: ErrorResponse = { message: 'Unknown error' };
      return Response.json({errorResponse,  status: 500 });
    }
  }
}
