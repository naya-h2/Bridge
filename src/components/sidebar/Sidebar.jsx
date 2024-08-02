import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import styled from 'styled-components';

const SIDEBAR_PATH = ['/calendar', '/post', '/list'];

function Sidebar() {
  const path = window.location.pathname;

  return (
    <Container>
      <TopContainer />
      <MiddleContainer index={SIDEBAR_PATH.indexOf(path)} />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-color: #f9fcff;
  min-height: 100dvh;
  min-width: 296px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
`;
