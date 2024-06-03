import { useState } from 'react';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'Components/Modal/AlertModal';
import { extractOtherUserId } from 'utils/extractCookie';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Rating({ socket }: any): JSX.Element {
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [Alert, setAlert] = useState(false);

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
    setAlert(true);
  };

  const offmodal = () => {
    setAlert(false);
    navigate('/theme');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <Wrap>
        {Alert && (
          <AlertModal
            icon="success"
            title="리뷰 등록 성공"
            msg="리뷰가 성공적으로 저장되었습니다."
            btn1="확인"
            onClose={offmodal}
          />
        )}
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
    </motion.div>
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
