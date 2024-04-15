import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

interface HobbyData {
  hobby_id: number;
  hobby: string;
}
const Hobby = styled.div``;
const Interest = () => {
  const [userId] = meltedCookie();
  const [datas, setData] = useState<HobbyData[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const allHobbiesResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/hobbies`)
          .then((res) => res.data);
        const userHobbieseResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`)
          .then((res) => res.data);

        const hobby = () => {
          const res = [];
          for (let i = 0; i < allHobbiesResponse.length; i += 1) {
            for (let j = 0; j < userHobbieseResponse.length; j += 1) {
              if (
                allHobbiesResponse[i].hobby_id ===
                userHobbieseResponse[j].hobby_id
              ) {
                res.push(allHobbiesResponse[i]);
              }
            }
          }
          return res;
        };

        setData(hobby());
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      {datas.map((el, id) => (
        <Hobby key={id}>{el.hobby}</Hobby>
      ))}
    </div>
  );
};

export default Interest;
