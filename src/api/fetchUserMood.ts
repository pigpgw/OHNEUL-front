/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractCookie';

interface Mood {
  mood_id: number;
}

export const fetchAddUserMood = async (userMood: Mood): Promise<Mood> => {
  const userId = extractUserId()
  return axios.post(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, userMood);
  // http://localhost:3000/moods/join
};