-- Création de la base de données
CREATE DATABASE gestionhotelokapi;

-- Connexion à la base de données
\c gestionhotelokapi;

-- Création des tables

-- Table Hotel
CREATE TABLE Hotel (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    nbrChambre INTEGER NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-- Table Personnel
CREATE TABLE Personnel (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Table Client
CREATE TABLE Client (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    tel VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Table Chambre
CREATE TABLE Chambre (
    id SERIAL PRIMARY KEY,
    nbLit INTEGER NOT NULL,
    prix FLOAT NOT NULL CHECK (prix >= 0),
    style VARCHAR(255) NOT NULL,
    etat VARCHAR(255) NOT NULL,
    hotelId INTEGER REFERENCES Hotel(id) ON DELETE CASCADE
);

-- Table Reservation
CREATE TABLE Reservation (
    id SERIAL PRIMARY KEY,
    jourArr DATE NOT NULL,
    nbJours INTEGER NOT NULL,
    jourDep DATE NOT NULL,
    reservation VARCHAR(255) NOT NULL,
    clientId INTEGER REFERENCES Client(id) ON DELETE SET NULL,
    chambreId INTEGER REFERENCES Chambre(id) ON DELETE SET NULL,
    personnelId INTEGER REFERENCES Personnel(id) ON DELETE SET NULL
);

-- Table Paiement
CREATE TABLE Paiement (
    id SERIAL PRIMARY KEY,
    montant FLOAT NOT NULL CHECK (montant >= 0),
    date DATE NOT NULL,
    motif VARCHAR(255) NOT NULL,
    reservationId INTEGER REFERENCES Reservation(id) ON DELETE CASCADE
);
