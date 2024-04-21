import React from 'react';
import NaverBogo from 'assets/images/naverBogo.jpeg';
import KakaoBogo from 'assets/images/kakaoBogo.png';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Kakao = styled.img`
  width: 8%;
`;
const Naver = styled.img`
  width: 6%;
`;

function SocialImage() {
  const [flatform, token, rewardCoin, userId] = meltedCookie();
  console.log('userId:', userId);
  console.log('flatform:', flatform); // flatform 값 확인
  return (
    <div>
      {flatform === 'kakao' ? (
        <>
          <Kakao src={KakaoBogo}></Kakao>
        </>
      ) : (
        <>
          <Naver src={NaverBogo}></Naver>
        </>
      )}
    </div>
  );
}
export default SocialImage;
