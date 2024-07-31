"use client";
import {
  BadgeDollarSign,
  Bell,
  BookImage,
  ContactRound,
  Home,
  LogOut,
  NotebookText,
  Package2,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

function LinkUrl() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Okapi</span>
          </Link>
          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button> */}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard" ? "bg-muted text-primary" : null
              }`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/reservation"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard/reservation"
                  ? "bg-muted text-primary"
                  : null
              }`}
            >
              <NotebookText className="h-4 w-4" />
              Réservation
            </Link>
            <Link
              href="/dashboard/paiement"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard/paiement"
                  ? "bg-muted text-primary"
                  : null
              }`}
            >
              <BadgeDollarSign className="h-4 w-4" />
              Paiement
            </Link>
            <Link
              href="/dashboard/client"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard/client" ? "bg-muted text-primary" : null
              }`}
            >
              <ContactRound className="h-4 w-4" />
              Client
            </Link>
            <Link
              href="/dashboard/catalogue"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard/catalogue"
                  ? "bg-muted text-primary"
                  : null
              }`}
            >
              <BookImage className="h-4 w-4" />
              Catalogue
            </Link>
            <Link
              href="/dashboard/users"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                pathname == "/dashboard/users" ? "bg-muted text-primary" : null
              }`}
            >
              <Users className="h-4 w-4" />
              Utilisateurs
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button
            variant="link"
            onClick={async () => {
              const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              });

              if (response.ok) {
                // Redirige l'utilisateur après une connexion réussie
                window.location.href = "/";
              }
            }}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
          >
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LinkUrl;
