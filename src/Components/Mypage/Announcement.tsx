// src/Components/Mypage/Announcement.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'utils/Pagination';
import axios from 'axios';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Announcement: React.FC = () => {
  const data = axios.get(`${process.env.REACT_APP_BASE_URL}/notices`);
  console.log(data);
  const [announcements] = useState([
    {
      id: 1,
      date: '2024-05-05',
      title: 'OHNEUL 오픈 기념 이벤트',
      content: '매일 접속시 코인 증정',
    },
    {
      id: 2,
      date: '2024-05-05',
      title: 'OHNEUL 오픈 기념 이벤트',
      content: '매일 접속시 코인 증정',
    },
    { id: 3, date: '3', title: '공지 제목 3', content: '공지 내용 3' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastAnnouncement = currentPage * pageSize;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - pageSize;
  const currentAnnouncements = announcements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement,
  );

  return (
    <AnnouncementContainer>
      {currentAnnouncements.map((announcement) => (
        <AnnouncementItem key={announcement.id} announcement={announcement} />
      ))}
      <Pagination
        itemsCount={announcements.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </AnnouncementContainer>
  );
};

export default Announcement;
