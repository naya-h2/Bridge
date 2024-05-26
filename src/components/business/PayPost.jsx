import styled, { css } from 'styled-components';
import BtnLayout from './BtnLayout';
import payLogo from '../../assets/image/logo_Npay.png';
import { useState } from 'react';

function PayPost() {
  const [isPaySelected, setIsPaySelected] = useState(false);

  return (
    <BtnLayout btnText="결제하기" disabled={!isPaySelected}>
      <DividingLine />
      <SectionWrapper>
        결제내역
        <PackageBox>
          <p>예비창업패키지 사업계획서 1부</p>
          <p>299,900 원</p>
        </PackageBox>
      </SectionWrapper>
      <SectionWrapper>
        간편결제
        <PayWrapper>
          {/* <PayBox>카드결제</PayBox>
          <PayBox>계좌결제</PayBox> */}
          <PayBox $isSelected={isPaySelected} onClick={() => setIsPaySelected((prev) => !prev)}>
            <Logo src={payLogo} />
            네이버페이
          </PayBox>
        </PayWrapper>
      </SectionWrapper>
    </BtnLayout>
  );
}

export default PayPost;

const DividingLine = styled.div`
  padding-top: 20px;
  width: 100%;
  border-bottom: 1px solid #9d9a9a;
`;

const SectionWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const borderBox = css`
  border-radius: 8px;
  border: 1px solid #b8b9ba;
`;

const PackageBox = styled.div`
  padding: 24px 40px;

  ${borderBox};
  border: 2px solid #3686ff;

  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

const Logo = styled.img`
  width: 74px;
  height: 28px;
`;

const PayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PayBox = styled.div`
  width: 30%;
  padding: 32px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;

  cursor: pointer;
  ${borderBox};
  ${({ $isSelected }) => ($isSelected ? 'border: 2px solid #3686ff' : null)};
  &:hover {
    background-color: #dedede5f;
  }
`;
