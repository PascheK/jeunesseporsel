"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Affiché à la place de la page fondue si une erreur inattendue survient.
const FondueError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error("Fondue page error:", error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-jeunesse-white px-4 py-24 text-center">
      <h1 className="h1">Soirée fondue</h1>
      <p className="max-w-xl text-lg">
        Oups, la page n&apos;a pas pu se charger correctement. Réessayez ou contactez-nous pour réserver vos places.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()}>Réessayer</Button>
        <Button variant="secondary" asChild>
          <Link href="/contact">Nous contacter</Link>
        </Button>
      </div>
    </section>
  );
};

export default FondueError;
