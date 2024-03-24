import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const KakaoRedirect = () => {
  const code = window.location.search;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .post(`${process.env.REACT_APP_URL}kakaoLogin${code}`)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem('name', data.user_name);
        navigate('/loginSuccess');
      });
  }, []);

  return <Wrap>카카오 로딩중</Wrap>;
};
const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;
export default KakaoRedirect;
