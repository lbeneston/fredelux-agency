import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Agency } from './pages/Agency/Agency'
import { SoundDesign } from './pages/SoundDesign/SoundDesign'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agency />} />
      <Route path="/sound-design" element={<SoundDesign />} />
    </Routes>
  )
}
