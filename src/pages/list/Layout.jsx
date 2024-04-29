import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import Filter from '../../components/list/ListFilter';
import List from '../../components/list/List';

function Layout() {
  return (
    <Wrapper>
      <Sidebar index={3} />
      <ContainerWrapper>
        <Filter />
        <List />
      </ContainerWrapper>
    </Wrapper>
  );
}
export default Layout;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 296px);
  height: 100%;

  padding-left: 296px;
`;
