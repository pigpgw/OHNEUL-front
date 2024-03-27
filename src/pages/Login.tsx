import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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
interface State {
  user: {
    value: { username: string; AccessToken: string; refreshToken: string };
    isLogin: boolean;
  };
}
const Login: React.FC = () => {
  const isLogin = useSelector((state: State) => state.user.isLogin);
  const userName = useSelector((state: State) => state.user.value.username);
  return (
    <>
      <LogoContainer>
        <MainLogo></MainLogo>
      </LogoContainer>

      {isLogin ? (
        `${userName}님의 "오늘"`
      ) : (
        <SocialContainer>
          <NaverLogin></NaverLogin>
          <KakaoLogin></KakaoLogin>
        </SocialContainer>
      )}
      {/* 이 페이지 랜더링 된 후 캐치프레이즈 문구 나오게하기 */}
    </>
  );
};

export default Login;
