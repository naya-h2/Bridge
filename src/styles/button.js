import { css } from 'styled-components';

const disabledBtn = css`
  background: #dcdcdc;
  cursor: not-allowed;
`;

export const funnelNextBtn = css`
  width: 160px;
  height: 48px;

  border-radius: 40px;
  background: #3686ff;

  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $disabled }) => ($disabled ? disabledBtn : null)};
`;
