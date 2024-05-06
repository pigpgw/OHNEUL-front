import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAnnouncements } from 'stores/slices/announcementSlice';
import Arrow from 'assets/images/Arrow.png';
import styled from 'styled-components';
import { Wrapper } from 'Components/styles/Common';

const BackButton = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h4`
  margin: 20px 0;
  padding: 10px 20px;
`;
const AnnouncementTitle = styled.h2`
  margin: 20px 0;
  padding: 10px 20px;
  text-align: left;
`;
const DateP = styled.p`
  width: 100%;
  max-width: 600px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  box-sizing: border-box;
  text-align: left;
`;

const Notice = styled.p`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  text-align: left;
`;

const AnnouncementDetail: React.FC = () => {
  const announcements = useSelector(selectAnnouncements);
  const { id } = useParams<{ id: string }>();
  const announcement = announcements.find(
    (el: any) => el.notice_id === parseInt(id || '', 10),
  );

  const formatKoreanDateTime = (dateTimeString: string): string => {
    try {
      const date = new Date(dateTimeString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error: any) {
      console.error('날짜 변환 중 에러가 발생했습니다:', error.message);
      return '';
    }
  };

  if (!announcement) return <div>해당 공지를 찾을 수 없습니다.</div>;

  const { title, notice, created_at: createdAt } = announcement;

  return (
    <Wrapper>
      <BackButton to="/mypage/announcement">
        <img src={Arrow} alt="Back" />
      </BackButton>
      <Title>공지사항</Title>
      <AnnouncementTitle>{title}</AnnouncementTitle>
      <DateP>{formatKoreanDateTime(createdAt)}</DateP>
      <Notice>{notice}</Notice>
    </Wrapper>
  );
};

export default AnnouncementDetail;
