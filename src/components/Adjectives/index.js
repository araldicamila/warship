import { ContainerAdjectives, ContainerButtons } from "./styles";

const Adjectives = () => {
  return (
    <ContainerAdjectives>
      <ContainerButtons>
        <button>Preço</button>
        <button>Altura</button>
        <button>Comprimento</button>
        <button>Largura</button>
        <button>Velocidade</button>
      </ContainerButtons>

      <button className="button-combat">COMBATER</button>
    </ContainerAdjectives>
  );
};

export default Adjectives;
