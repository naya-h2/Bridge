import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar"
import Filter from "../../components/list/ListFilter"
import List from "../../components/list/List"

function Layout(){
     return(
          <Wrapper>
               <Sidebar/>
               <ContainerWrapper>
                    <Filter/>
                    <List/>
               </ContainerWrapper>
          </Wrapper>

     )
}
export default Layout;

const Wrapper = styled.div`
     display: flex;
     width: 100%;
     height: 100vh;
`
const ContainerWrapper = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 100%;
`