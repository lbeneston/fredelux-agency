import { ContactLink } from '../../components/contactLink/ContactLink'
import { Section } from '../../components/section/Section'

export const Agency = () => {
    return (
        <Section
            headerTitle="L'agence"
            headerIllustration={`${process.env.PUBLIC_URL}/images/ballons.jpg`}
            descriptionTitle="Qui sommes-nous ?"
            descriptionParagraphe={`C’est le fruit d’une longue réflexion et d’une grande volonté de vous faire atteindre l’excellence. Nous sommes prestataires de services, spécialisés dans la conception et l’organisation d’événements.
        
        Confiez-nous vos projets, nous saurons vous apporter la solution la plus adaptée à vos besoins grâce à notre équipe d’experts aux compétences indispensables à la réussite de votre événement. Nos services s’adressent aux professionnels (entreprises, hôtelleries...) aussi bien qu’aux particuliers.
        
        Nous vous accompagnerons tout au long de votre projet, et vous proposerons d’écrire ensemble le cahier des charges le plus adapté à vos besoins. Nous faisons preuve d’une grande flexibilité ainsi que d’une écoute attentive.
        
        Nous contacter :`}
            option={<ContactLink subject="Demande d'informations" />}
        />
    )
}
