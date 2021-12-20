import styled from "styled-components";
import media from "styled-media-query";
import { Effects, Fonts } from "../../styles/variables";

export const CardsContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    ${Fonts.Oswald.semi24};
    color: var(--yellow);
    margin-bottom: 1.5rem;
    letter-spacing: 0;
  }
`;

export const CardsContainer = styled.div`
  width: 200px;
  height: 360px;

  ${Effects.blackImage};
  ${({ theme }) => (theme === "red" ? Effects.red : Effects.blue)};

  border-radius: 0.5rem;
  border: 1px solid var(--white);

  display: flex;
  flex-direction: column;
  padding: 1rem;

  color: var(--white);

  h2 {
    ${Fonts.StarJedi.reg12};
  }

  img {
    width: 127px;

    margin: 0 auto;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 0.8rem;

  p {
    ${Fonts.Oswald.ligth24};
    color: var(--white) !important;
  }

  b {
    ${Fonts.Oswald.medium};
    color: var(--white);
  }
`;
