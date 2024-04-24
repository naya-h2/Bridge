import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import styled from "styled-components"
import icon from "../../assets/icon/list-link.svg"
import whiteStar from "../../assets/icon/empty-star.svg"
import YellowStar from "../../assets/icon/filled-star.svg"

// type: {
//      "사업화": true, 
//      "기술개발(R&D)" : false, 
//      "시설∙공간∙보육" : false, 
//      "멘토링∙컨설팅∙교육" : false,
//      "행사∙네트워크" : false,
//      "융자" : false,
//      "인력" : false, 
//      "글로벌 진출" : false,
//      "공공기관" : true,
//      "민간기관" : false},
function ListData({business}){
     let navigate=useNavigate();
     let [star, setStar] = useState(business.importance);
     return(
          <Container>
               <TopContainer>
                    <Icon src={icon} onClick={()=>{navigate(`${business.link}`)}}/>
                    <Title>{business.title}</Title>
                    <Dday>D-{business.dday}</Dday>
                    <Agent>{business.agent}</Agent>
                    <Date>{business.date}</Date>
                    <Star src={
                         star ? whiteStar:YellowStar} 
                         onClick={()=>{
                              setStar(!star);
                         }}/>
               </TopContainer>
               <BottomContainer>
               {
                  business.type.map((type, idx)=>(
                    <Button>{type}</Button>
                  ))
               }  
               </BottomContainer>
          </Container>
     )
}
export default ListData;

const Container = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 127px;

     background: #F9FCFF;
`

const TopContainer = styled.div`
     display: flex;
     align-items: center;
     width: 100%;
     height: 63px;
`
const BottomContainer = styled.div`
     width: 100%;
     height: 64px;

     display: flex;
     align-items: flex-start;
     margin-left : 52px;
     gap: 10px;
`
const Icon = styled.img`
     width: 32px;
     height: 32px;
`

const Title = styled.h1`
     margin-left: 20px;
     font-weight: 500;
     font-size: 20px;
     line-height: 29px;
     letter-spacing: -0.02em;

     color: #000000;
`
const Dday = styled.p`
     margin-left: 15px;
     font-weight: 500;
     font-size: 18px;
     line-height: 23px;
     letter-spacing: -0.02em;

     color: #3686FF;
`
const Agent = styled.p`
     margin-left : 100px;
     font-weight: 400;
     font-size: 16px;
     line-height: 23px;
     letter-spacing: -0.02em;

     color: #525252;
`

const Date = styled.p`
     margin-left : 40px;
     font-weight: 400;
     font-size: 16px;
     line-height: 23px;
     letter-spacing: -0.02em;

     color: #525252;
`
const Star = styled.img`
     margin-left : auto; 
     width: 32px;
     height: 32px;
`

const Button = styled.a`
     display: flex;
     align-items: center;
     width: fit-content;

     background: #FFFFFF;
     border: 1px solid #525252;
     border-radius: 40px;
     padding: 6px 16px;

`