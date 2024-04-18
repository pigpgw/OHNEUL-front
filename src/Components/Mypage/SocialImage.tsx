import NaverBogo from 'assets/images/naverBogo.jpeg';
import KakaoBogo from 'assets/images/kakaoBogo.png';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Kakao = styled.img`
  width: 20px;
`;
const Naver = styled.img`
  width: 20px;
`;

function SocialImage() {
  const [flatform] = meltedCookie();
  return (
    <div>
      {flatform === 'naver' ? (
        <Naver src={NaverBogo}></Naver>
      ) : (
        <Kakao src={KakaoBogo}></Kakao>
      )}
    </div>
  );
}
export default SocialImage;
