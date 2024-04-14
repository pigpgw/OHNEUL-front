import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';

interface HobbyData {
  hobby_id: number;
  hobby: string;
}
const Interest = () => {
  const [userId] = meltedCookie();
  const [datas, setData] = useState<HobbyData[]>([]);
  const [allDatas, setAllData] = useState<HobbyData[]>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      const allHobbiesResponse: any = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hobbies`,
      );
      const userHobbieseResponse: any = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`,
      );

      return setData(userHobbieseResponse.data);

      // .then((res) => {
      //   console.log(res, '취미확인');
      //   console.log(userId);
      //   setData(res.data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
    };
    fetchPayments();
  }, []);
  return (
    <div>
      {datas.map((el, id) => (
        <div key={id}>
          {el.hobby_id}
          {'취미'}
        </div>
      ))}
    </div>
  );
};

export default Interest;
