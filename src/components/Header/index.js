import { useState } from "react";
import ModalRules from "../ModalRules";
import { HeaderContainer } from "./styles";

const Header = () => {
  const [openRules, setOpenRules] = useState(false);

  return (
    <HeaderContainer>
      <img src="images/logo.png" alt="Warship" className="logo" />

      <button onClick={() => setOpenRules(true)}>
        <img src="images/rules.png" alt="Rules" />
        <span>rules</span>
      </button>

      {openRules ? (
        <ModalRules setOpenModal={() => setOpenRules(false)} />
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
