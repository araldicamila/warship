import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img src="images/logo.png" alt="Warship" />

      <div>
        <img src="images/rules.png" alt="Rules" />
        <span>regras</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
