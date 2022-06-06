import {
  ContainerAdjectives,
  ContainerButtons,
  ButtonContainer,
} from "./styles";

const Adjectives = ({ setAdjective, adjective }) => {
  return (
    <ContainerAdjectives>
      <ContainerButtons>
        <ButtonContainer
          isSelected={adjective === "Price"}
          onClick={() => setAdjective("Price")}
        >
          Price
        </ButtonContainer>
        <ButtonContainer
          isSelected={adjective === "Height"}
          onClick={() => setAdjective("Height")}
        >
          Height
        </ButtonContainer>
        <ButtonContainer
          isSelected={adjective === "Width"}
          onClick={() => setAdjective("Width")}
        >
          Width
        </ButtonContainer>
        <ButtonContainer
          isSelected={adjective === "Costs"}
          onClick={() => setAdjective("Costs")}
        >
          Costs
        </ButtonContainer>
        <ButtonContainer
          isSelected={adjective === "Velocity"}
          onClick={() => setAdjective("Velocity")}
        >
          Velocity
        </ButtonContainer>
      </ContainerButtons>

      <button className="button-combat">FIGHT</button>
    </ContainerAdjectives>
  );
};

export default Adjectives;
