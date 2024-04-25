/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { fetchGetHobbys } from './fetchHobby';

export const fetchGetOneUserHobby = async (userId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`,
  );
  return response.data;
};

export const fecthGetOtherHobby = async (otherId: string) => {
  try {
    const totalMoodData = await fetchGetHobbys();
    const response = await fetchGetOneUserHobby(otherId);
    const otherHobby = response.map((item: any): any => item.hobby_id);
    const otherHobbyObj = otherHobby.map((item: any): any => {
      return totalMoodData.find((hobby) => hobby.hobby_id === item)?.hobby;
    });

    return otherHobbyObj;
  } catch (e) {
    console.log(e);
    throw new Error('상대방 취미 데이터 가져오기 실패');
  }
};
