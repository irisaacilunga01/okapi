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
import { addChambre, upDateChambre } from "@/lib/actions";
import { SubmitButton } from "@/components/submit-button";

const FormSchema = z.object({
  nbLit: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  prix: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  style: z.string().min(2, {
    message: "le prenom doit contenir aumoins 2 caractères.",
  }),
  etat: z.string().min(2, {
    message: "le téléphone doit contenir aumoins 2 caractères.",
  }),
});

export function Formulaire({
  id = 0,
  nbLit = 0,
  prix = 0,
  style = "",
  etat = "",
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nbLit,
      prix,
      style,
      etat,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (id == 0) {
      try {
        await addChambre(data);
        toast({
          title: "Ajouter",
          description: `la chambre ${id} a été ajouter avec succès`,
          className: "bg-green-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur ajouter",
          description: `erreur d'ajout de la chambre`,
          className: "bg-red-700 text-white",
        });
      }
    } else {
      try {
        await upDateChambre(id, data);
        toast({
          title: "Modifier",
          description: `la chambre ${id} a été modifier avec succès`,
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
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style chambre</FormLabel>
              <FormControl>
                <Input placeholder="entrer style chambre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nbLit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de lit</FormLabel>
              <FormControl>
                <Input placeholder="prénom" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="prix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix</FormLabel>
              <FormControl>
                <Input placeholder="téléphone" type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="etat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Etat</FormLabel>
              <FormControl>
                <Input placeholder="etat de la chambre" {...field} />
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
