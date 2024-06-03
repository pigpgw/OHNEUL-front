import axios from 'axios';

const FetchPostAnnouncement = async (title: string, notice: string) => {
  try {
    const announcementFetch = await axios.post(
      'http://localhost:4000/notices',
      {
        title,
        notice,
      },
    );
    return announcementFetch.data;
  } catch (error) {
    throw new Error('공지사항 데이터 가져오기 실패');
  }
};

export default FetchPostAnnouncement;
