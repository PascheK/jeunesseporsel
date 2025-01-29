import {
  generateCode,
  getInscrits,
  POSTInscrit,
  PUTInscrit
} from "@/lib/inscrit.utils";

export async function GET(): Promise<Response> {
  try {
    const res = await getInscrits();
    if (res) console.log("res :", res);
    return Response.json({ status: 200, data: res });
  } catch (e) {
    console.log("error :", e);
    return Response.json({ status: 500, error: e });
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    switch (data.method) {
      case "addInscrit":
        const inscrit: Inscrit = {
          id: 0,
          eventId: data.idEvent,
          nom: data.nom,
          prenom: data.prenom,
          mail: data.mail,
          nbPlace: data.nbPlace,
          telephone: data.telephone
        };
        const res1 = await POSTInscrit(inscrit);
        console.log("res1 :", res1);
        return Response.json({ status: 200, data });
      case "generateCode":
        const res2 = await generateCode(data.idInscrit);
        console.log("res :", res2);
        if (res2) console.log("res :", res2);
        return Response.json({ status: 200, data });
      default:
        return Response.json({ status: 500, error: "method not found" });
    }
  } catch (e) {
    console.log("error :", e);
    return Response.json({ status: 500, error: e });
  }
}

export async function PUT(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    switch (data.method) {
      case "modifiyInscrit":
        const inscritData: modifyInscrit = {
          inscritId: data.inscritId,
          codeOTP: data.codeOTP,
          nbPlace: data.nbPlace
        };
        console.log("inscritData 324234 :", inscritData);
        const res1 = await PUTInscrit(inscritData);
        if (res1) console.log("res :", res1);
        return Response.json({ status: 200, data });

      default:
        return Response.json({ status: 500, error: "method not found" });
    }
  } catch (e) {
    console.log("error :", e);
    return Response.json({ status: 500, error: e });
  }
}
