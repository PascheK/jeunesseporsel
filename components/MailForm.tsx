"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { sendEmail } from "@/lib/mail.utils";
const MailForm = () => {
  const formSchema = z.object({
    nom: z.string().min(2).max(50),
    prenom: z.string().min(2).max(50),
    mail: z.string().min(2).max(100),
    sujet: z.string().min(2).max(50),
    message: z.string().min(2).max(1000)
  });

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
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await sendEmail({
      email: values.mail,
      subject: values.sujet,
      text:  values.message,
    })

    if(response?.messageId){
      console.log('oui ouie')
    }else{
      console.log('no no')
    }
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
                <FormControl>
                  <Textarea placeholder="votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex items-center justify-center">
            <Button disabled={isLoading} type="submit">{isLoading ? 'envoyé...' : 'Envoyé le message !'}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MailForm;
