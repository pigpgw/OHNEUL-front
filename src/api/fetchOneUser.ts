/* eslint-disable import/prefer-default-export */
import axios from 'axios';

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
  const response = await axios.get('http://localhost:3000/users');
  console.log('response',response.data[0])
  return response.data[0];
};

// export const fetchGetOneUser = async (userId: number): Promise<User> => {
//   const response = await axios.get(`http://localhost:3000/users/${userId}`);
//   return response.data;
// };
