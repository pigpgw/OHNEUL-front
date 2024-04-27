import { ReactElement } from 'react';
import styled from 'styled-components';

type TimerProps = {
  minutes: number;
  seconds: number;
};

function Timer({ minutes, seconds }: TimerProps): ReactElement {
  return (
    <TimerWrapper>
      {seconds > 9
        ? `${minutes}:${seconds}`
        : `${minutes}:0${seconds}`}
    </TimerWrapper>
  );
}

export default Timer;

const TimerWrapper = styled.div`
  font-size: 3vh;
  font-weight: 800;
  color: #424242;
`;
