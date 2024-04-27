import React, { useState, useEffect } from 'react';
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
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/notices`,
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    fetchAnnouncements();
  }, []);

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
      {currentAnnouncements.map((announcement: any, id: number) => (
        <AnnouncementItem key={id} announcement={announcement} />
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
