import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Agency } from './pages/Agency/Agency'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agency />} />
    </Routes>
  )
}
