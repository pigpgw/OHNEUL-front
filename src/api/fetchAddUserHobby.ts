/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface UserHobby {
  user_id: string;
  hobby_id: number[];
}

interface AddUserHobbyResponse {
  message: string;
  data: string;
}

export const fetchAddUserHobby = (
  userHobby: UserHobby,
): Promise<AddUserHobbyResponse> => {
  return axios.post('http://localhost:4000/user-hobby/join', userHobby);
};