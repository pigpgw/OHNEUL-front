import styled from 'styled-components';
import NaverImg from '../../assets/images/naverLoginButton.png';

const NaverLoginButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 28vh;
    height: 6vh;
  }
`;
const NaverLogin: React.FC = () => {
  const NaverAuthRoot = `${process.env.REACT_APP_BASE_URL}/login/naver`;

  const loginRedirect = () => {
    console.log('누름')
    window.location.href = NaverAuthRoot;
  };
  
  return (
    <NaverLoginButton onClick={loginRedirect}>
      <img alt="" src={NaverImg}></img>
    </NaverLoginButton>
  );
};

export default NaverLogin;
