import React from "react";
import { sql } from "@vercel/postgres";
import { ReservationResult } from "@/lib/types";
import { DataTable } from "./dataTable";
import { ModeToggle } from "@/components/toggletheme";

export default async function Page() {
  const { rows } = await sql<ReservationResult>`SELECT
        r.id AS reservation_id,
        r.jourArr,
        r.nbJours,
        r.jourDep,
        r.reservation,
        c.id AS client_id,
        CONCAT(c.nom, ' ', c.prenom) AS nom_client,
        r.chambreId,
        p.id AS personnel_id,
        p.nom AS personnel_nom
      FROM
        Reservation r
        JOIN Client c ON r.clientId = c.id
        LEFT JOIN Personnel p ON r.personnelId = p.id;
  `;

  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between">
        <span>Page Gérer Reservation </span>
        <ModeToggle />
      </header>

      <main>
        <DataTable data={rows} />
      </main>
    </div>
  );
}
