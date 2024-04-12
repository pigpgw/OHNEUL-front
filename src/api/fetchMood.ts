/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Mood {
  mood_id: number;
  mood: string;
}

export const fetchGetMood = async ():Promise<Mood[]> => {
  try {
    const response = await axios.get(`http://3.91.102.205:4000/moods`);
    return response.data;
  } catch (error) {
    throw new Error('mood data를 가져오는데 실패했습니다.')
  }
};