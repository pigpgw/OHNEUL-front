import { useEffect, useState } from 'react';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { extractUserId } from 'utils/extractCookie';
import Coin from 'Components/Common/Header/Coin';
import {
  HeaderContainer,
  LogoContainer,
  IconExit,
  InfoContainer,
  TimerContainer,
  CashAmount,
  CashIcon,
  CashContainer,
  IconReport,
} from '../styles/Header';
import HeaderTimerLine from './HeaderLineTimer';
import Timer from './Timer';


interface ChatHeaderProps {
  socket?: void;
  minutes: number;
  seconds: number;
  aniTime: number;
  onCashIconClick?: () => void;
  reportIconClick: () => void;
  onRefuse?: () => void;
  onForExitModal: () => void;
}

function ChatHeader({
  reportIconClick,
  onForExitModal,
  minutes,
  seconds,
  aniTime,
}: ChatHeaderProps) {
  const time: number = minutes * 60 + seconds;

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <IconExit onClick={onForExitModal} />
        </LogoContainer>
        <TimerContainer>
          <Timer minutes={minutes} seconds={seconds} />
        </TimerContainer>
        <InfoContainer>
          <Coin />
          <IconReport onClick={reportIconClick} />
        </InfoContainer>
      </HeaderContainer>
      {time !== 0 && <HeaderTimerLine TotaTime={aniTime} />}
    </>
  );
}

export default ChatHeader;
