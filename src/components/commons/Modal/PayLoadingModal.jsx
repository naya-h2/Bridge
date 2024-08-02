import styled from 'styled-components';
import ModalFrame from './ModalFrame';

function PayLoadingModal() {
  return (
    <ModalFrame>
      <Container>
        결제 및 정보를 저장 중입니다.
        <br />
        잠시만 기다려주세요.
      </Container>
    </ModalFrame>
  );
}

export default PayLoadingModal;

const Container = styled.div`
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;
