"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { SubmitButton } from "@/components/submit-button";
import { addPersonnel, upDatePersonnel } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  nom: z.string().min(2, {
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  email: z.string().min(2, {
    message: "l'émail doit contenir aumoins 2 caractères.",
  }),
  password: z.string().min(2, {
    message: "le mot de passe doit contenir aumoins 2 caractères.",
  }),
  niveauautorisation: z.string().min(2, {
    message: "le mot de passe doit contenir aumoins 2 caractères.",
  }),
});

export function Formulaire({
  id = 0,
  nom = "",
  email = "",
  password = "",
  niveauautorisation = "Receptionniste",
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nom,
      email,
      password,
      niveauautorisation,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (id == 0) {
      try {
        await addPersonnel(data);
        toast({
          title: "Ajouter",
          description: `le utilisateur ${data.nom} a été ajouter avec succès`,
          className: "bg-green-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur ajouter",
          description: `erreur d'ajout du utilisateur`,
          className: "bg-red-700 text-white",
        });
      }
    } else {
      try {
        await upDatePersonnel(id, data);
        toast({
          title: "Modifier",
          description: `le utilisateur ${data.nom}  a été modifier avec succès`,
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="niveauautorisation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Niveau d&apos;autorisation</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectectionner le niveau d'autorisation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={1} value="Receptionniste">
                    Receptionniste
                  </SelectItem>

                  <SelectItem key={2} value="Gerant">
                    Gerant
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton text="soumettre" />
      </form>
    </Form>
  );
}
