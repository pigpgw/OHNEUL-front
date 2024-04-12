import React from 'react';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { extractUserId } from 'utils/extractCookie';
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
  onRefuse: () => void;
  onForExitModal: () => void;
}

function ChatHeader({
  socket,
  onCashIconClick,
  reportIconClick,
  onRefuse,
  onForExitModal,
}: ChatHeaderProps) {
  const userId = extractUserId();
  const { isCoinLoading, isCoinError, userCoinState } = useCoinQuery(userId);
  if (isCoinLoading) return <div>로딩중</div>;
  if (isCoinError) return <div>에러 발생</div>;

  return (
    <HeaderContainer>
      <LogoContainer>
        <IconExit onClick={onForExitModal} />
      </LogoContainer>
      <InfoContainer>
        <CashContainer onClick={onCashIconClick}>
          <CashIcon />
          <CashAmount>{userCoinState}</CashAmount>
        </CashContainer>
        <IconReport onClick={reportIconClick} />
      </InfoContainer>
    </HeaderContainer>
  );
}

export default ChatHeader;
