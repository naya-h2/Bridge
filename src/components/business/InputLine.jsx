import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function InputLine({ title, placeholder, name, inputType, onInputFunc }) {
  const { register } = useFormContext();

  return (
    <Container>
      <Title>{title}</Title>
      <Input placeholder={placeholder} {...register(name)} type={inputType} onInput={(e) => onInputFunc(e) || null} />
    </Container>
  );
}

export default InputLine;

const Container = styled.div`
  padding: 16px 40px;

  display: flex;

  border-radius: 8px;
  border: 1px solid #b8b9ba;

  background: #fff;
  font-size: 16px;
`;

const Title = styled.p`
  width: 20%;

  color: #000;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const Input = styled.input`
  height: 26px;
  width: 80%;
  border: none;
  outline: none;

  ::placeholder {
    color: #9d9a9a;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.32px;
  }
`;
