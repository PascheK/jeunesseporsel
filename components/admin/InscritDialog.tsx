"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AdminInscrit, AdminInscritInput } from "@/lib/admin/api";

const EMPTY: AdminInscritInput = { nom: "", prenom: "", mail: "", telephone: "", nbPlace: 1 };

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inscrit: AdminInscrit | null; // null = nouvelle inscription
  onSave: (values: AdminInscritInput) => Promise<void>;
}

const InscritDialog = ({ open, onOpenChange, inscrit, onSave }: Props) => {
  const [values, setValues] = useState<AdminInscritInput>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setValues(inscrit ? { ...inscrit } : EMPTY);
      setError(null);
    }
  }, [open, inscrit]);

  const set = (field: keyof AdminInscritInput) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [field]: field === "nbPlace" ? Number(e.target.value) : e.target.value }));

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
          <DialogTitle>{inscrit ? "Modifier l'inscription" : "Ajouter une inscription"}</DialogTitle>
          <DialogDescription>
            {inscrit
              ? "Les changements sont enregistrés sans envoyer d'e-mail à la personne."
              : "Pour une réservation reçue par message ou par téléphone. Aucun e-mail n'est envoyé."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input id="prenom" required maxLength={50} value={values.prenom} onChange={set("prenom")} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" required maxLength={50} value={values.nom} onChange={set("nom")} />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="mail">E-mail</Label>
            <Input id="mail" type="email" maxLength={255} value={values.mail} onChange={set("mail")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="telephone">Téléphone</Label>
            <Input id="telephone" type="tel" maxLength={20} value={values.telephone} onChange={set("telephone")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="nbPlace">Nombre de places *</Label>
            <Input id="nbPlace" type="number" required min={1} value={values.nbPlace} onChange={set("nbPlace")} />
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

export default InscritDialog;
