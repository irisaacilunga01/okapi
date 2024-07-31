// export default async function Profile({ params }: { params: { id: string } }) {
//   return <div>id={params.id}</div>;
// }
import React from "react";
import { sql } from "@vercel/postgres";
import { Chambre } from "@/lib/types";
import { Formulaire } from "../form";

async function Page({ params }: { params: { id: string } }) {
  const idCl = params.id ? Number(params.id) : 1;

  const { rows } = await sql<Chambre>`SELECT * from chambre where id=${idCl}`;
  const { etat, id, nblit, prix, style } = rows[0];
  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Formulaire modifier un catalogue
      </h2>
      <Formulaire etat={etat} id={id} prix={prix} nbLit={nblit} style={style} />
    </div>
  );
}

export default Page;
