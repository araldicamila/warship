import styled from "styled-components";
import media from "styled-media-query";
import { Colors, Fonts } from "../../styles/variables";

export const ContainerModalRules = styled.div`
  ${media.greaterThan("large")`
    width: 522px;
  `}

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      ${Fonts.Oswald.semi24};
      color: ${Colors.yellow};

      letter-spacing: 0;

      margin-left: 0.5rem;
    }

    margin-bottom: 2.62rem;
  }

  p {
    color: ${Colors.white};

    text-align: justify;
  }
`;
