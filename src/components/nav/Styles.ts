import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colors } from '../../styles/colors'

export const NavWrapper = styled.nav<{ $topPosition?: boolean }>`
  height: 50px;
  width: 100%;
  background-color: ${(props) =>
    props.$topPosition ? 'transparent' : colors.anthraciteGrey};
  position: fixed;
  bottom: 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  color: ${colors.offWhite};
  transition: background-color 0.5s;

  @media (min-width: 768px) {
    padding: 0 2.5%;
    top: 0;
  }

  @media (min-width: 1024px) {
    height: 60px;
  }
`

export const LogoWrapper = styled(Link)`
  height: 40%;
  color: ${colors.offWhite};

  & svg {
    height: 100%;
    width: auto;
  }
`
