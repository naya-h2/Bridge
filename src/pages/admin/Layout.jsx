import styled from 'styled-components';
import LoginForm from '../../components/admin/LoginForm';
import { useStore } from '../../stores';

function Layout() {
  const { isLogin } = useStore((state) => ({ isLogin: state.isLogin }));

  return <>{isLogin ? <div>로그인성공</div> : <LoginForm />}</>;
}

export default Layout;
