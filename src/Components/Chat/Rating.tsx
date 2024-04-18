import React, { useState } from 'react';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { useNavigate } from 'react-router-dom';
import { extractOtherUserId } from 'utils/extractCookie';
import styled from 'styled-components';

function Rating({ socket }: any): JSX.Element {
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number): void => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i += 1) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };

  const navigate = useNavigate();

  const sendReview = (): void => {
    const score = clicked.filter(Boolean).length;
    const otherId: string = extractOtherUserId();
    // console.log('상대방 아이디', otherId, '내가 준 평점', score);
    const data: {
      userId: string;
      score: number;
    } = {
      userId: otherId,
      score,
    };
    socket.emit('score', data);
    document.cookie = 'other=';
    navigate('/theme');
  };

  return (
    <Wrap>
      <Stars>
        {[0, 1, 2, 3, 4].map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] ? 'yellowStar' : ''}
            />
          );
        })}
      </Stars>
      <RatingBtn onClick={sendReview}>보내기</RatingBtn>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding: 15px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const RatingBtn = styled.button`
  font-size: 13px;
  font-weight: 900;
  border: 0;
  background-color: white;
  cursor: pointer;
`;
