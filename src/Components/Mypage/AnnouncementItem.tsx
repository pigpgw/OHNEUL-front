import React from 'react';

interface Announcement {
  title: string;
  notice: string;
  created_at: string;
}

interface AnnouncementItemProps {
  announcement: Announcement;
}
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
const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  const { title, notice, created_at: createdAt } = announcement;

  return (
    <div>
      <h4>{title}</h4>
      <p>{notice}</p>
      <p>{formatKoreanDateTime(createdAt)}</p>
    </div>
  );
};

export default AnnouncementItem;
