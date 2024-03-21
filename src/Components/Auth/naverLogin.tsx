import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NaverImg from '../../assets/images/naverLoginButton.png';

const NaverLoginButton = styled.button`
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
const NaverLogin: React.FC = () => {
  const CLIENT_ID = 'J1wzv0RZYqlXqTf6Gg7W';
  const STATE = 'false';
  const REDIRECT_URI = 'https://localhost:3000/login/naver/callback';
  const NaverAuthRoot = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const navigate = useNavigate();
  const navigateFavorite = () => {
    navigate('/favorite');
  };

  const loginRedirect = () => {
    window.location.href = NaverAuthRoot;
  };

  return (
    <NaverLoginButton onClick={loginRedirect}>
      <img alt="" src={NaverImg}></img>
    </NaverLoginButton>
  );
};

export default NaverLogin;
