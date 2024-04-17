import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';
import styled, { css } from 'styled-components';
import {
  Container,
  SocialContainer,
  InterestSection,
  StarAndInterest,
  StarRatingSection,
  Title,
  TabSection,
  Tab,
  TabTitle,
  ContentContainer,
  AuthContainer,
  LogoutCont,
  WithDrawalCont,
} from 'Components/styles/Mypage';
import InterestModal from 'Components/Mypage/InterestModal';

interface HobbyData {
  hobby_id: number;
  hobby: string;
}
const HobbyBtn = styled.button`
  height: 33px;
  border-radius: 10px;
  border: 0;
  padding: 0 15px;
  margin: 10px;
  font-size: 10px;
  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);
`;
const HobbyEditBtn = styled.button`
  height: 23px;
  border-radius: 10px;
  border: 0;
  padding: 0 5px;
  margin: 20px;
  font-size: 10px;
  background: white-gray;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);
`;
const HobbyBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Interest = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };
  const [userId] = meltedCookie();
  const [datas, setData] = useState<HobbyData[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const allHobbiesResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/hobbies`)
          .then((res) => res.data);
        const userHobbieseResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`)
          .then((res) => res.data);

        const hobby = () => {
          const res = [];
          for (let i = 0; i < allHobbiesResponse.length; i += 1) {
            for (let j = 0; j < userHobbieseResponse.length; j += 1) {
              if (
                allHobbiesResponse[i].hobby_id ===
                userHobbieseResponse[j].hobby_id
              ) {
                res.push(allHobbiesResponse[i]);
              }
            }
          }
          return res;
        };

        setData(hobby());
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <HobbyBtnContainer>
      {datas.map((el, id) => (
        <HobbyBtn key={id}>{el.hobby}</HobbyBtn>
      ))}
      <HobbyEditBtn onClick={() => handleModal('interest')}>수정</HobbyEditBtn>
      {open === 'interest' && <InterestModal />}
    </HobbyBtnContainer>
  );
};

export default Interest;
