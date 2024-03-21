import React from 'react';
import styled from 'styled-components';
import NaverLogin from '../Components/Auth/NaverLogin';
import KakaoLogin from '../Components/Auth/KakaoLogin';
import MainLogo from '../Components/Common/MainLogo';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  height: 40vh;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;
const Login: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <MainLogo></MainLogo>
      </LogoContainer>
      <SocialContainer>
        <NaverLogin></NaverLogin>
        <KakaoLogin></KakaoLogin>
      </SocialContainer>
    </>
  );
};

export default Login;
