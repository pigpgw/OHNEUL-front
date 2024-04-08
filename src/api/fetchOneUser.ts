/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractUserId';

interface hobbies {
  hobby_id: number;
  hobby: string;
}

interface User {
  user_id: number;
  username: string;
  phone: string;
  birth: string;
  score: number;
  coin: number;
  mood_id: number;
  theme_id: number;
  hobbies: hobbies[];
}

export const fetchGetOneUser = async (): Promise<User> => {
  const userId = extractUserId()
  const response = await axios.get(`http://localhost:4000/users/${userId}`);
  console.log('fetchGetonUser',response.data)
  return response.data[0];
};

// export const fetchGetOneUser = async (userId: number): Promise<User> => {
//   const response = await axios.get(`http://localhost:3000/users/${userId}`);
//   return response.data;
// };
