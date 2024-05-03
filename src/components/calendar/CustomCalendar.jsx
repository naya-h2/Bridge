import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import './myCalendarStyle.css';
import moment from 'moment';
import Chip from '../commons/Chip';

function CustomCalendar() {
  const today = new Date();

  const [date, setDate] = useState(today);
  const [dateArr, setDateArr] = useState(['2024-05-03', '2024-05-21', '2024-05-28']);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
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
    </>
  );
}
export default CustomCalendar;
