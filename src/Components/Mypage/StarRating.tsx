import React, { useState, useEffect } from 'react';
import axios from 'axios';
import meltedCookie from 'utils/meltedCookie';
import plusHeart from 'assets/images/plusHeart.png';
import minusHeart from 'assets/images/minusHeart.png';
import styled from 'styled-components';

const Heart = styled.img`
  width: 20px;
`;
const Desc = styled.div`
  font-size: 13px;
  color: #dbdbdb;
`;

const StarRating = () => {
  const [userId] = meltedCookie();
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    const fetchPayments = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      );
      console.log(response.data, 'asdas');
      // return response;
      return setData(response.data.score);
      // .then((res) => {
      //   console.log(res);
      //   setData(res.data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
    };
    fetchPayments();
  }, []);

  const renderHerat = (score: number) => {
    const strToNumb = Number(score);
    const plusCount = strToNumb;
    const minusCount = 5 - strToNumb;
    const count = [];
    const desc = [];
    for (let i = 0; i < plusCount; i += 1) {
      count.push(<Heart src={plusHeart} alt="ph"></Heart>);
    }
    for (let j = 0; j < minusCount; j += 1) {
      count.push(<Heart src={minusHeart} alt=""></Heart>);
    }
    switch (strToNumb) {
      case 0.0:
        desc.push(<Desc>채팅을시작해주세요!!!!!!</Desc>);
        break;
      case 1:
        desc.push(<Desc>별이한개!!!!!!</Desc>);
        break;
      case 2:
        desc.push(<Desc>별이두개!!!!!!!</Desc>);
        break;
      case 3:
        desc.push(<Desc>별이세개!!!!!!!!</Desc>);
        break;
      case 4:
        desc.push(<Desc>별이두개!!!!!!!!</Desc>);
        break;
      case 5:
        desc.push(<Desc>별이다섯개!!!!!!!!!</Desc>);
        break;
      default:
        break;
    }
    return [desc, count];
  };

  return <div>{renderHerat(data)}</div>;
};

export default StarRating;
