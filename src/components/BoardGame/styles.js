import styled from "styled-components";

import { Fonts } from "../../styles/variables";

export const BoardGameContainer = styled.div`
  width: 1023px;

  h1 {
    color: var(--yellow);
    ${Fonts.Oswald.bold24};

    margin-bottom: 2.5rem;
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;
