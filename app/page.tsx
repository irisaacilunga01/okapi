import React from "react";
import "./index.css";
import Link from "next/link";
import Image from "next/image";
function Page() {
  return (
    <main>
      <header>
        <nav>
          <div className="nav_logo">
            <a href="#">
              <Image
                width={240}
                height={240}
                src="/image/okapi.png"
                alt="okapi Logo"
              />
              <h2>Okapi</h2>
            </a>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click">
            <i className="menu_btn bx bx-menu"></i>
            <i className="close_btn bx bx-x"></i>
          </label>
          <ul>
            <li>
              <a href="#">Acceuil</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#service">Equipe</a>
            </li>
            <li>
              <a href="#why">Services</a>
            </li>
            <li>
              <a href="#gallery">Chambres</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <!-- Hero Section --> */}
      <section className="hero_section">
        <div className="section_container">
          <div className="hero_container">
            <div className="text_section">
              <h2>Le répos est sacré!</h2>
              <h3>Et constitue de votre bien-être.</h3>
              <p>
                Découvrez le Guest House OKAPI, un havre de paix situé au cœur
                de Likasi, République Démocratique du Congo. Nous offrons des
                séjours confortables avec un service attentionné pour vous
                garantir une expérience inoubliable. Que vous soyez en voyage
                d&apos;affaires ou en vacances, notre établissement vous
                accueille avec chaleur et professionnalisme.
              </p>
              <div className="hero_section_button">
                <Link href="/dashboard">
                  <button className="button">Reservez chambre</button>
                </Link>
                <Link href="/dashboard">
                  <button className="button">Se connecter</button>
                </Link>
              </div>
            </div>
            <div className="image_section">
              <Image
                width={1000}
                height={1000}
                src="/image/okapi.png"
                alt="Okapi"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Section --> */}
      <section className="about_us" id="about">
        <div className="section_container">
          <div className="about_container">
            <div className="text_section">
              <h2 className="section_title text-black">A propos de nous!</h2>
              <p className="text-[#1b1b1b]">
                Le Guest House OKAPI est dédié à offrir un hébergement de
                qualité dans un cadre paisible et accueillant. Situé à Likasi,
                nous nous engageons à fournir un service exceptionnel et un
                confort optimal pour tous nos clients. Notre équipe passionnée
                veille à répondre à vos besoins avec attention et efficacité.{" "}
                <br />
                Venez découvrir notre hospitalité unique!
              </p>
            </div>
            <div className="image_section">
              <Image
                width={240}
                height={240}
                src="/image/carte.png"
                alt="coffee"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section --> */}
      <section className="services" id="service">
        <h2 className="section_title">Nos Agents</h2>
        <div className="section_container">
          <div className="service_container">
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/directeur.png"
                className="w-60 h-60 object-cover"
                alt="directeur logo"
              />
              <div className="services_text">
                <h3>Le Directeur</h3>
                <p>
                  Supervise toutes les opérations de l’établissement pour
                  garantir la satisfaction des clients et le bon fonctionnement
                  global.
                </p>
              </div>
            </div>
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/gérant.png"
                className="w-60 h-60 object-cover"
                alt="le gérant"
              />
              <div className="services_text">
                <h3>Le Gérant</h3>
                <p>
                  Assiste le directeur dans la gestion quotidienne de
                  l’établissement, en veillant à la qualité du service et à la
                  coordination des équipes.
                </p>
              </div>
            </div>
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/tec.png"
                alt="technicien"
                className="w-60 h-60 object-cover"
              />
              <div className="services_text">
                <h3>Technicien</h3>
                <p>
                  Assure le bon fonctionnement des installations et équipements,
                  ainsi que leur sécurité, pour une expérience sans souci.
                </p>
              </div>
            </div>
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/special_combos.png"
                alt="Special Combos"
                className="w-60 h-60 object-cover"
              />
              <div className="services_text">
                <h3>Receptionniste</h3>
                <p>
                  Offre un accueil chaleureux, gère les réservations et fournit
                  des informations utiles pour une expérience sans accroc.
                </p>
              </div>
            </div>
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/men.png"
                alt="menage"
                className="w-60 h-60 object-cover"
              />
              <div className="services_text">
                <h3>Femme de ménage</h3>
                <p>
                  Garantie la propreté et le confort des chambres ainsi que des
                  espaces communs, assurant un environnement agréable pour nos
                  clients.
                </p>
              </div>
            </div>
            <div className="services_items">
              <Image
                width={240}
                height={240}
                src="/image/secu.png"
                alt="sécurité"
              />
              <div className="services_text">
                <h3>Securité</h3>
                <p>
                  Veille à la sécurité des clients, du personnel et des biens de
                  l’établissement, garantissant un environnement sûr et serein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why Us Section --> */}
      <section className="why_us" id="why">
        <h2 className="section_title">Nos services</h2>
        <div className="section_container">
          <div className="why_container">
            <div className="why_items">
              <Image
                width={240}
                height={240}
                src="/image/delicious.png"
                alt="Delicious"
              />
              <div className="why_us_text">
                <h3>Réservations</h3>
                <p>
                  Nous proposons des chambres confortables adaptées à vos
                  besoins, avec des options pour tous les budgets. Réservez
                  directement pour garantir les meilleures offres.
                </p>
              </div>
            </div>
            <div className="why_items">
              <Image
                width={240}
                height={240}
                src="/image/net.png"
                alt="Pleasant"
              />
              <div className="why_us_text">
                <h3>Nettoyage quotidien</h3>
                <p>
                  Nos services de ménage assurent que votre chambre reste
                  impeccable tout au long de votre séjour, offrant une propreté
                  et un confort continus.
                </p>
              </div>
            </div>
            <div className="why_items">
              <Image
                width={240}
                height={240}
                src="/image/24.png"
                alt="Hospitality"
              />
              <div className="why_us_text">
                <h3>Assistance 24/7</h3>
                <p>
                  Notre réception est disponible à toute heure pour répondre à
                  vos questions, gérer vos demandes et assurer un séjour
                  agréable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Gallery Section --> */}
      <section className="gallery" id="gallery">
        <h2 className="section_title">Chambres</h2>
        <div className="section_container">
          <div className="gallery_container">
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/chambre.jfif"
                alt="Gallery Image"
              />
            </div>
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/lit double.jfif"
                alt="Gallery Image"
              />
            </div>
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/chambre2.jfif"
                alt="Gallery Image"
              />
            </div>
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/chambre3.jfif"
                alt="Gallery Image"
              />
            </div>
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/chambre4.jfif"
                alt="Gallery Image"
              />
            </div>
            <div className="gallery_items">
              <Image
                width={240}
                height={240}
                src="/image/chambre6.jfif"
                alt="Gallery Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer Section --> */}
      <footer>
        <div className="section_container">
          <div className="footer_section">
            <div className="footer_logo">
              <a href="index.html">
                <Image
                  width={240}
                  height={240}
                  src="/image/okapi.png"
                  alt="Coffee Logo"
                />
                <h2>Okapi</h2>
              </a>
            </div>
            <div className="useful_links">
              <h3>Liens du site</h3>
              <ul>
                <li>
                  <a href="#">Acceuil</a>
                </li>
                <li>
                  <a href="#about">A propos</a>
                </li>
                <li>
                  <a href="#service">Equipe</a>
                </li>
                <li>
                  <a href="#why">Services</a>
                </li>
                <li>
                  <a href="#gallery">Chambres</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="contact_us">
              <h3>Nous Contacter</h3>
              <ul>
                <li>
                  <i className="bx bx-current-location"></i>
                  <span>22, av.Kapata/Kapumpi</span>
                </li>
                <li>
                  <i className="bx bxs-phone-call"></i>
                  <span>+243 99 00 00 000</span>
                </li>
                <li>
                  <i className="bx bxs-time-five"></i>
                  <span>24h/24 & 7j/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Page;
