import axios from 'axios';
import React, { useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';

const Interest = () => {
  const [userId, token, flatform] = meltedCookie();
  useEffect(() => {
    const fetchPayments = async () => {
      axios
        .get(`http://localhost:4000/user-hobby/${userId}}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPayments();
  }, []);
  return <div>Interest</div>;
};

export default Interest;
