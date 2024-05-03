import styled from 'styled-components';
import KakaoImg from 'assets/images/kakaoLoginButton.png';

const KakaoLoginButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 28vh;
    height: 6vh;
  }
`;

const KakaoLogin: React.FC = () => {
  const KakaoAuthRoot = `${process.env.REACT_APP_BASE_URL}/login/kakao`;
  function loginRedirect(): void {
    window.location.href = KakaoAuthRoot;
  }

  return (
    <KakaoLoginButton onClick={loginRedirect}>
      <img alt="" src={KakaoImg}></img>
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
