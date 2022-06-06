import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import Adjectives from "../Adjectives";
import Cards from "../Cards";
import Score from "../Score";
import { BoardGameContainer, WrapperCards } from "./styles";

const BoardGame = () => {
  const { theme } = useTheme();

  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);

  const [selectedAdjetive, setSelectedAdjetive] = useState();

  return (
    <BoardGameContainer>
      <h1>Choose one adjective:</h1>

      <WrapperCards>
        <Cards theme={theme} player="You" />
        <Adjectives
          setAdjective={setSelectedAdjetive}
          adjective={selectedAdjetive}
        />
        <Cards theme={theme === "red" ? "blue" : "red"} player="Computer" />
      </WrapperCards>

      <Score theme={theme} scoreOne={scoreOne} scoreTwo={scoreTwo} />
    </BoardGameContainer>
  );
};

export default BoardGame;
