import { Link } from 'react-router-dom'
import { HomeSection } from '../../components/home/Home'

export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <HomeSection />
      <Link to="/agence">
        Aller à la page 2
      </Link>
    </div>
  )
}
