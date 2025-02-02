import { styled } from 'styled-components'
import { colors } from '../../styles/colors'

export const NoMatchContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.anthraciteGrey};
`

export const Title = styled.h2`
  color: ${colors.offWhite};
  font-size: 5rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 8rem;
  }
`

export const Description = styled.h3`
  color: ${colors.offWhite};
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`

export const ButtonHome = styled.button`
  padding: 12px 20px;
  border: none;
  background-color: ${colors.grey};
  color: ${colors.offWhite};
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;

  span {
    margin-right: 10px;
  }
`
