import { useTheme } from "../../hooks/useTheme";
import Adjectives from "../Adjectives";
import Cards from "../Cards";
import Score from "../Score";
import { BoardGameContainer, WrapperCards } from "./styles";

const BoardGame = () => {
  const { theme } = useTheme();

  return (
    <BoardGameContainer>
      <h1>Escolha uma característica:</h1>

      <WrapperCards>
        <Cards theme={theme} player="Você" />
        <Adjectives />
        <Cards theme={theme === "red" ? "blue" : "red"} player="Computador" />
      </WrapperCards>

      <Score />
    </BoardGameContainer>
  );
};

export default BoardGame;
