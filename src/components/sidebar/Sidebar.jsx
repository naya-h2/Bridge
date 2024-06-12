import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import styled from 'styled-components';

function Sidebar({ index }) {
  return (
    <Container>
      <TopContainer />
      <MiddleContainer index={index} />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-color: #f9fcff;
  min-height: 100vh;
  min-width: 296px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
`;
