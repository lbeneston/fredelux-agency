import React from 'react'
import { PartenairesCarrousel } from '../../components/partenairesCarrousel/PartenairesCarrousel'
import { Services } from '../../components/services/Services'
import { HomeComponent } from './Styles'
import { Agency } from '../Agency/Agency'
import { Contact } from '../Contact/Contact'
import { useScrollToTop } from '../../helpers/useScrollToTop'

export const Home = () => {
  useScrollToTop()

  return (
    <React.Fragment>
      <HomeComponent>
        <img
          className="home_illustration"
          src={`${process.env.PUBLIC_URL}/images/service_sound_design.jpg`}
          alt="Un vieux tourne disque illustrant la page d'accueil"
        />
        <div className="home_title">
          <h1 className="home_title_h1">
            Fredelux <span className="home_title_span">Agency</span>
          </h1>
        </div>
      </HomeComponent>
      <Agency />
      <Services />
      <Contact />
      <PartenairesCarrousel />
    </React.Fragment>
  )
}
