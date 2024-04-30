import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import BottomContainer from './BottomContainer';
import styled from 'styled-components';

function Sidebar({ index }) {
  return (
    <Container>
      <Wrapper>
        <TopContainer />
        <MiddleContainer index={index} />
      </Wrapper>
      <BottomContainer />
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
  justify-content: space-between;

  position: fixed;
  left: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
