import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      브릿지 AI 정부지원사업캘린더
      <DetailText>
        주식회사 독심 | 대표자 손승연 | 사업자등록번호 837-81-02980 | 문의 0507-1419-8037 | <br />
        주소 서울 마포구 월드컵북로 199 3층
      </DetailText>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  min-width: 1024px;
  max-width: 1440px;
  padding: 88px 136px;
  margin: 0 auto;

  background-color: #11223b;

  color: #f7f7f8;
  font-size: 18px;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
  letter-spacing: -0.18px;
`;

const DetailText = styled.p`
  margin-top: 24px;

  font-size: 14px;
  letter-spacing: -0.14px;
`;
