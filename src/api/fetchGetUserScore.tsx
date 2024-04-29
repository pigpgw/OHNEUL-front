/* eslint-disable import/prefer-default-export */

import axios from 'axios';

export const fetchGetUserScore = async (userId: string): Promise<string> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
    );
    return response.data.score;
  } catch (error) {
    throw new Error('전체 기분 데이터 가져오기 실패');
  }
};
