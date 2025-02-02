import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles/colors'
import { Link } from 'react-router-dom'

interface BarProps {
  height: string
  hoverHeight: string
}

interface RightNavProps {
  show: boolean
}

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

export const BurgerWrapper = styled.div`
  height: 40%;
  width: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  transition: 1s;
  animation: ${opacity} 1s ease-in-out;
  outline: none;
`

export const Bar = styled.div<BarProps>`
  background-color: ${colors.offWhite};
  width: 2px;
  transition: 0.5s;
  height: ${(props) => props.height};

  ${BurgerWrapper}:hover & {
    height: ${(props) => props.hoverHeight};
  }
`

export const BurgerClose = styled.div`
  height: 40%;
  width: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  outline: none;
`

export const CloseBar = styled.div<{ rotate?: boolean }>`
  width: 2px;
  background-color: ${colors.offWhite};
  position: absolute;
  top: -5px;
  height: 30px;
  right: 11px;
  animation: ${opacity} 1.5s ease-in-out;
  transform: ${(props) => (props.rotate ? 'rotate(135deg)' : 'rotate(45deg)')};
`

export const RightNav = styled.div<RightNavProps>`
  background-color: ${(props) =>
    props.show ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 20vh 10vw 5vh;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transform: ${(props) => (props.show ? 'translateX(0%)' : 'translateX(100%)')};
  transition: 0.5s ease-in-out;

  a {
    animation: ${(props) => (props.show ? slideIn : 'none')} 1s ease-in-out;
  }
`

export const CustomLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  /* Style spécial pour le lien actif */
  ${({ active }) =>
    active &&
    `
      font-weight: bold;
      color: #ffcc00; // Couleur spéciale pour lien actif
  `}
`
