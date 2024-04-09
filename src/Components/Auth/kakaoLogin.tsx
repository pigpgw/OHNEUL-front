import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import KakaoImg from '../../assets/images/kakaoLoginButton.png';

const KakaoLoginButton = styled.button`
  width: 30%;
  height: 20%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

// const fetchUserData = async () => {
//   const response = await axios.get('/users');
//   return response.data;
// };

// const KakaoLogin: React.FC = () => {
// //   const QueryClient = useQueryClient();

// // const loginRedirect = async ()=>{
// // try{
// //   await QueryClient.fetchQuery('',fetchUserData)
// // }

// }

const KakaoLogin: React.FC = () => {
  const KakaoAuthRoot = 'http://localhost:4000/login/kakao';
  function loginRedirect(): void {
    window.location.href = KakaoAuthRoot;
  }

  return (
    <KakaoLoginButton onClick={loginRedirect}>
      <img alt="" src={KakaoImg}></img>
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
