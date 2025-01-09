"use client";
import React, { useEffect, useState } from "react";
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

import FormInscription from "./FormInscription";
import FormModification from "./FormModification";




const Evenement = (evenement: Evenements) => {
  const [menu, setMenu] = useState("inscrition");
  const { nom, date, jour, nbPlace } = evenement;
  useEffect(() => {
    console.log(menu);
  }, [menu]); 

  return (
    <div className="container flex flex-row items-center justify-between ">
      <div className="bg-jeunesse text-jeunesse-white py-auto flex h-[100px] flex-col items-center justify-center rounded-l-lg p-4 text-center font-bold uppercase shadow-md">
        <p>{jour}</p>
        <p>{date}</p>
      </div>
      <div className="border-jeunesse flex h-[100px] w-full flex-row items-center justify-between rounded-r-lg border-2 border-solid bg-gray-100 p-4 shadow-md">
        <h2 className="text-lg font-bold">{nom}</h2>
        <div>
          <p className="font-bold">{nbPlace} places</p>
          <Dialog >
            <DialogTrigger className="bg-jeunesse text-jeunesse-white rounded-lg p-2">
              Réserver
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Inscription</DialogTitle>
                <DialogDescription>
                  Si vous vous êtes déjà inscrit vous pouvez rajouter des places
                  via le code reçu par mail.
                </DialogDescription>
              </DialogHeader>
              <div>
                <div className="mb-4 flex flex-row justify-around gap-4 rounded-sm border-b-2 border-solid border-gray-300">
                  <p
                    onClick={() => setMenu("inscrition")}
                    className={cn(
                      "",
                      menu === "inscrition" && "text-brand-100"
                    )}
                  >
                    Première inscription
                  </p>
                  <p
                    onClick={() => setMenu("reinscription")}
                    className={cn(
                      "",
                      menu === "reinscription" && "text-brand-100"
                    )}
                  >
                    Déjà inscrit ?
                  </p>
                </div>
                <Separator />
                <div className={cn('transition-all duration-500',menu === "inscrition" ? 'h-[380px]': 'h-[200px]')}>
                  {menu === "inscrition" ? (
                   <FormInscription nbPlace={nbPlace} idEvent={evenement.id} />
                  ) : (
                    <FormModification nbPlace={nbPlace} idEvent={evenement.id} />
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Evenement;
