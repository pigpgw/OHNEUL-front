/* eslint-disable import/prefer-default-export */

import axios from 'axios';

interface ScoreProps {
    coin_history_id: string;
    user_id: string;
    used_coin: string;
    used_at: string;
  }

export const fetchGetUserCoinHistory = async (userId: string): Promise<ScoreProps[]> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/coin-history/${userId}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('전체 기분 데이터 가져오기 실패');
  }
};
