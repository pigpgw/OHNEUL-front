import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from 'stores/slices/userSlice';

const Redirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('/user');
        // 로컬스토리지 사용?
        const { username, AccessToken, refreshToken } = response.data;
        dispatch(setAuth({ username, AccessToken, refreshToken }));
        navigate('/');
      } catch (error) {
        alert('로그인에 실패했습니다.');
        console.error('로그인 요청 중 오류 발생:', error);
      }
    };

    fetchToken();
  }, [dispatch, navigate]);

  return (
    <>
      <Wrap>로딩중</Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

export default Redirect;
