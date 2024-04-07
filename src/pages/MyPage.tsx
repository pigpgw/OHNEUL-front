import React from 'react';
import Logout from 'Components/Auth/Logout';
import Header from 'Components/Common/Header/Header';
import StarRating from 'Components/Mypage/StarRating';
import Interest from 'Components/Mypage/Interest';
import PaymentsDetails from 'Components/Mypage/PaymentsDetails';
import CoinUsageDetails from 'Components/Mypage/CoinUsageDetails';
import Terms from 'Components/Mypage/Terms';
import Announcement from 'Components/Mypage/Announcement';

function MyPage() {
  return (
    <>
      <Header
        onCashIconClick={(): void => {
          throw new Error('Function not implemented.');
        }}
        name="마이페이지"
      ></Header>

      <div>MyPage</div>
      <>
        <StarRating></StarRating>
        <Interest></Interest>
        <PaymentsDetails></PaymentsDetails>
        <CoinUsageDetails></CoinUsageDetails>
        <Terms></Terms>
        <Announcement></Announcement>
      </>
      <>
        <Logout></Logout>
        <div>회원탈퇴</div>
      </>
    </>
  );
}

export default MyPage;
