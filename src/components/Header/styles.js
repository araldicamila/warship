import styled from "styled-components";
import media from "styled-media-query";
import { Fonts } from "../../styles/variables";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 10rem;

  .logo {
    ${media.lessThan("medium")`
    width: 83px;
  `}
  }

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    ${media.lessThan("medium")`
      display: none;
    `}

    img {
      margin-right: 0.68rem;
    }

    span {
      ${Fonts.Oswald.reg24};
      color: var(--yellow);
    }

    ${media.lessThan("small")`
      position: absolute;
      bottom: 15px;
      right: 15px;
    `}
  }

  ${media.lessThan("small")`
    padding: 1.5rem 0;

    justify-content: center;
  `}

  ${media.between("medium", "large")`
    padding: 1.5rem 3.43rem;
  `}
`;
