import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>

      <Link to="/agence">
        Aller à la page 2
      </Link>
    </div>
  )
}
