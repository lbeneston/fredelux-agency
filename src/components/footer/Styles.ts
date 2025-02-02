import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterComponent = styled.footer`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 50px;
  background-color: ${colors.anthraciteGrey};
  color: ${colors.softGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 30px 0;
    z-index: 25;
    position: relative;
    margin-bottom: 0vh;
    flex-direction: row;
  }

  .footer_socials {
    display: flex;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      position: absolute;
      width: fit-content;
      right: 2.5%;
      top: 30px;
      height: 37.5px;
      margin-right: 5%;
    }
  }

  .footer_tel {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px 5% 5px;
    font-size: 1rem;

    @media (min-width: 768px) {
      justify-content: flex-start;
      padding: 5px 5%;
    }

    & > * {
      padding: 0 15px;

      &:hover {
        text-decoration: underline;
      }

      @media (min-width: 768px) {
        padding: 0 15px 0 0;
      }
    }
  }

  .footer_adresse {
    padding: 5px 5%;
    font-size: 1rem;
  }

  .footer_mail {
    padding: 5px 5%;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer_copyright {
    padding: 15px 0 0;
    font-size: 0.75rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
      position: absolute;
      right: 2.5%;
      padding: 20px 0 5px;
      height: 37.5px;
      display: flex;
      align-items: flex-end;
      bottom: 30px;
      margin-right: 5%;
    }
  }

  .adresseBalise {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 50%;
      text-align: left;
      margin-left: 5%;
    }
  }
`
