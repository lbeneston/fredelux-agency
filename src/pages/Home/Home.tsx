import { Link } from 'react-router-dom'
import { PartenairesCarrousel } from '../../components/partenairesCarrousel/PartenairesCarrousel'
import { Services } from '../../components/services/Services'
import { Agency } from '../Agency/Agency'
import { Contact } from '../Contact/Contact'
import { HomeSection } from '../../components/home/Home'

export const Home = () => {
  return (
    <React.Fragment>
      <HomeSection />
      <Agency />
      <Services />
      <Contact />
      <PartenairesCarrousel />
    </div>
  )
}
