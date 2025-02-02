import { styled } from 'styled-components'
import { colors } from '../../styles/colors'

export const PartenairesCarrouselComponent = styled.a`
  width: 100%;
  height: 100%;

  &:hover .item_illustration {
    filter: grayscale(0%) brightness(75%);
    transition: 0.5s ease-in-out;
  }

  &:hover .item_description h4 {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  &:hover .item_description p {
    display: block;
    opacity: 1;
    margin-top: 15px;
    font-size: 1.25rem;
    transition: 0.5s ease-in-out;
  }

  .item_illustration {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(75%);
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .item_description {
    width: 100%;
    padding: 12.5% 10%;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: ${colors.offWhite};
    text-transform: uppercase;
    background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75) 50%,
      rgba(0, 0, 0, 1)
    );

    h4 {
      font-size: 1.75rem;
      transition: 0.5s ease-in-out;
      text-shadow: 0 0 10px ${colors.black};
    }

    p {
      opacity: 0;
      font-weight: lighter;
      margin-top: -15px;
      text-shadow: 0 0 10px ${colors.black};
      transition: 0.5s ease-in-out;
    }
  }
`
