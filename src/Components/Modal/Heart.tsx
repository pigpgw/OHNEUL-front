import styled, { keyframes } from 'styled-components';

const HeartBeat = () => {
  return (
    <Container>
      <Heart />
    </Container>
  );
};

export default HeartBeat;

const BeatAnimation = keyframes`
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(0.5) rotate(-45deg);
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 1vh;
`;


const Heart = styled.div`
  left: 50%;
  top: 50%;
  background: pink;
  width: 50px;
  height: 50px;
  transform: rotate(-45deg);
  animation: ${BeatAnimation} 1s infinite;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: pink;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &::after {
    left: 25px;
    top: 0;
  }

  &::before {
    left: 0px;
    top: -25px;
  }
`;
