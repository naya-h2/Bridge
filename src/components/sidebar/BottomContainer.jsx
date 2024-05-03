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
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;

  margin-bottom: 12px;
`;
const P = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;
const SmallP = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #9d9a9a;
`;
