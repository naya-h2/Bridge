import styled from 'styled-components';
import icon from '../../assets/icon/side-bottom-ai.svg';
function BottomContainer() {
  return (
    <Container>
      <Image src={icon} />
      <P>
        AI 사업계획서
        <br /> 초안 작성 서비스
      </P>
      <SmallP>서비스 준비 중</SmallP>
    </Container>
  );
}
export default BottomContainer;

const Container = styled.div`
  height: 200px;
  width: 100%;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 37px;
`;
const P = styled.p`
  width: 135px;
  height: 58px;
  margin-left: 42px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: black;
`;
const SmallP = styled.p`
  margin-left: 42px;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #9d9a9a;
`;
