import React from 'react';
import styled from 'styled-components';
import '../fonts/font.css';
import { useNavigate } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCoin } from 'react-icons/bs';
import PropTypes from 'prop-types';
import appLogo from '../assets/Images/appLogo.png';

const HeaderContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const CashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CashIcon = styled(BsCoin)`
  font-size: 16px;
  margin-right: 3px;
  margin: 2px 5px;
`;

const CashAmount = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const IconPerson = styled(IoPersonOutline)`
  font-size: 28px;
  margin: 10px 10px 5px 5px;
`;

interface HeaderProps {
  onCashIconClick: () => void;
}

function Header({ onCashIconClick }: HeaderProps) {
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
