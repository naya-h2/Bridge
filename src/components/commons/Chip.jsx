import styled from 'styled-components';

/**
 * calendar용 Count Chip
 * @param hasActive T/F
 * @param children count
 */
function Chip({ hasActive, children }) {
  return <Button $hasActive={hasActive}>{`+${children}`}</Button>;
}

export default Chip;

const Button = styled.span`
  min-width: 40px;
  max-width: 100%;
  height: 24px;
  padding: 3px 12px;

  border-radius: 40px;
  border: 1px solid #3686ff;
  background: ${({ $hasActive }) => ($hasActive ? '#3686ff' : '#ffffff')};

  font-size: 14px;
  font-weight: 500;
  color: ${({ $hasActive }) => ($hasActive ? '#ffffff' : '#3686ff')};

  display: flex;
  justify-content: center;
  align-items: center;
`;
