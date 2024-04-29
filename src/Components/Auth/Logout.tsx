import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearAuth } from 'stores/slices/userSlice';

import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: #6f6f6f;
  cursor: pointer;
  outline: inherit;
`;

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

  useEffect(() => {
    if (!user.isLogin) {
      navigate('/');
    }
  }, [user.isLogin, navigate]);

  const handleLogOut = () => {
    const [flatform, token, rewardCoin, userId] = meltedCookie();
    // if (flatform === 'naver') {
    // try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/logout/naver`,
    // );
    // console.log(response.data);
    // if (response.status === 200) {
    console.log(`${flatform}-로그아웃`);
    dispatch(clearAuth());
    dispatch(logout());
    deleteCookie('user_id');
    deleteCookie('refreshToken');
    deleteCookie('provider');
    deleteCookie('reward');
    deleteCookie('admin');
    navigate('/');
    // } else {
    // console.log('네이버-실패');
    // }
    // } catch (error) {
    //   console.error('네이버-로그아웃', error);
    //   throw error;
    // }
    // } else if (flatform === 'kakao') {
    // try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/logout/kakao`,
    // );
    // console.log(response.data);
    // if (response.status === 200) {
    // console.log('카카오-로그아웃');
    // dispatch(clearAuth());
    // dispatch(logout());
    // deleteCookie('user_id');
    // deleteCookie('refreshToken');
    // deleteCookie('provider');
    // deleteCookie('reward');
    // deleteCookie('admin');
    // navigate('/');
    // } else {
    //   console.log('카카오-실패');
    // }
    // } catch (error) {
    //   console.error('카카오-로그아웃', error);
    //   throw error;
    // }
    // }
  };
  return (
    <div>
      <Button role="button" onClick={handleLogOut}>
        로그아웃
      </Button>
    </div>
  );
};

export default Logout;
