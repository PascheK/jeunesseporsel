import { NextResponse } from "next/server";
import { ADMIN_COOKIE, SESSION_DURATION_S, createSessionToken, safeEqual } from "@/lib/admin/session";

export async function POST(request: Request): Promise<Response> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json({ message: "Le tableau de bord n'est pas configuré." }, { status: 500 });
  }

  const { password } = await request.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !(await safeEqual(password, expected))) {
    // Ralentit les essais de mot de passe en série.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json({ message: "Mot de passe incorrect." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Connecté" });
  response.cookies.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_DURATION_S
  });
  return response;
}

export async function DELETE(): Promise<Response> {
  const response = NextResponse.json({ message: "Déconnecté" });
  response.cookies.delete(ADMIN_COOKIE);
  return response;
}
