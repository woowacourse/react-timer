import ReactDom from 'react-dom';
import styled from 'styled-components';

const Dimmer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  width: 25%;
  height: auto;
  border-radius: 10px;
  background: white;

  display: flex;
  flex-direction: column;
  gap: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;

  padding: 20px;
`;

const Modal = ({ toggleModal, children }) => {
  const modalElement = document.getElementById('modal');

  return ReactDom.createPortal(
    <div>
      <Dimmer onClick={toggleModal} />
      <ModalBox>{children}</ModalBox>
    </div>,
    modalElement,
  );
};

export default Modal;
