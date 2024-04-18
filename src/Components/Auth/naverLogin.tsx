import styled from 'styled-components';
import NaverImg from '../../assets/images/naverLoginButton.png';

const NaverLoginButton = styled.button`
  width: 30%;
  height: 20%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
const NaverLogin: React.FC = () => {
  const NaverAuthRoot = `${process.env.REACT_APP_BASE_URL}/login/naver`;

  const loginRedirect = () => {
    window.location.href = NaverAuthRoot;
  };
  
  return (
    <NaverLoginButton onClick={loginRedirect}>
      <img alt="" src={NaverImg}></img>
    </NaverLoginButton>
  );
};

export default NaverLogin;
