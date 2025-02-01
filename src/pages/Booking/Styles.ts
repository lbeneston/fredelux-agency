import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const DjsList = styled.div`
  width: 90vw;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #1c1c1c;
  margin-bottom: 50px;
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DjsCard = styled(Link)`
  margin: 1vw;
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 90vw;

  &:hover img {
    filter: none;
    transition: filter 0.5s ease-in-out;
  }

  @media (min-width: 768px) {
    width: 20vw;
  }
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 0.5s ease-in-out;
  height: 30vh;
`;

export const Informations = styled.div`
  width: 100%;
  padding: 1.5vw;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75) 50%,
    rgba(0, 0, 0, 1)
  );
  color: #f5f5f5;
  text-align: center;
  text-transform: uppercase;
`;

export const DJName = styled.h3`
  letter-spacing: 0.2rem;
  font-size: 2rem;
`;

export const MusicalGenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MusicalGenreItem = styled.h4`
  padding: 5px;
  margin: 0 5px;
  letter-spacing: 0.15rem;
  font-weight: lighter;
  font-size: 1.1rem;
`;

export const MusicalGenresWrapper = styled.div`
  width: 90%;
  margin: -20px auto;
  position: relative;
`;

export const GenreTitle = styled.button`
  padding: 0 20px;
  width: 100%;
  height: 50px;
  text-align: left;
  background-color: #2e2e2e;
  color: #f5f5f5;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border: none;
  border-bottom: 3px solid #1c1c1c;
  cursor: pointer;
`;

export const GenreContainer = styled.div<{ open: boolean }>`
  position: absolute;
  width: 100%;
  top: 50px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 50;
  background: #2e2e2e;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GenreButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #2e2e2e;
  color: #f5f5f5;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #1c1c1c;
  }
`;
