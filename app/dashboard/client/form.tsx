"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { addUser, upDateUser } from "@/lib/actions";
import { SubmitButton } from "@/components/submit-button";

const FormSchema = z.object({
  nom: z.string().min(2, {
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "le prenom doit contenir aumoins 2 caractères.",
  }),
  tel: z.string().min(2, {
    message: "le téléphone doit contenir aumoins 2 caractères.",
  }),
  email: z.string().min(2, {
    message: "l'émail doit contenir aumoins 2 caractères.",
  }),
  password: z.string().min(2, {
    message: "le mot de passe doit contenir aumoins 2 caractères.",
  }),
});

export function Formulaire({
  id = 0,
  nom = "",
  prenom = "",
  tel = "",
  email = "",
  password = "",
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nom,
      prenom,
      tel,
      email,
      password,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (id == 0) {
      try {
        await addUser(data);
        toast({
          title: "Ajouter",
          description: `le client ${data.nom} ${data.prenom} a été ajouter avec succès`,
          className: "bg-green-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur ajouter",
          description: `erreur d'ajout du client`,
          className: "bg-red-700 text-white",
        });
      }
    } else {
      try {
        await upDateUser(id, data);
        toast({
          title: "Modifier",
          description: `le client ${data.nom} ${data.prenom} a été modifier avec succès`,
          className: "bg-blue-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur modifier",
          description: `Erreur lors de la modification`,
          className: "bg-red-700 text-white",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input placeholder="téléphone" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton text="soumettre" />
      </form>
    </Form>
  );
}
