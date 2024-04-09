import React, { useEffect } from 'react';
import '../../../fonts/font.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { extractUserId } from 'utils/extractUserId';
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
}

function Header({ onCashIconClick }: HeaderProps) {
  const userId = extractUserId();
  const { isCoinLoading, isCoinError, userCoinState } = useCoinQuery(userId);

  const navigate = useNavigate();
  const goToMyPage = () => {
    navigate('/mypage');
  };

  if (isCoinLoading) return <div>로딩중</div>;
  if (isCoinError) return <div>에러 발생</div>;
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={appLogo} alt="" />
        <LogoTitle>OHNEUL</LogoTitle>
      </LogoContainer>
      <InfoContainer>
        <CashContainer onClick={onCashIconClick}>
          <CashIcon />
          <CashAmount>{userCoinState}</CashAmount>
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
