import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAuth } from '../../stores/slices/userSlice';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        navigate('/afterlogin');
        console.log(document.cookie);
      } catch (error) {
        alert(error);
        console.log(' 요청 중 오류 발생:', error);
      }
    };
    fetchToken();
  }, [navigate]);

  return <Wrap>카카오 로딩중</Wrap>;
};
const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;
export default KakaoRedirect;
