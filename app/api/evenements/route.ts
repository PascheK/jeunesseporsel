import { getEvenements } from "@/lib/evenement.utils";

export async function GET(): Promise<Response> {
  try {
    const res = await getEvenements();
    if (res) return Response.json({ status: 200, data: res });
    return Response.json({ status: 500, message: "No data found" });
  } catch (e) {
    console.log("error :", e);
    return Response.json({ status: 500, error: e });
  }
}
