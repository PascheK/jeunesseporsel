import { getInscrits } from "@/lib/inscrit.utils";

export async function GET(): Promise<Response> {
  console.log('GET /api/inscrits')
  try{
    const res = await getInscrits();
    if (res) console.log('res :', res)
      return Response.json({status: 200, 'data': res});

  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
  
}