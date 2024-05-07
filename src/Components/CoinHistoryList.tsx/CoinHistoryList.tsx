import { Content, Wrapper } from 'Components/styles/Common';
import Item from 'Components/Announcement/Item';

interface ScoreProps {
  coin_history_id: number;
  user_id: string;
  used_coin: number;
  used_at: string;
}

interface CoinHistoryListProps {
  visibleItems: number;
  data: ScoreProps[];
}

function CoinHistoryList({ visibleItems, data }: CoinHistoryListProps) {
  return (
    <Wrapper width="100%" margin="2vh 0" minHeight='60%'>
      <Content fontSize="2vh" textAlign="left" fonstWeight="700">
        코인 사용 내역
      </Content>
      <Wrapper width="100%" padding="10px 0" margin="0 auto">
        {!data.length && <Content margin='20vh 0 0 0'>코인 사용 내역이 없습니다.</Content>}
        {data
          ?.slice(0, visibleItems)
          .map((item: ScoreProps) => (
            <Item
              key={item.coin_history_id}
              usedCoin={item.used_coin}
              usedAt={item.used_at}
            />
          ))}
      </Wrapper>
    </Wrapper>
  );
}

export default CoinHistoryList;

