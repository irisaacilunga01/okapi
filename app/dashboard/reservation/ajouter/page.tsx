import React from "react";
import { Formulaire } from "../form";
import { sql } from "@vercel/postgres";

async function Page() {
  const { rows: chambres } = await sql<{
    id: number;
  }>`SELECT id from chambre`;
  const { rows: personnels } = await sql<{
    id: number;
    nom: string;
  }>`SELECT id,nom from personnel`;
  const { rows: clients } = await sql<{
    id: number;
    nom: string;
  }>`SELECT id, CONCAT(nom, ' ', prenom) AS nom from client`;
  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Formulaire ajouter la Reservation
      </h2>
      <Formulaire
        chambres={chambres}
        personnels={personnels}
        clients={clients}
      />
    </div>
  );
}

export default Page;
