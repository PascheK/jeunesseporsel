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

const regex = /^\+?[1-9][0-9]{7,14}$/;
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const formSchema = z.object({
  nom: z
    .string()
    .min(2, { message: "Le nombre de caractère minimum est 2." })
    .max(50, { message: "Le nombre de caractère maximal est 100." }),
  prenom: z
    .string()
    .min(2, { message: "Le nombre de caractère minimum est 2." })
    .max(50, { message: "Le nombre de caractère maximal est 100." }),
  mail: z
    .string()
    .regex(mailRegex, { message: "L'addresse mail n'est pas valide." })
    .min(1, { message: "Le nombre de caractère minimum est 2." })
    .max(100, { message: "Le nombre de caractère maximal est 100." }),
  telephone: z
    .string()
    .regex(regex, {
      message:
        "Le numéro de téléphone ne respecte pas le format. (ex: +41763103560)"
    })
    .min(1, { message: "Le nombre de caractère minimum est 2." })
    .max(12, { message: "Le nombre de caractère maximal est 12." }),
  nbPlace: z
    .string()
    .min(1, { message: "Le nombre minimum est 1." })
    .max(200, { message: "Le nombre maximal est 200." })
});

const FormInscription = ({
  onSubmitSuccess,
  nbPlace,
  idEvent
}: {
  onSubmitSuccess: (res: string, message: string | null) => void;
  nbPlace: number;
  idEvent: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      mail: "",
      telephone: "",
      nbPlace: "1"
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = { ...values, idEvent, method: "addInscrit" };
    setIsLoading(true);
    try {
      const response = await fetch("/api/inscrits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      console.log("Response :", response);

      if (!response.ok) {
        // Récupérer le message d'erreur s'il existe
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur ${response.status}`);
      }
      const successData = await response.json().catch(() => ({}));

      console.log("Response ok");
      form.reset();
      onSubmitSuccess("success", successData.message);
    } catch (error) {
      onSubmitSuccess("error", error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="animate-slide-in my-auto space-y-4 "
      >
        <div className="flex flex-row gap-2  ">
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Killian"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="Pasche" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="killian.pasche7@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="+41763103560"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nbPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de place</FormLabel>
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
        <Button type="submit" disabled={isLoading}>
          Inscrire !
        </Button>
      </form>
    </Form>
  );
};

export default FormInscription;
