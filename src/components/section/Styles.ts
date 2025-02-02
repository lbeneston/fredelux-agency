import styled from "styled-components";

export const SectionComponent = styled.section<{ id?: string }>`
  background-color: #f4f4f4; /* remplace $off-white */
  white-space: pre-line;

  @media (min-width: 768px) {
    display: flex;
  }

  & .section_header {
    height: 50vh;
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
      height: 100vh;
      width: 40%;
    }

    @media (min-width: 1024px) {
      height: 80vh;
    }

    & .section_header_background {
      width: 100%;
      height: 85%;
      background-color: #333; /* remplace $anthracite-grey */
      position: absolute;

      @media (min-width: 768px) {
        width: 57.5%;
        height: 75%;
        bottom: 0;
      }
    }

    & .section_header_title {
      padding: 10% 0;
      display: flex;
      align-items: center;
      position: absolute;
      height: 85%;
      width: 20%;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-transform: uppercase;
      color: #f4f4f4; /* remplace $off-white */

      @media (min-width: 768px) {
        height: 75%;
        justify-content: center;
        bottom: 0;
        font-size: 1.25rem;
        font-weight: normal;
      }

      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }

    & .section_header_illustration {
      height: 100%;
      width: 75%;
      left: 20%;
      position: absolute;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
      }

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        background-color: #e0e0e0; /* remplace $grey */

        @media (min-width: 768px) {
          height: 75%;
        }
      }
    }
  }

  & .section_description {
    width: 100%;
    padding: 7.5% 7.5% 15%;

    @media (min-width: 768px) {
      width: 60%;
      height: 100vh;
      padding: 0 10% 0 2.5%;
      display: flex;
      align-items: center;
    }

    @media (min-width: 1024px) {
      height: 80vh;
    }

    & .section_description_container {
      height: auto;

      @media (min-width: 768px) {
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      & .section_description_container_title {
        font-size: 1.75rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        margin: 0 0 5% 0;
        padding: 0 7.5% 0 0;
        line-height: 2.5rem;

        @media (min-width: 768px) {
          margin: 0 5% 2.5% 0;
        }

        @media (min-width: 1024px) {
          font-size: 2rem;
        }
      }

      & .section_description_container_paragraphe {
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 2.2rem;
        letter-spacing: 0.2rem;

        @media (min-width: 1024px) {
          font-size: 1.3rem;
          line-height: 2.5rem;
          font-weight: lighter;
        }
      }
    }
  }
`;
