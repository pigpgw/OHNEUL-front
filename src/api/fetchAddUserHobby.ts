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
  return axios.post(`${process.env.REACT_APP_BASE_URL}/user-hobby/join`, userHobby);
};