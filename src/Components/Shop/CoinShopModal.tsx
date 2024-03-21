import React from 'react';
import styled from 'styled-components';
import CoinPriceData from 'assets/Data/CoinPriceData';
import CoinItem from './CoinItem';

function CoinShopModal() {
  return (
    <CoinShopContainer>
      <CoinShopTitle>코인샵</CoinShopTitle>
      <CoinItemContainer>
        {CoinPriceData.map((item) => {
          return (
            <CoinItem coin={item.coins} price={item.price} key={item.id} />
          );
        })}
      </CoinItemContainer>
    </CoinShopContainer>
  );
}

const CoinShopContainer = styled.div`
  width: 90%;
  margin-top: 50px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  border: 1px solid black;

  max-width: 400px;
`;

const CoinShopTitle = styled.div`
  margin: 0 0 70px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: #000000;
`;

const CoinItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default CoinShopModal;
