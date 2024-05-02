import { useEffect, useState } from 'react';
import { TiStarFullOutline } from '@react-icons/all-files/ti/TiStarFullOutline';
import { TiStarHalfOutline } from '@react-icons/all-files/ti/TiStarHalfOutline';
import { TiStarOutline } from '@react-icons/all-files/ti/TiStarOutline';

import styled from 'styled-components';

type StarProps = {
  score: number;
  paddingBottom?: string;
  size?: string;
};

function Star({ score, size, paddingBottom }: StarProps): JSX.Element {
  const [star, setStar] = useState<number[]>([0, 0, 0, 0, 0]); // 2가 풀 1 반

  useEffect(() => {
    const myScore = Number(score);
    let roundedScore = Math.round(myScore * 2) / 2;
    if (roundedScore > 5) {
      roundedScore = 5;
    } else if (roundedScore < 0) {
      roundedScore = 0;
    }

    const starStates: number[] = [];
    for (let i = 0; i < 5; i += 1) {
      if (roundedScore >= i + 1) starStates.push(2);
      else if (roundedScore === i + 0.5) starStates.push(1);
      else starStates.push(0);
    }
    setStar(starStates);
  }, []);

  return (
    <Wrap paddingBtm={paddingBottom}>
      <Stars>
        {star.map((starState, idx) => {
          if (starState === 2) {
            return <TiStarFullOutline key={idx} size={size} />;
          }
          if (starState === 1) {
            return (
              <div key={idx}>
                <TiStarHalfOutline key={idx} size={size} />
              </div>
            );
          }
          return <TiStarOutline key={idx} size={size} />;
        })}
      </Stars>
    </Wrap>
  );
}

export default Star;

const Wrap = styled.div<{ paddingBtm?: string }>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.paddingBtm || '15px'};
  overflow-x: hidden;
  font-size: 1vh;
`;

const Stars = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 2vh 0;
  color: #ffe598;
`;
