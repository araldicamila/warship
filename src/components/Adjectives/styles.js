import styled from "styled-components";
import media from "styled-media-query";
import { Fonts } from "../../styles/variables";

export const ContainerAdjectives = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${media.lessThan("small")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    gap: 0.56rem;

    max-width: 95%;
  `}

  button {
    border: 1px solid var(--white);
    background-color: transparent;
    color: var(--white);
    ${Fonts.Oswald.medium};
    width: 110px;

    padding: 0.5rem 0;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;

    ${media.lessThan("small")`
      padding: 0.2rem;
      width: 90px;
    `}

    &:hover {
      border: 1px solid var(--yellow);
      color: var(--yellow);
    }
  }

  .button-combat {
    border-color: var(--yellow);
    color: var(--yellow);

    ${Fonts.Oswald.bold24}
    width: 139px;
    margin-top: 40px;

    padding: 0.3rem 0;

    ${media.lessThan("small")`
      margin-top: 1rem;
    `}
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${media.lessThan("small")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    gap: 0.56rem;
  `}
`;
