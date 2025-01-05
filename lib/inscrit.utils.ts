'use server'
export const getInscrits = async () => {
  try{
    const res = await fetch('http://localhost:8080/api/inscrit/getInscrit', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res) {
      const data = await res.json();
      const listInscrit: Inscrit[] = [];
      data.data.map((inscrit: Inscrit) => {
        listInscrit.push(inscrit);
      });
      console.log('listInscrit :', listInscrit)
      return listInscrit;
    }
    return null;

  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
};