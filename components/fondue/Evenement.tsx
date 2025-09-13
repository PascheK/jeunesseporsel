"use client";
import React, { useState, createContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

import FormInscription from "@/components/forms/FormInscription";
import FormModification from "@/components/forms/FormModification";


interface EventDialogContextType {
  isEventDialogOpen: boolean;
  setIsEventDialogOpen: (value: boolean) => void;
}
export const EventDialogContext = createContext<
  EventDialogContextType | undefined
>(undefined);

const Evenement = (evenement: Evenements) => {
  const [menu, setMenu] = useState("inscrition");
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);

  const { nom, date, jour, totalPlacesReserves } = evenement;

  return (
    <EventDialogContext.Provider
      value={{ isEventDialogOpen, setIsEventDialogOpen }}
    >
      <div className="container w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-4 px-2">
        {/* Date */}
        <div className="bg-jeunesse text-jeunesse-white flex flex-row md:flex-col items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none p-4 text-center font-bold uppercase shadow-md min-w-[110px] w-full md:w-auto mb-2 md:mb-0">
          <div className="flex-1">
            <p className="text-lg md:text-xl tracking-widest">{jour}</p>
            <p className="text-base md:text-lg font-semibold">{date}</p>
          </div>
        </div>
        {/* Infos event + bouton */}
        <div className="border-jeunesse flex flex-col md:flex-row h-auto w-full items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-bl-none border-2 border-solid bg-gray-100 p-4 shadow-md gap-4 md:gap-0">
          <h2 className="text-lg md:text-xl font-bold text-center md:text-left flex-1">{nom}</h2>
          <div className="flex flex-col md:items-end items-center gap-2">
            <p className="font-bold text-brand-100 text-base md:text-lg">{totalPlacesReserves} places</p>
            <Dialog
              open={isEventDialogOpen}
              onOpenChange={setIsEventDialogOpen}
            >
              <DialogTrigger className="bg-jeunesse text-jeunesse-white rounded-full px-5 py-2 font-semibold shadow transition hover:bg-jeunesse/90 focus:outline-none focus:ring-2 focus:ring-brand-100">
                Réserver
              </DialogTrigger>
              <DialogContent className="max-w-lg w-full">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Inscription</DialogTitle>
                  <DialogDescription>
                    Si vous vous êtes déjà inscrit, vous pouvez rajouter des places via le code reçu par mail.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <div className="mb-4 flex flex-row justify-center gap-6 rounded-sm border-b-2 border-solid border-gray-200">
                    <button
                      type="button"
                      onClick={() => setMenu('inscrition')}
                      className={cn(
                        "pb-2 px-2 text-base font-medium transition border-b-2 border-transparent focus:outline-none",
                        menu === 'inscrition' ? "text-brand-100 border-brand-100" : "text-gray-500 hover:text-brand-100"
                      )}
                    >
                      Première inscription
                    </button>
                    <button
                      type="button"
                      onClick={() => setMenu('reinscription')}
                      className={cn(
                        "pb-2 px-2 text-base font-medium transition border-b-2 border-transparent focus:outline-none",
                        menu === 'reinscription' ? "text-brand-100 border-brand-100" : "text-gray-500 hover:text-brand-100"
                      )}
                    >
                      Déjà inscrit ?
                    </button>
                  </div>
                  <Separator />
                  <div
                    className={cn(
                      "transition-all duration-500 w-full",
                      menu === "inscrition" ? "max-h-[480px]" : "max-h-[300px]"
                    )}
                  >
                    {menu === "inscrition" ? (
                      <FormInscription nbPlace={totalPlacesReserves} idEvent={evenement.id} />
                    ) : (
                      <FormModification nbPlace={totalPlacesReserves} />
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </EventDialogContext.Provider>
  );
};

export default Evenement;
