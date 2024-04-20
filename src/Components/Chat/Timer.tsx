import { ReactElement } from "react";
import styled from "styled-components";

type timerProps = {
    minutes : number;
    seconds: number
} 

function Timer ({minutes,seconds}:timerProps):ReactElement {
    return (<TimerWrapper>{minutes}:{seconds}</TimerWrapper>)
}

export default Timer;

const TimerWrapper = styled.div`
    font-size: 23px;
`