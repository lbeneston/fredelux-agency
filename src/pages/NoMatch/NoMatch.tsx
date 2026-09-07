import { useNavigate } from 'react-router-dom'
import { NoMatchContainer, Title, Description, ButtonHome } from './Styles'

export const NoMatch = () => {
  const navigate = useNavigate()
  const returnHome = () => navigate('/')

  return (
    <NoMatchContainer>
      <Title>404</Title>
      <Description>Oops, la page demandée n'a pas été trouvée...</Description>
      <ButtonHome onClick={returnHome}>
        <span>&#10094;</span>
        Revenir à la page d'accueil
      </ButtonHome>
    </NoMatchContainer>
  )
}
