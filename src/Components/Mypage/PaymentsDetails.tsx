import axios from 'axios';
import React from 'react';
import { UseSelector } from 'react-redux';
import meltedCookie from 'utils/meltedCookie';

const PaymentsDetails = () => {
  // const userId = useSelector(() => {});
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
  return <div>{}</div>;
};

export default PaymentsDetails;
