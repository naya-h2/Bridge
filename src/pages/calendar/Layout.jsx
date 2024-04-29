import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar"
import CustomCalendar from "../../components/calendar/CustomCalendar"
function Layout(){
     return(
          <Wrapper>
               <Sidebar index={1}/>
               <BigContainer>
                    <CustomCalendar/>
               </BigContainer>
               <SmallContainer>

               </SmallContainer>
          </Wrapper>
     )
}
export default Layout;

const Wrapper = styled.div`
     display: flex;
     width: 100%;
     height: 100vh;
`
const BigContainer = styled.div`
     display: flex;
     flex-direction : column;
     width: 65%;
     height: 100%;
     // background-color : blue;
`
const SmallContainer = styled.div`
     display: flex;
     flex-grow: 1;
     height: 100%;
     background-color: red;
`