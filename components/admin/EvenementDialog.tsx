"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MONTHS, type AdminEvenement, type AdminEvenementInput } from "@/lib/admin/api";

const EMPTY: AdminEvenementInput = { nom: "Soirée fondue", date: "nov", jour: 1, nbPlace: 240, typeEvenement: 0 };

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  evenement: AdminEvenement | null; // null = nouvel événement
  onSave: (values: AdminEvenementInput) => Promise<void>;
}

const EvenementDialog = ({ open, onOpenChange, evenement, onSave }: Props) => {
  const [values, setValues] = useState<AdminEvenementInput>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setValues(
        evenement
          ? { nom: evenement.nom, date: evenement.date, jour: evenement.jour, nbPlace: evenement.nbPlace, typeEvenement: evenement.typeEvenement }
          : EMPTY
      );
      setError(null);
    }
  }, [open, evenement]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSave(values);
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{evenement ? "Modifier l'événement" : "Nouvel événement"}</DialogTitle>
          <DialogDescription>Ces informations sont affichées sur la page fondue du site.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="ev-nom">Nom *</Label>
            <Input
              id="ev-nom"
              required
              maxLength={50}
              value={values.nom}
              onChange={(e) => setValues((v) => ({ ...v, nom: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="ev-jour">Jour *</Label>
              <Input
                id="ev-jour"
                type="number"
                required
                min={1}
                max={31}
                value={values.jour}
                onChange={(e) => setValues((v) => ({ ...v, jour: Number(e.target.value) }))}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="ev-mois">Mois *</Label>
              <select
                id="ev-mois"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                value={values.date}
                onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
              >
                {MONTHS.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="ev-places">Nombre de places total *</Label>
            <Input
              id="ev-places"
              type="number"
              required
              min={1}
              value={values.nbPlace}
              onChange={(e) => setValues((v) => ({ ...v, nbPlace: Number(e.target.value) }))}
            />
          </div>
          {error && <p className="text-sm font-medium text-red-600">{error}</p>}
          <DialogFooter className="gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? "Enregistrement…" : "Enregistrer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EvenementDialog;
