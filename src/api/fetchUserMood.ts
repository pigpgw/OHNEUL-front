/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractCookie';

interface Data {
  data: unknown;
}

export const updateUserData = async (userData: Data): Promise<Data> => {
  const userId = extractUserId()
  return axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, userData);
};