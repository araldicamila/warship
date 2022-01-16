import { ScoreContainer, ScoreContainerResult } from "./styles";

const Score = ({ scoreOne, scoreTwo, theme }) => {
  return (
    <ScoreContainer>
      <ScoreContainerResult theme={theme}>
        <p>{scoreOne}</p>
      </ScoreContainerResult>
      <span>vs</span>
      <ScoreContainerResult theme={theme === "red" ? "blue" : "red"}>
        <p>{scoreTwo}</p>
      </ScoreContainerResult>
    </ScoreContainer>
  );
};

export default Score;
