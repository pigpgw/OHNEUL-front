import '../../../fonts/font.css';
import Coin from './Coin';
import MypageIcon from './MypageIcon';
import Logo from './Logo';

import { HeaderContainer, InfoContainer } from '../../styles/Header';

interface HeaderProps {
  onCashIconClick?: () => void;
  nonvisible?: boolean;
}

function Header({ onCashIconClick, nonvisible }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
      {!nonvisible && (
        <InfoContainer>
          <Coin onClick={onCashIconClick} />
          <MypageIcon />
        </InfoContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
