import React from "react";
import { sql } from "@vercel/postgres";
import { Client } from "@/lib/types";
import { DataTable } from "./dataTable";
import { ModeToggle } from "@/components/toggletheme";

export default async function Page() {
  const { rows } = await sql<Client>`SELECT * from client`;
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between">
        <span>Page Gérer Client </span>
        <ModeToggle />
      </header>

      <main>
        <DataTable data={rows} />
      </main>
    </div>
  );
}
