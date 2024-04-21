import styled from 'styled-components';

type HeaderTimerLineProps = {
  TotaTime: number;
};

function HeaderTimerLine({ TotaTime }: HeaderTimerLineProps) {
  return (
    <TimerWrapper>
      <TimerLine time={TotaTime}></TimerLine>
    </TimerWrapper>
  );
}

export default HeaderTimerLine;

const TimerWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
`;

const TimerLine = styled.div<{ time?: number }>`
  width: 100%;
  height: 1px;
  background-color: #60a8ff;
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
