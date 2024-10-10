import styled from 'styled-components';
import BtnLayout from './BtnLayout';
import HeadSection from './HeadSection';
import InputLine from './InputLine';
import { useFormContext } from 'react-hook-form';

const INPUT_FRAME = [
  {
    name: 'name',
    title: '이름',
    placeholder: '홍길동',
    type: 'text',
  },
  {
    name: 'email',
    title: '이메일',
    placeholder: 'example@site.com',
    type: 'email',
  },
  {
    name: 'birth',
    title: '생년월일',
    placeholder: 'YYYY-MM-DD',
    type: 'date',
  },
  {
    name: 'phoneNumber',
    title: '연락처',
    placeholder: '01000000000',
    type: 'tel',
  },
];

function PersonalPost({ handleNextStep }) {
  const { register, watch } = useFormContext();
  const { name, email, birth, phoneNumber, title } = watch();
  const isDisabled = !(name && email && birth && phoneNumber && title);

  const makeHyphen = (e) => {
    const target = e.target;
    target.value = target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  return (
    <BtnLayout btnText="작성완료" onBtnClick={handleNextStep} disabled={isDisabled}>
      <HeadSection title="PART 3">
        본인 정보를 입력해주세요. 특히 이메일을 반드시 정확하게 적어주세요. 이메일을 통해 사업계획서 결과물이 전달됩니다.
      </HeadSection>
      <InputWrapper>
        {INPUT_FRAME.map((input) => (
          <InputLine
            key={input.name}
            name={input.name}
            title={input.title}
            placeholder={input.placeholder}
            inputType={input.type}
            onInputFunc={input.name === 'phoneNumber' ? makeHyphen : null}
          />
        ))}
      </InputWrapper>
      <WorkWrapper>
        <p>어떤 지원사업에 지원예정이신가요?</p>
        <Input placeholder="사업명을 입력해주세요" {...register('title')} />
      </WorkWrapper>
    </BtnLayout>
  );
}

export default PersonalPost;

const InputWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WorkWrapper = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const Input = styled.input`
  padding: 16px 40px;

  border-radius: 8px;
  border: 1px solid #b8b9ba;
  background: #fff;
  font-size: 16px;

  outline: none;

  ::placeholder {
    color: #9d9a9a;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.32px;
  }
`;
