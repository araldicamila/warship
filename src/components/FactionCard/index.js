import { FactionContainer } from "./styles";

const FactionCard = ({ image, name, theme }) => {
  return (
    <FactionContainer theme={theme}>
      <img src={image} />
      <p>{name}</p>
    </FactionContainer>
  );
};

export default FactionCard;
