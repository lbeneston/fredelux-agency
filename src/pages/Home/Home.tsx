import React from "react";
import { PartenairesCarrousel } from "../../components/partenairesCarrousel/PartenairesCarrousel";
import { Section } from "../../components/section/Section";
import { Services } from "../../components/services/Services";
import { HomeComponent } from "./Styles";

export const Home = () => {
  return (
    <React.Fragment>
      <HomeComponent>
        <img
          className="home_illustration"
          src={`${process.env.PUBLIC_URL}/images/service_sound_design.jpg`}
          alt="Un vieux tourne disque illustrant la page d'accueil"
        />
        <div className="home_title">
          <h1 className="home_title_h1">
            Fredelux <span className="home_title_span">Agency</span>
          </h1>
        </div>
      </HomeComponent>
      <Section
        id="agence"
        headerTitle="L'agence"
        headerIllustration={`${process.env.PUBLIC_URL}/images/ballons.jpg`}
        descriptionTitle="Qui sommes-nous ?"
        descriptionParagraphe={`C’est le fruit d’une longue réflexion et d’une grande volonté de vous faire atteindre l’excellence. Nous sommes prestataires de services, spécialisés dans la conception et l’organisation d’événements.
        
        Confiez-nous vos projets, nous saurons vous apporter la solution la plus adaptée à vos besoins grâce à notre équipe d’experts aux compétences indispensables à la réussite de votre événement. Nos services s’adressent aux professionnels (entreprises, hôtelleries...) aussi bien qu’aux particuliers.
        
        Nous vous accompagnerons tout au long de votre projet, et vous proposerons d’écrire ensemble le cahier des charges le plus adapté à vos besoins. Nous faisons preuve d’une grande flexibilité ainsi que d’une écoute attentive.
        
        Nous contacter :`}
        descriptionParagrapheOption={
          <a href="mailto:contact@fredeluxagency.com">
            contact@fredeluxagency.com
          </a>
        }
      />
      <Services />
      <Section
        id="contact"
        headerTitle="Contact"
        headerIllustration={`${process.env.PUBLIC_URL}/images/contact.jpg`}
        descriptionTitle="Comment nous contacter ?"
        descriptionParagraphe={`Vous avez un projet et souhaitez bénéficier de notre expérience pour que la réalisation soit une belle réussite ? N’hésitez pas à nous faire une demande de rendez-vous afin que vos idées se concrétisent au mieux.
        
        Nous contacter à l'adresse mail suivante :`}
        descriptionParagrapheOption={
          <a href="mailto:contact@fredeluxagency.com">
            contact@fredeluxagency.com
          </a>
        }
      />
      <PartenairesCarrousel />
    </React.Fragment>
  );
};
