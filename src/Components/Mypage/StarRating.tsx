import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
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
  color: #000000;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 2vh;
  }
`;

const StarRating = () => {
  const [flatform, token, rewardCoin, userId] = meltedCookie();
  const [data, setData] = useState<number>(0);
  const [star, setStar] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const li: { [key: number]: string } = {
    5: '멋쟁이 잰틀맨',
    4: '신사',
    3: '보통',
    2: '좀 더 친절하게 대해주세요',
    1: 'ㅠㅠ',
  };

  const fetchScore: any = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
    );
    const { score } = response.data;
    console.log('ㄴ책ㄷ',score)
    const myScore = Number(score)
    if (myScore >= 4.5) {
      setData(5);
    } else if (myScore >= 3.5) {
      setData(4);
      console.log('점수')
    } else if (myScore >= 2.5) {
      setData(3);
      console.log('점수')
    } else if (myScore >= 1.5) {
      setData(2);
    } else if (myScore >= 0.5) {
      setData(1);
    }

    const clickStates = [...star];
    for (let i = 0; i < data; i += 1) {
      clickStates[i] = true;
    }
    setStar(clickStates);
  };
  useEffect(() => {
    fetchScore();
    console.log(data)
  }, [data]);

  return (
    <>
      <P>당신의 매너점수</P>
      <Wrap>
        <Stars>
          {[0, 1, 2, 3, 4].map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="40"
                className={star[el] ? 'yellowStar' : ''}
              />
            );
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

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #ffe598;
  }
`;

const P = styled.p`
  margin: 2%;
`;
