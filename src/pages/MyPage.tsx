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
import WithDrawal from 'Components/Auth/WithDrawal';

const InterestSection = styled.div`
  border-bottom: 2px solid #dbdbdb;
  margin-bottom: 10px;
`;

const Title = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #dbdbdb;
`;
const TabSection = styled.div`
  margin-top: 30px;
`;
const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  width: 23em;
`;
const TabTitle = styled.div`
  text-align: left;

  border-bottom: 2px solid #dbdbdb;
`;
const ContentContainer = styled.div`
  margin-top: 30px;
`;

const AuthContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const MyPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };

  return (
    <>
      <Header
        onCashIconClick={(): void => {
          throw new Error('Function not implemented.');
        }}
      ></Header>
      <ContentContainer>
        <Title>마이페이지</Title>
        <TabSection>
          <StarRating />

          <InterestSection>
            <Interest />
          </InterestSection>
          <Tab onClick={() => handleModal('payments')}>
            <TabTitle>결제내역</TabTitle>
            {open === 'payments' && <PaymentsDetails />}
          </Tab>

          <Tab onClick={() => handleModal('coinusage')}>
            <TabTitle>코인내역</TabTitle>
            {open === 'coinusage' && <CoinUsageDetails />}
          </Tab>

          <Tab onClick={() => handleModal('terms')}>
            <TabTitle>이용정책 </TabTitle>
            {open === 'terms' && <Terms />}
          </Tab>

          <Tab onClick={() => handleModal('announcement')}>
            <TabTitle> 공지사항 </TabTitle>
            {open === 'announcement' && <Announcement />}
          </Tab>
        </TabSection>

        <AuthContainer>
          <Logout></Logout>
          <WithDrawal></WithDrawal>
        </AuthContainer>
      </ContentContainer>
    </>
  );
};

export default MyPage;
