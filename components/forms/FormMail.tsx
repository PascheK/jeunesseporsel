"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  nom: z
    .string()
    .min(2, { message: "Veuillez entrer au minimum 2 caractères" })
    .max(50, { message: "Veuillez entrer au maximum 50 caractères" }),
  prenom: z
    .string()
    .min(2, { message: "Veuillez entrer au minimum 2 caractères" })
    .max(50, { message: "Veuillez entrer au maximum 50 caractères" }),
  mail: z
    .string()
    .min(2, { message: "Veuillez entrer au minimum 2 caractères" })
    .max(100, { message: "Veuillez entrer au maximum 100 caractères" }),
  sujet: z
    .string()
    .min(2, { message: "Veuillez entrer au minimum 2 caractères" })
    .max(50, { message: "Veuillez entrer au maximum 50 caractères" }),
  message: z
    .string()
    .min(2, { message: "Veuillez entrer au minimum 2 caractères" })
    .max(1000, { message: "Veuillez entrer au maximum 1000 caractères" })
});

const FormMail = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      mail: "",
      sujet: "",
      message: ""
    }
  });

  /**
   * Gère la soumission du formulaire en envoyant les données du formulaire au serveur.
   *
   * @param values - Les valeurs du formulaire inférées du schéma du formulaire.
   * @returns Une promesse qui se résout lorsque la soumission du formulaire est terminée.
   *
   * La fonction effectue les étapes suivantes :
   * 1. Construit l'objet de données à partir des valeurs du formulaire.
   * 2. Définit l'état de chargement à true.
   * 3. Envoie une requête POST au point de terminaison "api/emails" avec les données du formulaire.
   * 4. Affiche un message toast de succès si la requête est réussie.
   * 5. Affiche un message toast d'erreur si la requête échoue.
   * 6. Réinitialise le formulaire et définit l'état de chargement à false une fois la requête terminée.
   */
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      email: values.mail,
      subject: values.sujet,
      text: values.prenom + " " + values.nom + "\n" + values.message
    };
    setIsLoading(true);
    fetch("api/emails", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then(() => {
        toast({
          variant: "success",
          duration: 3000,
          title: "🎉 Votre message a été envoyé avec succès !"
        });
      })
      .catch((error) => {
        toast({
          duration: 3000,
          variant: "destructive",
          title: "Votre message n'as pas été envoyée !",
          description: error.message
        });
      })
      .finally(() => {
        setIsLoading(false);
        form.reset();
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid max-w-3xl grid-cols-2 gap-6 rounded-lg bg-white p-6 shadow-lg"
      >
        {/* Nom */}
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="mb-2 block text-lg font-medium text-gray-700">
                Nom
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre nom..."
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Prénom */}
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
              <FormLabel className="mb-2 block text-lg font-medium text-gray-700">
                Prénom
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre prénom..."
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Mail */}
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="mb-2 block text-lg font-medium text-gray-700">
                Mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre mail..."
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Sujet */}
        <FormField
          control={form.control}
          name="sujet"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="mb-2 block text-lg font-medium text-gray-700">
                Sujet
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Sujet"
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="mb-2 block text-lg font-medium text-gray-700">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Votre message..."
                  {...field}
                  className="min-h-[150px] w-full rounded-md border border-gray-300 p-3 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Bouton d'envoi */}
        <div className="col-span-2 flex justify-center">
          <Button
            className="rounded-md bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Envoi en cours..." : "Envoyer le message !"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormMail;
