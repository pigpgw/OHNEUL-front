import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'utils/Pagination';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncements } from 'stores/slices/announcementSlice';
import { selectAnnouncements } from 'stores/slices/announcementSlice';
import Arrow from 'assets/images/Arrow.png';
import { Link } from 'react-router-dom';
import { Wrapper, Title, Content } from 'Components/styles/Common';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementTitle = styled.h2`
  font-size: 24px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 20px;
`;
const BorderLine = styled.div`
  border-bottom: 1px solid #ccc;
`;
const BackButton = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
const Item = styled.div`
  text-align: left;
`;

const Announcement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/notices`,
        );
        dispatch(setAnnouncements(response.data));
      } catch (error) {
        console.error('공지 불러오기', error);
      }
    };
    fetchAnnouncements();
  }, [dispatch]);
  const announcements = useSelector(selectAnnouncements);

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
    <Wrapper
      width="100%"
      maxWidth="600px"
      minHeight="70vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      align-items="flex-start"
    >
      <BackButton to="/mypage">
        <img src={Arrow} alt=""></img>
      </BackButton>
      <AnnouncementTitle>공지사항</AnnouncementTitle>
      <BorderLine></BorderLine>
      <Item>
        {currentAnnouncements.map((announcement: any, id: number) => (
          <AnnouncementItem key={id} announcement={announcement} />
        ))}
      </Item>
      <Pagination
        itemsCount={announcements.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Announcement;
