import styled from "styled-components";
import { Fonts } from "../../styles/variables";

export const ContainerAdjectives = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    border: 1px solid var(--white);
    background-color: transparent;
    color: var(--white);
    ${Fonts.Oswald.medium};
    width: 110px;

    padding: 0.7rem 0;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border: 1px solid var(--yellow);
      color: var(--yellow);
    }
  }
`;
