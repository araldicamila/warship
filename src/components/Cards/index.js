import {
  CardsContainer,
  CardsContainerMain,
  ContainerInformation,
  WrapperText,
} from "./styles";

const Cards = ({ theme, player }) => {
  return (
    <CardsContainerMain>
      <h6>{player}</h6>
      <CardsContainer theme={theme}>
        <img src="images/empire.png" />

        <ContainerInformation>
          <h2>Millennium Falcon</h2>

          <WrapperText>
            <p>Preço</p>
            <b>1500,00</b>
          </WrapperText>
          <WrapperText>
            <p>Comprimento</p>
            <b>1500,00</b>
          </WrapperText>
          <WrapperText>
            <p>Largura</p>
            <b>1500,00</b>
          </WrapperText>
          <WrapperText>
            <p>Altura</p>
            <b>1500,00</b>
          </WrapperText>
          <WrapperText>
            <p>Velocidade</p>
            <b>1500,00</b>
          </WrapperText>
        </ContainerInformation>
      </CardsContainer>
    </CardsContainerMain>
  );
};

export default Cards;
