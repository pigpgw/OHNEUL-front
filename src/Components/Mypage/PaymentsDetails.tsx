import axios from 'axios';
import React, { useEffect, useState } from 'react';
import meltedCookie from 'utils/meltedCookie';

interface PaymentData {
  message: string;
}

const PaymentsDetails = () => {
  const [userId] = meltedCookie();
  const [datas, setData] = useState<PaymentData[]>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      const response: any = await axios.get(
        `http://localhost:4000/payments/${userId}`,
      );
      return setData(response.data);
    };
    fetchPayments();
  }, []);

  return (
    <div>
      {datas.map((el, id) => (
        <div key={id}>
          {el.message}
          {'코인내역'}
        </div>
      ))}
    </div>
  );
};

export default PaymentsDetails;
