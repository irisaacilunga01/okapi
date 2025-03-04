// export default async function Profile({ params }: { params: { id: string } }) {
//   return <div>id={params.id}</div>;
// }
import React from "react";
import { sql } from "@vercel/postgres";
import { Client } from "@/lib/types";
import {  Formulaire } from "../form";

async function Page({ params }: { params: { id: string } }) {
  const idCl = params.id ? Number(params.id) : 1;

  const { rows } = await sql<Client>`SELECT * from client where id=${idCl}`;
  const { email, id, nom, password, prenom, tel } = rows[0];
  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Formulaire modifier un client
      </h2>
      <Formulaire
        email={email}
        id={id}
        nom={nom}
        password={password}
        prenom={prenom}
        tel={tel}
      />
    </div>
  );
}

export default Page;
