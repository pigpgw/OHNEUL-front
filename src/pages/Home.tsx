import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CoinShopModal from 'Components/Shop/CoinShopModal';
import Header from 'Components/Common/Header/Header';

function Home() {
  const [showCoinSopModal, setShowCoinSopModal] = useState<boolean>(false);

  const handleCashIconClick = () => {
    setShowCoinSopModal(!showCoinSopModal);
  };

  return (
    <>
      <Header onCashIconClick={handleCashIconClick} />
      <Outlet />
      {showCoinSopModal && <CoinShopModal onCashIconClick={handleCashIconClick}/>}
    </>
  );
}

export default Home;
