import LogoImg from "../../assets/icon/logo-blue.svg";
import styled from "styled-components";
function TopContainer(){
     return(
          <Container>
               <Logo src={LogoImg}/>
               <TextContainer>
                    <MainText>팀브릿지</MainText>
                    <SubText>바이오공학 분야|예비창업가</SubText>
               </TextContainer>
           </Container>
     )

}
export default TopContainer;
const Container=styled.div`
     display: flex;
     height: 160px;
     width: 100%;
`
const Logo=styled.img`
     width: 56px;
     height: 56px;
     margin-left: 37px;
     margin-top: 47px;
`
const TextContainer = styled.div`
     display: flex;
     flex-direction: column;

     width: 153px;
     height: 50px;
     margin-left : 15px;
     margin-top: 49px;
`;
const MainText = styled.span`
     font-size: 20px; 
     font-weight: bold; 
     line-height: 29px;
`;
const SubText = styled.span`
     font-size: 12px;
     color: #9D9A9A;
     line-height: 17px;
     margin-top: 4px;
  `;
