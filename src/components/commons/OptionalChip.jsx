import styled, { css } from 'styled-components';

function OptionalChip({ isRequired = false }) {
  return <Box $isRequired={isRequired}>{isRequired ? '필수항목' : '선택항목'}</Box>;
}

export default OptionalChip;

const required = css`
  color: #3686ff;
  background: #f0f6ff;
`;

const Box = styled.span`
  padding: 6px 10px;

  color: #525252;
  background: #f5f5f5;

  border-radius: 20px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;

  ${({ $isRequired }) => ($isRequired ? required : null)}
`;
