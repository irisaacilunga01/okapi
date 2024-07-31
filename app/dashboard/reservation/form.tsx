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
import { addRservation, upDateReservation } from "@/lib/actions";
import { SubmitButton } from "@/components/submit-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  jourArr: z.string({
    message: "la date doit contenir aumoins 2 caractères.",
  }),
  jourDep: z.string({
    message: "la date doit contenir aumoins 2 caractères.",
  }),
  reservation: z.string({
    message: "la date doit contenir aumoins 2 caractères.",
  }),
  nbJours: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  clientId: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  chambreId: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
  personnelId: z.coerce.number({
    message: "le nom doit contenir aumoins 2 caractères.",
  }),
});
export function Formulaire({
  id = 0,
  jourArr = new Date().toLocaleDateString(),
  nbJours = 0,
  jourDep = new Date().toLocaleDateString(),
  reservation = "",
  clientId = 0,
  chambreId = 0,
  personnelId = 0,
  hidden = false,

  chambres = [{ id: 0 }],
  personnels = [{ id: 0, nom: "aucun personnel" }],
  clients = [{ id: 0, nom: "aucun client" }],
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jourArr,
      nbJours,
      jourDep,
      reservation,
      clientId,
      chambreId,
      personnelId,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (id == 0) {
      try {
        await addRservation(data);
        toast({
          title: "Ajouter",
          description: `la reservation ${data.reservation} a été ajouter avec succès`,
          className: "bg-green-700 text-white",
        });
      } catch (error) {
        toast({
          title: "Erreur ajouter",
          description: `erreur d'ajout du reservation`,
          className: "bg-red-700 text-white",
        });
      }
    } else {
      try {
        await upDateReservation(id, data);
        toast({
          title: "Modifier",
          description: `la reservation ${data.reservation} a été modifier avec succès`,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="jourArr"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jour arrrivé</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jourDep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jour départ</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nbJours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de jour</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reservation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reservation</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="chambreId"
          render={({ field }) => (
            <FormItem className={`${hidden == true ? "hidden" : null}`}>
              <FormLabel>Chambre</FormLabel>
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
                  {chambres.map((reser) => (
                    <SelectItem key={reser.id} value={reser.id.toString()}>
                      {reser.id.toString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientId"
          render={({ field }) => (
            <FormItem className={`${hidden == true ? "hidden" : null}`}>
              <FormLabel>Client</FormLabel>
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
                  {clients.map((reser) => (
                    <SelectItem key={reser.id} value={reser.id.toString()}>
                      {reser.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personnelId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personnel</FormLabel>
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
                  {personnels.map((reser) => (
                    <SelectItem key={reser.id} value={reser.id.toString()}>
                      {reser.nom}
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
