import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearAuth } from 'stores/slices/userSlice';
import axios from 'axios';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: #dbdbdb;
  cursor: pointer;
  outline: inherit;
`;
interface User {
  user: {
    value: { user_id: string; refreshToken: string; provider: string };
    isLogin: boolean;
  };
}
const WithDrawal: React.FC = () => {
  const user = useSelector((state: User) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  const userId = user.value.user_id;

  // useEffect(() => {
  //   if (!user.isLogin) {
  //     alert('로그인상태를 확인해주세요.');
  //     console.log(user.isLogin, 'handle끝2');
  //   }
  // }, [user.isLogin, navigate]);

  const handleWithDrawal = () => {
    const [flatform, token, rewardCoin] = meltedCookie();
    // if (flatform === 'naver') {
    //   try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/logout/naver`,
    // );
    // console.log(response.data);
    // if (response.status === 200) {
    // console.log('네이버 로그아웃');
    if (flatform) {
      dispatch(clearAuth());
      dispatch(logout());
      deleteCookie('user_id');
      deleteCookie('refreshToken');
      deleteCookie('provider');
      deleteCookie('reward');

      navigate('/');
    }
    //     }
    //   } catch (error) {
    //     console.error('네이버-로그아웃-에러', error);
    //   }
    // } else if (flatform === 'kakao') {
    //   try {
    //     const response = await axios.post(
    //       `${process.env.REACT_APP_BASE_URL}/logout/kakao`,
    //     );
    //     console.log(response.data);
    //     if (response.status === 200) {
    //       console.log('카카오 로그아웃');
    //       dispatch(clearAuth());
    //       dispatch(logout());
    //       deleteCookie('user_id');
    //       deleteCookie('refreshToken');
    //       deleteCookie('provider');
    //       deleteCookie('reward');
    //       deleteCookie('admin');
    //       navigate('/');
    //     }
    //   } catch (error) {
    //     console.error('네이버 - 로그아웃', error);
    //   }

    const userDelete = async (userid: string) => {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/users/${userid}`,
        );
        return response.data;
      } catch (error) {
        console.error('회원탈퇴 실패', error);
        throw error;
      }
    };

    userDelete(userId)
      .then((res) => {
        console.log(res, 'success');
        navigate('/');
      })
      .catch((error) => {
        console.error(error, 'failed to delete user');
      });
  };
  return (
    <div>
      <Button onClick={handleWithDrawal}>회원탈퇴</Button>
    </div>
  );
};

export default WithDrawal;
