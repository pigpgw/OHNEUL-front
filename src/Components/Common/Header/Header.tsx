import React from 'react';
import '../../../fonts/font.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import appLogo from '../../../assets/images/appLogo.png';
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoTitle,
  InfoContainer,
  CashAmount,
  CashIcon,
  CashContainer,
  IconPerson,
} from '../../styles/Header';

interface HeaderProps {
  onCashIconClick: () => void;
  name: string;
}

function Header({ onCashIconClick, name }: HeaderProps) {
  const navigate = useNavigate();
  const goToMyPage = () => {
    navigate('/mypage');
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={appLogo} alt="" />
        <LogoTitle>OHNEUL</LogoTitle>
      </LogoContainer>
      {name}
      <InfoContainer>
        <CashContainer onClick={onCashIconClick}>
          <CashIcon />
          <CashAmount>200</CashAmount>
        </CashContainer>
        <IconPerson onClick={goToMyPage} />
      </InfoContainer>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onCashIconClick: PropTypes.func.isRequired,
};

export default Header;
