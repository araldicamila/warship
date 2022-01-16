import styled from "styled-components";
import media from "styled-media-query";

import { Fonts } from "../../styles/variables";

export const BoardGameContainer = styled.div`
  width: 1023px;

  h1 {
    color: var(--yellow);
    ${Fonts.Oswald.bold24};

    margin-bottom: 2.5rem;

    ${media.lessThan("large")`
      margin-left: 2rem;
    `}

    ${media.lessThan("small")`
      display: none;
    `}
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  ${media.lessThan("small")`
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `}
`;
