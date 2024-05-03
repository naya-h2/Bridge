import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import Filter from '../../components/list/ListFilter';
import List from '../../components/list/List';

function Layout() {
  return (
    <>
      <Sidebar index={2} />
      <ContainerWrapper>
        <Filter />
        <Line />
        <List />
      </ContainerWrapper>
    </>
  );
}
export default Layout;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 296px);
  min-width: 1020px;

  margin-left: 296px;
  padding: 32px 42px;
`;

const Line = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;
