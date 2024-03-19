import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CoinShopModal from 'Components/Shop/CoinShopModal';
import Header from './Header';

function Home() {
  const [showCoinSopModal, setShowCoinSopModal] = useState<boolean>(false);

  const handleCashIconClick = () => {
    setShowCoinSopModal(!showCoinSopModal);
  };

  return (
    <>
      <Header onCashIconClick={handleCashIconClick} />
      <Outlet />
      {showCoinSopModal && <CoinShopModal />}
      
    </>
  );
}

export default Home;
