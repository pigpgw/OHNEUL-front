/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractCookie';

export const fetchGetOneUserHobby = async () => {
  const userId = extractUserId();
  const response = await axios.get(
    `http://3.91.102.205:4000/user-hobby/${userId}`,
  );
  return response.data[0];
};
