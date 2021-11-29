import styled from "styled-components";
import { Fonts } from "../../styles/variables";

export const FactionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
    min-width: 680px;
  }

  .factions-choose {
    color: var(--yellow);

    ${Fonts.Oswald.bold24};
    text-transform: uppercase;
    margin-top: 5rem;
  }
`;
