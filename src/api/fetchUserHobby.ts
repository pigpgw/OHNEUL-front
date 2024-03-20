/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface UserHobby {
  user_id: number;
  hobby_id: number[];
}

interface AddUserHobbyResponse {
  message: string;
  data: UserHobby;
}

export const fetchAddUserHobby = (
  userHobby: UserHobby,
): Promise<AddUserHobbyResponse> => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', userHobby);
  // return axios.post('http://localhost:3000/user-hobby/join')
};
