"use client";
import  { useContext } from "react";

import { useToast } from "@/hooks/use-toast";
import { EventReloaderContext } from "@/components/fondue/FondueEvenementDisplayer";
import { EventDialogContext } from "@/components/fondue/Evenement";

function useEventDialog() {
  const { toast } = useToast();
  const eventReloaderContext = useContext(EventReloaderContext);

  const eventDialogContext = useContext(EventDialogContext);
  if (!eventDialogContext) {
    return null; // or handle the undefined case appropriately
  }
  const { setIsEventDialogOpen } = eventDialogContext;

  if (!eventReloaderContext) {
    return null; // or handle the undefined case appropriately
  }

  const { setReloadEvents } = eventReloaderContext;
  const handleFormResult = (res: string, message: string | null) => {
    switch (res) {
      case "success":
        setIsEventDialogOpen(false); // Fermer le Dialog après une soumission réussie
        setReloadEvents(true);
        toast({
          title: "Inscription réussie",
          description: message
        });
        console.log("success");
        break;
      case "error":
        setIsEventDialogOpen(false); // Fermer le Dialog après une soumission réussie
        toast({
          title: "Un problème est survenu !",
          description: message
        });
        break;
      default:
        break;
    }
  };

  return { handleFormResult };
}


export { useEventDialog };