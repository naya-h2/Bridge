import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      브릿지 AI 정부지원사업캘린더
      <DetailText>
        주식회사 에이아이라이프플래너 | 대표자 손승연 | 사업자등록번호 824-81-02970 | 문의 0507-1419-8037 |<br />
        주소 강원특별자치도 강릉시 사임당로 641-28, 102호
      </DetailText>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 1440px;
  padding: 88px 136px;
  margin: 0 auto;

  background-color: #11223b;

  color: #f7f7f8;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
  letter-spacing: -0.18px;
`;

const DetailText = styled.p`
  margin-top: 24px;

  font-size: 1.4rem;
  letter-spacing: -0.14px;

  white-space: nowrap;
`;
