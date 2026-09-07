import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home/Home'

const PageTwo = () => (
  <div>
    <h1>PAGE 2</h1>
    <Link to="/">Retour à la page 1</Link>
  </div>
)

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<PageTwo />} />
    </Routes>
  )
}
