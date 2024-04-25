/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchGetOneUserHobby = async (userId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`,
  );
  return response.data[0];
};
