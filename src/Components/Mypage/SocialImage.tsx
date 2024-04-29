import NaverBogo from 'assets/images/naverBogo.jpeg';
import KakaoBogo from 'assets/images/kakaoBogo.png';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Kakao = styled.img`
  width: 4%;
  height: 4%;
  margin: 1%;
  max-width: 30px;
  max-height: 30px;
`;
const Naver = styled.img`
  width: 4%;
  height: 4%;
  margin: 1%;
  max-width: 30px;
  max-height: 30px;
`;

function SocialImage() {
  const [name, setName] = useState<string>('');
  const [flatform, token, rewardCoin, userId, isAdmin] = meltedCookie();
  useEffect(() => {
    const fetchUserName = async () => {
      const userName: any = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/users/${userId}`)
        .then((res) => res.data.username);
      setName(userName);
    };
    fetchUserName();
  }, []);
  return (
    <Wrapper>
      {flatform === 'kakao' ? (
        <>
          <Kakao src={KakaoBogo}></Kakao> <p>당신의 오늘은 어떘나요 xxx님?</p>
        </>
      ) : (
        <>
          <Naver src={NaverBogo}></Naver>
          <p>당신의 오늘은 어땠나요 {name}님?</p>
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
