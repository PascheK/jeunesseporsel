import { getEvenements } from "@/lib/evenement.utils";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  try {
    const res = await getEvenements();
    if (res) return Response.json({ status: 200, data: res });
    return Response.json({ status: 500, message: "No data found" }, { status: 500 });
  } catch (e) {
    console.log("error :", e);
    return Response.json({ status: 500, message: "Internal error" }, { status: 500 });
  }
}
