import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const Modal = ({
  isModalOpen,
  onCloseModal,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);

    timeoutId.current = setTimeout(() => {
      setIsClosing(false);
      onCloseModal();

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    }, 300);
  }, [onCloseModal]);

  const handleEscapeKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKeydown);

    return () =>
      document.body.removeEventListener('keydown', handleEscapeKeydown);
  }, [handleEscapeKeydown]);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <div role="dialog" aria-modal>
            <ModalBackdrop onClick={handleClose} />
            <ModalContainer $isClosing={isClosing}>{children}</ModalContainer>
          </div>,
          document.body,
        )}
    </>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 228px;
  padding: 34px 0;
  border-radius: 5px 5px 0px 0px;
  background: #fff;
  animation: ${({ $isClosing }) => ($isClosing ? slideDown : slideUp)} 0.3s
    ease-in-out forwards;
`;
