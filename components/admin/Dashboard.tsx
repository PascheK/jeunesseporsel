"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, LogOut, Pencil, Plus, RefreshCw, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import InscritDialog from "@/components/admin/InscritDialog";
import EvenementDialog from "@/components/admin/EvenementDialog";
import {
  adminFetch,
  monthLabel,
  type AdminEvenement,
  type AdminEvenementInput,
  type AdminInscrit,
  type AdminInscritInput
} from "@/lib/admin/api";

const errorMessage = (e: unknown) => (e instanceof Error ? e.message : "Erreur inconnue");

// Export compatible Excel (séparateur « ; », BOM UTF-8 pour les accents).
const downloadCsv = (evenement: AdminEvenement, inscrits: AdminInscrit[]) => {
  const escape = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
  const rows = [
    ["Nom", "Prénom", "E-mail", "Téléphone", "Places"],
    ...inscrits.map((i) => [i.nom, i.prenom, i.mail, i.telephone, i.nbPlace])
  ];
  const csv = "\uFEFF" + rows.map((r) => r.map(escape).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `inscriptions-${evenement.nom}-${evenement.jour}-${evenement.date}.csv`.replace(/\s+/g, "-").toLowerCase();
  a.click();
  URL.revokeObjectURL(url);
};

const Stat = ({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) => (
  <div className="rounded-lg border bg-white p-4 shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <p className={`text-xl font-bold md:text-2xl ${highlight ? "text-brand" : "text-gray-900"}`}>{value}</p>
  </div>
);

const Dashboard = () => {
  const [evenements, setEvenements] = useState<AdminEvenement[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [inscrits, setInscrits] = useState<AdminInscrit[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [inscritDialog, setInscritDialog] = useState<{ open: boolean; inscrit: AdminInscrit | null }>({ open: false, inscrit: null });
  const [evenementDialog, setEvenementDialog] = useState<{ open: boolean; evenement: AdminEvenement | null }>({ open: false, evenement: null });

  const selected = evenements.find((e) => e.id === selectedId) ?? null;
  const selectedIdRef = useRef(selectedId);
  selectedIdRef.current = selectedId;

  const loadEvenements = useCallback(async () => {
    const list = await adminFetch<AdminEvenement[]>("evenements");
    setEvenements(list);
    setSelectedId((current) => (current && list.some((e) => e.id === current) ? current : list.at(-1)?.id ?? null));
    return list;
  }, []);

  const loadInscrits = useCallback(async (evenementId: number) => {
    setInscrits(await adminFetch<AdminInscrit[]>(`evenements/${evenementId}/inscrits`));
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const list = await loadEvenements();
      const current = selectedIdRef.current;
      if (current !== null && list.some((e) => e.id === current)) await loadInscrits(current);
    } catch (e) {
      setLoadError(errorMessage(e));
    } finally {
      setLoading(false);
    }
  }, [loadEvenements, loadInscrits]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (selectedId === null) {
      setInscrits([]);
      return;
    }
    loadInscrits(selectedId).catch((e) => setLoadError(errorMessage(e)));
  }, [selectedId, loadInscrits]);

  // Recharge l'événement (places restantes) et la liste après chaque modification.
  const reloadAll = async () => {
    await loadEvenements();
    if (selectedId !== null) await loadInscrits(selectedId);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return inscrits;
    return inscrits.filter((i) =>
      [i.nom, i.prenom, i.mail, i.telephone].some((v) => v.toLowerCase().includes(q))
    );
  }, [inscrits, search]);

  const reserved = selected ? selected.nbPlace - selected.totalPlacesReserves : 0;
  const fillPercent = selected && selected.nbPlace > 0 ? Math.min(100, (reserved / selected.nbPlace) * 100) : 0;

  const saveInscrit = async (values: AdminInscritInput) => {
    if (inscritDialog.inscrit) {
      await adminFetch(`inscrits/${inscritDialog.inscrit.id}`, "PUT", values);
      toast({ title: "Inscription modifiée" });
    } else {
      await adminFetch(`evenements/${selectedId}/inscrits`, "POST", values);
      toast({ title: "Inscription ajoutée" });
    }
    await reloadAll();
  };

  const deleteInscrit = async (inscrit: AdminInscrit) => {
    if (!window.confirm(`Supprimer l'inscription de ${inscrit.prenom} ${inscrit.nom} (${inscrit.nbPlace} places) ?`)) return;
    try {
      await adminFetch(`inscrits/${inscrit.id}`, "DELETE");
      toast({ title: "Inscription supprimée" });
      await reloadAll();
    } catch (e) {
      toast({ title: "Suppression impossible", description: errorMessage(e), variant: "destructive" });
    }
  };

  const saveEvenement = async (values: AdminEvenementInput) => {
    if (evenementDialog.evenement) {
      await adminFetch(`evenements/${evenementDialog.evenement.id}`, "PUT", values);
      toast({ title: "Événement modifié" });
      await reloadAll();
    } else {
      const created = await adminFetch<AdminEvenement>("evenements", "POST", values);
      toast({ title: "Événement créé" });
      await loadEvenements();
      setSelectedId(created.id);
    }
  };

  const deleteEvenement = async (evenement: AdminEvenement) => {
    if (!window.confirm(`Supprimer l'événement « ${evenement.nom} » du ${evenement.jour} ${monthLabel(evenement.date)} ? Il ne sera plus affiché sur le site.`)) return;
    try {
      await adminFetch(`evenements/${evenement.id}`, "DELETE");
      toast({ title: "Événement supprimé" });
      setSelectedId(null);
      await loadEvenements();
    } catch (e) {
      toast({ title: "Suppression impossible", description: errorMessage(e), variant: "destructive" });
    }
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6">
      {/* En-tête */}
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-sm text-gray-500">Jeunesse de Porsel · Inscriptions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={refresh} disabled={loading}>
            <RefreshCw className={loading ? "animate-spin" : ""} /> Actualiser
          </Button>
          <Button variant="secondary" size="sm" onClick={logout}>
            <LogOut /> Déconnexion
          </Button>
        </div>
      </header>

      {loadError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {loadError}{" "}
          <button className="font-semibold underline" onClick={refresh}>
            Réessayer
          </button>
        </div>
      )}

      {/* Événements */}
      <section className="space-y-4 rounded-xl border bg-white p-4 shadow-sm md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {evenements.map((e) => (
              <button
                key={e.id}
                onClick={() => setSelectedId(e.id)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  e.id === selectedId ? "border-brand bg-brand text-white" : "bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                {e.nom} · {e.jour} {monthLabel(e.date)}
              </button>
            ))}
            {!loading && evenements.length === 0 && <p className="text-sm text-gray-500">Aucun événement pour le moment.</p>}
          </div>
          <Button size="sm" onClick={() => setEvenementDialog({ open: true, evenement: null })}>
            <Plus /> Nouvel événement
          </Button>
        </div>

        {selected && (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat label="Places réservées" value={`${reserved} / ${selected.nbPlace}`} highlight />
              <Stat label="Places restantes" value={selected.totalPlacesReserves} />
              <Stat label="Inscriptions" value={inscrits.length} />
              <Stat label="Date" value={`${selected.jour} ${monthLabel(selected.date)}`} />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
              <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${fillPercent}%` }} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" onClick={() => setEvenementDialog({ open: true, evenement: selected })}>
                <Pencil /> Modifier l&apos;événement
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => deleteEvenement(selected)}
                disabled={inscrits.length > 0}
                title={inscrits.length > 0 ? "Supprimez d'abord les inscriptions" : undefined}
              >
                <Trash2 /> Supprimer l&apos;événement
              </Button>
            </div>
          </>
        )}
      </section>

      {/* Inscriptions */}
      {selected && (
        <section className="space-y-4 rounded-xl border bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-gray-900">Inscriptions</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" onClick={() => downloadCsv(selected, inscrits)} disabled={inscrits.length === 0}>
                <Download /> Exporter (Excel)
              </Button>
              <Button size="sm" onClick={() => setInscritDialog({ open: true, inscrit: null })}>
                <Plus /> Ajouter
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher un nom, un e-mail, un téléphone…"
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-500">
              {inscrits.length === 0 ? "Personne ne s'est encore inscrit." : "Aucun résultat pour cette recherche."}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b text-xs uppercase text-gray-500">
                  <tr>
                    <th className="py-2 pr-3">Nom</th>
                    <th className="hidden py-2 pr-3 md:table-cell">Contact</th>
                    <th className="py-2 pr-3 text-right">Places</th>
                    <th className="py-2 text-right">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((i) => (
                    <tr key={i.id} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="py-3 pr-3">
                        <p className="font-medium text-gray-900">
                          {i.nom} {i.prenom}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden">{i.telephone || i.mail}</p>
                      </td>
                      <td className="hidden py-3 pr-3 md:table-cell">
                        {i.mail && (
                          <a href={`mailto:${i.mail}`} className="block text-gray-700 hover:underline">
                            {i.mail}
                          </a>
                        )}
                        {i.telephone && (
                          <a href={`tel:${i.telephone}`} className="block text-gray-500 hover:underline">
                            {i.telephone}
                          </a>
                        )}
                      </td>
                      <td className="py-3 pr-3 text-right text-base font-bold">{i.nbPlace}</td>
                      <td className="py-3 text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Modifier ${i.prenom} ${i.nom}`}
                            onClick={() => setInscritDialog({ open: true, inscrit: i })}
                          >
                            <Pencil />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Supprimer ${i.prenom} ${i.nom}`}
                            className="text-red-600 hover:text-red-700"
                            onClick={() => deleteInscrit(i)}
                          >
                            <Trash2 />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t font-bold">
                    <td className="pt-3" colSpan={1}>
                      Total {search && `(${filtered.length} affichées)`}
                    </td>
                    <td className="hidden md:table-cell" />
                    <td className="pr-3 pt-3 text-right">{filtered.reduce((sum, i) => sum + i.nbPlace, 0)}</td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </section>
      )}

      <InscritDialog
        open={inscritDialog.open}
        onOpenChange={(open) => setInscritDialog((d) => ({ ...d, open }))}
        inscrit={inscritDialog.inscrit}
        onSave={saveInscrit}
      />
      <EvenementDialog
        open={evenementDialog.open}
        onOpenChange={(open) => setEvenementDialog((d) => ({ ...d, open }))}
        evenement={evenementDialog.evenement}
        onSave={saveEvenement}
      />
    </div>
  );
};

export default Dashboard;
