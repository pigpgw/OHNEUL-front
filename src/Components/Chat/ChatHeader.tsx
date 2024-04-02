import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  IconExit,
  InfoContainer,
  CashAmount,
  CashIcon,
  CashContainer,
  IconReport,
} from '../styles/Header';

interface ChatHeaderProps {
  socket?: void;
  onCashIconClick: () => void;
  reportIconClick: () => void;
  onRefuse: () => void; // Update this line
  onForExitModal: () => void
}

function ChatHeader({
  socket,
  onCashIconClick,
  reportIconClick,
  onRefuse,
  onForExitModal
}: ChatHeaderProps) {
  const report = () => {
    console.log('신고하기');
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <IconExit onClick={onForExitModal} />
      </LogoContainer>
      <InfoContainer>
        <CashContainer onClick={onCashIconClick}>
          <CashIcon />
          <CashAmount>200</CashAmount>
        </CashContainer>
        <IconReport onClick={report} />
      </InfoContainer>
    </HeaderContainer>
  );
}

export default ChatHeader;
