"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Client, Paiement, Personnel } from "./types";
function revalidate() {
  revalidatePath("/dashboard/client");
  revalidatePath("/dashboard/users");
  revalidatePath("/dashboard/catalogue");
  revalidatePath("/dashboard/reservation");
  revalidatePath("/dashboard/paiement");
  revalidatePath("/dashboard");
}
export async function addUser(data: Omit<Client, "id">) {
  const { nom, prenom, tel, email, password } = data;
  try {
    await sql`
    INSERT INTO Client (nom, prenom, tel, email, password)
    VALUES (${nom}, ${prenom}, ${tel}, ${email}, ${password});
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/client");
}
export async function upDateUser(id: number, data: Omit<Client, "id">) {
  const { nom, prenom, tel, email, password } = data;
  try {
    await sql<Client[]>`
    UPDATE Client
SET nom = ${nom},
    prenom = ${prenom},
    tel = ${tel},
    email = ${email},
    password = ${password}
WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/client");
}
export async function deleteUser(id: number) {
  try {
    await sql`
    DELETE FROM Client
    WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/client");
}

export async function addPersonnel(data: Omit<Personnel, "id">) {
  const { nom, email, password, niveauautorisation } = data;
  try {
    await sql`
    INSERT INTO Personnel (nom, email, password,niveauautorisation)
    VALUES (${nom}, ${email}, ${password},${niveauautorisation});
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/users");
}
export async function upDatePersonnel(id: number, data: Omit<Personnel, "id">) {
  const { nom, email, password, niveauautorisation } = data;
  try {
    await sql<Personnel[]>`
    UPDATE Personnel
SET nom = ${nom},
    email = ${email},
    password = ${password},
    niveauautorisation=${niveauautorisation}
WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/users");
}
export async function deletePersonnel(id: number) {
  try {
    await sql`
    DELETE FROM Personnel
    WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/users");
}

export async function addPaiement(data: {
  montant: number;
  date: string;
  motif: string;
  reservationId: number;
}) {
  const { date, montant, motif, reservationId } = data;
  try {
    await sql`
    INSERT INTO Paiement (date,montant,motif,reservationId )
    VALUES (${date}, ${montant}, ${motif},${reservationId});
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/paiement");
}
export async function upDatePaiement(
  id: number,
  data: { montant: number; date: string; motif: string; reservationId: number }
) {
  const { date, montant, motif, reservationId } = data;
  try {
    await sql<Personnel[]>`
    UPDATE Paiement
SET date = ${date},
    montant = ${montant},
    motif = ${motif},
    reservationid = ${reservationId}
WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/paiement");
}
export async function deletePaiement(id: number) {
  try {
    await sql`
    DELETE FROM Paiement
    WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/paiement");
}

export async function addRservation(data: {
  jourArr: string;
  nbJours: number;
  jourDep: string;
  reservation: string;
  clientId: number;
  chambreId: number;
  personnelId: number;
}) {
  const {
    chambreId,
    clientId,
    jourArr,
    jourDep,
    nbJours,
    personnelId,
    reservation,
  } = data;
  try {
    await sql`
    INSERT INTO Reservation (chambreid,clientid,jourarr,jourdep,nbjours,personnelid,reservation)
    VALUES (${chambreId},${clientId},${jourArr},${jourDep},${nbJours},${personnelId},${reservation} );
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/reservation");
}
export async function upDateReservation(
  id: number,
  data: {
    jourArr: string;
    nbJours: number;
    jourDep: string;
    reservation: string;
    clientId: number;
    chambreId: number;
    personnelId: number;
  }
) {
  const {
    chambreId,
    clientId,
    jourArr,
    jourDep,
    nbJours,
    personnelId,
    reservation,
  } = data;
  try {
    await sql`  UPDATE Reservation
SET chambreid=${chambreId},clientid=${clientId},jourarr=${jourArr},jourdep=${jourDep},nbjours=${nbJours},personnelid=${personnelId},reservation=${reservation}
WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/reservation");
}
export async function deleteReservation(id: number) {
  try {
    await sql`
    DELETE FROM Reservation
    WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/reservation");
}

export async function addChambre(data: {
  nbLit: number;
  prix: number;
  style: string;
  etat: string;
}) {
  const { etat, nbLit, prix, style } = data;
  const hotelId = 3;

  try {
    await sql`
    INSERT INTO Chambre (etat,hotelId,nbLit,prix,style)
    VALUES (${etat},${hotelId},${nbLit},${prix},${style}} );
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/catalogue");
}
export async function upDateChambre(
  id: number,
  data: {
    nbLit: number;
    prix: number;
    style: string;
    etat: string;
  }
) {
  const { etat, nbLit, prix, style } = data;
  const hotelId = 3;
  try {
    await sql`  UPDATE Chambre
SET etat=${etat}, hotelId=${hotelId}, nbLit=${nbLit}, prix=${prix}, style=${style}
WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/catalogue");
}
export async function deleteChambre(id: number) {
  try {
    await sql` DELETE FROM Chambre
    WHERE id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  revalidate();
  redirect("/dashboard/catalogue");
}

export async function handlelogin(data: { email: string; mdp: string }) {
  const { email, mdp } = data;

  const { rows, rowCount } =
    await sql<Client>`SELECT * from client WHERE email=${email} AND password=${mdp};`;
  if (rowCount != null && rowCount >= 1) {
    const { id, nom, prenom } = rows[0];

    return {
      data: {
        id,
        nom: `${nom} ${prenom}`,
      },
      role: "Client",
    };
  } else {
    const { rows, rowCount } =
      await sql<Personnel>`SELECT * from personnel WHERE email=${email} AND password=${mdp};`;

    if (rowCount != null && rowCount >= 1) {
      const { id, nom, niveauautorisation } = rows[0];
      return {
        data: {
          id,
          nom,
        },
        role: niveauautorisation,
      };
    } else {
      return {
        data: {},
        role: "",
      };
    }
  }
}

// [{"id":1,"nom":"OLI Parker","email":"oli@gmail.com","password":"password123","niveauautorisation":"Gérant"},{"id":2,"nom":"MUJINGA Jael","email":"jael@gmail.com","password":"password123","niveauautorisation":"Réceptionniste"}]
