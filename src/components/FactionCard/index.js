import { FactionContainer } from "./styles";

import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";

const FactionCard = ({ image, name, theme }) => {
  const { setTheme } = useTheme();

  return (
    <Link href="/board">
      <FactionContainer theme={theme} onClick={() => setTheme(theme)}>
        <img src={image} />
        <p>{name}</p>
      </FactionContainer>
    </Link>
  );
};

export default FactionCard;
