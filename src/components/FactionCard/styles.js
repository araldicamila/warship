import styled, { css } from "styled-components";
import { Effects, Fonts, Gradients } from "../../styles/variables";

const themes = (theme) => {
  switch (theme) {
    case "red":
      return css`
        ${Gradients.redDark};
      `;
    default:
      return css`
        ${Gradients.blueDark};
      `;
  }
};

const themeHover = (theme) => {
  switch (theme) {
    case "red":
      return css`
        ${Effects.red};
      `;
    default:
      return css`
        ${Effects.blue};
      `;
  }
};

export const FactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 240px;
  height: 280px;
  border-radius: 30px;
  transition: 0.7s;

  ${({ theme }) => themes(theme)};

  img {
    width: 130px;
  }

  p {
    ${Fonts.Oswald.bold54};
    color: var(--white);
    text-transform: capitalize;
  }

  &:hover {
    ${({ theme }) => themeHover(theme)};
  }
`;
