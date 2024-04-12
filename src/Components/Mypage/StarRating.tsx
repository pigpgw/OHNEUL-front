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
      axios
        .get(`http://3.91.102.205:4000/users/${userId}`, {})
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchPayments();
  }, []);

  const renderHerat = (score: number) => {
    const plusCount = score;
    const minusCount = 5 - score;
    const count = [];
    const desc = [];
    for (let i = 0; i < plusCount; i += 1) {
      count.push(<Heart src={plusHeart} alt="ph"></Heart>);
    }
    for (let j = 0; j < minusCount; j += 1) {
      count.push(<Heart src={minusHeart} alt=""></Heart>);
    }
    switch (score) {
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
