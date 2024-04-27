import React from 'react';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { extractUserId } from 'utils/extractCookie';
import coin from '../../../assets/images/coin.png';
import { CashAmount, CashIcon, CashContainer } from '../../styles/Header';

type CoinProps = {
    onClick?: () => void;
};

function Coin({ onClick }: CoinProps) {
  const userId = extractUserId();
  const { isCoinLoading, isCoinError, userCoinState } = useCoinQuery(userId);

  if (isCoinLoading) return <div>로딩중</div>;
  if (isCoinError) return <div>에러 발생</div>;
  return (
    <CashContainer onClick={onClick}>
      <CashIcon src={coin} alt="코인 아이콘" />
      <CashAmount>{userCoinState}</CashAmount>
    </CashContainer>
  );
}

export default React.memo(Coin);
