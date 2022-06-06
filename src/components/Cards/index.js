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
            <p>Price</p>
            <b>1500.00</b>
          </WrapperText>
          <WrapperText>
            <p>Height</p>
            <b>1500.00</b>
          </WrapperText>
          <WrapperText>
            <p>Width</p>
            <b>1500.00</b>
          </WrapperText>
          <WrapperText>
            <p>Costs</p>
            <b>1500.00</b>
          </WrapperText>
          <WrapperText>
            <p>Velocity</p>
            <b>1500.00</b>
          </WrapperText>
        </ContainerInformation>
      </CardsContainer>
    </CardsContainerMain>
  );
};

export default Cards;
