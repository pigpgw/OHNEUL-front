import { useState } from 'react';
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
    const data: {
      userId: string;
      score: number;
    } = {
      userId: otherId,
      score,
    };
    socket.emit('score', data);
    document.cookie = 'other=';
    alert("리뷰가 성공적으로 등록되었습니다.")
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
  overflow-x: hidden;
  
`;

const Stars = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 2vh 0;

  & svg {
    color: #adadad;
    cursor: pointer;
  }

  :hover svg {
    color: #ffe598;
  }

  & svg:hover ~ svg {
    color: #adadad;
  }

  .yellowStar {
    color: #ffe598;
  }
`;

const RatingBtn = styled.button`
  font-size: 13px;
  font-weight: 900;
  position: relative;
  top: 1vh;
  border: 0;
  background-color: white;
  cursor: pointer;
`;
