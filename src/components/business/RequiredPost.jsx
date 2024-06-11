import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import BtnLayout from './BtnLayout';
import { useFormContext } from 'react-hook-form';
import HeadSection from './HeadSection';
import { MAX_LENGTH } from '../../constants/funnel';
import SaveModal from '../commons/Modal/SaveModal';

function RequiredPost({ handleNextStep }) {
  const { watch } = useFormContext();
  const { input1, input2 } = watch();
  const isDisabled = !(input2?.length >= 200 && input2?.length <= MAX_LENGTH && input1?.length > 0);

  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    const saveInfo = window.localStorage.getItem('ai-plan');
    if (saveInfo) {
      const saveInfoObj = JSON.parse(saveInfo);
      if (saveInfoObj.title || saveInfoObj.input1) setIsSave(true);
    }
  }, []);

  return (
    <BtnLayout onBtnClick={handleNextStep} btnText="다음" disabled={isDisabled}>
      <HeadSection title="PART 1">
        <Bold>1번과 2번은 필수 작성 항목입니다.</Bold> 본 항목까지 작성하시고, 이후 아이템 항목들을 작성하지 않으셔도 사업계획서 초안을 받아보실 수 있습니다.
      </HeadSection>
      <InputBox stepNum={0} height={76} />
      <InputBox stepNum={1} height={256} />
      {isSave && <SaveModal closeModal={() => setIsSave(false)} />}
    </BtnLayout>
  );
}

export default RequiredPost;

const Bold = styled.span`
  font-weight: 500;
`;
