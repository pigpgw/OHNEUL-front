/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useQuery } from 'react-query';

interface UserCoin {
  coin: number;
}

interface CoinQueryClient {
  isCoinLoading: boolean;
  isCoinError: boolean;
  userCoinState: UserCoin | undefined;
}

const fetchUser = async (userId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
  );
  return response.data;
};

export const useCoinQuery = (userId: string): CoinQueryClient => {
  const {
    isLoading: isCoinLoading,
    isError: isCoinError,
    data: userCoinState,
  } = useQuery<UserCoin>(['coin',userId], () => fetchUser(userId), {
    staleTime: 0,
  });

  return { isCoinLoading, isCoinError, userCoinState };
};
