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

export const POSTInscrit = async (inscrit : Inscrit) => {
 
    if (!inscrit || Object.values(inscrit).some(value => value === null || value === '')) {
      throw new Error('Des champs n\'ont pas été remplis');
    }
     const res = await fetch(process.env.URL+'inscrit/addInscritToEvement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inscrit),
    })
    console.log('Backend | res :', res)
    console.log('====================================================================================================')
    if (res) {
      const data = await res.json();
      console.log('Backend | data :', data)
      console.log('====================================================================================================')
      if(data.status !== 200)
        throw new Error(data.message)

      return data;
    }else{
      throw new Error('Erreur lors de l\'ajout de l\'inscrit')
    }
};

export const generateCode = async (idInscrit: number) => {
  
  try{ 
  if (idInscrit === null) {
    throw new Error('Des champs n\'ont pas été remplis');
  }
  console.error("send to api")
  const res = await fetch(process.env.URL+'inscrit/generateOTPCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({idInscrit}),
  })
  console.error("finish")

  if (res) {
   
    console.error("res backend ",res)
    return res;
  }
  return null;
}catch(e){
  console.log('error :', e)
  return Response.json({status: 500, 'error': e});
}
}

export const PUTInscrit = async (inscritData: modifyInscrit) => {
  try{
    if (!inscritData || Object.values(inscritData).some(value => value === null || value === '')) {
      throw new Error('Des champs n\'ont pas été remplis');
    }
    const res = await fetch(process.env.URL+'inscrit/modifyNbPlaceForInscrit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inscritData),
    })
    if (res) {
      console.log(res)
      return null;
    }
    return null;

  }catch(e){
    console.log('error :', e)
    return Response.json({status: 500, 'error': e});
  }
}
