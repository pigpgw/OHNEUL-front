import React from 'react';
import axios from 'axios';
import meltedCookie from 'utils/meltedCookie';

const StarRating = (name: any) => {
  const [userId, token, flatform] = meltedCookie();
  const fetchPayments = async () => {
    axios
      .get(`http://localhost:4000/payments/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <div>StarRating</div>;
};

export default StarRating;
