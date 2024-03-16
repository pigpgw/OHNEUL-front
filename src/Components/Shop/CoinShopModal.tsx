import React from 'react';
import styled from 'styled-components';
import CoinPriceData from 'Assets/Data/CoinPriceData';

function CoinShopModal() {
  return (
    <CoinShopContainer>
      <CoinShopTitle>코인샵</CoinShopTitle>
        {CoinPriceData.map(item => {
            return <CoinItem coin ={item.coins} price={item.price} key={item.id}/>
        })}
    </CoinShopContainer>
  );
}

const CoinShopContainer = styled.div`
  width: 90%;
  margin-top: 50px;
  height: 400px;

  display: flex;
  justify-content: center;
  background-color: gray;
  align-items: center;
  border-radius: 20px;
`;

const CoinShopTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: #000000;
`;


export default CoinShopModal;
