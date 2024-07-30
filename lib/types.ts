// types.ts

export declare type Client = {
  id: number;
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  password: string;
};

export declare type Chambre = {
  id: number;
  nbLit: number;
  prix: number;
  style: string;
  etat: string;
  hotelId: number;
  // etat: "Disponible" | "Occupée" | "En maintenance";
};

export declare type Reservation = {
  id: number;
  jourArr: Date;
  nbJours: number;
  jourDep: Date;
  reservation: string;
  clientId: number;
  chambreId: number;
  personnelId: number;
};
export declare type ReservationResult = {
  reservation_id: number;
  jourarr: Date;
  nbjours: number;
  jourdep: Date;
  reservation: string;
  client_id: number;
  nom_client: string;
  chambreid: number;
  personnel_id: number | null; // Peut être null si aucun personnel n'est associé
  personnel_nom: string | null; // Peut être null si aucun personnel n'est associé
};
export declare type CountsResult = {
  nombre_chambres: number;
  nombre_utilisateurs: number;
  nombre_clients: number;
  nombre_reservations: number;
  nombre_hotels: number;
};
export declare type Paiement = {
  id: number;
  montant: number;
  date: Date;
  motif: string;
  reservationId: number;
};

export declare type Hotel = {
  id: number;
  nom: string;
  nbrChambre: number;
  adresse: string;
  email: string;
};

export declare type Personnel = {
  id: number;
  nom: string;
  email: string;
  password: string;
  niveauautorisation: string;
  // niveauAutorisation: "Gerant" | "Receptionniste";
};
