import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearAuth } from 'stores/slices/userSlice';

interface User {
  user: {
    value: { user_id: string; refreshToken: string; provider: string };
    isLogin: boolean;
  };
}
const Logout: React.FC = () => {
  const user = useSelector((state: User) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleLogout = (): void => {
    dispatch(clearAuth());
    dispatch(logout());
    deleteCookie('user_id');
    deleteCookie('refreshToken');
    deleteCookie('provider');
    // navigate('/');
    console.log(user.isLogin, 'handle끝');
  };

  useEffect(() => {
    // isLogin 상태가 변경될 때마다 모니터링하여 필요한 작업 수행
    if (!user.isLogin) {
      // 로그아웃 처리 후 페이지 이동
      navigate('/');
      console.log(user.isLogin, 'handle끝2');
    }
  }, [user.isLogin, navigate]);

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Logout;
