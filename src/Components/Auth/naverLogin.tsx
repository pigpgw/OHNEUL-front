import styled from 'styled-components';
import NaverImg from '../../assets/images/naverBogo.jpeg';

const NaverLoginButton = styled.button`
  background-color: #35ad37;
  color: white;
  padding: 0.5vh 5vh;
  border: none;
  border-radius: 8px;
  font-size: 2vh;
  cursor: pointer;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  img {
    width: 5vh;
    margin-left: -4vh;
    margin-right: 2vh;
  }
`;
const NaverLogin: React.FC = () => {
  const NaverAuthRoot = `${process.env.REACT_APP_BASE_URL}/login/naver`;

  const loginRedirect = () => {
    console.log('누름');
    window.location.href = NaverAuthRoot;
  };

  return (
    <NaverLoginButton onClick={loginRedirect}>
      <img alt="" src={NaverImg}></img>
      네이버 로그인
    </NaverLoginButton>
  );
};

export default NaverLogin;
