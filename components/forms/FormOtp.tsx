import { useState } from "react";

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

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  codeOTP: z.string().min(6, {
    message: "Le code que vous avez reçu par mail doit contenir au minimum 6 caractères."
  })
});
const FormOtp = (inscritData: modifyInscritProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      codeOTP: ""
    }
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {

    const values = { ...data, method: "modifiyInscrit", ...inscritData };
    console.log(values);
    setIsLoading(true);
    await fetch("api/inscrits", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((response) => {
        if (response.ok) {
          console.log("response ok");
        } else {
          console.log("response not ok");
        }
      })
      .finally(() => setIsLoading(false));

    console.log(data + " | Modification de l'inscription");
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-brand">Vérification du code</h2>
        <p className="text-center text-gray-500 mb-4">Veuillez entrer le code reçu par email pour valider votre identité.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
            <FormField
              control={form.control}
              name="codeOTP"
              render={({ field }) => (
                <FormItem className="mx-auto w-fit">
                  <FormControl>

                    <InputOTP maxLength={6} {...field} disabled={isLoading}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full primary-btn max-w-[100px]" disabled={isLoading}>
              {isLoading ? "Vérification..." : "Valider"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormOtp;
