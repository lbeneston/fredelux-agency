import { ContactForm } from '../../components/contactForm/ContactForm'
import { Section } from '../../components/section/Section'
import { useScrollToTop } from '../../helpers/useScrollToTop'

export const Contact = () => {
  useScrollToTop()

  return (
    <Section
      headerTitle="Contact"
      headerIllustration={{ jpg: "contact.jpg", webp: "contact.webp" }}
      descriptionTitle="Comment nous contacter ?"
      descriptionParagraphe="Vous avez un projet et souhaitez bénéficier de notre expérience pour que la réalisation soit une belle réussite ? N’hésitez pas à nous faire une demande de rendez-vous afin que vos idées se concrétisent au mieux."
      option={<ContactForm />}
    />
  )
}
