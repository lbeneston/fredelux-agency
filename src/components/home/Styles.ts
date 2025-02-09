import { styled } from 'styled-components'
import { colors } from '../../styles/colors'

export const HomeComponent = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${colors.anthraciteGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .home_illustration {
    position: absolute;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
  }

  @keyframes apparition {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
    }
  }

  .home_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: apparition 3s ease-in-out;

    .home_title_h1 {
      color: ${colors.offWhite};
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      font-family: 'LogoFont';
      font-size: 4rem;
      line-height: 4rem;
      letter-spacing: 1rem;
      text-shadow: 0 0 10px ${colors.black};

      @media (min-width: 768px) {
        font-size: 8rem;
        line-height: 5rem;
      }
    }

    .home_title_span {
      letter-spacing: 0.25rem;
      font-size: 2rem;
      text-shadow: 0 0 10px ${colors.black};

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
  }
`
