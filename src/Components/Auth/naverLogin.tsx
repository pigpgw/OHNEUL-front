import React, { useEffect } from 'react';
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
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const STATE = 'flase';
  const REDIRECT_URI = 'https://localhost:3000/login/naver/callback';
  const NaverAuthRoot = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

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
