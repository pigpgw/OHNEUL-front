import axios from 'axios';
import React, { useEffect, useState } from 'react';
import meltedCookie from 'utils/meltedCookie';

interface PaymentData {
  amount: number;
  coin: number;
}

const PaymentsDetails = () => {
  const [userId] = meltedCookie();
  const [datas, setData] = useState<PaymentData[]>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      const response: any = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/payments/${userId}`,
      );

      return setData(response.data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      {datas.map((el, id) => (
        <div key={id}>
          <div>
            <div>{`결제금액 : ${el.amount}원`}</div>
            <div>{`충전내역 : ${el.coin}코인`}</div>
          </div>
          <div>
            <div>{`결제금액 : ${el.amount}원`}</div>
            <div>{`충전내역 : ${el.coin}코인`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsDetails;
