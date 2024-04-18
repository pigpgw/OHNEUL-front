/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractCookie';

interface Mood {
  mood_id: number;
}

export const fetchAddUserMood = async (userMood: Mood): Promise<Mood> => {
  const userId = extractUserId()
  return axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, userMood);
};