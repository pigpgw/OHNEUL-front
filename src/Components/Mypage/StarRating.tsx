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

  // const scoreNumbData = scoreNumb.data.score;
  const fetchScore: any = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
    );
    const { score } = response.data;
    setData(Number(score));
    const clickStates = [...star];
    for (let i = 0; i < score; i += 1) {
      clickStates[i] = true;
    }
    setStar(clickStates);
  };
  useEffect(() => {
    fetchScore();
  }, []);
  // const renderDesc = (score: number) => {
  //   const desc = [];
  //   switch (score) {
  //     case 0.0:
  //       desc.push(<Desc key="desc">채팅을시작해주세요.</Desc>);
  //       break;
  //     case 1:
  //       desc.push(<Desc key="desc">1점</Desc>);
  //       break;
  //     case 2:
  //       desc.push(<Desc key="desc">2점</Desc>);
  //       break;
  //     case 3:
  //       desc.push(<Desc key="desc">3점</Desc>);
  //       break;
  //     case 4:
  //       desc.push(<Desc key="desc">4점</Desc>);
  //       break;
  //     case 5:
  //       desc.push(<Desc key="desc">5점</Desc>);
  //       break;
  //     default:
  //       break;
  //   }

  //   return desc;
  // };

  return (
    <div>
      {/* {renderDesc(data)[0]} */}
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
    </div>
  );
};

export default StarRating;

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
    color: #fcc419;
  }
`;
