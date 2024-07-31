// export default async function Profile({ params }: { params: { id: string } }) {
//   return <div>id={params.id}</div>;
// }
import React from "react";
import { sql } from "@vercel/postgres";
import { Paiement } from "@/lib/types";
import { Formulaire } from "../form";

async function Page({ params }: { params: { id: string } }) {
  const idCl = params.id ? Number(params.id) : 1;

  const { rows } = await sql<Paiement>`SELECT * from paiement where id=${idCl}`;
  const { date, montant, motif, reservationId } = rows[0];
  const { rows: reservation } = await sql<{
    id: number;
    reservation: string;
  }>`SELECT id,reservation from reservation`;
  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Formulaire modifier le paiement
      </h2>
      <Formulaire
        id={idCl}
        date={date?.toLocaleDateString()}
        montant={montant}
        motif={motif}
        reservationId={reservationId}
        reservation={reservation}
      />
    </div>
  );
}

export default Page;
