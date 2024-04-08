import React, { useState } from 'react';
import Logout from 'Components/Auth/Logout';
import Header from 'Components/Common/Header/Header';
import StarRating from 'Components/Mypage/StarRating';
import Interest from 'Components/Mypage/Interest';
import PaymentsDetails from 'Components/Mypage/PaymentsDetails';
import CoinUsageDetails from 'Components/Mypage/CoinUsageDetails';
import Terms from 'Components/Mypage/Terms';
import Announcement from 'Components/Mypage/Announcement';

// const dropDown = [
//   { name: '별점', isLogin: true },
//   { name: '취미', isLogin: true },
//   { name: '결제내역', isLogin: true },
//   { name: '코인내역', isLogin: true },
//   { name: '약관', isLogin: true },
//   { name: '공지사항', isLogin: true },
// ];

const MyPage: React.FC = () => {
  //   const [open, setOpen] = useState(false);

  //   const toggleDrawer = (inOpen: any) => (event: any) => {
  //     if (
  //       event.type === 'keydown' &&
  //       (event.key === 'Tab' || event.key === 'Shift')
  //     ) {
  //       return false;
  //     }
  //     setOpen(inOpen);
  //   };
  return (
    <>
      <Header
        onCashIconClick={(): void => {
          throw new Error('Function not implemented.');
        }}
        // name="마이페이지"
      ></Header>

      <div>MyPage</div>
      <>
        <StarRating
        //  open={open} onClose={toggleDrawer(false)}
        ></StarRating>
        <Interest
        //   onClick={toggleDrawer(false)}
        //   onKeyDown={toggleDrawer(false)}
        ></Interest>
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
};

export default MyPage;
