import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import StepBar from '../../components/business/StepBar';
import Agreement from '../../components/business/Agreement';
import TitleLayout from '../../components/business/TitleLayout';
import RequiredPost from '../../components/business/RequiredPost';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import OptionalPost from '../../components/business/OptionalPost';
import PersonalPost from '../../components/business/PersonalPost';
import PayPost from '../../components/business/PayPost';

const STEP_NAME = ['약관동의', '필수항목 작성', '선택항목 작성', '기본정보 입력', '결제'];

function Layout() {
  const [step, setStep] = useState(STEP_NAME[0]);
  const methods = useForm();

  const handleNextClick = () => {
    console.log(methods.getValues());
    return setStep(STEP_NAME[STEP_NAME.indexOf(step) + 1]);
  };

  const STEP_COMPONENT = {
    약관동의: <Agreement handleNextStep={handleNextClick} />,
    '필수항목 작성': <RequiredPost handleNextStep={handleNextClick} />,
    '선택항목 작성': <OptionalPost handleNextStep={handleNextClick} />,
    '기본정보 입력': <PersonalPost handleNextStep={handleNextClick} />,
    결제: <PayPost />,
  };

  return (
    <FormProvider {...methods}>
      <Sidebar index={1} />
      <Container>
        <TitleLayout type={step === STEP_NAME[4] ? '결제' : '작성'}>
          <StepWrapper>
            {STEP_COMPONENT[step]}
            <StepBar curStep={STEP_NAME.indexOf(step)} />
          </StepWrapper>
        </TitleLayout>
      </Container>
    </FormProvider>
  );
}

export default Layout;

const Container = styled.div`
  max-width: 1440px;
  min-width: 1024px;

  margin-left: 296px;
  padding: 96px 80px;
`;

const StepWrapper = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  gap: 48px;
`;
