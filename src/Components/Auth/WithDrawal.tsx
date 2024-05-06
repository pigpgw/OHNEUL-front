import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearAuth } from 'stores/slices/userSlice';
import axios from 'axios';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';
import AlertModal from 'Components/Modal/AlertModal';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: #6f6f6f;
  cursor: pointer;
  outline: inherit;
  font-size: 2vh;
`;
interface User {
  user: {
    value: { user_id: string; refreshToken: string; provider: string };
    isLogin: boolean;
  };
}
const WithDrawal: React.FC = () => {
  const [withDrawModal, setWithDrawModal] = useState(false);
  const [withdrawn, setWithdrawn] = useState(false);
  const user = useSelector((state: User) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  const userId = user.value.user_id;

  const handleWithDrawal = () => {
    const [flatform, token, rewardCoin] = meltedCookie();
    if (flatform) {
      dispatch(clearAuth());
      dispatch(logout());
      deleteCookie('user_id');
      deleteCookie('refreshToken');
      deleteCookie('provider');
      deleteCookie('reward');

      navigate('/');
    }

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
      {withDrawModal && (
        <AlertModal
          icon="warning"
          title="회원탈퇴"
          msg="회원탈퇴시 보유중인 코인은 사라집니다."
          btn1="확인"
          btn2="취소"
          onClose={() => {
            setWithdrawn(true);
          }}
          onCancel={() => {
            setWithDrawModal(false);
          }}
        />
      )}
      {withdrawn && (
        <AlertModal
          icon="success"
          title="회원탈퇴"
          msg="성공하셨습니다."
          btn1="확인"
          onClose={handleWithDrawal}
        />
      )}
      <Button
        onClick={() => {
          setWithDrawModal(true);
        }}
      >
        회원탈퇴
      </Button>
    </div>
  );
};

export default WithDrawal;
