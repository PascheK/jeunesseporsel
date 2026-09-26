"use client";
import React, { useEffect, useState, createContext } from "react";
import Link from "next/link";
import Evenement from "@/components/fondue/Evenement";
import { Button } from "@/components/ui/button";

// Définir le type des données du contexte
interface EventReloaderContextType {
  reloadEvents: boolean;
  setReloadEvents: (value: boolean) => void;
}
export const EventReloaderContext = createContext<EventReloaderContextType | undefined>(undefined);

type LoadStatus = "loading" | "error" | "ready";

const FondueEvenementDisplayer = () => {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [listEvents, setListEvents] = useState<Evenements[]>([]);
  const [reloadEvents, setReloadEvents] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/evenements", {
      method: "GET",
      cache: "no-store"
    })
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) return;
        if (data?.status === 200 && Array.isArray(data.data)) {
          setListEvents(data.data);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("Error fetching data:", error);
        setStatus("error");
      });
    setReloadEvents(false);
    return () => {
      cancelled = true;
    };
  }, [reloadEvents, retryCount]);

  const retry = () => {
    setStatus("loading");
    setRetryCount((count) => count + 1);
  };

  return (
    <section className="fondue-section bg-jeunesse-white flex flex-col items-center justify-center">
      <h1 className=" h1 sm:ml-6">Réserver vos place !</h1>
      <EventReloaderContext.Provider value={{ reloadEvents, setReloadEvents }}>
        {status === "loading" && (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-jeunesse-orange"></div>
          </div>
        )}
        {status === "error" && (
          <div className="flex flex-col items-center gap-4 p-6 text-center max-w-xl">
            <p className="text-lg">
              Les réservations en ligne sont momentanément indisponibles.
            </p>
            <p className="text-gray-600">
              Vous pouvez réessayer dans quelques instants ou nous contacter directement pour réserver vos places.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={retry}>Réessayer</Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        )}
        {status === "ready" && listEvents.length === 0 && (
          <p className="p-6 text-center text-lg">
            Aucune date n&apos;est ouverte à la réservation pour le moment. Revenez bientôt !
          </p>
        )}
        {status === "ready" &&
          listEvents.map((event: Evenements) => (
            <Evenement key={event.id} {...event} />
          ))}
      </EventReloaderContext.Provider>
    </section>
  );
};

export default FondueEvenementDisplayer;
