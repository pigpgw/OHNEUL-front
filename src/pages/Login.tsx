import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NaverLogin from '../Components/Auth/NaverLogin';
import KakaoLogin from '../Components/Auth/KakaoLogin';
import MainLogo from '../Components/Common/MainLogo';
import phrase from '../assets/images/appCatchphrase.png';

const PhraseContainer = styled.div``;

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
interface State {
  user: {
    value: { username: string; AccessToken: string; refreshToken: string };
    isLogin: boolean;
  };
}
const Login: React.FC = () => {
  // const isLogin = useSelector((state: State) => state.user.isLogin);
  const isLogin = document.cookie;
  // const userName = useSelector((state: State) => state.user.value.username);
  const navigate = useNavigate();
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

      {}
      {/* 이 페이지 랜더링 된 후 캐치프레이즈 문구 나오게하기 */}
    </>
  );
};

export default Login;
