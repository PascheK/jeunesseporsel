import { getInscrits } from "@/lib/inscrit.utils";

export async function GET(): Promise<Response> {
  try{
    const res = await getInscrits();
    if (res) console.log('res :', res)
      return Response.json({status: 200, 'data': res});

  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
  
}

export async function POST(request: Request): Promise<Response> {
  try{
    const data = await request.json();
    
    console.log('body :', data);
    return Response.json({status: 200, 'data': data});
  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
  
}