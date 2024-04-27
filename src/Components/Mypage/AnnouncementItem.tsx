import React from 'react';

interface Announcement {
  title: string;
  notice: string;
  created_at: string;
}

interface AnnouncementItemProps {
  announcement: Announcement;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { title, notice, created_at: createdAt } = announcement;

  return (
    <div>
      <h6>{createdAt}</h6>
      <h4>{title}</h4>
      <p>{notice}</p>
    </div>
  );
};

export default AnnouncementItem;
