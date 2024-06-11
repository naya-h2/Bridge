import styled from 'styled-components';
import logoIcon from '../../assets/icon/logo-white.svg';
import { useNavigate } from 'react-router-dom';
import leftImage from '../../assets/image/home-3.png';
import centerImage from '../../assets/image/home-2.png';
import rightImage from '../../assets/image/home-1.png';

const NAV = [
  { text: '캘린더', src: '/calendar' },
  {
    text: '지원사업 리스트',
    src: '/list',
  },
  { text: 'AI 사업계획서', src: '/post' },
];

function Head() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo src={logoIcon} onClick={() => navigate('/')} />
        <NavWrapper>
          {NAV.map(({ text, src }) => (
            <NavText key={text} onClick={() => navigate(src)}>
              {text}
            </NavText>
          ))}
        </NavWrapper>
      </Header>
      <MainText>
        지원사업 확인부터 사업계획서 작성까지 모두
        <br />
        <Span>
          <Bold>브릿지AI 정부지원 캘린더</Bold>와 함께
        </Span>
      </MainText>
      <ImageWrapper>
        <Image src={leftImage} />
        <Image src={centerImage} />
        <Image src={rightImage} />
      </ImageWrapper>
    </Container>
  );
}

export default Head;

const Container = styled.div`
  height: 848px;
  min-width: 1024px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #3686ff;
`;

const Header = styled.div`
  padding: 40px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;

  cursor: pointer;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const NavText = styled.p`
  cursor: pointer;
  width: 160px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const MainText = styled.div`
  margin-top: 24px;

  color: #fff;
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 64px;
`;

const Span = styled.span`
  font-size: 56px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  padding: 72px 0;

  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 540px);
  justify-content: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 540px;
  height: 383px;

  border-radius: 16px;
  object-fit: cover;
`;
