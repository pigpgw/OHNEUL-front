import { useState } from 'react';
import { Wrapper, Title, Content } from 'Components/styles/Common';
import GoBackHeader from 'Components/Common/Header/GoBackHeader';
import Button from 'Components/Common/Button';
import useGetCoinHistory from 'hooks/useGetCoinHistory';
import CoinHistoryList from 'Components/CoinHistoryList.tsx/CoinHistoryList';
import { extractUserId } from '../utils/extractCookie';

interface ScoreProps {
  coin_history_id: number;
  user_id: string;
  used_coin: number;
  used_at: string;
}

function CoinHistory() {
  const userId = extractUserId();
  const { isLoading, isError, data } = useGetCoinHistory(userId);
  const [visibleItems, setVisibleItems] = useState<number>(5);
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };
  const skeletonContent = (
    <Wrapper
      width="100%"
      maxWidth="600px"
      minHeight="70vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
    >
      <GoBackHeader />
      <Title margin="3vh 0 3vh 1vh">당신의 코인 사용 내역</Title>
      <Content fontSize="2.7vh" fonstWeight="800" margin="3vh auto">
        총 연장 성공: -회
      </Content>
      <CoinHistoryList visibleItems={visibleItems} data={[]} />{' '}
    </Wrapper>
  );
  
  const coinHistory: ScoreProps[] = data ?? [];

  if (isLoading) return skeletonContent;
  if (isError) return <div>에러</div>;

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
        총 연장 성공 : {coinHistory?.length}회
      </Content>
      <CoinHistoryList visibleItems={visibleItems} data={coinHistory} />
      {visibleItems < coinHistory?.length && (
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
