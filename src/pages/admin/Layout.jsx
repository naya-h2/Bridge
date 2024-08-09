import styled from 'styled-components';
import LoginForm from '../../components/admin/LoginForm';
import { useStore } from '../../stores';
import BusinessPost from '../../components/admin/BusinessPost';
import arrowBack from '../../assets/icon/arrow-back.svg';
import BusinessEditList from '../../components/admin/BusinessEditList';
import AiList from '../../components/admin/AiList';
import { useRefreshToken } from '../../hooks/useRefreshToken';

const TITLE = {
  main: '',
  post: '사업 등록',
  edit_list: '사업 수정',
  ai_list: 'AI 사업계획서 내역',
};

function Layout() {
  useRefreshToken();
  const { isLogin, setIsLogin } = useStore((state) => ({
    isLogin: state.isLogin,
    setIsLogin: state.setIsLogin,
  }));

  const AdminMain = () => {
    return (
      <>
        <Title>사업 등록 및 수정</Title>
        <BtnWrapper>
          <Button onClick={() => setIsLogin('post')}>등록</Button>
          <Button onClick={() => setIsLogin('edit_list')}>수정</Button>
        </BtnWrapper>
        <Title>AI 사업계획서 내역</Title>
        <Button onClick={() => setIsLogin('ai_list')}>바로가기</Button>
      </>
    );
  };

  const PAGE_COMPONENT = {
    main: <AdminMain />,
    post: <BusinessPost />,
    edit_list: <BusinessEditList />,
    edit_post: <BusinessPost type="edit" />,
    ai_list: <AiList />,
  };

  return (
    <>
      {isLogin !== '' ? (
        <Container>
          {isLogin !== 'main' && <BackIcon src={arrowBack} onClick={() => (isLogin === 'edit_post' ? setIsLogin('edit_list') : setIsLogin('main'))} />}
          <PageTitle>{TITLE[isLogin]}</PageTitle>
          {PAGE_COMPONENT[isLogin]}
        </Container>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default Layout;

const BackIcon = styled.img`
  width: 40px;
  height: 40px;

  cursor: pointer;

  position: absolute;
  top: 80px;
  left: 40px;
`;

const Container = styled.div`
  padding: 160px 120px;
  min-width: 1024px;
  max-width: 1440px;

  position: relative;
`;

const PageTitle = styled.p`
  margin-bottom: 40px;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const Title = styled.p`
  margin-top: 40px;
  margin-bottom: 8px;
  height: 48px;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Button = styled.button`
  width: 120px;
  height: 48px;
  padding: 12px 0;

  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.32px;

  background-color: #46474b;
  border-radius: 40px;
`;
