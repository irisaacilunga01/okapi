// data.ts

import {
  Client,
  Chambre,
  Reservation,
  Paiement,
  Hotel,
  Personnel,
} from "./types";

// Définition des clients
export const clients: Client[] = [
  {
    id: 1,
    nom: "Kabila",
    prenom: "Joseph",
    tel: "+243812345678",
    email: "joseph.kabila@example.com",
    password: "hashed_password_1",
  },
  {
    id: 2,
    nom: "Tshisekedi",
    prenom: "Félix",
    tel: "+243822345678",
    email: "felix.tshisekedi@example.com",
    password: "hashed_password_2",
  },
  {
    id: 3,
    nom: "Mwamba",
    prenom: "Jean",
    tel: "+243832345678",
    email: "jean.mwamba@example.com",
    password: "hashed_password_3",
  },
  {
    id: 4,
    nom: "N’simba",
    prenom: "Claudine",
    tel: "+243842345678",
    email: "claudine.nsimba@example.com",
    password: "hashed_password_4",
  },
  {
    id: 5,
    nom: "Bemba",
    prenom: "Jean-Pierre",
    tel: "+243852345678",
    email: "jeanpierre.bemba@example.com",
    password: "hashed_password_5",
  },
  {
    id: 6,
    nom: "Kanyembo",
    prenom: "Mireille",
    tel: "+243862345678",
    email: "mireille.kanyembo@example.com",
    password: "hashed_password_6",
  },
  {
    id: 7,
    nom: "Mukenge",
    prenom: "Dieudonné",
    tel: "+243872345678",
    email: "dieudonne.mukenge@example.com",
    password: "hashed_password_7",
  },
  {
    id: 8,
    nom: "Kahindo",
    prenom: "Patricia",
    tel: "+243882345678",
    email: "patricia.kahindo@example.com",
    password: "hashed_password_8",
  },
  {
    id: 9,
    nom: "Ngoy",
    prenom: "Pierre",
    tel: "+243892345678",
    email: "pierre.ngoy@example.com",
    password: "hashed_password_9",
  },
  {
    id: 10,
    nom: "Lukusa",
    prenom: "Emmanuel",
    tel: "+243812345679",
    email: "emmanuel.lukusa@example.com",
    password: "hashed_password_10",
  },
];

// Définition de l'hôtel
export const hotels: Hotel[] = [
  {
    id: 1,
    nom: "Hôtel Okapi",
    nbrChambre: 20,
    adresse: "Avenue Colonel Mondjiba, Kinshasa",
    email: "contact@hotelokapi.com",
  },
];

// Définition des personnels
export const personnels: Personnel[] = [
  {
    id: 1,
    nom: "Mokolo",
    email: "mokolo@example.com",
    password: "hashed_password_11",
  },
  {
    id: 2,
    nom: "Kizito",
    email: "kizito@example.com",
    password: "hashed_password_12",
  },
  {
    id: 3,
    nom: "Lumba",
    email: "lumba@example.com",
    password: "hashed_password_13",
  },
  {
    id: 4,
    nom: "Jael",
    email: "jael@example.com",
    password: "hashed_password_14",
  },
];

// Définition des chambres
export const chambres: Chambre[] = [
  {
    id: 1,
    nbLit: 2,
    prix: 100000,
    style: "Standard",
    etat: "Disponible",
    hotelId: 1,
  },
  {
    id: 2,
    nbLit: 1,
    prix: 50000,
    style: "Économique",
    etat: "Occupée",
    hotelId: 1,
  },
  {
    id: 3,
    nbLit: 2,
    prix: 120000,
    style: "Deluxe",
    etat: "Disponible",
    hotelId: 1,
  },
  {
    id: 4,
    nbLit: 1,
    prix: 70000,
    style: "Standard",
    etat: "Disponible",
    hotelId: 1,
  },
  {
    id: 5,
    nbLit: 2,
    prix: 90000,
    style: "Économique",
    etat: "Occupée",
    hotelId: 1,
  },
  // Ajoutez d'autres chambres ici si nécessaire...
];

// Définition des réservations
export const reservations: Reservation[] = [
  {
    id: 1,
    jourArr: new Date("2024-08-01"),
    nbJours: 3,
    jourDep: new Date("2024-08-04"),
    reservation: "Réservation 1",
    clientId: 1,
    chambreId: 1,
    personnelId: 1,
  },
  {
    id: 2,
    jourArr: new Date("2024-08-05"),
    nbJours: 2,
    jourDep: new Date("2024-08-07"),
    reservation: "Réservation 2",
    clientId: 2,
    chambreId: 2,
    personnelId: 2,
  },
  {
    id: 3,
    jourArr: new Date("2024-08-08"),
    nbJours: 1,
    jourDep: new Date("2024-08-09"),
    reservation: "Réservation 3",
    clientId: 3,
    chambreId: 3,
    personnelId: 3,
  },
  {
    id: 4,
    jourArr: new Date("2024-08-10"),
    nbJours: 4,
    jourDep: new Date("2024-08-14"),
    reservation: "Réservation 4",
    clientId: 4,
    chambreId: 4,
    personnelId: 1,
  },
  {
    id: 5,
    jourArr: new Date("2024-08-15"),
    nbJours: 2,
    jourDep: new Date("2024-08-17"),
    reservation: "Réservation 5",
    clientId: 5,
    chambreId: 5,
    personnelId: 2,
  },
  {
    id: 6,
    jourArr: new Date("2024-08-18"),
    nbJours: 3,
    jourDep: new Date("2024-08-21"),
    reservation: "Réservation 6",
    clientId: 6,
    chambreId: 1,
    personnelId: 3,
  },
  {
    id: 7,
    jourArr: new Date("2024-08-22"),
    nbJours: 1,
    jourDep: new Date("2024-08-23"),
    reservation: "Réservation 7",
    clientId: 7,
    chambreId: 2,
    personnelId: 1,
  },
  {
    id: 8,
    jourArr: new Date("2024-08-24"),
    nbJours: 5,
    jourDep: new Date("2024-08-29"),
    reservation: "Réservation 8",
    clientId: 8,
    chambreId: 3,
    personnelId: 2,
  },
];

// Définition des paiements
export const paiements: Paiement[] = [
  {
    id: 1,
    montant: 300000,
    date: new Date("2024-07-20"),
    motif: "Paiement pour séjour Réservation 1",
    reservationId: 1,
  },
  {
    id: 2,
    montant: 100000,
    date: new Date("2024-07-21"),
    motif: "Paiement pour séjour Réservation 2",
    reservationId: 2,
  },
  {
    id: 3,
    montant: 120000,
    date: new Date("2024-07-22"),
    motif: "Paiement pour séjour Réservation 3",
    reservationId: 3,
  },
  {
    id: 4,
    montant: 280000,
    date: new Date("2024-07-23"),
    motif: "Paiement pour séjour Réservation 4",
    reservationId: 4,
  },
  {
    id: 5,
    montant: 140000,
    date: new Date("2024-07-24"),
    motif: "Paiement pour séjour Réservation 5",
    reservationId: 5,
  },
  {
    id: 6,
    montant: 300000,
    date: new Date("2024-07-25"),
    motif: "Paiement pour séjour Réservation 6",
    reservationId: 6,
  },
  {
    id: 7,
    montant: 70000,
    date: new Date("2024-07-26"),
    motif: "Paiement pour séjour Réservation 7",
    reservationId: 7,
  },
  {
    id: 8,
    montant: 360000,
    date: new Date("2024-07-27"),
    motif: "Paiement pour séjour Réservation 8",
    reservationId: 8,
  },
];
