import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icon/logo-white.svg';
import styled from 'styled-components';

function Layout() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/list')}>
      <Image src={Logo} />
      <Msg>
        이동하시려면 <br />
        화면을 클릭하세요
      </Msg>
    </Container>
  );
}
export default Layout;

const Container = styled.div`
  background-color: #3686ff;
  width: 100vw;
  height: 100vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  cursor: pointer;
`;
const Image = styled.img`
  width: 126px;
  height: 126px;
`;
const Msg = styled.p`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
