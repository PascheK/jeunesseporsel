import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidSessionToken } from "@/lib/admin/session";

// Relaie les requêtes du tableau de bord vers le backend en ajoutant la clé admin (jamais exposée au navigateur).
const ALLOWED_PATHS = /^(evenements(\/\d+(\/inscrits)?)?|inscrits\/\d+)$/;

type Context = { params: Promise<{ path: string[] }> };

async function proxy(request: NextRequest, { params }: Context): Promise<Response> {
  // Double vérification en plus du middleware.
  if (!(await isValidSessionToken((await cookies()).get(ADMIN_COOKIE)?.value))) {
    return NextResponse.json({ status: 401, message: "Non connecté" }, { status: 401 });
  }

  const path = (await params).path.join("/");
  if (!ALLOWED_PATHS.test(path)) {
    return NextResponse.json({ status: 404, message: "Route inconnue" }, { status: 404 });
  }

  try {
    const res = await fetch(`${process.env.URL}admin/${path}`, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Key": process.env.ADMIN_API_KEY ?? ""
      },
      body: ["POST", "PUT"].includes(request.method) ? await request.text() : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(10000)
    });
    const data = await res.json().catch(() => ({ message: `Erreur ${res.status}` }));
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.log("error :", e);
    return NextResponse.json({ status: 502, message: "Le serveur des inscriptions ne répond pas." }, { status: 502 });
  }
}

export { proxy as GET, proxy as POST, proxy as PUT, proxy as DELETE };
