import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CoinShopModal from 'Components/Shop/CoinShopModal';
import Header from 'Components/Common/Header/Header';

import './css.css';

function Home() {
  const [showCoinSopModal, setShowCoinSopModal] = useState<boolean>(false);

  const handleCashIconClick = useCallback(() => {
    setShowCoinSopModal(!showCoinSopModal);
  },[showCoinSopModal]);

  return (
    <>
      <Header onCashIconClick={handleCashIconClick} />
      <div className="outlet-container">
        <Outlet />
      </div>
      {showCoinSopModal && (
        <CoinShopModal onCashIconClick={handleCashIconClick} />
      )}
    </>
  );
}

export default Home;
