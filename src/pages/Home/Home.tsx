import { Link } from 'react-router-dom'
import { HomeSection } from '../../components/home/Home'
import { Services } from '../../components/services/Services'
import { PartenairesCarrousel } from '../../components/partenairesCarrousel/PartenairesCarrousel'
import { Agency } from '../Agency/Agency'

export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <HomeSection />
      <Link to="/agence">Aller à la page "agence"</Link>
      <Link to="/sound-design">Aller à la page "sound-design"</Link>
      <Agency />
      <Services />
      <PartenairesCarrousel />
    </div>
  )
}
