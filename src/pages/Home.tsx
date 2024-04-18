import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CoinShopModal from 'Components/Shop/CoinShopModal';
import Header from 'Components/Common/Header/Header';

import './css.css'

function Home() {
  const [showCoinSopModal, setShowCoinSopModal] = useState<boolean>(false);

  const handleCashIconClick = () => {
    setShowCoinSopModal(!showCoinSopModal);
  };

  return (
    <>
      <Header onCashIconClick={handleCashIconClick} />
      <div className="outlet-container"> {/* 여기에 여백을 추가 */}
        <Outlet />
      </div>
      {showCoinSopModal && <CoinShopModal onCashIconClick={handleCashIconClick}/>}
    </>
  );
}

export default Home;
