import Logo from '../../assets/icon/logo-white.svg';
import styled from 'styled-components';

function Layout() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
}
export default Layout;

const Container = styled.div`
  background-color: #3686ff;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
const Image = styled.img`
  margin-top: 30vh;
  cursor: pointer;
`;
