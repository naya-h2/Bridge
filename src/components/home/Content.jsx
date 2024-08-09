import calendarIcon from '../../assets/icon/home-list.svg';
import aiIcon from '../../assets/icon/home-ai.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CONTENT = {
  calendar: {
    type: '지원사업 캘린더',
    icon: calendarIcon,
    main1: '필요한 지원사업,',
    main2: '한 눈에 바로 보여야하니까',
    sub: '필요한 지원 사업만 딱, 한눈에 볼 수 있어요',
    detail:
      '지원사업의 합격은 나에게 딱 맞는 지원사업을 찾는 것에서 시작합니다.\n지원사업캘린더가 당신에게 알맞은 지원사업을 추천해드리고, 관리해드릴게요.\n지원사업캘린더와 함께 사업자금을 확보하세요.',
    btn: '지원사업 리스트 바로가기',
    url: '/list',
  },
  ai: {
    type: 'AI 사업계획서 작성',
    icon: aiIcon,
    main1: '사업계획서는',
    main2: 'AI로 더 쉽게, 빠르게',
    sub: '단돈 39만원으로 1억 넘게 확보하는 AI 사업계획서 작성 서비스.',
    detail:
      '사업계획서는 저희가 작성할게요, 대표님은 사업에만 집중하세요.\n1억 이상의 가치를 가진 사업계획서를 단돈 39만원에 제공합니다.\n걱정마세요. 전문 컨설팅팀에서 최종 확인 및 수정 절차를 모두 진행합니다.\n누구보다 빠르게 사업을 성장시키세요. ',
    btn: 'AI 사업계획서 작성해보기',
    url: '/post',
  },
};

function Content({ type }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Type>{CONTENT[type].type}</Type>
      <Icon src={CONTENT[type].icon} />
      <MainText>{CONTENT[type].main1}</MainText>
      <MainText>{CONTENT[type].main2}</MainText>
      <SubText>{CONTENT[type].sub}</SubText>
      <DetailText>{CONTENT[type].detail}</DetailText>
      <Button onClick={() => navigate(CONTENT[type].url)}>{CONTENT[type].btn}</Button>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  min-width: 1024px;
  max-width: 1440px;
  padding: 120px 136px;
  margin: 0 auto;
`;

const Type = styled.p`
  margin-bottom: 32px;

  color: #3686ff;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

const Icon = styled.img`
  margin-bottom: 16px;

  width: 48px;
  height: 48px;
`;

const MainText = styled.p`
  color: #0a2540;
  font-size: 4.4rem;
  font-weight: 500;
  line-height: 60px; /* 136.364% */
  letter-spacing: -1px;
`;

const SubText = styled.p`
  margin-top: 32px;

  color: #425466;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.5px;
`;

const DetailText = styled.p`
  margin: 80px 0;
  width: 640px;

  color: rgba(46, 47, 51, 0.88);

  font-size: 2rem;
  font-weight: 400;
  line-height: 170%; /* 34px */
  letter-spacing: -0.2px;

  white-space: pre-wrap;
`;

const Button = styled.button`
  padding: 8px 40px;
  background-color: #3686ff;
  border-radius: 240px;

  color: #fff;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 72px; /* 300% */
  letter-spacing: -1px;
`;
