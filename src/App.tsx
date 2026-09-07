import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const HomeTest = () => (
  <div>
    <h1>Accueil TEST</h1>
    <Link to="/agence">Aller à Agence</Link>
  </div>
)

const AgencyTest = () => (
  <div>
    <h1>Agence TEST</h1>
    <Link to="/">Retour accueil</Link>
  </div>
)

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTest />} />
        <Route path="/agence" element={<AgencyTest />} />
      </Routes>
    </BrowserRouter>
  )
}
