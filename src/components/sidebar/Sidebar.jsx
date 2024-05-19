import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import BottomContainer from './BottomContainer';
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
  height: 100vh;
  width: 296px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  position: fixed;
  left: 0;
  z-index: 10;
`;
