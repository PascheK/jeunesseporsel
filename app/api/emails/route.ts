export const dynamic = 'force-static'

import { sendEmail } from "@/lib/mail.utils";

interface EmailData {
  email: string;
  subject: string;
  text: string;
}

interface ErrorResponse {
  error: string;
}

export async function POST(req: Request): Promise<Response> {
  const data: EmailData = await req.json();

  console.log(data);

  try {
    const result = await sendEmail({
      email: 'info@jeunessedeporsel.ch',
      subject: data.subject,
      text: data.text,
    });

    if (result) {
      return Response.json(result);
    } else {
      const errorResponse: ErrorResponse = { error: 'Failed to send email' };
      return Response.json(errorResponse, { status: 500 });
    }
  } catch (e) {
    if (e instanceof Error) {
      const errorResponse: ErrorResponse = { error: e.message };
      return Response.json(errorResponse, { status: 500 });
    } else {
      const errorResponse: ErrorResponse = { error: 'Unknown error' };
      return Response.json(errorResponse, { status: 500 });
    }
  }
}
