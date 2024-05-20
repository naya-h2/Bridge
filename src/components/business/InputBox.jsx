import styled from 'styled-components';
import OptionalChip from '../commons/OptionalChip';
import noCheckIcon from '../../assets/icon/check-circle-grey.svg';
import checkIcon from '../../assets/icon/check-active.svg';
import { useFormContext } from 'react-hook-form';

const POST_STEP = [
  { name: 'one', title: '01. 아이템 한 줄 소개', isRequired: true, placeholder: '예시) 차량 공유 서비스 플랫폼 Uber', length: -1 },
  {
    name: 'two',
    title: '02. 아이템 설명',
    isRequired: true,
    placeholder:
      '기능 등 아이템에 대한 간단한 설명을 적어주세요.\n(200~600자 작성을 권하나, 더 많거나 적게 쓰셔도 괜찮습니다.)\n\n예시: 차량 호출 및 공유 서비스 플랫폼 <Uber>는 손을 흔들어 택시를 잡던 전통적인 방식에서 벗어난, 앱으로 호출하는 택시 서비스임. 우리 서비스를 통해 승객은 어디서든 편리하게 택시를 찾을 수 있으며, 특히 일부 지역에서 택시를 찾기 어려운 경우에도 신속하게 이동 수단을 확보할 수 있음. 또한 운전자들이 택시 면허가 없어도 자신의 차량을 통해 직접 택시 서비스를 할 수 있음.',
    length: 140,
  },
];

function InputBox({ stepNum, height }) {
  const { register, watch } = useFormContext();
  const s = watch();

  console.log(s);

  return (
    <Container>
      <TitleWrapper>
        {POST_STEP[stepNum].title}
        <OptionalChip isRequired={POST_STEP[stepNum].isRequired} />
      </TitleWrapper>
      <Input $height={height} placeholder={POST_STEP[stepNum].placeholder} {...register(POST_STEP[stepNum].name)} />
      {POST_STEP[stepNum].length !== -1 && (
        <LengthWrapper>
          <CheckIcon src={noCheckIcon} />
          {`${POST_STEP[stepNum].length}자`}
        </LengthWrapper>
      )}
    </Container>
  );
}

export default InputBox;

const Container = styled.div`
  margin-top: 60px;

  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Input = styled.textarea`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  padding: 24px 40px;

  font-size: 16px;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.32px;

  border-radius: 8px;
  border: 1px solid #b8b9ba;

  resize: vertical;

  &::placeholder {
    color: #9d9a9a;
  }
`;

const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const LengthWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  color: #9d9a9a;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;
