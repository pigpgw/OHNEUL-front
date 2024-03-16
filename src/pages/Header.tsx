import React from 'react';
import styled from 'styled-components';
import '../fonts/font.css';
import appLogo from '../assets/images/appLogo.png';

const HeaderContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px 0 0px 12px;
`;

const LogoTitle = styled.p`
  font-weight: 400;
  width: 91px;
  height: 26px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={appLogo} alt="" />
        <LogoTitle>OHNEUL</LogoTitle>
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
