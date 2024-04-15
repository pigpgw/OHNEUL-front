import React from 'react';
import styled from 'styled-components';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface AnnouncementItemProps {
  announcement: Announcement;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { title, content, date } = announcement;

  return (
    <div>
      <h6>{date}</h6>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default AnnouncementItem;
