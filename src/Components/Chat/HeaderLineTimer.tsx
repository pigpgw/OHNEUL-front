import { useEffect } from 'react';
import styled from 'styled-components';

type HeaderTimerLineProps = {
  time: number;
  aniTime: number;
};

function HeaderTimerLine({ time, aniTime }: HeaderTimerLineProps) {
  useEffect(() => {
    console.log(time, aniTime);
  }, [time]);

  return (
    <TimerWrapper>
      <TimerLine time={aniTime}></TimerLine>
    </TimerWrapper>
  );
}

export default HeaderTimerLine;

const TimerWrapper = styled.div`
  width: 100%;
`;

const TimerLine = styled.div<{ time?: number }>`
  width: 100%;
  height: 1px;
  background-color: red;
  animation: line ${(prev) => prev.time}s linear forwards;

  @keyframes line {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;
