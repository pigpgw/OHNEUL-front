/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Hobby {
  hobby_id: number;
  hobby: string;
}

interface UserHobby {
  user_id: number;
  hobby_id: number[];
}

interface AddUserHobbyResponse {
  message: string;
  data: UserHobby;
}

export const fetchGetHobbys = async (): Promise<Hobby[]> => {
  try {
    const response = await axios.get<Hobby[]>('http://localhost:3000/hobby');
    return response.data;
  } catch (e) {
    throw new Error('전체 취미 목록 불러오기 실패');
  }
};

export const fetchAddUserHobby = (
  userHobby: UserHobby,
): Promise<AddUserHobbyResponse> => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', userHobby);
  // return axios.post('http://localhost:3000/user-hobby/join')
};
