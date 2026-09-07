import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { NoMatch } from './pages/NoMatch/NoMatch'
import { SoundDesign } from './pages/SoundDesign/SoundDesign'
import Booking from './pages/Booking/Booking'
import { DjCard } from './pages/DJCard/DJCard'
import { Contact } from './pages/Contact/Contact'
import { Agency } from './pages/Agency/Agency'
import { useEffect } from 'react'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agency />} />
    </Routes>
  )
}
