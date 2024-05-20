import active1 from '../assets/icon/step-active-1.svg';
import active2 from '../assets/icon/step-active-2.svg';
import active3 from '../assets/icon/step-active-3.svg';
import active4 from '../assets/icon/step-active-4.svg';
import active5 from '../assets/icon/step-active-5.svg';
import inactive2 from '../assets/icon/step-inactive-2.svg';
import inactive3 from '../assets/icon/step-inactive-3.svg';
import inactive4 from '../assets/icon/step-inactive-4.svg';
import inactive5 from '../assets/icon/step-inactive-5.svg';

export const STEP = [
  {
    name: '약관동의',
    true: active1,
  },
  {
    name: '필수항목 작성',
    true: active2,
    false: inactive2,
  },
  {
    name: '선택항목 작성',
    true: active3,
    false: inactive3,
  },
  {
    name: '기본정보 입력',
    true: active4,
    false: inactive4,
  },
  {
    name: '결제',
    true: active5,
    false: inactive5,
  },
];
