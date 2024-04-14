import React, { useState } from 'react';
import styled from 'styled-components';
import CoinPriceData from 'assets/Data/CoinPriceData';
import { createPortal } from 'react-dom';
import coin from '../../assets/images/coin.png';

type ModalProps = {
  children: React.ReactNode;
};

type CoinShopModalProps = {
  onCashIconClick: () => void;
};

type CoinProps = {
  id: number;
  coins: number;
  price: number;
};

type CoinModalProps = {
  onClose: () => void;
  selectedCoin: CoinProps | null;
};

type CoinItemProps = {
  coins: number;
  price: number;
  onClick: () => void;
};

function ModalWrapper({ children }: ModalProps) {
  return (
    <>{createPortal(<ModalLayout>{children}</ModalLayout>, document.body)}</>
  );
}

function CoinShopModal({ onCashIconClick }: CoinShopModalProps) {
  const [itemModal, setItemModal] = useState<boolean>(false);
  const [selectedCoin, setSelectedCoin] = useState<CoinProps | null>(null);

  const closeItemModal = () => {
    console.log('캐수 아이템 안보이게');
    setSelectedCoin(null);
    setItemModal(false);
  };
  const handleItemModal = (item: CoinProps) => {
    setSelectedCoin(item);
    setItemModal(true);
  };

  return (
    <CoinShopContainer>
      <ItemCancelBtn onClick={onCashIconClick}>X</ItemCancelBtn>
      <CoinShopTitle>코인샵</CoinShopTitle>
      <CoinItemContainer>
        {itemModal && (
          <CoinItemModal onClose={closeItemModal} selectedCoin={selectedCoin} />
        )}
        {CoinPriceData.map((item) => {
          return (
            <CoinItem
              coins={item.coins}
              price={item.price}
              key={item.id}
              onClick={() => {
                handleItemModal(item);
              }}
            />
          );
        })}
      </CoinItemContainer>
    </CoinShopContainer>
  );
}

function CoinItem({ coins, price, onClick }: CoinItemProps) {
  return (
    <CoinItemCointainer onClick={onClick}>
      <Wrapper>
        <CashIcon src={coin} alt="코인 이미지" />
        <CoinAmount>{coins}개</CoinAmount>
      </Wrapper>
      <CoinPrice>{price}원</CoinPrice>
    </CoinItemCointainer>
  );
}

function CoinItemModal({ onClose, selectedCoin }: CoinModalProps) {
  if (!selectedCoin) return null;
  return (
    <ModalWrapper>
      <ItemCancelBtn onClick={onClose}>X</ItemCancelBtn>
      {selectedCoin && (
        <>
          <FlexWrapper>
            <CoinIcon src={coin} alt="" />
            <ItemTitle>코인 {selectedCoin.coins}개</ItemTitle>
          </FlexWrapper>
          <SubmitBtn>{selectedCoin.price}원</SubmitBtn>
        </>
      )}
    </ModalWrapper>
  );
}

export default CoinShopModal;

const CoinIcon = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 4px;
`;

const ItemCancelBtn = styled.button`
  margin: 0;
  border: 0;
  font-size: 25px;
  background-color: white;
  margin-right: 280px;
`;

const ItemTitle = styled.p`
  font-size: 20px;
  font-weight: 800;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 75%;
  margin: 10px 0 20px 0;
  padding: 15px;
`;

const CoinShopContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
  bottom: 530px;
  height: 400px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  border: 1px solid black;

  max-width: 400px;
`;

const CoinShopTitle = styled.div`
  margin: 0 0 20px 0;
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
  margin: 25px;
`;

const SubmitBtn = styled.button`
  width: 58%;
  height: 35px;
  color: white;
  margin: 10px;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
`;

const ModalLayout = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 30%;
  z-index: 12;

  max-width: 330px;
  max-height: 250px;

  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CoinItemCointainer = styled.div`
  width: 42%;
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
  font-size: 16px;
  font-weight: 800;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 5px 0 0 0;
  width: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

const CashIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 3px;
  margin: 2px 2px;
`;

const CoinPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 21px;

  margin: 5px 0 0 0;

  color: #b9b9b9;
`;
