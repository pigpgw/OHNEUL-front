import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NaverLogin from 'Components/Auth/naverLogin';
import KakaoLogin from 'Components/Auth/kakaoLogin';
// import MainLogo from 'Components/Common/MainLogo';

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
const PhraseContainer = styled.div``;
// 로그인후잠깐보여지는페이지
// 이페이지가렌더링된후바로메인페이지진입
interface User {
  user: {
    value: { username: string; AccessToken: string; refreshToken: string };
    isLogin: boolean;
  };
}
const Login: React.FC = () => {
  // const isLogin = useSelector((state: User) => state.user.isLogin);
  const userName = useSelector((state: User) => state.user.value.username);
  const navigate = useNavigate();
  const isLogin = document.cookie;
  useEffect(() => {
    if (isLogin) {
      const timer = window.setTimeout(() => {
        navigate('/home');
      }, 2000);
      return () => clearTimeout(timer);
    }
    return navigate('/');
  }, [isLogin, navigate]);

  return (
    <>
      <LogoContainer>
        {/* <MainLogo></MainLogo> */}
      </LogoContainer>
      {isLogin ? (
        <PhraseContainer>
          <img src={phrase} alt="phrase"></img>
        </PhraseContainer>
      ) : (
        <SocialContainer>
          <NaverLogin></NaverLogin>
          <KakaoLogin></KakaoLogin>
        </SocialContainer>
      )}
    </>
  );
};

export default Login;
