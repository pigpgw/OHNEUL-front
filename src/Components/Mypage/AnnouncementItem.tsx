import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Announcement {
  title: string;
  notice: string;
  created_at: string;

  notice_id: number;
}

interface AnnouncementItemProps {
  announcement: Announcement;
}

const AnnouncementItemTitle = styled.h3`
  font-size: 2.7vh;

  margin-bottom: 2vh;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const AnnouncementItemDate = styled.p`
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  color: #888;
`;
const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { title, notice, created_at: createdAt } = announcement;
  const formatKoreanDateTime = (dateTimeString: string): string => {
    try {
      const date = new Date(dateTimeString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error: any) {
      return '';
    }
  };
  return (
    <div>
      <AnnouncementItemTitle>
        <Link to={`/mypage/announcement/${announcement.notice_id}`}>
          {title}
        </Link>
      </AnnouncementItemTitle>
      <AnnouncementItemDate>
        {formatKoreanDateTime(announcement.created_at)}
      </AnnouncementItemDate>
    </div>
  );
};

export default AnnouncementItem;
