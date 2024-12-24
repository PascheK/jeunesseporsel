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
  nom: z.string().min(2).max(50),
  prenom: z.string().min(2).max(50),
  mail: z.string().min(2).max(100),
  sujet: z.string().min(2).max(50),
  message: z.string().min(2).max(1000)
});

const MailForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false)
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      email: values.mail,
      subject: values.sujet,
      text: values.prenom +" "+values.nom +"\n"+ values.message
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
      })
      ;
  };

  return (
    <div className="bg-jeunesse-navbar border-jeunesse container rounded-xl border-2 border-solid bg-opacity-75 p-10 shadow-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-10"
        >
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem className="col-span-2 sm:col-span-1">
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem className="col-span-2 sm:col-span-1">
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre prénom..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Votre mail..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sujet"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Sujet</FormLabel>
                <FormControl>
                  <Input placeholder="Sujet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Message :</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[150px]"
                    placeholder="votre message..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex items-center justify-center">
            <Button disabled={isLoading} type="submit">
              {isLoading ? (
                <p>Envoie en cours...</p>
              ) : (
                <p>Envoyer le message !</p>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MailForm;
