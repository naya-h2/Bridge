import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import FilterContent from '../../components/commons/FilterContent';
import SearchButton from '../../components/commons/SearchButton';
import { useStore } from '../../stores';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../../components/calendar/myCalendarStyle.css';
import moment from 'moment';
import Chip from '../../components/commons/Chip';
import BusinessList from '../../components/calendar/BusinessList';

const DATA = [
  {
    id: 2,
    title: '제목이 엄청 길어요 2024 2023 2022ㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇ',
    types: ['인력', '사업화'],
    deadline: '2024-08-10',
    agent: 'agent',
    link: '/',
    star: false,
    dday: 97,
  },
  {
    id: 3,
    title: 'title',
    types: ['인력'],
    deadline: '2024-08-15',
    agent: 'agent',
    link: '/',
    star: false,
    dday: 102,
  },
];

function Layout() {
  const { selectedList } = useStore((state) => ({ selectedList: state.selectedFilter }));

  const handleSearchClick = () => {
    console.log('검색!');

    console.log(selectedList);
  };

  const today = new Date();

  const [date, setDate] = useState(today);
  const [dateArr, setDateArr] = useState(['2024-05-03', '2024-05-21', '2024-05-28']);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  console.log(date);

  return (
    <>
      <Sidebar index={1} />
      <Container>
        <Title>캘린더</Title>
        <CalendarContainer>
          <CalendarWrapper>
            <Calendar
              value={date}
              onChange={handleDateChange}
              formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
              formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
              formatMonthYear={(locale, date) => moment(date).format('MM월')}
              calendarType="gregory" // 일요일 부터 시작
              showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
              next2Label={null} // +1년 & +10년 이동 버튼 숨기기
              prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
              minDetail="year" // 10년단위 년도 숨기기
              tileContent={({ date, view }) => {
                if (dateArr.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                  return (
                    <>
                      <Chip hasActive={false}>3</Chip>
                    </>
                  );
                }
              }}
            />
            <CardContainer>
              {DATA.map((data) => (
                <BusinessList key={data.id} data={data} />
              ))}
            </CardContainer>
          </CalendarWrapper>
          <FilterBox>
            <FilterWrapper>
              필터
              <SearchButton handleClick={handleSearchClick} />
            </FilterWrapper>
            <FilterContent />
          </FilterBox>
        </CalendarContainer>
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

const CalendarContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FilterBox = styled.div`
  width: 348px;
  height: 560px;
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

const CardContainer = styled.div`
  width: 670px;
  max-width: 100%;
  height: 184px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
