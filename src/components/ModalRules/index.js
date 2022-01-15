import Modal from "../Modal";
import { ContainerModalRules } from "./styles";

const ModalRules = ({ setOpenModal }) => {
  return (
    <Modal setOpenModal={setOpenModal}>
      <ContainerModalRules>
        <div>
          <img src="images/rules.png" alt="Regras" />
          <p>Regras</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh
          tellus, semper sit amet nibh sit amet, commodo porttitor justo. Ut
          ornare, magna a rutrum scelerisque, ligula enim feugiat velit, nec
          dapibus nulla augue id mauris. Mauris dictum imperdiet ornare. Nam
          fermentum magna a fermentum commodo. Nam non tempus dui. Etiam a velit
          vitae orci faucibus facilisis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt
          consectetur condimentum. Nullam viverra dignissim nibh, a convallis
          mauris semper in. Vestibulum egestas turpis at malesuada rhoncus. Nunc
          nunc mauris, ultricies non sagittis eget, tempor et augue. In
          ullamcorper semper felis et bibendum. Vivamus et nisl vel nisl aliquam
          auctor.
        </p>
      </ContainerModalRules>
    </Modal>
  );
};

export default ModalRules;
