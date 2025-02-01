import { styled } from "styled-components";

export const DjCardContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #333;
  z-index: 26;

  @media (min-width: 768px) {
    background-color: $anthracite-grey; /* Utiliser les couleurs définies dans ton SCSS */
  }
`;

export const DjCardContainerTitle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 10%;
    font-size: 1.25rem;
    letter-spacing: 0.2rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-transform: uppercase;
    color: #f0f0f0;
    font-weight: normal;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const DjCardWrapper = styled.div`
  width: 90%;
  margin: 0 5% 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #333;
  position: relative;

  @media (min-width: 768px) {
    min-width: 80%;
    max-width: 80%;
    max-height: 75vh;
    min-height: 75vh;
    margin: 12.5vh 10%;
    display: flex;
    overflow: hidden;
    position: absolute;
  }
`;

export const DjCardCloseButton = styled.div`
  position: absolute;
  top: 10vw;
  right: 5vw;
  z-index: 50;
  color: #fff;

  @media (min-width: 768px) {
    color: #000;
    top: 30px;
    right: 30px;
  }
`;

export const DjCardHeader = styled.div`
  height: 75vh;
  color: #f0f0f0;
  position: relative;

  @media (min-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
  }
`;

export const DjCardHeaderProfilePicture = styled.img`
  position: absolute;
  min-height: 80%;
  max-height: 80%;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 0.5s ease-in;

  &:hover {
    filter: none;
  }
`;

export const DjCardHeaderInformations = styled.div`
  position: absolute;
  bottom: 17.5%;
  width: 100%;
  padding: 10% 10% 15px;
  display: block;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75) 50%,
    rgba(0, 0, 0, 1)
  );
  color: #f0f0f0;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 10px #000;
  overflow-wrap: break-word;
  hyphens: auto;
`;

export const DjCardHeaderInformationsName = styled.h3`
  letter-spacing: 0.2rem;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const DjCardHeaderInformationsMusicalGenres = styled.div`
  padding: 15px 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DjCardHeaderInformationsMusicalGenresItem = styled.h4`
  padding: 5px;
  margin: 0 5px;
  letter-spacing: 0.15rem;
  font-weight: lighter;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const DjCardHeaderInformationsSocialNetworks = styled.div`
  max-height: 30px;
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DjCardHeaderBookingButton = styled.div`
  position: absolute;
  bottom: 0;
  height: 17.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const DjCardHeaderBookingButtonButton = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  height: 40px;
  padding: 0 25px;
  background-color: #777;
  color: #f0f0f0;
  border: none;
  outline: none;
  margin-bottom: 5%;
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #333;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.5s;
  }
`;

export const DjCardDescription = styled.div`
  background-color: #f0f0f0;
  padding: 7.5%;
  white-space: pre-line;
  overflow-wrap: break-word;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  @media (min-width: 768px) {
    min-width: 60%;
    max-width: 60%;
    min-height: 75vh;
    max-height: 75vh;
    overflow-y: scroll;
    padding: 3.5% 5%;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const DjCardDescriptionTitles = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const DjCardDescriptionTitlesLine = styled.div`
  width: 30px;
  height: 1px;
  margin-bottom: 3px;
  background-color: #333;

  @media (min-width: 768px) {
    width: 50px;
  }
`;

export const DjCardDescriptionTitlesText = styled.h5`
  text-transform: uppercase;
  padding: 10px 0 0 15px;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: bolder;

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const DjCardDescriptionParagraphe = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 2.2rem;
  letter-spacing: 0.2rem;
  margin: 30px 0;

  @media (min-width: 768px) {
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 2.25rem;
    font-weight: lighter;
  }
`;

export const DjCardContactDescription = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 2.2rem;
  letter-spacing: 0.2rem;

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-weight: lighter;
  }
`;

export const DjCardContactDescriptionBold = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  text-transform: uppercase;
  line-height: 2.2rem;
  letter-spacing: 0.2rem;

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-weight: bolder;
  }
`;
