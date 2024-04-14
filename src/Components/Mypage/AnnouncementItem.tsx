import React from 'react';
import styled from 'styled-components';

interface Announcement {
  title: string;
  content: string;
}

interface AnnouncementItemProps {
  announcement: Announcement;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { title, content } = announcement;

  return (
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default AnnouncementItem;
