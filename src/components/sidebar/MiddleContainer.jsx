import menu1 from "../../assets/icon/side-home.svg";
import menu2 from "../../assets/icon/side-calendar.svg";
import menu3 from "../../assets/icon/side-ai.svg";
import menu4 from "../../assets/icon/side-list.svg";
import menu5 from "../../assets/icon/side-setting.svg";
import styled from "styled-components";

const menuList = [
     {icon: menu1, text: " 홈 대시보드"},
     {icon: menu2, text: "캘린더"},
     {icon: menu3, text: "AI 사업계획서"},
     {icon: menu4, text: "지원사업리스트"},
     {icon: menu5, text: "설정"}
]
function MiddleContainer(){
     return(
          <Container>
               {
                    menuList.map((menu, idx)=>{
                         return(
                              <Menu key={idx}>
                              <Icon src={menu.icon}/>
                              <P>{menu.text}</P>
                         </Menu>
                         )
                    })
               }
          </Container>
     )
}

export default MiddleContainer;

const Container = styled.div`
     display: flex;
     flex-direction: column;
     gap: 8px;
     flex-grow: 1;
     width: 100%;
`
const Menu = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center; 
     width: 296px;
     height: 48px;
`
const Icon=styled.img`
     margin-left: 37px;
     width: 24px;
     height: 24px;
`
const P = styled.h1`
     font-weight: 500;
     font-size: 16px;
     line-height: 23px;
     margin-left: 16px;
     color: #525252;
`