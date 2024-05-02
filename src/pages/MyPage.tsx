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
  const [open, setOpen] = useState<string | null>(null);
  const [alert, setAlert] = useState(false);
  const handleModal = (itemName: React.SetStateAction<string | null>) => {
    setOpen(open === itemName ? null : itemName);
  };
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
              onClose={offAlert}
            />
          )}
          <Tab onClick={onAlert}>결제내역</Tab>
          <Tab onClick={gocoinHistory}>코인내역</Tab>
          {open === 'coinusage' && <CoinUsageDetails />}
          <Tab onClick={onAlert}>이용정책</Tab>
          {open === 'terms' && <Terms />}
          <Tab onClick={() => handleModal('announcement')} last={'true'}>
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
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2vh 0 0 0;
`;
