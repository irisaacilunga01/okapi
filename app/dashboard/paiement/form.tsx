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
import {
  addPaiement,
  addUser,
  upDatePaiement,
  upDateUser,
} from "@/lib/actions";
import { SubmitButton } from "@/components/submit-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  date: z.string({
    message: "la date doit contenir aumoins 2 caractères.",
  }),
  montant: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  motif: z.string().min(2, {
    message: "le prenom doit contenir aumoins 2 caractères.",
  }),
  reservationId: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
});
export function Formulaire({
  id = 0,
  date = new Date().toLocaleDateString(),
  montant = 0,
  motif = "",
  reservationId = 0,
  reservation = [{ id: 0, reservation: "aucune resservation" }],
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date,
      montant,
      motif,
      reservationId,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (id == 0) {
      try {
        await addPaiement(data);
        toast({
          title: "Ajouter",
          description: `le paiement ${data.date} a été ajouter avec succès`,
          className: "bg-green-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur ajouter",
          description: `erreur d'ajout du paiement`,
          className: "bg-red-700 text-white",
        });
      }
    } else {
      try {
        await upDatePaiement(id, data);
        toast({
          title: "Modifier",
          description: `le paiement ${data.date} a été modifier avec succès`,
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
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="montant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="motif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Motif</FormLabel>
              <FormControl>
                <Input placeholder="téléphone" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reservationId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reservation</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {reservation.map((reser) => (
                    <SelectItem key={reser.id} value={reser.id.toString()}>
                      {reser.reservation}
                    </SelectItem>
                  ))}
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
