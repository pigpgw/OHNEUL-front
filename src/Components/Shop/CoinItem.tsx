import React from 'react';
import styled from 'styled-components';
import { BsCoin } from 'react-icons/bs';

type CoinItemProps = {
  coin: number;
  price: number;
  onClick: () => void;
};

function CoinItem({ coin, price, onClick }: CoinItemProps) {
  return (
    <CoinItemCointainer onClick={onClick}>
      <Wrapper>
        <CashIcon />
        <CoinAmount>{coin}개</CoinAmount>
      </Wrapper>
      <CoinPrice>{price}원</CoinPrice>
    </CoinItemCointainer>
  );
}

export default CoinItem;

const CoinItemCointainer = styled.div`
  width: 39%;
  height: 60px;
  padding: 10px 0 10px 0;
  margin: 10px;
  z-index: 12;

  border: 1px solid gray;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CoinAmount = styled.div`
  font-weight: 800;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 5px 0 0 0;
`;

const CashIcon = styled(BsCoin)`
  font-size: 16px;
  margin-right: 3px;
  margin: 2px 5px;
`;

const CoinPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  margin: 5px 0 0 0;

  color: #b9b9b9;
`;
