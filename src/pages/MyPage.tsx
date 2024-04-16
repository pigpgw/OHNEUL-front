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
import SocialImage from 'Components/Mypage/SocialImage';
import {
  Container,
  SocialContainer,
  InterestSection,
  StarAndInterest,
  StarRatingSection,
  Title,
  TabSection,
  Tab,
  TabTitle,
  ContentContainer,
  AuthContainer,
  LogoutCont,
  WithDrawalCont,
} from 'Components/styles/Mypage';

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
          <Container>
            <SocialContainer>
              <SocialImage></SocialImage>
            </SocialContainer>
            <StarAndInterest>
              <StarRatingSection>
                <StarRating />
              </StarRatingSection>
              <InterestSection>
                <Interest />
              </InterestSection>
            </StarAndInterest>
          </Container>
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
