import axios from 'axios';
import React from 'react';
import meltedCookie from 'utils/meltedCookie';

const CoinUsageDetails = () => {
  const [userId] = meltedCookie();
  const fetchPayments = async () => {
    axios
      .get(`http://localhost:4000/order/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(fetchPayments());
  };
  return <div>CoinUsageDetails</div>;
};

export default CoinUsageDetails;
