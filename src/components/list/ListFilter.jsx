import styled from 'styled-components';
import { useState } from 'react';
import switchG from '../../assets/icon/switch-grey.svg';
import switchB from '../../assets/icon/switch-blue.svg';

function ListFilter() {
  const [isActive, setIsActive] = useState([false, false, false, false, false, false, false, false, false, false]);
  const types = [
    { active: isActive[0], text: '사업화' },
    { active: isActive[1], text: '기술개발(R&D)' },
    { active: isActive[2], text: '시설∙공간∙보육' },
    { active: isActive[3], text: '멘토링∙컨설팅∙교육' },
    { active: isActive[4], text: '행사∙네트워크' },
    { active: isActive[5], text: '융자' },
    { active: isActive[6], text: '인력' },
    { active: isActive[7], text: '글로벌 진출' },
  ];
  const agents = [
    { active: isActive[8], text: '공공(중앙부처∙지자체∙공공기관)' },
    { active: isActive[9], text: '민간 (민간기관∙교육기관)' },
  ];
  return (
    <Container>
      <P>필터</P>
      <FilterContainer>
        <LeftContainer>
          <SmallP>지원사업 유형</SmallP>
          <LeftSmallContainer>
            {types.map((type, idx) => (
              <Button
                active={type.active}
                onClick={() => {
                  const newState = [...isActive];
                  newState[idx] = !newState[idx];
                  setIsActive(newState);
                }}
              >
                <Switch src={type.active ? switchB : switchG} />
                {type.text}
              </Button>
            ))}
          </LeftSmallContainer>
        </LeftContainer>
        <RightContainer>
          <SmallP>주관기관</SmallP>
          <RightSmallContainer>
            {agents.map((agent, idx) => (
              <Button
                active={agent.active}
                onClick={() => {
                  const newState = [...isActive];
                  newState[idx + 8] = !newState[idx + 8];
                  setIsActive(newState);
                }}
              >
                <Switch src={agent.active ? switchB : switchG} />
                {agent.text}
              </Button>
            ))}
          </RightSmallContainer>
        </RightContainer>
      </FilterContainer>
      <Line />
    </Container>
  );
}
export default ListFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 100%;
`;
const FilterContainer = styled.div`
  display: flex;

  width: 1000px;
  height: 183px;
  margin-left: 105px;
  margin-top: 10px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 627px;
  height: 100%;
`;
const LeftSmallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 627px;
  height: 100%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 70px;
`;
const RightSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const P = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #000000;

  margin-left: 82px;
  margin-top: 96px;
`;
const SmallP = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;

  color: #525252;
`;
const Button = styled.a`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid ${(props) => (props.active ? '#3686FF' : '#DCDCDC')};
  border-radius: 40px;
  width: fit-content;
  height: 40px;
  padding-right: 15px;
  padding-left: 10px;
  margin-right: 20px;
  margin-top: 15px;

  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
`;
const Switch = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;
const Line = styled.div`
  width: 100;
  height: 0px;
  margin-left: 80px;
  margin-top: 50px;
  border: 1px solid #dcdcdc;
`;
