import '../../../fonts/font.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Coin from './Coin';
import appLogo from '../../../assets/images/appLogo.png';

import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoTitle,
  InfoContainer,
  IconPerson,
} from '../../styles/Header';

interface HeaderProps {
  onCashIconClick: () => void;
}

function Header({ onCashIconClick }: HeaderProps) {
  const navigate = useNavigate();
  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToThemePage = () => {
    navigate('/theme');
  };
  return (
    <HeaderContainer>
      <LogoContainer onClick={goToThemePage}>
        <LogoImage src={appLogo} alt="" />
        <LogoTitle>OHNEUL</LogoTitle>
      </LogoContainer>
      <InfoContainer>
        <Coin onClick={onCashIconClick} />
        <IconPerson onClick={goToMyPage} />
      </InfoContainer>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onCashIconClick: PropTypes.func.isRequired,
};

export default Header;
