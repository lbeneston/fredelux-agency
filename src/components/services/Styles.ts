import { styled } from "styled-components";

export const ServicesComponent = styled.section`
  width: 100%;
  height: 92.5vh;

  @media (min-width: 768px) {
    display: flex;
    height: 80vh;
  }

  .services_box {
    width: 100%;
    height: 50%;
    background-color: #333; /* remplace $anthracite-grey */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;

    &:hover {
      .services_box_illustration {
        filter: grayscale(0%) brightness(75%);
      }

      .services_box_title h2 {
        transform: scale(1.1);
      }

      .services_box_title p {
        display: block;
        opacity: 1;
        margin-top: 15px;
        font-size: 1.25rem;
      }
    }

    @media (min-width: 768px) {
      width: 50%;
      height: 100%;
    }
  }

  .services_box_illustration {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    filter: grayscale(100%) brightness(75%);
    transition: 0.5s ease-in-out;
  }

  .services_box_title {
    text-align: center;
    text-transform: uppercase;
    color: #f4f4f4; /* remplace $off-white */
    position: absolute;

    & h2 {
      width: 100%;
      font-size: 2rem;
      letter-spacing: 0.75rem;
      text-shadow: 0 0 10px #000; /* remplace $black */
      transition: 0.5s ease-in-out;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }

    & p {
      opacity: 0;
      margin-top: -15px;
      font-size: 0.5rem;
      font-weight: lighter;
      text-shadow: 0 0 10px #000; /* remplace $black */
      transition: 0.5s ease-in-out;
    }
  }
`;
