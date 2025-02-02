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
          <h2>Accueil</h2>
        </CustomLink>
        <CustomLink
          to="/agence"
          onClick={switchOpen}
          active={location.pathname === '/agence'}
        >
          <h2>L'agence</h2>
        </CustomLink>
        <CustomLink
          to="/booking"
          onClick={switchOpen}
          active={location.pathname === '/booking'}
        >
          <h2>Booking DJ</h2>
        </CustomLink>
        <CustomLink
          to="/sound-design"
          onClick={switchOpen}
          active={location.pathname === '/sound-design'}
        >
          <h2>Sound Design</h2>
        </CustomLink>
        <CustomLink
          to="/contact"
          onClick={switchOpen}
          active={location.pathname === '/contact'}
        >
          <h2>Nous contacter</h2>
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
