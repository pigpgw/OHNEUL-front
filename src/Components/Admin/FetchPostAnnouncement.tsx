import React from 'react';
import axios from 'axios';
import { error } from 'console';
const FetchPostAnnouncement = async (title: string, notice: string) => {
  try {
    const announcementFetch = await axios.post(
      'http://localhost:4000/notices',
      {
        title: title,
        notice: notice,
      },
    );
    console.log(announcementFetch.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default FetchPostAnnouncement;
