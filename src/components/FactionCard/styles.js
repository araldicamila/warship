import styled, { css } from "styled-components";
import media from "styled-media-query";
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

  ${media.lessThan("small")`
    width: 140px;
    height: 160px;
  `}

  ${({ theme }) => themes(theme)};

  img {
    width: 130px;

    ${media.lessThan("small")`
      width: 80px;
    `}
  }

  p {
    ${Fonts.Oswald.bold54};
    color: var(--white);
    text-transform: capitalize;

    ${media.lessThan("small")`
      font-size: ${Fonts.Oswald.bold24};
    `}
  }

  &:hover {
    ${({ theme }) => themeHover(theme)};
  }
`;
