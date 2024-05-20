import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import StepBar from '../../components/business/StepBar';
import { useFunnel } from '../../hooks/useFunnel';
import Agreement from '../../components/business/Agreement';
import TitleLayout from '../../components/business/TitleLayout';
import RequiredPost from '../../components/business/RequiredPost';
import { FormProvider, useForm } from 'react-hook-form';

const STEP_NAME = ['약관동의', '필수항목 작성', '선택항목 작성', '기본정보 입력', '결제'];

function Layout() {
  const methods = useForm();
  const { Funnel, Step, currentStep, setStep } = useFunnel(STEP_NAME);

  const handleNextClick = () => {
    return setStep(STEP_NAME[STEP_NAME.indexOf(currentStep) + 1]);
  };

  return (
    <FormProvider {...methods}>
      <Sidebar index={1} />
      <Container>
        <TitleLayout>
          <StepWrapper>
            <Funnel>
              <Step name={STEP_NAME[0]}>
                <Agreement handleNextStep={handleNextClick} />
              </Step>
              <Step name={STEP_NAME[1]}>
                <RequiredPost />
              </Step>
              <Step name={STEP_NAME[2]}>
                <StepBar curStep={2} />
              </Step>
              <Step name={STEP_NAME[3]}>
                <StepBar curStep={3} />
              </Step>
              <Step name={STEP_NAME[4]}>
                <StepBar curStep={4} />
              </Step>
            </Funnel>
            <StepBar curStep={STEP_NAME.indexOf(currentStep)} />
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
  gap: 120px;
`;
