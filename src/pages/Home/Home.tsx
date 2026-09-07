import { Link } from 'react-router-dom'
import { HomeSection } from '../../components/home/Home'
import { Agency } from '../../components/agency/Agency'

export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <HomeSection />
      <Agency />
      <Link to="/agence">
        Aller à la page 2
      </Link>
    </div>
  )
}
