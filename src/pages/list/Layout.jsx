import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import FilterSection from '../../components/list/FilterSection';
import CardSection from '../../components/list/CardSection';

function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <ContainerWrapper>
        <FilterSection />
        <Line />
        <CardSection />
      </ContainerWrapper>
    </Wrapper>
  );
}
export default Layout;

const Wrapper = styled.div`
  display: flex;
  min-width: 1020px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 296px);
  min-width: 1020px;

  padding: 32px 42px;
`;

const Line = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;
