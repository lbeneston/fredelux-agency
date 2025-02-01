import { styled } from "styled-components";

export const SocialNetworkListComponent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: flex-end;

    & > * {
      margin: 5px 0 0 30px;
    }
  }
`;
