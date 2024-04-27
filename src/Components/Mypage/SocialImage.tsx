import NaverBogo from 'assets/images/naverBogo.jpeg';
import KakaoBogo from 'assets/images/kakaoBogo.png';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Kakao = styled.img`
  width: 5%;
  height: 5%;
  margin: 1%;
  max-width: 30px;
  max-height: 30px;
`;
const Naver = styled.img`
  width: 5%;
  height: 5%;
  margin: 1%;
  max-width: 30px;
  max-height: 30px;
`;

function SocialImage() {
  const [flatform] = meltedCookie();
  return (
    <Wrapper>
      {flatform === 'kakao' ? (
        <>
          <Kakao src={KakaoBogo}></Kakao> <p>당신의 오늘은 어떘나요 xxx님?</p>
        </>
      ) : (
        <>
          <Naver src={NaverBogo}></Naver>
          <p>당신의 오늘은 어떘나요 xxx님?</p>
        </>
      )}
    </Wrapper>
  );
}
export default SocialImage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
