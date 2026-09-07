import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LogoFA } from '../../svg/LogoFA'
import { LogoWrapper, NavWrapper } from './Styles'
import { Burger } from '../burger/Burger'

export const Nav = () => {
  const [topPosition, setTopPosition] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setTopPosition(window.scrollY === 0)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (location.pathname === '/') {
    return (
      <NavWrapper $topPosition={topPosition}>
        <LogoWrapper to="/">
          <LogoFA />
        </LogoWrapper>

        <Burger />
      </NavWrapper>
    )
  }

  return (
    <NavWrapper $topPosition={false}>
      <LogoWrapper to="/">
        <LogoFA />
      </LogoWrapper>

      <Burger />
    </NavWrapper>
  )
}
