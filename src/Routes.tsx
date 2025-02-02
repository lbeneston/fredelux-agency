import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { NoMatch } from './pages/NoMatch/NoMatch'
import { SoundDesign } from './pages/SoundDesign/SoundDesign'
import Booking from './pages/Booking/Booking'
import { DjCard } from './pages/DJCard/DJCard'
import { Contact } from './pages/Contact/Contact'
import { Agency } from './pages/Agency/Agency'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agency />} />
      <Route path="/sound-design" element={<SoundDesign />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/:url_name" element={<DjCard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
