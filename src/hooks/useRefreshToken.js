import { useEffect } from 'react';
import { useStore } from '../stores';
import { PROXY } from '../constants/api';

export const useRefreshToken = () => {
  const { setIsLogin, setAccessToken } = useStore((state) => ({
    setIsLogin: state.setIsLogin,
    setAccessToken: state.setAccessToken,
  }));

  const reissueToken = async () => {
    const res = await fetch(`${PROXY}/reissue`, {
      method: 'POST',
      credentials: 'include',
    });
    if (res.ok) {
      setIsLogin('main');
      setAccessToken(res.headers.get('Authorization'));
    }
  };

  useEffect(() => {
    reissueToken();
  }, []);
};
