import styled from "styled-components";
import media from "styled-media-query";
import { Fonts } from "../../styles/variables";

export const ScoreContainer = styled.div`
  border: 1px solid var(--yellow);

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 10px;
  position: relative;

  max-width: 300px;
  margin: auto;

  margin-top: 80px;

  ${media.lessThan("small")`
    margin-top: 2.5rem;
  `}

  &:before {
    content: "CARTAS";
    color: var(--yellow);
    position: absolute;
    ${Fonts.Oswald.semi24};
    letter-spacing: 0;

    background: var(--black);
    background: #000;
    top: -19px;
    padding: 2px 15px;
    left: 98px;
  }

  span {
    ${Fonts.Oswald.reg24};

    color: var(--yellow);
  }
`;

export const ScoreContainerResult = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) =>
    theme === "red" ? "var(--red-dark)" : "var(--blue-dark)"};

  color: var(--white);
  border-radius: 0.5rem;

  p {
    ${Fonts.Oswald.bold54};
  }
`;
