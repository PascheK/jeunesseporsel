"use client";
import React, { useState } from "react";

import { Button } from "./ui/button";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import FormOtp from "./FormOtp";

const formSchemaModifyInscrit = z.object({
  idInscrit: z
    .string()
    .min(1, { message: "Le nombre minimum est 1." })
    .max(200, { message: "Le nombre maximal est 200." }),
  npPlaceFinal: z
    .string()
    .min(1, { message: "Le nombre minimum est 1." })
    .max(200, { message: "Le nombre maximal est 200." })
});
const FormModification = ({
  nbPlace,
  idEvent
}: {
  nbPlace: number;
  idEvent: number;
}) => {
  const [step, setStep] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  const formModifyInscrit = useForm<z.infer<typeof formSchemaModifyInscrit>>({
    resolver: zodResolver(formSchemaModifyInscrit),
    defaultValues: {
      idInscrit: "",
      npPlaceFinal: ""
    }
  });

  function handleConfirm(values: z.infer<typeof formModifyInscrit>) {
    console.log(values);
    setIsSliding(true);

    setTimeout(() => {
      setStep(step === 1 ? 2 : 1);
      setIsSliding(false); 
    }, 500); 
  }
  return (
    <div
      className={`relative  transition-all h-[200px] ${
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
                    <Input placeholder="123456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formModifyInscrit.control}
              name="npPlaceFinal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de place</FormLabel>
                  <FormControl>
                    <Input
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
            <Button type="submit">Modifier !</Button>
          </form>
        </Form>
      ) : (
        <>
          <FormOtp />
          <Button onClick={() => handleConfirm()}>Retour</Button>
        </>
      )}
    </div>
  );
};

export default FormModification;
