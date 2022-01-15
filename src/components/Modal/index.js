import { BackgroundModal, ContainerModal } from "./styles";

const Modal = ({ children, setOpenModal }) => {
  return (
    <BackgroundModal>
      <ContainerModal onClick={setOpenModal}>{children}</ContainerModal>
    </BackgroundModal>
  );
};

export default Modal;
