import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Head from '../../components/home/Head';
import Content from '../../components/home/Content';
import Footer from '../../components/home/Footer';

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <HeadWrapper>
        <Head />
      </HeadWrapper>
      <Content type="calendar" />
      <Content type="ai" />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}
export default Layout;

const HeadWrapper = styled.div`
  background-color: #3686ff;
`;

const FooterWrapper = styled.div`
  background-color: #11223b;
`;
