import styled from "styled-components";
import { Effects } from "../../styles/variables";

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 99;

  background-color: rgba(51, 51, 51, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  padding: 2.12rem;

  ${Effects.blackImage};
  border-radius: 30px;

  position: relative;
  z-index: 100;
`;
