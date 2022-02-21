import {
  ModalBackdrop,
  ModalContent,
  ModalContentWrapper,
} from '../styles/Modal.style';
import { AnimatePresence } from 'framer-motion';
const Modal = ({ open, children, ...props }) => {
  return (
    <AnimatePresence>
      {open && (
        <ModalBackdrop
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <ModalContentWrapper {...props}>
            <ModalContent>{children}</ModalContent>
          </ModalContentWrapper>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
