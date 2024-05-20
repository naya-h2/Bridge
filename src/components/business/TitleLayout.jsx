import styled from 'styled-components';

function TitleLayout({ type = '작성', children }) {
  return (
    <Container>
      AI 사업계획서 작성하기
      {children}
    </Container>
  );
}

export default TitleLayout;

const Container = styled.div`
  position: relative;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;
