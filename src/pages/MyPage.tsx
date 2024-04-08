import React, { useState } from 'react';
import styled from 'styled-components';
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
const Tab = styled.div``;

const MyPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };

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
        <Tab onClick={() => handleModal('starRating')}>
          리뷰확인{open === 'starRating' && <StarRating />}
        </Tab>
        <Tab onClick={() => handleModal('interest')}>
          취미{open === 'interest' && <Interest />}
        </Tab>
        <Tab onClick={() => handleModal('payments')}>
          결제내역{open === 'payments' && <PaymentsDetails />}
        </Tab>
        <Tab onClick={() => handleModal('coinusage')}>
          코인내역{open === 'coinusage' && <CoinUsageDetails />}
        </Tab>
        <Tab onClick={() => handleModal('terms')}>
          약관{open === 'terms' && <Terms />}
        </Tab>
        <Tab onClick={() => handleModal('announcement')}>
          공지사항{open === 'announcement' && <Announcement />}
        </Tab>
      </>
      <>
        <Logout></Logout>
        <div>회원탈퇴</div>
      </>
    </>
  );
};

export default MyPage;
