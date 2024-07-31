import React from "react";
import { sql } from "@vercel/postgres";
import { Formulaire } from "../form";

async function Page({ params }: { params: { id: string } }) {
  const idCl = params.id ? Number(params.id) : 1;

  const { rows } = await sql<{
    id: number;
    jourarr: Date;
    nbjours: number;
    jourdep: Date;
    reservation: string;
    clientid: number;
    chambreid: number;
    personnelid: number;
  }>`SELECT * from reservation where id=${idCl}`;
  const {
    chambreid,
    clientid,
    jourarr,
    jourdep,
    nbjours,
    personnelid,
    reservation,
  } = rows[0];
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
        Formulaire modifier la Reservation
      </h2>
      <Formulaire
        id={idCl}
        chambreId={chambreid}
        clientId={clientid}
        clients={clients}
        jourArr={jourarr.toLocaleDateString()}
        jourDep={jourdep.toLocaleDateString()}
        nbJours={nbjours}
        personnelId={personnelid}
        chambres={chambres}
        personnels={personnels}
        reservation={reservation}
      />
    </div>
  );
}

export default Page;
