/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchGetHobbys = async () => {
  try {
    const response = await axios.get('http://localhost:3000/hobby');
    return response.data;
  } catch (e) {
    throw new Error('전체 취미 목록 불러오기 실패');
  }
};
