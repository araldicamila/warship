import FactionCard from "../FactionCard";
import { FactionsContainer } from "./styles";

const Factions = () => {
  return (
    <FactionsContainer>
      <div className="wrapper">
        <FactionCard name="sith" theme="red" image="images/republic-logo.png" />
        <FactionCard
          name="jedi"
          theme="blue"
          image="images/rebel-alliance-logo.png"
        />
      </div>

      <p className="factions-choose">Escolha um lado</p>
    </FactionsContainer>
  );
};

export default Factions;
