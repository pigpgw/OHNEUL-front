import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { setAuth } from 'stores/slices/userSlice';

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

const fetchToken = async () => {
  const response = await axios.get('/user');
  return response.data;
};

const Redirect: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery('userData', fetchToken);
  if (isLoading) return <Wrap>로딩중</Wrap>;
  if (isError) {
    alert('싪ㅍ패');
    console.error(' 에러');

    return <Wrap>error</Wrap>;
  }
  const { username, AccessToken } = userData;
  dispatch(setAuth({ username, AccessToken }));
  return null;
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const response = await axios.get('/user');
  //       // 로컬스토리지 사용?
  //       const { username, AccessToken, refreshToken } = response.data;
  //       dispatch(setAuth({ username, AccessToken, refreshToken }));
  //       navigate('/');
  //     } catch (error) {
  //       alert('로그인에 실패했습니다.');
  //       console.error('로그인 요청 중 오류 발생:', error);
  //     }
  //   };
  //   fetchToken();
  // }, [dispatch, navigate]);

  // return (
  //   <>
  //     <Wrap>로딩중</Wrap>
  //   </>
  // );
};

export default Redirect;
