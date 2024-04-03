import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
interface User {
  user: {
    value: { username: string; AccessToken: string; refreshToken: string };
    isLogin: boolean;
  };
}
const Login: React.FC = () => {
  // const isLogin = useSelector((state: User) => state.user.isLogin);
  const isLogin = document.cookie;
  const userName = useSelector((state: User) => state.user.value.username);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLogin) {
  //     // const timer = window.setTimeout(() => {
  //     //   navigate('/home');
  //     // }, 5000);
  //     // return () => clearTimeout(timer);
  //     return alert('login');
  //   }
  //   return alert('로그인안됨');
  //   // return navigate('/');
  // }, [isLogin, navigate]);

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
// import React from 'react';
// import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import NaverLogin from 'Components/Auth/NaverLogin';
// import KakaoLogin from 'Components/Auth/KakaoLogin';
// // import MainLogo from 'Components/Common/MainLogo';

// const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 200px;
//   height: 40vh;
// `;
// const SocialContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1px;
// `;
// interface State {
//   user: {
//     value: { username: string; AccessToken: string; refreshToken: string };
//     isLogin: boolean;
//   };
// }
// const Login: React.FC = () => {
//   const isLogin = document.cookie;
//   // const isLogin = useSelector((state: State) => state.user.isLogin);
//   // const userName = useSelector((state: State) => state.user.value.username);
//   const navigate = useNavigate();
//   return (
//     <>
//       <LogoContainer>{/* <MainLogo></MainLogo> */}</LogoContainer>
//       {isLogin ? (
//         navigate('/home')
//       ) : (
//         <SocialContainer>
//           <NaverLogin></NaverLogin>
//           <KakaoLogin></KakaoLogin>
//         </SocialContainer>
//       )}

//       {}
//       {/* 이 페이지 랜더링 된 후 캐치프레이즈 문구 나오게하기 */}
//     </>
//   );
// };

// export default Login;
