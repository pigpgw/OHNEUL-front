import React from 'react';
import styled from 'styled-components';
import MainLogo from '../Components/Common/MainLogo';
import phrase from '../assets/images/appCatchphrase.png';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  height: 40vh;
`;
const PhraseContainer = styled.div``;
// 로그인후잠깐보여지는페이지
// 이페이지가렌더링된후바로메인페이지진입
const AfterLogin: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <MainLogo></MainLogo>
      </LogoContainer>
      <PhraseContainer>phrase</PhraseContainer>
    </>
  );
};

export default AfterLogin;
