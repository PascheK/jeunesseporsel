// Appels du tableau de bord vers /api/admin (côté navigateur).

export interface AdminEvenement {
  id: number;
  nom: string;
  date: string;
  jour: number;
  nbPlace: number;
  typeEvenement: number;
  // Nom hérité du backend : il s'agit des places RESTANTES.
  totalPlacesReserves: number;
}

export interface AdminInscrit {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  telephone: string;
  nbPlace: number;
}

export type AdminEvenementInput = Omit<AdminEvenement, "id" | "totalPlacesReserves">;
export type AdminInscritInput = Omit<AdminInscrit, "id">;

export const MONTHS = [
  { value: "jan", label: "Janvier" },
  { value: "fev", label: "Février" },
  { value: "mar", label: "Mars" },
  { value: "avr", label: "Avril" },
  { value: "mai", label: "Mai" },
  { value: "jun", label: "Juin" },
  { value: "jul", label: "Juillet" },
  { value: "aou", label: "Août" },
  { value: "sep", label: "Septembre" },
  { value: "oct", label: "Octobre" },
  { value: "nov", label: "Novembre" },
  { value: "dec", label: "Décembre" }
];

export const monthLabel = (value: string) =>
  MONTHS.find((m) => m.value === value.toLowerCase())?.label ?? value;

export async function adminFetch<T>(path: string, method = "GET", body?: unknown): Promise<T> {
  const res = await fetch(`/api/admin/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store"
  });
  if (res.status === 401) {
    window.location.href = "/admin/login";
    throw new Error("Session expirée, reconnectez-vous.");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || `Erreur ${res.status}`);
  return data.data as T;
}
