import { useEffect, useRef, useState } from 'react';
import { Container, Wrapper, Title, Content } from 'Components/styles/Common';
import GoBackHeader from 'Components/Common/Header/GoBackHeader';
import Item from 'Components/Announcement/Item';
import Button from 'Components/Common/Button';
import { extractUserId } from '../utils/extractCookie';
import { fetchGetUserCoinHistory } from '../api/fetchGetUserCoinHistory';

interface ScoreProps {
  coin_history_id: string;
  user_id: string;
  used_coin: string;
  used_at: string;
}

function CoinHistory() {
  const userId = extractUserId();
  const [score, setScore] = useState<ScoreProps[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(5);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const userScore = await fetchGetUserCoinHistory(userId);
        const data = userScore.reverse();
        setScore(data);
      } catch (e) {
        console.log('유저 평점 가져오기 실패', e);
      }
    };
    fetchScore();
  }, []);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <Wrapper
      width="100%"
      maxWidth="600px"
      minHeight="95vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
    >
      <GoBackHeader />
      <Title margin="3vh 0 3vh 1vh">당신의 코인 사용 내역</Title>
      <Content fontSize="2.7vh" fonstWeight="800" margin="3vh auto">
        총 연장 성공 : {score?.length}회
      </Content>
      <Wrapper width='100%' margin='2vh 0'>
        <Content fontSize="2vh"textAlign='left' fonstWeight='700'>
          코인 사용 내역
        </Content>
        <Wrapper
          ref={scrollableContainerRef}
          width="100%"
          padding="10px 0"
          margin="0 auto"
        >
          {score.slice(0, visibleItems).map((item) => (
            <Item
              key={item.coin_history_id}
              usedCoin={item.used_coin}
              usedAt={item.used_at}
            />
          ))}
        </Wrapper>
      </Wrapper>
      {visibleItems < score.length && (
        <Button
          width="100%"
          height="5vh"
          margin="0 auto"
          onClick={loadMoreItems}
        >
          더보기
        </Button>
      )}
    </Wrapper>
  );
}

export default CoinHistory;
