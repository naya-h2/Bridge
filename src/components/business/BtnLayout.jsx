import React from 'react';
import styled from 'styled-components';
import { funnelNextBtn } from '../../styles/button';

function BtnLayout({ children, btnText, disabled, onBtnClick }) {
  return (
    <Container>
      {children}
      <ButtonWrapper>
        <NextButton onClick={onBtnClick} $disabled={disabled} disabled={disabled}>
          {btnText}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
}

export default BtnLayout;

const Container = styled.div`
  position: relative;
`;

const NextButton = styled.button`
  ${funnelNextBtn};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 80px;
`;