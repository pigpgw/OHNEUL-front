import styled from 'styled-components';

function LoadingBox() {
  return (
    <LoadingContainer>
      <LodingWrapper>
        <LoadingLine className="outline outline-x outline-top"></LoadingLine>
        <LoadingLine className="outline outline-x outline-bottom"></LoadingLine>
        <LoadingLine className="outline outline-y outline-left"></LoadingLine>
        <LoadingLine className="outline outline-y outline-right"></LoadingLine>
      </LodingWrapper>
    </LoadingContainer>
  );
}

export default LoadingBox;

const LoadingContainer = styled.div`
  width: 9vh;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LodingWrapper = styled.div`
  width: 40%;
  height: 40%;
  animation-name: outline-wrapper;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

const LoadingLine = styled.div`
  &.outline {
    position: absolute;
    background-color: #0075ff;
    box-shadow: 0px 0px 1px 0px #0075ff;
  }

  &.outline-x {
    width: 88%;
    height: 3px;
    animation-name: outline-x;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    -webkit-animation-name: outline-x;
    -moz-animation-name: outline-x;
    -o-animation-name: outline-x;
    animation-name: outline-x;
  }

  &.outline-y {
    width: 3px;
    height: 88%;
    animation-name: outline-y;
    animation-duration: 5s;
    animation-iteration-count: infinite;

    -webkit-animation-name: outline-y;
    -moz-animation-name: outline-y;
    -o-animation-name: outline-y;
    animation-name: outline-y;
  }

  &.outline-top {
    top: 0%;
    left: 6%;
    transform-origin: right center;
  }

  &.outline-bottom {
    top: calc(100% - 3px);
    left: 6%;
    transform-origin: left center;
  }

  &.outline-left {
    top: 6%;
    left: 0%;
    transform-origin: bottom center;
  }

  &.outline-right {
    top: 6%;
    left: calc(100% - 3px);
    transform-origin: top center;
  }

  @keyframes outline-x {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes outline-y {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @keyframes outline-wrapper {
    100% {
      transform: rotate(360deg);
    }
  }
`;
