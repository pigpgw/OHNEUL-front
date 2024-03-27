import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const NaverRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log(document.cookie);
        // const code = new URL(window.location.href).searchParams.get('code');
        // const response = await axios.post('/users/join', {
        //   code,
        // });
        // const { token } = response.data.token;
        // localStorage.setItem('token', token);
        navigate('/afterlogin');
      } catch (error) {
        alert(error);
        console.log('토큰 요청 중 오류 발생:', error);
      }
    };
    fetchToken();
  }, [navigate]);

  return <Wrap>네이버로딩중</Wrap>;
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

export default NaverRedirect;
