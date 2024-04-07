import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NaverLogin from 'Components/Auth/naverLogin';
import KakaoLogin from 'Components/Auth/kakaoLogin';
import MainLogo from 'Components/Common/MainLogo';
import phrase from 'assets/images/appCatchphrase.png';
import { setAuth, login } from 'stores/slices/userSlice';
import meltedCookie from 'utils/meltedCookie';

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
    value: { user_id: string; refreshToken: string; provider: string };
    isLogin: boolean;
  };
}

const Login: React.FC = () => {
  // const isLogin = useSelector((state: User) => state.user.isLogin);
  const storedUserInfo = useSelector((state: User) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: User) => state.user.isLogin);
  const [userId, token, flatform] = meltedCookie();

  useEffect(() => {
    dispatch(
      setAuth({ user_id: userId, refreshToken: token, provider: flatform }),
    );
    const isCookie = (): boolean => {
      return (
        document.cookie.includes('user_id') &&
        document.cookie.includes('refreshToken') &&
        document.cookie.includes('provider')
      );
    };
    if (isCookie() && !isLogin) {
      dispatch(login());
    }
  }, [dispatch, isLogin]);

  useEffect(() => {
    if (isLogin) {
      console.log(storedUserInfo, '확인');
      const timer = window.setTimeout(() => {
        navigate('/favorite');
      }, 2000);
      return () => clearTimeout(timer);
    }
    return navigate('/');
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
