import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/Images/mainLogo.png';

const MainLogoImg = styled.img`
  width: 50%;
`;
function MainLogo() {
  return <MainLogoImg src={LogoImg} alt="MainLogo"></MainLogoImg>;
}

export default MainLogo;
