import React from 'react';
import styled from 'styled-components';

const ReadyPage = () => {
  return (
    <Container>
      <Text>해당 페이지는 현재 준비 중입니다.</Text>
    </Container>
  );
};

export default ReadyPage;

const Text = styled.p`
  color: #525252;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: calc(100vw - 296px);
  height: 100vh;

  margin-left: 296px;
`;
