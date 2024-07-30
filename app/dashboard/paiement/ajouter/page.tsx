import React from "react";
import { Formulaire } from "../form";
import { sql } from "@vercel/postgres";

async function Page() {
  const { rows: reservation } = await sql<{
    id: number;
    reservation: string;
  }>`SELECT id,reservation from reservation`;
  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Formulaire ajouter paiement
      </h2>
      <Formulaire reservation={reservation} />
    </div>
  );
}

export default Page;
