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
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
`;
const StarAndInterest = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StarRatingSection = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #dbdbdb;
  width: 50vw;
`;

const TabSection = styled.div`
  margin-top: 30px;

  max-width: 800px;
  margin: 0 auto;
`;
const Tab = styled.div`
  padding: 10px;
  cursor: pointer;

  margin: 0 auto;
  margin-bottom: 10px;
`;
const TabTitle = styled.div`
  text-align: left;
  border-bottom: 2px solid #dbdbdb;
  width: 50vw;
`;
const ContentContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AuthContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;
const LogoutCont = styled.div`
  margin-right: 30px;
`;

const WithDrawalCont = styled.div`
  margin-left: 30px;
`;

const MyPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };

  return (
    <>
      <ContentContainer>
        <Title>마이페이지</Title>
        <TabSection>
          <StarAndInterest>
            <StarRatingSection>
              <StarRating />
            </StarRatingSection>
            <InterestSection>
              <Interest />
            </InterestSection>
          </StarAndInterest>
          <Tab onClick={() => handleModal('payments')}>
            <TabTitle>결제내역</TabTitle>
          </Tab>
          {open === 'payments' && <PaymentsDetails />}
          <Tab onClick={() => handleModal('coinusage')}>
            <TabTitle>코인내역</TabTitle>
          </Tab>
          {open === 'coinusage' && <CoinUsageDetails />}
          <Tab onClick={() => handleModal('terms')}>
            <TabTitle>이용정책 </TabTitle>
          </Tab>
          {open === 'terms' && <Terms />}
          <Tab onClick={() => handleModal('announcement')}>
            <TabTitle> 공지사항 </TabTitle>
          </Tab>
          {open === 'announcement' && <Announcement />}
        </TabSection>

        <AuthContainer>
          <LogoutCont>
            <Logout></Logout>
          </LogoutCont>
          <WithDrawalCont>
            <WithDrawal></WithDrawal>
          </WithDrawalCont>
        </AuthContainer>
      </ContentContainer>
    </>
  );
};

export default MyPage;
