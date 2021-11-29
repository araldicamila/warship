import styled from "styled-components";
import { Fonts } from "../../styles/variables";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 10rem;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.68rem;
    }

    span {
      ${Fonts.Oswald.reg24};
      color: var(--yellow);
    }
  }
`;
