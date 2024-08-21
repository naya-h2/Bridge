import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import icon from '../../assets/icon/list-link.svg';
import whiteStar from '../../assets/icon/empty-star.svg';
import YellowStar from '../../assets/icon/filled-star.svg';
import { format } from 'date-fns';
import { useStore } from '../../stores';

function BusinessCard({ business }) {
  // const [star, setStar] = useState(business.importance);
  const { selectedList } = useStore((state) => ({
    selectedList: state.selectedFilter,
  }));

  return (
    <Container href={business.link} target="_blank">
      <TopContainer>
        <TitleSection>
          <Icon src={icon} />
          <Title>{business.title}</Title>
          <Dday>D-{business.dday}</Dday>
        </TitleSection>
        <DetailSection>
          <Agent>{business.agent}</Agent>
          <Date>{format(business.deadline, 'yyyy년 MM월 dd일')}</Date>
        </DetailSection>
        {/* <Star
          src={star ? whiteStar : YellowStar}
          onClick={() => {
            setStar((prev) => !prev);
          }}
        /> */}
      </TopContainer>
      <BottomContainer>
        {business.types.map((type) => (
          <TypeTag key={type} $isSelected={selectedList.includes(type)}>
            {type}
          </TypeTag>
        ))}
      </BottomContainer>
    </Container>
  );
}
export default BusinessCard;

const Container = styled.a`
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

  color: black;
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

const TypeTag = styled.p`
  display: flex;
  align-items: center;

  background: ${({ $isSelected }) => ($isSelected ? '#525252' : '#ffffff')};
  color: ${({ $isSelected }) => (!$isSelected ? '#525252' : '#ffffff')};
  border: 1px solid #525252;
  border-radius: 40px;
  padding: 6px 16px;
  font-size: 1.4rem;
`;
