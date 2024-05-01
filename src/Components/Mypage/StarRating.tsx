import { useState, useEffect } from 'react';
import axios from 'axios';
import { TiStarFullOutline } from '@react-icons/all-files/ti/TiStarFullOutline';
import { TiStarHalfOutline } from '@react-icons/all-files/ti/TiStarHalfOutline';
import { TiStarOutline } from '@react-icons/all-files/ti/TiStarOutline';

import meltedCookie from 'utils/meltedCookie';
import plusHeart from 'assets/images/plusHeart.png';
import minusHeart from 'assets/images/minusHeart.png';
import styled from 'styled-components';

const Heart = styled.img`
  width: 5vh;
  @media (max-width: 768px) {
    width: 5vh;
  }
`;

const Desc = styled.div`
  font-size: 2vh;
  font-weight: 600;
  color: #ffe598;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 2vh;
  }
`;

const StarRating = () => {
  const [flatform, token, rewardCoin, userId] = meltedCookie();
  const [data, setData] = useState<number>(0);
  const [star, setStar] = useState<number[]>([0, 0, 0, 0, 0]); // 2가 풀 1 반
  const li: { [key: number]: string } = {
    5: '멋쟁이 잰틀맨',
    4: '신사',
    3: '보통',
    2: '좀 더 친절하게 대해주세요',
    1: 'ㅠㅠ',
  };

  const fetchScore = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      );
      const { score } = response.data;
      console.log('Score:', score);
      const myScore = Number(score);
      let roundedScore = Math.round(myScore * 2) / 2; 
      if (roundedScore > 5) {
        roundedScore = 5;
      } else if (roundedScore < 0) {
        roundedScore = 0;
      }

      setData(roundedScore);

      const starStates: number[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        if (roundedScore >= i + 1) starStates.push(2);
        else if (roundedScore === i + 0.5) starStates.push(1);
        else starStates.push(0);
      }
      setStar(starStates);
    } catch (error) {
      console.log('유저 점수 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <>
      <P>당신의 매너점수</P>
      <Wrap>
        <Stars>
          {star.map((starState, idx) => {
            if (starState === 2) {
              return <TiStarFullOutline key={idx} size="50" />;
            }
            if (starState === 1) {
              return (
                <div key={idx}>
                  <TiStarHalfOutline key={idx} size="50" />
                </div>
              );
            }
            return <TiStarOutline key={idx} size="50" />;
          })}
        </Stars>
      </Wrap>
    </>
  );
};

export default StarRating;

const Wrap = styled.div`
  margin: 0 0 3vh 0;
`;

const Stars = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 2vh 0;
  color: #ffe598;
`;

const P = styled.p`
  margin: 2%;
`;
