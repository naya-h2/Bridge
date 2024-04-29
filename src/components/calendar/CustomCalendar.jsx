import {useState, useEffect} from 'react'
import styled from "styled-components"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from "moment"

function CustomCalendar(){
     const today = new Date();
     
     const [date, setDate] = useState(today);
  
     const handleDateChange = (newDate) => {
          setDate(newDate);
        };
     return(
          <>
          <Header>
               <P>캘린더</P>
          </Header>
          <Calendar
               value={date}
               onChange={handleDateChange}
               formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
               formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
               formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
               calendarType="gregory" // 일요일 부터 시작
               showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
               next2Label={null} // +1년 & +10년 이동 버튼 숨기기
               prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
               minDetail="year" // 10년단위 년도 숨기기
          />
          </>
     )
}
export default CustomCalendar;

const Header = styled.div`
     display : flex;
     height : 146px;
     width : 100%;
     background : pink;
`
const Month = styled.div`
     height : 105px;
     width: 100%;
     background : yellow;
`
const Day = styled.div`
     height : 55px;
     width: 100%;
     background : green;
`
const Body = styled.div`
     height : 716px;
     width: 100%;
     background : skyblue;
`
const P = styled.p`
     display: flex;
     margin-left: 70px;
     align-items: end;
     font-weight: 700;
     font-size: 24px;
     line-height: 35px;
     /* identical to box height */
     letter-spacing: -0.02em;

     color: #000000;
`
