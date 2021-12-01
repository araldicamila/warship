import { FactionContainer } from "./styles";

import Link from "next/link";

const FactionCard = ({ image, name, theme }) => {
  return (
    <Link href={{ pathname: "/board", query: { faction: name } }} passHref>
      <FactionContainer theme={theme}>
        <img src={image} />
        <p>{name}</p>
      </FactionContainer>
    </Link>
  );
};

export default FactionCard;
