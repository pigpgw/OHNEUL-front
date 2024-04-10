/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractUserId';

export const fetchGetOneUserHobby = async () => {
  const userId = extractUserId();
  const response = await axios.get(
    `http://localhost:4000/user-hobby/${userId}`,
  );
  return response.data[0];
};
