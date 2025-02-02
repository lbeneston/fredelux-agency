import { FREDELUX_AGENCY_EMAIL } from '../../constants/constants'
import { SocialNetworkList } from '../socialNetworkList/SocialNetworkList'
import { FooterComponent } from './Styles'

export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <FooterComponent>
      <div className="footer_socials">
        <SocialNetworkList />
      </div>
      <address className="adresseBalise">
        <div className="footer_tel">
          <a href="tel:+33634648754"> +33 (0) 6 34 64 87 54 </a>
          <a href="tel:+33177133914"> +33 (0) 1 77 13 39 14 </a>
        </div>
        <h3 className="footer_adresse">
          34 rue du Faubourg Saint-Honorée 75008 Paris
        </h3>
        <a href={`mailto:${FREDELUX_AGENCY_EMAIL}`} className="footer_mail">
          {FREDELUX_AGENCY_EMAIL}
        </a>
      </address>
      <h4 className="footer_copyright">
        Copyright&#x00A9; {date} Fredelux Agency
      </h4>
    </FooterComponent>
  )
}
