import { ScoreContainer, ScoreContainerResult } from "./styles";

const Score = () => {
  return (
    <ScoreContainer>
      <ScoreContainerResult theme="red">
        <p>20</p>
      </ScoreContainerResult>
      <span>vs</span>
      <ScoreContainerResult>
        <p>20</p>
      </ScoreContainerResult>
    </ScoreContainer>
  );
};

export default Score;
