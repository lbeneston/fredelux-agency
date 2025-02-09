import { useState } from 'react'
import {
  RightNav,
  BurgerClose,
  CloseBar,
  BurgerWrapper,
  Bar,
  CustomLink,
} from './Styles'
import { useLocation } from 'react-router-dom'
import React from 'react'

export const Burger = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const switchOpen = () => setOpen(!open)

  return (
    <React.Fragment>
      <RightNav show={open}>
        <CustomLink
          to="/"
          onClick={switchOpen}
          active={location.pathname === '/'}
        >
          Accueil
        </CustomLink>
        <CustomLink
          to="/agence"
          onClick={switchOpen}
          active={location.pathname.startsWith('/agence')}
        >
          L'agence
        </CustomLink>
        <CustomLink
          to="/booking"
          onClick={switchOpen}
          active={location.pathname.startsWith('/booking')}
        >
          Booking DJ
        </CustomLink>
        <CustomLink
          to="/sound-design"
          onClick={switchOpen}
          active={location.pathname.startsWith('/sound-design')}
        >
          Sound Design
        </CustomLink>
        <CustomLink
          to="/contact"
          onClick={switchOpen}
          active={location.pathname.startsWith('/contact')}
        >
          Nous contacter
        </CustomLink>
      </RightNav>

      {open ? (
        <BurgerClose onClick={switchOpen}>
          <CloseBar rotate />
          <CloseBar />
        </BurgerClose>
      ) : (
        <BurgerWrapper onClick={switchOpen}>
          <Bar height="25%" hoverHeight="75%" />
          <Bar height="75%" hoverHeight="50%" />
          <Bar height="50%" hoverHeight="100%" />
          <Bar height="100%" hoverHeight="50%" />
        </BurgerWrapper>
      )}
    </React.Fragment>
  )
}
