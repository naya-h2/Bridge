import styled from 'styled-components';
import linkIcon from '../../assets/icon/list-link.svg';
import { useNavigate } from 'react-router-dom';

function BusinessList({ data }) {
  const navigate = useNavigate();
  const { title, agent, link, dday } = data;

  return (
    <Container>
      <LinkIcon src={linkIcon} onClick={() => navigate(link)} />
      <Title>{title}</Title>
      <Dday>{`D${dday < 0 ? '+' : '-'}${Math.abs(dday)}`}</Dday>
      <Agent>{agent}</Agent>
    </Container>
  );
}

export default BusinessList;

const Container = styled.div`
  display: flex;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  cursor: pointer;
`;

const Title = styled.p`
  width: 400px;
  padding-right: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Dday = styled.p`
  width: 60px;

  color: #3686ff;
`;

const Agent = styled.p`
  width: 160px;

  color: #525252;
  font-weight: 400;
`;
