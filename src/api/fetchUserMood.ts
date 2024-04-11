/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractUserId';

interface Mood {
  mood_id: number;
}

export const fetchAddUserMood = async (userMood: Mood): Promise<Mood> => {
  const userId = extractUserId();
  return axios.post(`http://18.204.230.142:4000/users/${userId}`, userMood);
  // http://localhost:3000/moods/join
};
