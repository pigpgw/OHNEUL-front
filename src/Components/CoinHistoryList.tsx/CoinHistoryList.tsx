import { useState } from 'react';
import { Content, Wrapper } from 'Components/styles/Common';
import Item from 'Components/Announcement/Item';
import useGetCoinHistory from 'hooks/useGetCoinHistory';
import { extractUserId } from 'utils/extractCookie';

interface ScoreProps {
  coin_history_id: number;
  user_id: string;
  used_coin: number;
  used_at: string;
}

function CoinHistoryList({ visibleItems , data}: any) {
  return (
    <Wrapper width="100%" margin="2vh 0">
      <Content fontSize="2vh" textAlign="left" fonstWeight="700">
        코인 사용 내역
      </Content>
      <Wrapper width="100%" padding="10px 0" margin="0 auto">
        {data
          ?.slice(0, visibleItems)
          .map((item:ScoreProps) => (
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
