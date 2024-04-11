import axios from 'axios';
import React, { useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';

const PaymentsDetails = () => {
  const [userId] = meltedCookie();

  useEffect(() => {
    const fetchPayments = async () => {
      axios
        .get(`http://18.204.230.142:4000/payments/${userId}`, {})
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPayments();
  }, []);

  return <div></div>;
};

export default PaymentsDetails;
