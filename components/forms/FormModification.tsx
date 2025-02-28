"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
 
import FormOtp from "@/components/forms/FormOtp";

const formSchemaModifyInscrit = z.object({
  idInscrit: z
    .string()
    .min(1, { message: "Le nombre minimum est 1." })
    .max(200, { message: "Le nombre maximal est 200." }),
    nbPlaceFinal: z
    .string()
    .min(1, { message: "Le nombre minimum est 1." })
    .max(200, { message: "Le nombre maximal est 200." })
});
const FormModification = ({ nbPlace }: { nbPlace: number }) => {
  const [step, setStep] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formModifyInscrit = useForm<z.infer<typeof formSchemaModifyInscrit>>({
    resolver: zodResolver(formSchemaModifyInscrit),
    defaultValues: {
      idInscrit: "",
      nbPlaceFinal: ""
    }
  });

  async function handleConfirm(
    values: z.infer<typeof formSchemaModifyInscrit>
  ) {
    // generate Code for idInscrit
    const data = { ...values, method: "generateCode" };
    setIsLoading(true);
    await fetch("api/inscrits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          console.log("response ok");
         
        } else {
          console.log("response not ok");
        }
      })
      .finally(() => setIsLoading(false));
    console.log(data);

    setIsSliding(true);

    setTimeout(() => {
      setStep(step === 1 ? 2 : 1);
      setIsSliding(false);
    }, 500);
  }
  return (
    <div
      className={`relative  transition-all  ${
        isSliding ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      {step === 1 ? (
        <Form {...formModifyInscrit}>
          <form
            onSubmit={formModifyInscrit.handleSubmit(handleConfirm)}
            className="space-y-4"
          >
            <FormField
              control={formModifyInscrit.control}
              name="idInscrit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code d&apos;inscription</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="123456"
                      {...field}

                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formModifyInscrit.control}
              name="nbPlaceFinal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>* Nombre de place </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="number"
                      max={nbPlace}
                      min="1"
                      placeholder="5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="caption text-gray-600">
              <span className="font-bold">* Nombre de place :</span> Veuillez
              entrez le nombre de place que vous voulez rajouter.
            </p>
            <Button type="submit" disabled={isLoading}>
              Modifier !
            </Button>
          </form>
        </Form>
      ) : (
        <>
          <FormOtp inscritId={String(formModifyInscrit.getValues("idInscrit"))} nbPlace={formModifyInscrit.getValues("nbPlaceFinal")} />
          <Button onClick={() => handleConfirm(formModifyInscrit.getValues())}>Retour</Button>
        </>
      )}
    </div>
  );
};

export default FormModification;
