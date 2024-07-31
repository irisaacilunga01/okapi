import { BellRing, Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sql } from "@vercel/postgres";
import { Chambre } from "@/lib/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Formulaire } from "../dashboard/reservation/form";

type CardProps = React.ComponentProps<typeof Card>;

export default async function Page() {
  const { rows } = await sql<Chambre>`SELECT * from chambre `;
  console.log({ rows });

  return (
    <main className="p-24 grid grid-cols-3 gap-8">
      {rows.map((chambre) => (
        <Card className={cn("w-[380px]")} key={chambre.id}>
          <CardHeader>
            <CardTitle>Chambre {chambre.id}</CardTitle>
            <CardDescription>Une description de la chambre.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Etat</p>
                <p className="text-sm text-muted-foreground">
                  Rouge pour occuper et vert libre.
                </p>
              </div>
              {/* <Switch /> */}
              <div
                className={`w-8 h-8 rounded-full ${
                  chambre.etat == "Occupée" ? "bg-red-600" : "bg-green-600"
                }`}
              ></div>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nombre de lit
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {chambre.nblit} lit(s)
                  </p>
                </div>
              </div>
              <div
                key={1}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Style de chambre
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {chambre.style}
                  </p>
                </div>
              </div>
              <div
                key={1}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Prix </p>
                  <p className="text-sm text-muted-foreground">
                    {chambre.prix}$
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-full"
                  disabled={chambre.etat == "Occupée" ? false : false}
                  aria-disabled={chambre.etat == "Occupée" ? false : false}
                >
                  <Check className="mr-2 h-4 w-4" /> Reserver cette chambre
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <h2 className="text-xl">Reserver cette chambre</h2>
                <Formulaire hidden />
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
