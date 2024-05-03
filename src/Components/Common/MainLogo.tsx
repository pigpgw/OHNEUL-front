import styled from 'styled-components';
import LogoImg from '../../assets/images/mainLogo.png'

const MainLogoImg = styled.img`
  width: 30vh;
`;
function MainLogo() {
  return <MainLogoImg src={LogoImg} alt="MainLogo"></MainLogoImg>;
}

export default MainLogo;
