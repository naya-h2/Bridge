import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import CustomCalendar from '../../components/calendar/CustomCalendar';
import FilterContent from '../../components/commons/FilterContent';
import SearchButton from '../../components/commons/SearchButton';
import { useStore } from '../../stores';

function Layout() {
  const { selectedList } = useStore((state) => ({ selectedList: state.selectedFilter }));

  const handleSearchClick = () => {
    console.log('검색!');

    console.log(selectedList);
  };

  return (
    <>
      <Sidebar index={1} />
      <Container>
        <Title>캘린더</Title>
        <CalendarWrapper>
          <CustomCalendar />
          <FilterBox>
            <FilterWrapper>
              필터
              <SearchButton handleClick={handleSearchClick} />
            </FilterWrapper>
            <FilterContent />
          </FilterBox>
        </CalendarWrapper>
      </Container>
    </>
  );
}
export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: calc(100vw - 296px);
  min-width: 1020px;

  margin-left: 296px;
  padding: 32px 42px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const FilterBox = styled.div`
  width: 348px;
  padding: 36px;

  border-radius: 8px;
  background: #fafafa;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.36px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
