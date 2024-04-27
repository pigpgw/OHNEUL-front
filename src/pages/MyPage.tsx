import React, { useState } from 'react';
import Logout from 'Components/Auth/Logout';
import StarRating from 'Components/Mypage/StarRating';
import Interest from 'Components/Mypage/Interest';
import PaymentsDetails from 'Components/Mypage/PaymentsDetails';
import CoinUsageDetails from 'Components/Mypage/CoinUsageDetails';
import Terms from 'Components/Mypage/Terms';
import Announcement from 'Components/Mypage/Announcement';
import WithDrawal from 'Components/Auth/WithDrawal';
import SocialImage from 'Components/Mypage/SocialImage';
import MyMood from 'Components/Mypage/MyMood';
import AdminButton from 'Components/Admin/AdminButton';
import {
  Title,
  TabSection,
  Tab,
  TabTitle,
  ContentContainer,
} from 'Components/styles/Mypage';
import { styled } from 'styled-components';

const MyPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };
  return (
    <>
      <ContentContainer>
        <Title>마이페이지</Title>
        <SocialImage />
        <StarRating />
        <MyMood />
        <Interest />
        <TabSection>
          <Tab onClick={() => handleModal('payments')}>결제내역</Tab>
          {open === 'payments' && <PaymentsDetails />}
          <Tab onClick={() => handleModal('coinusage')}>코인내역</Tab>
          {open === 'coinusage' && <CoinUsageDetails />}
          <Tab onClick={() => handleModal('terms')}>이용정책</Tab>
          {open === 'terms' && <Terms />}
          <Tab onClick={() => handleModal('announcement')}>공지사항</Tab>
          {open === 'announcement' && <Announcement />}
        </TabSection>
        <BtnContainer>
          <Logout></Logout>
          <AdminButton></AdminButton>
          <WithDrawal></WithDrawal>
        </BtnContainer>
      </ContentContainer>
    </>
  );
};

export default MyPage;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2vh 0 0 0;
`;
