import { useState } from 'react';

export const useFunnel = (defaultStepArray) => {
  const firstStep = defaultStepArray[0];
  const [step, setStep] = useState(firstStep);

  const Step = (props) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step };
};
