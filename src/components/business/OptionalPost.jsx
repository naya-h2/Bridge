import styled from 'styled-components';
import BtnLayout from './BtnLayout';
import HeadSection from './HeadSection';
import InputBox from './InputBox';
import { useFormContext } from 'react-hook-form';
import { MAX_LENGTH } from '../../constants/funnel';

function OptionalPost({ handleNextStep }) {
  const { watch } = useFormContext();
  const { input3, input4, input5 } = watch();
  const isDisabled = input3?.length > MAX_LENGTH || input4?.length > MAX_LENGTH || input5?.length > MAX_LENGTH;

  return (
    <BtnLayout btnText="다음" onBtnClick={handleNextStep} disabled={isDisabled}>
      <HeadSection title="PART 2">
        <Bold>3번부터는 선택 작성 항목</Bold>입니다. 작성하였을 때 더 좋은 결과물을 얻을 수 있습니다.
      </HeadSection>
      <InputBox stepNum={2} height={204} />
      <InputBox stepNum={3} height={180} />
      <InputBox stepNum={4} height={180} />
    </BtnLayout>
  );
}

export default OptionalPost;

const Bold = styled.span`
  font-weight: 500;
`;
