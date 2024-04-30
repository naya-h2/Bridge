import styled from 'styled-components';

const SectionLayout = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default SectionLayout;

const Container = styled.div`
  padding: 56px 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;
