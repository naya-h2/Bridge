import {useState, useEffect} from 'react'
import styled from "styled-components"
import data from "../../data/listData"
import ListData from "./ListData"

function List(){
     let [businesses, setBusinesses]=useState(data)
     console.log(businesses);
     return(
          <Container>
               <P>모집 중인 사업</P>
               <ListContainer>
               {
                    businesses.map((business, idx)=>(
                         <ListData business={business}/>
                    ))
               }
               </ListContainer>
          </Container>
     );
}
export default List;

const Container = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     background-color : #F9FCFF;
`
const ListContainer = styled.div`
     display: flex;
     flex-direction: column;

     width: 1130px;
     height: 382px;    
     margin-left: 82px;
     margin-top: 10px;
`

const P = styled.h1`
     font-weight: 700;
     font-size: 24px;
     line-height: 35px;
     /* identical to box height */
     letter-spacing: -0.02em;
     color: #000000;

     margin-left: 82px;
     margin-top: 50px;
`
