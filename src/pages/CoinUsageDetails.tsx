/* eslint-disable no-console */
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
const DateCont = styled.div``;

const CoinUsageDetails = () => {
  const [usage, setUsage] = useState<Usage[]>([]);
  const [userId] = meltedCookie();

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/coin-history/${userId}`,
        );
        setUsage(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsage();
  }, []);

  const formatKoreanDateTime = (dateTimeString: string): string => {
    try {
      const date = new Date(dateTimeString);
      // 위 스타일드컴포넌트의 Date 컴포넌트와 생성자함수 new Date 가 겹쳐서 오류가 발생함;;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('날짜 변환 중 에러가 발생했습니다:', error.message);
      return '';
    }
  };
  return (
    <>
      <motion.div
        className="loginPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        <div>
          {usage.map((el, id) => (
            <Container key={id}>
              <Usage>사용코인 : {el.used_coin}</Usage>
              <DateCont>사용일시 : {formatKoreanDateTime(el.used_at)}</DateCont>
            </Container>
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default CoinUsageDetails;
