import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseDispatch } from 'react-redux';
import styled from 'styled-components';
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
const KakaoLogin: React.FC = () => {
  const KakaoAuthRoot =
    'https://port-0-ohneul-44rk2blu3topxi.sel5.cloudtype.app/login/kakao';
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
