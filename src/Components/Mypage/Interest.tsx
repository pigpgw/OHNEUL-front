import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';

interface Item {
  id: number;
  name: string;
}

const Interest = () => {
  const [userId] = meltedCookie();
  const [data, setData] = useState<Item[] | null>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      axios
        .get(`http://18.204.230.142:4000/user-hobby/${userId}}`, {})
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPayments();
  }, []);
  return (
    <div>
      {
        <ul>
          {data && data.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      }
    </div>
  );
};

export default Interest;
