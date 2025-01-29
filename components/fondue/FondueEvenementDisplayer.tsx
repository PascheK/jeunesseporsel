"use client";
import React, { useEffect, useState, createContext } from "react";
import Evenement from "@/components/fondue/Evenement";

// Définir le type des données du contexte
interface EventReloaderContextType {
  reloadEvents: boolean;
  setReloadEvents: (value: boolean) => void;
}
export const EventReloaderContext =  createContext<EventReloaderContextType | undefined>(undefined);

const FondueEvenementDisplayer = () => {
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(true);
  const [listEvents, setListEvents] = useState<Evenements[]>([]);
  const [reloadEvents, setReloadEvents] = useState<boolean>(false);
  useEffect(() => {
    fetch("api/evenements", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status != 500) {
          setIsDataEmpty(data.data.length === 0);
          setListEvents(data.data);
        }
      })
      .catch((error) => {
        setIsDataEmpty(true);
        console.error("Error fetching data:", error);
      });
      setReloadEvents(false);
  }, [reloadEvents]);

  return (
    <section className="fondue-section bg-jeunesse-white flex flex-col items-center justify-center">
      <h1 className=" h1 sm:ml-6">Réserver vos place !</h1>
      <EventReloaderContext.Provider value={{reloadEvents, setReloadEvents}}>
        {isDataEmpty ? (
          <div className="flex items-center justify-center">
            <p>data empty</p>
          </div>
        ) : (
          <>
            {listEvents.map((event: Evenements) => (
              <Evenement key={event.id} {...event} />
            ))}
          </>
        )}
      </EventReloaderContext.Provider>
    </section>
  );
};

export default FondueEvenementDisplayer;
