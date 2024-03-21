import React from 'react';
import { useNavigate } from 'react-router-dom';
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
// const NaverLoginImg = styled.img`
//   width: 50%;
//   height: 50%;
//   cursor: pointer;
// `;
const KakaoLogin: React.FC = () => {
  const CLIENT_ID = '';
  const STATE = '';
  const REDIRECT_URI = '';
  const KakaoAuthRoot = ``;

  const navigate = useNavigate();
  function navigateFavorite(): void {
    navigate('/favorite');
  }

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
