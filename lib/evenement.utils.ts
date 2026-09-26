'use server'
// Retourne la liste des événements, ou null si le backend est injoignable / répond mal.
export const getEvenements = async (): Promise<Evenements[] | null> => {
  try {
    const res = await fetch(process.env.URL + 'evenement/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) {
      console.log('error : backend responded', res.status)
      return null;
    }
    const data = await res.json();
    if (!Array.isArray(data?.data)) {
      return null;
    }
    return data.data as Evenements[];
  } catch (e) {
    console.log('error :', e)
    return null;
  }
};
