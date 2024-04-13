/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractCookie';

export const fetchGetOneUserHobby = async () => {
  const userId = extractUserId();
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`,
  );
  return response.data[0];
};