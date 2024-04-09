/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { extractUserId } from '../utils/extractUserId';

interface hobbies {
  hobby_id: number;
  hobby: string;
}

interface UserHobby {
  user_id: number;
  username: string;
  phone: string;
  birth: string;
  score: number;
  coin: number;
  mood_id: number;
  theme_id: number;
}

export const fetchGetOneUserHobby = async () => {
  const userId = extractUserId();
  const response = await axios.get(
    `http://localhost:4000/user-hobby/${userId}`,
  );
  console.log('fetchGetonUser', response.data[0], 'user id', userId);
  return response.data[0];
};

// export const fetchGetOneUser = async (userId: number): Promise<User> => {
//   const response = await axios.get(`http://localhost:3000/users/${userId}`);
//   return response.data;
// };
