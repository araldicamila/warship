import { CardsContainer, CardsContainerMain, WrapperText } from "./styles";

const Cards = ({ theme, player }) => {
  return (
    <CardsContainerMain>
      <h6>{player}</h6>
      <CardsContainer theme={theme}>
        <img src="https://i.dlpng.com/static/png/1416165--spaceship-png-400_400_preview.png" />

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
      </CardsContainer>
    </CardsContainerMain>
  );
};

export default Cards;
