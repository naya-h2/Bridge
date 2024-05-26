import React from 'react';
import styled from 'styled-components';

function HeadSection({ title, children }) {
  return (
    <HeadContainer>
      {title}
      <Description>{children}</Description>
    </HeadContainer>
  );
}

export default HeadSection;

const HeadContainer = styled.div`
  padding-bottom: 60px;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;

  border-bottom: 1px solid #9d9a9a;
`;

const Description = styled.p`
  margin-top: 16px;

  color: #1a1a1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.32px;
`;
