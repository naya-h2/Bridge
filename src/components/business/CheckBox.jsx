import styled from 'styled-components';
import OptionalChip from '../commons/OptionalChip';

function CheckBox({ title, handleClick, isRequired = false, checkIcon, children }) {
  return (
    <>
      <TitleWrapper>
        <CheckIcon src={checkIcon} onClick={handleClick} />
        {title}
        <OptionalChip isRequired={isRequired} />
      </TitleWrapper>
      <TextBox>{children}</TextBox>
    </>
  );
}

export default CheckBox;

const TitleWrapper = styled.div`
  margin-top: 64px;

  display: flex;
  gap: 16px;
  align-items: center;

  color: #000;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const CheckIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const TextBox = styled.div`
  margin: 24px 0;
  padding: 24px 40px;

  border-radius: 8px;
  border: 1px solid #b8b9ba;

  color: #3d3d3d;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.28px;
`;
