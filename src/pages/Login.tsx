import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTimeout } from 'timers/promises';
import NaverLogin from '../Components/Auth/NaverLogin';
import KakaoLogin from '../Components/Auth/KakaoLogin';
import MainLogo from '../Components/Common/MainLogo';
import phrase from '../assets/images/appCatchphrase.png';

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
interface State {
  user: {
    value: { username: string; AccessToken: string; refreshToken: string };
    isLogin: boolean;
  };
}
const Login: React.FC = () => {
  const isLogin = useSelector((state: State) => state.user.isLogin);
  const userName = useSelector((state: State) => state.user.value.username);
  const navigate = useNavigate();
  const red = () => {
    if (isLogin) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 5000);
      return () => clearTimeout(timer);
    }
  };
  useEffect(() => {
    red();
    // isLogin이 true이면서 10초 후에 홈 페이지로 이동
  }, [isLogin, navigate]);

  return (
    <>
      <LogoContainer>
        <MainLogo></MainLogo>
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
