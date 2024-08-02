import ModalFrame from './ModalFrame';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

function SaveModal({ closeModal }) {
  const { setValue } = useFormContext();

  const handleOkClick = () => {
    const saveInput = JSON.parse(window.localStorage.getItem('ai-plan'));
    const keyArr = Object.keys(saveInput);
    for (const key of keyArr) {
      setValue(key, saveInput[key]);
    }
  };

  const handleBtnClick = (isSave = false) => {
    if (isSave) handleOkClick();
    closeModal();
  };

  return (
    <ModalFrame onClickClose={closeModal}>
      <Container>
        <Text>이전에 작성된 내용이 있습니다. 이어서 작성하시겠습니까?</Text>
        <BtnWrapper>
          <CancelBtn onClick={handleBtnClick}>취소</CancelBtn>
          <OkBtn onClick={() => handleBtnClick(true)}>확인</OkBtn>
        </BtnWrapper>
      </Container>
    </ModalFrame>
  );
}

export default SaveModal;

const Container = styled.div`
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;

const OkBtn = styled.button`
  width: 100%;

  border-radius: 8px;
  background: #3686ff;

  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const CancelBtn = styled.button`
  width: 100%;

  color: #3686ff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;

  border-radius: 8px;
  border: 1px solid #3686ff;
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  height: 64px;
`;
