import { ContactForm } from '../../components/contactForm/ContactForm'
import { Section } from '../../components/section/Section'

export const Contact = () => {
    return (
        <Section
            headerTitle="Contact"
            headerIllustration={`${process.env.PUBLIC_URL}/images/contact.jpg`}
            descriptionTitle="Comment nous contacter ?"
            descriptionParagraphe="Vous avez un projet et souhaitez bénéficier de notre expérience pour que la réalisation soit une belle réussite ? N’hésitez pas à nous faire une demande de rendez-vous afin que vos idées se concrétisent au mieux."
            option={<ContactForm />}
        />
    )
}
