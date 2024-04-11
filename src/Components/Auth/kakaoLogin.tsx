import React from 'react';
import styled from 'styled-components';
import KakaoImg from 'assets/images/kakaoLoginButton.png';

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
