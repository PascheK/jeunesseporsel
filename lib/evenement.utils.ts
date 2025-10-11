'use server'
export const getEvenements = async () => {
  try{
    console.log("Env var: "+process.env.URL)
    const res = await fetch(process.env.URL+'evenement/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res) {
      const data = await res.json();
      if(!data.data){
        return null;
      }
      const listInscrit: Inscrit[] = [];
      data.data.map((inscrit: Inscrit) => {
        listInscrit.push(inscrit);
      });
      return listInscrit;
    }
    return null;

  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
};