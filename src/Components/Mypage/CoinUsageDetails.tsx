import axios from 'axios';
import React, { useEffect, useState } from 'react';
import meltedCookie from 'utils/meltedCookie';

// interface Item {
//   id: number;
//   name: string;
//   data:[string]
// }: Promise<any>
const CoinUsageDetails = () => {
  const [data, setData] = useState([]);
  const [userId] = meltedCookie();
  useEffect(() => {
    const fetchPayments = async () => {
      const response: any = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/order/${userId}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
      setData(response);
    };
    fetchPayments();
  }, []);
  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default CoinUsageDetails;
