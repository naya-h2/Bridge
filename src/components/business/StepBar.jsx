import styled, { css } from 'styled-components';
import checkIcon from '../../assets/icon/check-inactive.svg';
import barIcon from '../../assets/icon/bar.svg';
import { STEP } from '../../constants/funnelStep';
import { Fragment } from 'react';

function StepBar({ curStep }) {
  return (
    <Container>
      {STEP.map((step, idx) => (
        <Fragment key={step.name}>
          <StepWrapper $isCurStep={curStep === idx}>
            <Icon src={curStep > idx ? checkIcon : step[curStep === idx]} />
            {step.name}
          </StepWrapper>
          {idx !== 4 && <BarIcon src={barIcon} />}
        </Fragment>
      ))}
    </Container>
  );
}

export default StepBar;

const curStep = css`
  color: #000;
  font-weight: 500;
`;

const Container = styled.div`
  width: 205px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StepWrapper = styled.div`
  display: flex;
  gap: 20px;

  color: #9d9a9a;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;

  ${({ $isCurStep }) => ($isCurStep ? curStep : null)};
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BarIcon = styled.img`
  width: 24px;
  height: 24px;
`;
