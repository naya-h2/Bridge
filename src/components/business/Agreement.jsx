import styled from 'styled-components';
import notCheckIcon from '../../assets/icon/check-circle.svg';
import checkIcon from '../../assets/icon/check-active.svg';
import { useEffect, useState } from 'react';
import CheckBox from './CheckBox';
import BtnLayout from './BtnLayout';

function Agreement({ handleNextStep }) {
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isCheck, setIsCheck] = useState({
    personal: false,
    etc: false,
    marketing: false,
  });

  const handleCheckClick = (type) => {
    switch (type) {
      case 'personal':
        return setIsCheck((prev) => ({ ...prev, personal: !prev.personal }));
      case 'etc':
        return setIsCheck((prev) => ({ ...prev, etc: !prev.etc }));
      case 'marketing':
        return setIsCheck((prev) => ({ ...prev, marketing: !prev.marketing }));
      case 'all':
        setIsAllCheck((prev) => !prev);
        if (isAllCheck)
          return setIsCheck({
            personal: false,
            etc: false,
            marketing: false,
          });
        return setIsCheck({
          personal: true,
          etc: true,
          marketing: true,
        });
    }
  };

  useEffect(() => {
    if (isCheck.etc && isCheck.marketing && isCheck.personal) setIsAllCheck(true);
    else setIsAllCheck(false);
  }, [isCheck]);

  return (
    <BtnLayout btnText="다음" onBtnClick={handleNextStep} disabled={!(isCheck.etc && isCheck.personal)}>
      <TitleWrapper>
        약관동의
        <AgreeBtn onClick={() => handleCheckClick('all')} type="button">
          <CheckIcon src={isAllCheck ? checkIcon : notCheckIcon} />
          모두 동의합니다.
        </AgreeBtn>
      </TitleWrapper>
      <CheckBox
        title="개인정보 수집 및 이용 동의"
        isRequired
        handleClick={() => handleCheckClick('personal')}
        checkIcon={isCheck.personal ? checkIcon : notCheckIcon}
      >
        AI 사업계획서 초안 가이드를 신청하는 고객을 대상으로 아래 개인정보를 수집하고 있습니다. <br />
        개인정보 수집, 이용 등 처리에 있어 아래의 사항을 안내드립니다.
        <br />
        <br />
        [개인정보 수집 및 이용동의] <br />
        1. 개인정보의 수집 및 이용 목적 : AI 사업계획서 초안 가이드 신청 및 제공, 고객 응대 <br />
        2. 수집하는 개인정보 항목 : [필수]이름, 연락처, 이메일 주소 <br />
        3. 개인정보의 보유 및 이용기간 : 제공 후 3년
        <br />
        <br />
        귀하는 개인정보의 수집 및 이용동의를 거부할 권리가 있으며, 동의 거부 시 서비스 이용이 불가합니다.
      </CheckBox>
      <CheckBox title="기타 정보 수집 및 이용 동의" isRequired handleClick={() => handleCheckClick('etc')} checkIcon={isCheck.etc ? checkIcon : notCheckIcon}>
        본 신청서에 기재하는 사업적 아이디어는 제 3자에게 제공되지 않으며, 서비스 개발이나 학습 목적으로 이용되지 않습니다.
        <br />
        <br />
        [정보 수집 및 이용동의] <br />
        1. 정보의 수집 및 이용 목적 : AI 사업계획서 초안 가이드 제작 및 제공, 고객 응대 <br />
        2. 기타 정보의 보유 및 이용기간 : 제공 후 1년
        <br />
        <br />
        귀하는 기타 정보의 수집 및 이용동의를 거부할 권리가 있으며, 동의 거부 시 서비스 이용이 불가합니다.
      </CheckBox>
      <CheckBox
        title="마케팅 수신 동의에 대한 안내"
        handleClick={() => handleCheckClick('marketing')}
        checkIcon={isCheck.marketing ? checkIcon : notCheckIcon}
      >
        AI 초안 생성 서비스 Docshunt가 제공하는 할인, 프로모션 등의 이벤트 정보를 받아 보시겠습니까?
      </CheckBox>
    </BtnLayout>
  );
}

export default Agreement;

const TitleWrapper = styled.div`
  padding-bottom: 40px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #9d9a9a;
`;

const CheckIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const AgreeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 18px;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
`;
