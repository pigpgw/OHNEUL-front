import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';

interface Item {
  id: number;
  name: string;
}

const Interest = () => {
  const [userId, token, flatform] = meltedCookie();
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    const fetchPayments = async () => {
      axios
        .get(`http://localhost:4000/user-hobby/${userId}}`, {
          // withCredentials: true,
        })
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
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Interest;
