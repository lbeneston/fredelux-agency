import { Routes, Route, Link } from 'react-router-dom'

const TestHome = () => (
  <div>
    <h1>HOME TEST</h1>
    <Link to="/agence">Agence</Link>
  </div>
)

const TestAgency = () => (
  <div>
    <h1>AGENCE TEST</h1>
    <Link to="/">Accueil</Link>
  </div>
)

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TestHome />} />
      <Route path="/agence" element={<TestAgency />} />
    </Routes>
  )
}
