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
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { makeIdxString } from '../../utils/makeIdxString';
import arrowRight from '../../assets/icon/arrow-right.svg';
import arrowLeft from '../../assets/icon/arrow-left.svg';

function Layout() {
  const { selectedList } = useStore((state) => ({ selectedList: state.selectedFilter }));
  const PROXY = window.location.hostname === 'localhost' ? '' : '/api';
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(today);
  const [dataCount, setDataCount] = useState({});
  const [month, setMonth] = useState(format(today, 'yyyy-MM'));
  const [idxString, setIdxString] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const { data, refetch } = useQuery({
    queryKey: ['month-business', month, idxString],
    queryFn: async () => {
      const res = await (await fetch(`${PROXY}/business/byMonthAndFilter?date=${month}&${idxString}`)).json();
      setDataList([...res]);

      let count = {};

      res.map((data) => {
        if (count[data.deadline] === undefined) {
          count[data.deadline] = 1;
        } else {
          count[data.deadline]++;
        }
      });

      setDataCount({ ...count });
      return res;
    },
  });

  const handleSearchClick = () => {
    setIdxString(makeIdxString(selectedList));
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [month]);

  useEffect(() => {
    setDataList(data?.filter((item) => item.deadline === format(selectedDate, 'yyyy-MM-dd')));
  }, [selectedDate]);

  const handleNextMonthClick = () => {
    const [yyyy, mm] = month.split('-');
    if (mm === '12') return setMonth(Number(yyyy) + 1 + '-' + '01');
    const newMonth = Number(mm) + 1;
    setMonth(format(yyyy + '-' + newMonth, 'yyyy-MM'));
  };

  const handlePrevMonthClick = () => {
    const [yyyy, mm] = month.split('-');
    if (mm === '01') return setMonth(Number(yyyy) - 1 + '-' + '12');
    const newMonth = Number(mm) - 1;
    setMonth(format(yyyy + '-' + newMonth, 'yyyy-MM'));
  };

  return (
    <>
      <Sidebar index={0} />
      <Container>
        <Title>캘린더</Title>
        <CalendarContainer>
          <CalendarWrapper>
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              onClickMonth={(date) => setMonth(format(date, 'yyyy-MM'))}
              prevLabel={<ArrowButton src={arrowLeft} onClick={handlePrevMonthClick} />}
              nextLabel={<ArrowButton src={arrowRight} onClick={handleNextMonthClick} />}
              formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
              formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
              formatMonthYear={(locale, date) => moment(date).format('MM월')}
              calendarType="gregory" // 일요일 부터 시작
              showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
              next2Label={null} // +1년 & +10년 이동 버튼 숨기기
              prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
              minDetail="year" // 10년단위 년도 숨기기
              tileContent={({ date, view }) => {
                const curDate = format(date, 'yyyy-MM-dd');
                if (dataCount[curDate] !== undefined) {
                  return (
                    <>
                      <Chip hasActive={curDate === format(selectedDate, 'yyyy-MM-dd')}>{dataCount[curDate]}</Chip>
                    </>
                  );
                }
              }}
            />
            <CardContainer>
              {dataList && dataList.length > 0 ? (
                dataList.map((business) => <BusinessList key={business.id} data={business} />)
              ) : (
                <NoDataMsg>데이터가 없습니다.</NoDataMsg>
              )}
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
  gap: 16px;
`;

const ArrowButton = styled.img`
  width: 32px;
  height: 32px;

  object-position: center;
  object-fit: cover;
`;

const NoDataMsg = styled.div`
  display: flex;
  justify-content: center;
`;
