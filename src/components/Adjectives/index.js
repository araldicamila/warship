import { ContainerAdjectives } from "./styles";

const Adjectives = () => {
  return (
    <ContainerAdjectives>
      <button>Preço</button>
      <button>Altura</button>
      <button>Comprimento</button>
      <button>Largura</button>
      <button>Velocidade</button>

      <button className="button-combat">COMBATER</button>
    </ContainerAdjectives>
  );
};

export default Adjectives;
