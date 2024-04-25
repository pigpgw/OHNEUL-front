import '../../../fonts/font.css';
import React from 'react';
import Coin from './Coin';
import MypageIcon from './MypageIcon';
import Logo from './Logo';

import { HeaderContainer, InfoContainer } from '../../styles/Header';

interface HeaderProps {
  onCashIconClick: () => void;
}

function Header({ onCashIconClick }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
      <InfoContainer>
        <Coin onClick={onCashIconClick} />
        <MypageIcon />
      </InfoContainer>
    </HeaderContainer>
  );
}

export default Header;
