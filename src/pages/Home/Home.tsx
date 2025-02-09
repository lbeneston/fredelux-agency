import React from 'react'
import { PartenairesCarrousel } from '../../components/partenairesCarrousel/PartenairesCarrousel'
import { Services } from '../../components/services/Services'
import { Agency } from '../Agency/Agency'
import { Contact } from '../Contact/Contact'
import { useScrollToTop } from '../../helpers/useScrollToTop'
import { HomeSection } from '../../components/home/Home'

export const Home = () => {
  useScrollToTop()

  return (
    <React.Fragment>
      <HomeSection />
      <Agency />
      <Services />
      <Contact />
      <PartenairesCarrousel />
    </React.Fragment >
  )
}
