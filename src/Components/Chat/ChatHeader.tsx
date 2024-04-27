import Coin from 'Components/Common/Header/Coin';
import Exit from 'Components/Common/Header/Exit';
import ReportIcon from 'Components/Common/Header/Report';
import {
  HeaderContainer,
  InfoContainer,
  TimerContainer,
} from '../styles/Header';

import HeaderTimerLine from './HeaderLineTimer';
import Timer from './Timer';

interface ChatHeaderProps {
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
        <Exit onForExitModal={onForExitModal} />
        <TimerContainer>
          <Timer minutes={minutes} seconds={seconds} />
        </TimerContainer>
        <Coin />
        <ReportIcon reportIconClick={reportIconClick} />
      </HeaderContainer>
      {time !== 0 && <HeaderTimerLine TotaTime={aniTime} />}
    </>
  );
}

export default ChatHeader;
