import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import icon from '../../assets/icon/list-link.svg';
import whiteStar from '../../assets/icon/empty-star.svg';
import YellowStar from '../../assets/icon/filled-star.svg';

function ListData({ business }) {
  let navigate = useNavigate();
  let [star, setStar] = useState(business.importance);
  // console.log(business.type)
  const text = ['사업화', '기술개발(R&D)', '시설∙공간∙보육', '멘토링∙컨설팅∙교육', '행사∙네트워크', '융자', '인력', '글로벌 진출', '공공기관', '민간기관'];
  return (
    <Container>
      <TopContainer>
        <TitleSection>
          <Icon
            src={icon}
            onClick={() => {
              navigate(`${business.link}`);
            }}
          />
          <Title>{business.title}</Title>
          <Dday>D-{business.dday}</Dday>
        </TitleSection>
        <DetailSection>
          <Agent>{business.agent}</Agent>
          <Date>{business.date}</Date>
        </DetailSection>
        <Star
          src={star ? whiteStar : YellowStar}
          onClick={() => {
            setStar((prev) => !prev);
          }}
        />
      </TopContainer>
      <BottomContainer>{business.type.map((type, idx) => (type !== false ? <Button>{text[idx]}</Button> : null))}</BottomContainer>
    </Container>
  );
}
export default ListData;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 32px;
  padding-left: 12px;
  padding-right: 52px;

  position: relative;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  margin-right: 16px;
`;

const TitleSection = styled.div`
  width: 60%;

  display: flex;
  gap: 16px;
  align-items: center;
`;

const DetailSection = styled.div`
  width: 40%;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;

  cursor: pointer;
`;

const Title = styled.p`
  max-width: 70%;

  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Dday = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #3686ff;

  white-space: nowrap;
`;
const Agent = styled.p`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #525252;
`;

const Date = styled.p`
  min-width: 119px;

  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #525252;
`;
const Star = styled.img`
  width: 32px;
  height: 32px;

  position: absolute;
  top: 32px;
  right: 23px;

  cursor: pointer;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;

  background: #ffffff;
  border: 1px solid #525252;
  border-radius: 40px;
  padding: 6px 16px;
`;
