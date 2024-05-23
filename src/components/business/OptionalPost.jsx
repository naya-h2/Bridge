import styled from 'styled-components';
import BtnLayout from './BtnLayout';
import HeadSection from './HeadSection';
import InputBox from './InputBox';

function OptionalPost({ handleNextStep }) {
  return (
    <BtnLayout btnText="다음" onBtnClick={handleNextStep}>
      <HeadSection title="PART 2">
        <Bold>3번부터는 선택 작성 항목</Bold>입니다. 작성하였을 때 더 좋은 결과물을 얻을 수 있습니다.
      </HeadSection>
      <InputBox stepNum={2} height={180} />
      <InputBox stepNum={3} height={154} />
      <InputBox stepNum={4} height={154} />
    </BtnLayout>
  );
}

export default OptionalPost;

const Bold = styled.span`
  font-weight: 500;
`;
