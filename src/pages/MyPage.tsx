import React, { useState } from 'react';
import Logout from 'Components/Auth/Logout';
import StarRating from 'Components/Mypage/StarRating';
import Interest from 'Components/Mypage/Interest';
import CoinUsageDetails from 'pages/CoinUsageDetails';
import Terms from 'Components/Mypage/Terms';
import Announcement from 'Components/Mypage/Announcement';
import WithDrawal from 'Components/Auth/WithDrawal';
import SocialImage from 'Components/Mypage/SocialImage';
import MyMood from 'Components/Mypage/MyMood';
import AdminButton from 'Components/Admin/AdminButton';
import AlertModal from 'Components/Modal/AlertModal';
import {
  Title,
  TabSection,
  Tab,
  ContentContainer,
} from 'Components/styles/Mypage';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyPage: React.FC = () => {
  const [open] = useState<string | null>(null);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const gocoinHistory = () => {
    navigate('/coinHistory');
  };

  const offAlert = () => {
    setAlert(false);
  };

  const onAlert = () => {
    setAlert(true);
  };
  return (
    <Wrapper>
    <Title>마이페이지</Title>
    <ContentContainer>
      <SocialImage />
      <StarRating />
      <MyMood />
      <Interest />
      <TabSection>
        {alert && (
          <AlertModal
            icon="warning"
            title="서비스 준비중"
            msg="서비스가 준비중입니다.!"
            btn1="확인"
            onClose={offAlert}
          />
        )}
        <Tab onClick={onAlert}>결제내역</Tab>
        <Tab onClick={gocoinHistory}>코인내역</Tab>
        {open === 'coinusage' && <CoinUsageDetails />}
        <Tab onClick={onAlert}>이용정책</Tab>
        {open === 'terms' && <Terms />}
        <Tab onClick={() => navigate('announcement')} last={'true'}>
          공지사항
        </Tab>
        {open === 'announcement' && <Announcement />}
      </TabSection>
      <BtnContainer>
        <Logout></Logout>
        <AdminButton></AdminButton>
        <WithDrawal></WithDrawal>
      </BtnContainer>
    </ContentContainer>
  </Wrapper>
  );
};

export default MyPage;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 570px; */
  max-width: 700px;
`;

const BtnContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 5% 0 2% 0;
`;
