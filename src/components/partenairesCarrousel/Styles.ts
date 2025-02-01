import styled from "styled-components";

export const PartenairesCarrouselComponent = styled.section`
  width: 100%;
  height: 80vh;
  background-color: #333; /* Remplace $anthracite-grey */
  display: flex;
  align-items: center;

  .partenaires_container {
    margin-top: 15%;
    height: 90%;
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
      margin-top: 7.5%;
    }

    .partenaires_container_buttons {
      position: absolute;
      bottom: 10%;
      right: 7.5%;
      width: 72.5%;
      height: 7.5%;
      padding: 0 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #bbb; /* Remplace $middle-grey */
      font-size: 1.5rem;

      @media (min-width: 768px) {
        display: none;
      }

      button {
        height: 70%;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: #bbb; /* Remplace $middle-grey */
        font-size: 2rem;
        padding: 0 30px;
      }
    }

    .partenaires_container_background {
      height: 90%;
      width: 30%;
      background-color: #888; /* Remplace $grey */
      position: absolute;

      @media (min-width: 768px) {
        width: 22.5%;
      }
    }

    .partenaires_container_title {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 90%;
      width: 20%;
      font-size: 2rem;
      letter-spacing: 0.25rem;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-transform: uppercase;
      color: #f4f4f4; /* Remplace $off-white */

      @media (min-width: 768px) {
        width: 7.5%;
        font-size: 1.25rem;
      }

      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }

    .partenaires_container_carrousel {
      height: 75%;
      width: 72.5%;
      position: absolute;
      right: 7.5vw;
      top: 7.5%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      overflow: hidden;

      @media (min-width: 768px) {
        width: 85%;
        right: 7.5vw;
      }

      .partenaires_container_carrousel_slide {
        height: 100%;
        width: 100%;
        transition: 0.25s;
        background-color: #bbb; /* Remplace $middle-grey */

        @media (min-width: 768px) {
          width: auto;
          margin-right: 2.5%;
        }
      }
    }
  }
`;
