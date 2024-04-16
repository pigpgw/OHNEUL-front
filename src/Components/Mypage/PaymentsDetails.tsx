import axios from 'axios';
import React, { useEffect, useState } from 'react';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface PaymentData {
  amount: number;
  coin: number;
}

const PaymentsDetails = () => {
  const [userId] = meltedCookie();
  const [datas, setData] = useState<PaymentData[]>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      const paymentDetail: any = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/payments/${userId}`,
      );
      return setData(paymentDetail.data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      {datas.map((el, id) => (
        <div key={id}>
          <Container>
            <div>{`결제금액 : ${el.amount}원`}</div>
            <div>{`충전내역 : ${el.coin}코인`}</div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default PaymentsDetails;
