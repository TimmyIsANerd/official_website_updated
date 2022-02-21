import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalContentWrapper = styled(motion.div)`
  width: ${(props) => (props.width ? props.width : '400px')};
  height: ${(props) => (props.height ? props.height : '500px')};
  background: ${(props) => (props.bg ? props.bg : 'rgba(255, 255, 255, 0.5)')};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: auto;

  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : '')};
  position: relative;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const ModalContent = styled(motion.div)`
  display: flex;
`;
