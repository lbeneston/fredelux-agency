import { ContactLink } from '../../components/contactLink/ContactLink'
import { Section } from '../../components/section/Section'
import { useScrollToTop } from '../../helpers/useScrollToTop'

export const SoundDesign = () => {
  useScrollToTop()

  return (
    <Section
      headerTitle="Sound Design"
      headerIllustration={{ jpg: 'radio.jpg', webp: "radio.webp" }}
      descriptionTitle="La musique, n’est-ce pas l’élément le plus important pour assurer une ambiance sonore conviviale ou survoltée ?"
      descriptionParagraphe={`Chez nous, à la Fredelux Agency, la musique fait partie de notre patrimoine, notre culture musicale est un atout majeur pour la création d’un contenu riche et varié qui répondra au plus juste à vos demandes, une composition sur-mesure, en adéquation avec vos valeurs.
                
                Originalité et Authenticité représentent les deux ingrédients que l’agence souhaite transposer en musique. Nous construisons des concepts et des outils qui sont faits pour durer, capables d’évoluer et de s’adapter dans le temps.
                
                Que vous soyez à la recherche d’un habillage sonore ou d’une playlist musicale, notre équipe dispose de toutes les compétences requises pour vous apporter la solution adaptée à votre requête. Personnaliser la relation avec les clients en proposant une expérience unique et individuelle, un enjeu que nous intégrons dans notre stratégie de communication.
                
                Nous contacter :`}
      option={< ContactLink subject="Sound Design" />}
    />
  )
}
