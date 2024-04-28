import { useEffect, useState } from 'react';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { useNavigate } from 'react-router-dom';
import { extractOtherUserId } from 'utils/extractCookie';
import styled from 'styled-components';

type StarProps = {
  score: number;
};

function Star({ score }: StarProps): JSX.Element {
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const clickStates = [...clicked];
    for (let i = 0; i < score; i += 1) {
      clickStates[i] = true;
    }
    setClicked(clickStates);
  }, []);

  return (
    <Wrap>
      <Stars>
        {[0, 1, 2, 3, 4].map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size={'3vh'}
              className={clicked[el] ? 'yellowStar' : ''}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Star;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  overflow-x: hidden;
  font-size: 1vh;
`;

const Stars = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 2vh 0;

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

const StarBtn = styled.button`
  font-size: 13px;
  font-weight: 900;
  position: relative;
  top: 1vh;
  border: 0;
  background-color: white;
  cursor: pointer;
`;
