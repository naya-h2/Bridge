import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import BottomContainer from "./BottomContainer";
import styled from "styled-components"

function Sidebar(){
     return(
          <Container>
               <TopContainer/>
               <MiddleContainer/>
               <BottomContainer/>
          </Container>
     )
}

export default Sidebar;

const Container=styled.div`
     background-color : #F9FCFF;
     height: 100%;
     width: 296px;
     border-right : 1px solid rgba(0, 0, 0, 0.2);

     display: flex;
     flex-direction: column;
`;



