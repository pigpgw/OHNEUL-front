import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import meltedCookie from 'utils/meltedCookie';

interface Usage {
  used_coin: number;
  used_at: string;
}
const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Usage = styled.div``;
const Date = styled.div``;

const CoinUsageDetails = () => {
  const [coin, setCoin] = useState<Usage[]>([]);
  const [date, setDate] = useState<Usage[]>([]);
  const [userId] = meltedCookie();
  useEffect(() => {
    const fetchPayments = async () => {
      const usageDetail: any = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/coin-history/${userId}`,
      );

      return setCoin(usageDetail.data);
    };
    fetchPayments();
  }, []);
  return (
    <>
      <div>
        {coin.map((el, id) => (
          <Container key={id}>
            <Usage>사용코인 : {el.used_coin}</Usage>
            <Date>사용일시 : {el.used_at}</Date>
          </Container>
        ))}
      </div>
    </>
  );
};

export default CoinUsageDetails;
