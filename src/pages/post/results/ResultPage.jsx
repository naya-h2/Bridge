import React from 'react';
import styled from 'styled-components';
import checkIcon from '../../../assets/icon/check-mark.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ResultPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>결제 완료 | Bridge</title>
      </Helmet>
      <Container>
        <CheckIcon src={checkIcon} />
        결제가 완료되었습니다
        <P>구매해주셔서 감사합니다.</P>
        <Btn onClick={() => navigate('/')}>홈으로 가기</Btn>
      </Container>
    </>
  );
}

export default ResultPage;

const Container = styled.div`
  margin: 64px auto;
  width: 368px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;

const CheckIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const P = styled.p`
  color: rgba(46, 47, 51, 0.88);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

const Btn = styled.button`
  padding: 16px 0;

  width: 280px;
  border-radius: 8px;
  background: #3686ff;

  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
