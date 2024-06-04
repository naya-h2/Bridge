import useNotScroll from '../../../hooks/useNotScroll';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

function ModalFrame({ children, onClickClose }) {
  useNotScroll();

  return (
    <ModalPortal>
      <Mask onClick={onClickClose} onFocus={onClickClose} />
      <Body>{children}</Body>
    </ModalPortal>
  );
}

export default ModalFrame;

const Mask = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  background-color: black;
  opacity: 0.4;
`;

const Body = styled.div`
  width: 424px;
  background-color: white;
  border-radius: 16px;

  padding: 42px 0;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 51;
`;
