import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import Chip from '../../components/commons/Chip';
function Layout() {
  return (
    <>
      <Sidebar index={1} />
      <ContainerWrapper>
        {/* <Chip hasActive={true}>3</Chip>
        <Chip hasActive={false}>12</Chip> */}
        <CustomCalendar />
      </ContainerWrapper>
    </>
  );
}
export default Layout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 296px);
  min-width: 1020px;

  margin-left: 296px;
  padding: 32px 42px;
`;
