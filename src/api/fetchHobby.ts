/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Hobby {
  hobby_id: number;
  hobby: string;
}

export const fetchGetHobbys = async (): Promise<Hobby[]> => {
  try {
    const response = await axios.get<Hobby[]>(
      'http://18.204.230.142:4000/hobbies',
    );
    return response.data;
  } catch (e) {
    throw new Error('전체 취미 목록 불러오기 실패');
  }
};
